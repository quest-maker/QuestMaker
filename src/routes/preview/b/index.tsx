import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Marquee } from "~/components/preview/b/Marquee";
import { PopMemberCard } from "~/components/preview/b/PopMemberCard";
import { PopWorkCard } from "~/components/preview/b/PopWorkCard";
import { PopTitle } from "~/components/preview/b/SectionTitle";
import { BubbleSticker, SparkleSticker, StarSticker } from "~/components/preview/b/Stickers";
import { members } from "~/data/members";
import { works } from "~/data/works";

export const Route = createFileRoute("/preview/b/")({
  head: () => ({ meta: [{ title: "デザイン案B — QuestMaker" }] }),
  component: PopTop,
});

function PopTop() {
  return (
    <>
      <Hero />
      <div className="overflow-hidden py-6 md:py-8">
        <Marquee />
      </div>
      <About />
      <Works />
      <Members />
      <ContactBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="b-dots relative overflow-hidden bg-[#BDEFFA] pb-8 pt-[104px] md:pb-24 md:pt-[132px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid items-end gap-6 md:grid-cols-12">
          {/* HIKKY の「手書き 1 語 + 極太コンデンス」の重ね。手書きを前面に出して少し傾ける */}
          <h1 className="md:col-span-8">
            <span className="b-script relative z-10 -mb-[0.28em] ml-1 inline-block -rotate-6 text-[76px] leading-none text-[#1EA0F0] [text-shadow:4px_4px_0_#fff] md:text-[150px]">
              Play
            </span>
            <span className="b-anton block text-[92px] uppercase leading-[0.88] md:text-[196px]">
              Together!
            </span>
            <span className="sr-only">QuestMaker — VRChat クリエイターチーム</span>
          </h1>
          <p className="max-w-[340px] text-[14px] font-bold leading-[1.9] md:col-span-4 md:mb-32 md:justify-self-end md:text-[15px]">
            QuestMaker は VRChat のクリエイターチーム。PC でも Quest
            でも、みんなで同じ場所で遊べるワールドやライブをつくっています。
          </p>
        </div>

        <div className="relative mt-16 md:mt-10">
          <StarSticker
            fill="#FFE45C"
            className="b-float absolute -left-2 -top-8 z-10 w-16 md:-left-6 md:-top-12 md:w-28"
          />
          <BubbleSticker
            text="PC × QUEST"
            className="absolute -top-14 right-2 z-10 w-[150px] rotate-6 md:-top-20 md:right-10 md:w-[240px]"
          />
          <SparkleSticker
            fill="#FF9AD5"
            className="absolute -bottom-6 right-6 z-10 w-12 md:-bottom-8 md:right-[30%] md:w-20"
          />
          <img
            src="/images/header.png"
            alt="QuestMaker のキービジュアル。パステルの雲と風船に囲まれた QM ロゴ"
            className="aspect-[4/3] w-full rounded-[32px] border-[3px] border-[#1B2559] object-cover shadow-[0_8px_0_#1B2559] md:aspect-[3/1] md:rounded-[64px]"
          />

          <div className="relative mt-8 rounded-[28px] border-[3px] border-[#1B2559] bg-white p-6 shadow-[0_6px_0_#1B2559] md:absolute md:-bottom-14 md:left-10 md:mt-0 md:max-w-[440px] md:p-7">
            <p className="b-anton text-[15px] uppercase tracking-[0.1em] text-[#1EA0F0]">
              Our Mission
            </p>
            <p className="mt-2 text-[20px] font-extrabold leading-[1.6] md:text-[23px]">
              PCとQuestの垣根をなくし、みんなで一緒に楽しめる世界をつくりたい
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <PopTitle en="About us" ja="わたしたちについて" pill="#FFE45C" />
          <p className="mt-8 text-[18px] font-extrabold leading-[2] md:text-[21px]">
            そんな思いを胸に集まった仲間たちで結成したVRChatのクリエイターチームです。プラットフォームの壁を越えて
            <span className="rounded-md bg-[#FFE45C] px-1">「みんなで仲良く」</span>
            楽しめるコンテンツを制作しています！
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {[
              { t: "WORLD", c: "#BDEFFA" },
              { t: "LIVE", c: "#FFD3EC" },
              { t: "EVENT", c: "#FFE45C" },
              { t: "QUEST & PC", c: "#1ED760" },
            ].map((tag) => (
              <li
                key={tag.t}
                className="b-anton rounded-full border-2 border-[#1B2559] px-4 py-1 text-[15px] tracking-[0.04em]"
                style={{ backgroundColor: tag.c }}
              >
                {tag.t}
              </li>
            ))}
          </ul>
        </div>

        {/* 2 枚の集合写真を傾けて重ね、スナップ写真を机に並べたような気安さを出す */}
        <div className="relative pb-[34%] pt-2 md:pb-[30%]">
          <img
            src="/images/group-photo-1.webp"
            alt="VRChat で撮影した QuestMaker メンバーの集合写真"
            loading="lazy"
            className="relative w-[82%] -rotate-3 rounded-[24px] border-[6px] border-white object-cover shadow-[0_0_0_3px_#1B2559,0_8px_0_3px_#1B2559]"
          />
          <img
            src="/images/group-photo-2.webp"
            alt="VRChat で撮影した QuestMaker メンバーの集合写真（別カット）"
            loading="lazy"
            className="absolute bottom-0 right-0 w-[72%] rotate-[4deg] rounded-[24px] border-[6px] border-white object-cover shadow-[0_0_0_3px_#1B2559,0_8px_0_3px_#1B2559]"
          />
          <StarSticker fill="#1ED760" className="absolute -right-2 -top-6 w-16 rotate-12 md:w-20" />
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="b-dots scroll-mt-24 bg-[#1EA0F0] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PopTitle en="Works" ja="つくったもの" pill="#FFE45C" className="text-white" />
          <p className="b-anton text-[16px] tracking-[0.1em] text-white md:hidden">SWIPE →</p>
        </div>
        {/* モバイルは横スナップのカルーセル、PC は 3 列に並べる */}
        <ul className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
          {works.map((work) => (
            <li key={work.id} className="w-[84%] shrink-0 snap-start md:w-auto">
              <PopWorkCard work={work} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="scroll-mt-24 bg-[#FFD3EC] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <PopTitle en="Members" ja="メンバー" pill="#BDEFFA" />
        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 md:mt-14 md:grid-cols-3 md:gap-8">
          {members.map((m, i) => (
            <li key={m.id}>
              <PopMemberCard member={m} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="bg-[#FFD3EC] px-3 pb-16 md:px-8 md:pb-24">
      <div className="b-dots-green relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] border-[3px] border-[#1B2559] bg-[#1ED760] px-6 py-14 shadow-[0_8px_0_#1B2559] md:rounded-[56px] md:px-16 md:py-20">
        <StarSticker
          fill="#FFE45C"
          className="absolute right-5 top-5 w-14 rotate-12 md:right-14 md:top-10 md:w-24"
        />
        <SparkleSticker
          fill="#fff"
          className="absolute bottom-8 right-[40%] hidden w-12 md:block"
        />
        <div className="relative grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="b-script -rotate-3 text-[40px] leading-none md:text-[64px]">
              Let's talk!
            </p>
            <h2 className="b-anton mt-2 text-[76px] uppercase leading-[0.9] md:text-[150px]">
              Contact
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] font-bold leading-[1.9] md:text-[17px]">
              ワールド制作・ライブ演出・イベントのご依頼やご相談は、公式 X の DM
              で受け付けています。
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/preview/b/contact"
              className="inline-flex items-center gap-3 rounded-full border-[3px] border-[#1B2559] bg-white px-7 py-4 text-[17px] font-extrabold shadow-[0_5px_0_#1B2559] transition-transform motion-safe:hover:-translate-y-1"
            >
              DM で相談する
              <ArrowRight size={18} strokeWidth={2.75} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
