import assert from 'node:assert/strict'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const fixtures = join(root, 'scripts/fixtures/lint-tooling')
const { scripts } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const baseLint = ['--tsconfig', 'tsconfig.json', '--type-aware']

function workspace(run) {
  const cwd = mkdtempSync(join(tmpdir(), 'questmaker-lint-'))
  try {
    for (const file of ['.oxlintrc.json', '.oxfmtrc.json', 'tsconfig.json', 'package.json']) {
      copyFileSync(join(root, file), join(cwd, file))
    }
    symlinkSync(join(root, 'node_modules'), join(cwd, 'node_modules'), 'dir')
    put(cwd, 'worker.d.ts', 'worker-configuration.d.ts')
    run(cwd)
  } finally {
    rmSync(cwd, { recursive: true, force: true })
  }
}

function put(cwd, fixture, target = `src/${fixture}`) {
  mkdirSync(dirname(join(cwd, target)), { recursive: true })
  copyFileSync(join(fixtures, fixture), join(cwd, target))
}

function command(cwd, binary, args) {
  const result = spawnSync(join(root, 'node_modules/.bin', binary), args, {
    cwd, encoding: 'utf8', timeout: 30_000,
  })
  assert.ifError(result.error)
  return { status: result.status, output: result.stdout + result.stderr }
}

function script(cwd, name) {
  const [binary, ...args] = scripts[name].split(' ')
  return command(cwd, binary, args)
}

for (const [fixture, diagnostic] of [
  ['syntax.ts', 'no-debugger'],
  ['type-aware.ts', 'await-thenable'],
]) {
  test(`${fixture}: existing diagnostics survive compiler checking`, () => workspace((cwd) => {
    put(cwd, fixture)
    for (const result of [command(cwd, 'oxlint', baseLint), script(cwd, 'lint')]) {
      assert.equal(result.status, 1, result.output)
      assert.ok(result.output.includes(diagnostic), result.output)
    }
  }))
}

test('compiler diagnostics are added to lint and lint:fix, including root configs', () => workspace((cwd) => {
  put(cwd, 'compiler.ts', 'vite.config.ts')
  const baseline = command(cwd, 'oxlint', baseLint)
  assert.equal(baseline.status, 0, baseline.output)
  for (const name of ['lint', 'lint:fix']) {
    const result = script(cwd, name)
    assert.equal(result.status, 1, result.output)
    assert.match(result.output, /2322|not assignable/, result.output)
  }
}))

test('warnings remain visible without failing lint', () => workspace((cwd) => {
  put(cwd, 'warning.ts')
  for (const result of [command(cwd, 'oxlint', baseLint), script(cwd, 'lint')]) {
    assert.equal(result.status, 0, result.output)
    assert.match(result.output, /no-useless-concat/, result.output)
    assert.match(result.output, /warning/, result.output)
  }
}))

test('generated files stay outside lint while their types remain available', () => workspace((cwd) => {
  put(cwd, 'generated.ts', 'src/routeTree.gen.ts')
  put(cwd, 'generated-consumer.ts')
  const files = command(cwd, 'oxlint', ['--debug', 'files'])
  assert.equal(files.status, 0, files.output)
  assert.doesNotMatch(files.output, /routeTree\.gen\.ts|worker-configuration\.d\.ts/)
  const result = script(cwd, 'lint')
  assert.equal(result.status, 0, result.output)
  const compiler = command(cwd, 'tsc', ['--noEmit', '-p', 'tsconfig.json'])
  assert.equal(compiler.status, 0, compiler.output)
}))

test('formatting stays src-only and excludes the generated route tree', () => workspace((cwd) => {
  put(cwd, 'unformatted.ts', 'vite.config.ts')
  put(cwd, 'unformatted.ts', 'src/routeTree.gen.ts')
  copyFileSync(join(root, 'src/data/links.ts'), join(cwd, 'src/formatted.ts'))
  const baseline = script(cwd, 'fmt:check')
  assert.equal(baseline.status, 0, baseline.output)
  put(cwd, 'unformatted.ts', 'src/authored.ts')
  const failing = script(cwd, 'fmt:check')
  assert.equal(failing.status, 1, failing.output)
  const result = script(cwd, 'fmt')
  assert.equal(result.status, 0, result.output)
  assert.equal(script(cwd, 'fmt:check').status, 0)
  for (const target of ['vite.config.ts', 'src/routeTree.gen.ts']) {
    assert.equal(readFileSync(join(cwd, target), 'utf8'), readFileSync(join(fixtures, 'unformatted.ts'), 'utf8'))
  }
}))

test('build outputs and tool directories cannot expand compiler roots', () => workspace((cwd) => {
  put(cwd, 'generated-consumer.ts')
  put(cwd, 'generated.ts', 'src/routeTree.gen.ts')
  put(cwd, 'compiler.ts', 'vite.config.ts')
  const selected = () => {
    const result = command(cwd, 'tsc', ['--showConfig', '-p', 'tsconfig.json'])
    assert.equal(result.status, 0, result.output)
    return JSON.parse(result.output).files.sort()
  }
  const before = selected()
  assert.ok(before.includes('./vite.config.ts'))
  assert.ok(before.includes('./src/generated-consumer.ts'))
  for (const directory of ['dist', 'dist-ssr', '.wrangler', '.tanstack', '.output', '.nitro', '.vinxi', '.claude', '.codex', '.cursor', '.devcontainer', 'scripts', 'tools']) {
    put(cwd, 'compiler.ts', `${directory}/sentinel.ts`)
  }
  assert.deepEqual(selected(), before)
}))
