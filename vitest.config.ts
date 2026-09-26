import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths({ projects: ["./tsconfig.json"] })],
	test: {
		// テンプレート同期で入る .claude/hooks・scripts・tools のテストは bun ランタイム前提で、vitest では動かない
		include: ["src/**/*.{test,spec}.{ts,tsx}"],
		deps: {
			optimizer: {
				ssr: {
					include: ["tiny-warning"],
				},
			},
		},
		passWithNoTests: true,
	},
});
