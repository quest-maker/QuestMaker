import { Link, createFileRoute } from "@tanstack/react-router";
import { XIcon } from "~/components/ui/icons";
import { Arrow } from "~/components/preview/a/ArrowCircle";
import { SectionTitle } from "~/components/preview/a/SectionTitle";
import { StudioWorkCard } from "~/components/preview/a/StudioWorkCard";
import { en, outlinePill, solidPill } from "~/components/preview/a/tokens";
import { members } from "~/data/members";
import { works } from "~/data/works";

export const Route = createFileRoute("/preview/a/")({
  head: () => ({ meta: [{ title: "デザイン案A — QuestMaker" }] }),
  component: StudioTop,
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

function StudioTop() {
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
      {/* STYLY の透かし英字。装飾なので読み上げない */}
      <p
        aria-hidden="true"
        className={`${en} pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 select-none whitespace-nowrap text-[34vw] font-extrabold leading-none tracking-[-0.05em] text-[#F4F4F4] md:top-[52%] md:text-[23vw]`}
      >
        Quest
      </p>

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <p
          className={`${en} flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#111]`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
          VRChat Creative Team
        </p>
        <h1
          className={`${en} relative z-10 mt-5 text-[56px] font-extrabold leading-[0.92] tracking-[-0.045em] text-[#111] md:text-[128px]`}
        >
          Worlds for
          <br />
          Everyone
          <span className="text-[#22C55E]">.</span>
        </h1>

        <div className="mt-10 grid items-end gap-10 md:mt-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:pb-10">
            <p className="text-[22px] font-bold leading-[1.6] tracking-[0.02em] text-[#111] md:text-[28px]">
              PCとQuestの垣根をなくし、
              <br />
              みんなで一緒に楽しめる
              <br />
              世界をつくりたい
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/preview/a" hash="works" className={solidPill}>
                View Works
                <Arrow />
              </Link>
              <Link to="/preview/a" hash="about" className={outlinePill}>
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
            {/* STYLY の写真上に浮く Contact カード。ファーストビューから相談の入口を見せる */}
            <Link
              to="/preview/a/contact"
              className="group absolute -bottom-7 right-4 flex w-[210px] items-center justify-between gap-3 rounded-[20px] bg-white/85 p-4 pl-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md md:-top-10 md:bottom-auto md:right-10 md:w-[260px] md:p-5 md:pl-6"
            >
              <span>
                <span className={`${en} block text-[22px] font-bold text-[#111] md:text-[26px]`}>
                  Contact
                </span>
                <span className="text-[12px] text-[#555]">お仕事のご相談はこちら</span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#111] text-white transition-colors group-hover:bg-[#22C55E]">
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
          <p className="text-[24px] font-bold leading-[1.75] tracking-[0.01em] text-[#111] md:col-span-7 md:text-[38px] md:leading-[1.7]">
            そんな思いを胸に集まった仲間たちで結成したVRChatのクリエイターチームです。プラットフォームの壁を越えて
            <span className="bg-[linear-gradient(transparent_62%,#BBF7D0_62%)]">
              「みんなで仲良く」
            </span>
            楽しめるコンテンツを制作しています！
          </p>
          <div className="md:col-span-5 md:pt-3">
            <img
              src="/images/group-photo-1.webp"
              alt="VRChat で撮影した QuestMaker メンバーの集合写真"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[24px] object-cover md:rounded-[32px]"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#111] pt-5">
              <div>
                <p
                  className={`${en} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]`}
                >
                  Platform
                </p>
                <p className={`${en} mt-1 text-[17px] font-bold`}>PC & Quest</p>
              </div>
              <div>
                <p
                  className={`${en} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]`}
                >
                  Field
                </p>
                <p className={`${en} mt-1 text-[17px] font-bold`}>World · Live · Event</p>
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
    <section id="works" className="scroll-mt-20 bg-[#F2F2F2] py-20 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle en="Works" ja="実績" />
          <p className="max-w-[360px] text-[14px] leading-[1.9] text-[#555]">
            ライブ演出からゲームワールドまで。PC でも Quest
            でも、同じ空間を一緒に楽しめるように作っています。
          </p>
        </div>
        <ul className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
          {works.map((work, i) => (
            <li key={work.id} className={workLayout[i % workLayout.length]}>
              <StudioWorkCard work={work} index={i} />
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
        <SectionTitle en="Members" ja="メンバー" />
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-20 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
          {members.map((m) => (
            <li key={m.id}>
              <div className="group overflow-hidden rounded-[20px] bg-[#F2F2F2] md:rounded-[32px]">
                <img
                  src={m.panelImage}
                  alt={`${m.name} のアバター`}
                  className="aspect-square w-full object-contain p-3 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04] md:p-8"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2 md:mt-5">
                <div className="min-w-0">
                  <p
                    className={`${en} text-[11px] font-semibold uppercase tracking-[0.14em] text-[#16A34A] md:text-[12px]`}
                  >
                    {m.role}
                  </p>
                  <h3 className="mt-1 text-[18px] font-bold text-[#111] md:text-[24px]">
                    {m.name}
                  </h3>
                </div>
                <a
                  href={m.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} の X（${m.xHandle}）`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#111] text-[#111] transition-colors hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white md:h-10 md:w-10"
                >
                  <XIcon size={13} />
                </a>
              </div>
              <p className="mt-2 hidden text-[13px] leading-[1.8] text-[#555] md:block">
                {m.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="bg-white px-3 pb-10 md:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#111] px-6 py-14 md:rounded-[48px] md:px-16 md:py-24">
        <div className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionTitle en="Contact" ja="お問い合わせ" tone="light" />
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.9] text-[#CFCFCF]">
              ワールド制作・ライブ演出・イベントのご依頼やご相談は、公式 X の DM
              で受け付けています。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
            <Link
              to="/preview/a/contact"
              className={`${en} group inline-flex items-center justify-between gap-6 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#111] transition-colors hover:bg-[#22C55E] hover:text-white`}
            >
              DM で相談する
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
