import { Link, createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { MemberGrid } from "~/components/MemberGrid";
import { WorkCard } from "~/components/WorkCard";
import { Arrow } from "~/components/ui/arrow";
import { outlinePill, solidPill } from "~/components/ui/pill";
import { SectionTitle } from "~/components/ui/section-title";
import { aboutBody, missionLines, worksLead } from "~/data/site";
import { works } from "~/data/works";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/**
 * 作品の大小交互レイアウト。1 件目を大きく、2 件目を小さく下げ、3 件目を右寄せで大きく置き、
 * 同じ大きさのカードが並ぶ一覧より「スタジオの作品集」らしいリズムを作る。
 */
const workLayout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-40",
  "md:col-span-8 md:col-start-5 md:mt-20",
] as const;

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Members />
      <ContactBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 md:pb-32 md:pt-16">
      {/* 背景の透かし英字。装飾なので読み上げない */}
      <p
        aria-hidden="true"
        className="font-display pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 select-none whitespace-nowrap text-[34vw] font-extrabold leading-none tracking-[-0.05em] text-surface-muted md:top-[52%] md:text-[23vw]"
      >
        Quest
      </p>

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <h1 className="font-display relative z-10 text-[56px] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink md:text-[128px]">
          Worlds for
          <br />
          Everyone
        </h1>

        <div className="mt-10 grid items-end gap-10 md:mt-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:pb-10">
            <p className="text-[22px] font-bold leading-[1.6] tracking-[0.02em] text-ink md:text-[28px]">
              {missionLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/works" className={solidPill}>
                View Works
                <Arrow />
              </Link>
              <Link to="/" hash="about" className={outlinePill}>
                About us
                <Arrow />
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-7 md:-mt-16">
            <img
              src="/images/header.png"
              alt="QuestMaker のキービジュアル。パステルの雲と風船に囲まれた QM ロゴ"
              className="aspect-[4/3] w-full rounded-[24px] object-cover md:aspect-[16/11] md:rounded-[40px]"
            />
            {/* キービジュアルに重ねた Contact カード。ファーストビューから相談の入口を見せる */}
            <Link
              to="/contact"
              className="group absolute -bottom-7 right-4 flex w-[210px] items-center justify-between gap-3 rounded-[20px] bg-white/85 p-4 pl-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md md:-top-10 md:bottom-auto md:right-10 md:w-[260px] md:p-5 md:pl-6"
            >
              <span>
                <span className="font-display block text-[22px] font-bold text-ink md:text-[26px]">
                  Contact
                </span>
                <span className="text-[12px] text-text-muted">お仕事のご相談はこちら</span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-accent-strong">
                <Arrow size={15} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <SectionTitle en="About" ja="私たちについて" />
        <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <p className="text-[24px] font-bold leading-[1.75] tracking-[0.01em] text-ink md:col-span-7 md:text-[38px] md:leading-[1.7]">
            {aboutBody.before}
            <span className="bg-[linear-gradient(transparent_62%,var(--color-accent-soft)_62%)]">
              {aboutBody.highlight}
            </span>
            {aboutBody.after}
          </p>
          <div className="md:col-span-5 md:pt-3">
            <img
              src="/images/group-photo-1-1440.webp"
              alt="VRChat で撮影した QuestMaker メンバーの集合写真"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[24px] object-cover md:rounded-[32px]"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink pt-5">
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-subtle">
                  Platform
                </p>
                <p className="font-display mt-1 text-[17px] font-bold">PC & Quest</p>
              </div>
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-subtle">
                  Field
                </p>
                <p className="font-display mt-1 text-[17px] font-bold">World · Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-surface-muted py-20 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle en="Works" ja="実績" />
          <div className="max-w-[360px]">
            <p className="text-[14px] leading-[1.9] text-text-muted">{worksLead}</p>
            <Link to="/works" className={`${outlinePill} mt-5`}>
              View all
              <Arrow />
            </Link>
          </div>
        </div>
        <ul className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
          {works.map((work, i) => (
            <li key={work.id} className={workLayout[i % workLayout.length]}>
              <WorkCard work={work} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="scroll-mt-20 bg-white py-20 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle en="Members" ja="メンバー" />
          <Link to="/members" className={`${outlinePill} md:mb-4`}>
            View all
            <Arrow />
          </Link>
        </div>
        <MemberGrid className="mt-12 md:mt-20" loading="lazy" />
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="bg-white px-3 pb-10 md:px-6">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-ink px-6 py-14 md:rounded-[48px] md:px-16 md:py-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionTitle en="Contact" ja="お問い合わせ" tone="light" />
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.9] text-text-on-ink">
              ワールド制作やライブ演出のご依頼・ご相談は、公式 X の DM で受け付けています。
            </p>
          </div>
          <Link
            to="/contact"
            className="font-display group inline-flex items-center justify-between gap-6 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-accent-strong hover:text-white md:col-span-4 md:justify-self-end"
          >
            相談方法を見る
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
