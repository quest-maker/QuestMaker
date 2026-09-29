import { SectionHead } from "./SectionHead";

/** ミッションの本文をドロップキャップで書き出し、集合写真を図版として添える */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="qd-about"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-36"
    >
      <SectionHead no="01" en="About" ja="私たちについて" id="qd-about" />
      <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="qd-mincho text-[22px] leading-[1.8] font-semibold tracking-[0.04em] md:text-[26px]">
            PCとQuestの垣根をなくし、みんなで一緒に楽しめる世界をつくりたい
          </p>
          <p className="qd-dropcap mt-8 text-[15px] leading-[2.1] tracking-[0.03em]">
            そんな思いを胸に集まった仲間たちで結成したVRChatのクリエイターチームです。プラットフォームの壁を越えて「みんなで仲良く」楽しめるコンテンツを制作しています！
          </p>
          <p className="qd-serif mt-10 border-t border-[#1A1819] pt-4 text-[15px] leading-[1.6] italic">
            Worlds for everyone — on PC and on Quest.
          </p>
        </div>
        <figure className="lg:col-span-7">
          <img
            src="/images/group-photo-2.webp"
            alt="VRChat 内で撮影した QuestMaker メンバーの集合写真"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-[12px] md:text-[13px]">
            <span className="qd-serif mr-2 text-[#D9481C] italic">Fig. 1</span>
            VRChat 内で撮影したメンバーの集合写真
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
