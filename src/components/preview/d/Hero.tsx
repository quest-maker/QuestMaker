import { works } from "~/data/works";

/**
 * 雑誌の表紙の組み。発行情報風のメタ行、誌名としての巨大なセリフ英字、表紙写真、
 * ミッションの縦組みを 1 画面に収める。表紙写真は最新の作品を使う。
 */
export function Hero() {
  const cover = works[0];

  return (
    <section
      aria-labelledby="qd-mission"
      className="mx-auto max-w-[1320px] px-5 pt-6 md:px-10 md:pt-8"
    >
      <div className="qd-serif flex items-center justify-between gap-4 border-y border-[#1A1819] py-2 text-[12px] italic md:text-[14px]">
        <span>Issue 2026</span>
        <span className="hidden md:inline">VRChat World &amp; Live</span>
        <span>PC / Quest</span>
      </div>

      <p
        className="qd-serif mt-4 text-center text-[18.5vw] leading-[0.82] whitespace-nowrap font-light tracking-[-0.05em] md:mt-6 lg:text-[240px]"
        aria-hidden="true"
      >
        QuestMaker
      </p>

      <div className="mt-6 grid gap-8 border-t border-[#1A1819] pt-6 md:mt-10 lg:grid-cols-12 lg:gap-10">
        <figure className="lg:col-span-9">
          <img
            src={cover.image}
            alt={cover.title}
            fetchPriority="high"
            className="aspect-video w-full object-cover"
          />
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[12px] md:text-[13px]">
            <span>
              <span className="qd-serif mr-2 text-[#D9481C] italic">Cover</span>
              {cover.title}
            </span>
            <span className="qd-serif shrink-0 italic">{cover.year}</span>
          </figcaption>
        </figure>

        <div className="flex flex-col justify-between gap-8 lg:col-span-3 lg:items-end">
          <h1
            id="qd-mission"
            className="qd-mincho qd-vertical text-[26px] leading-[1.7] font-semibold tracking-[0.08em] lg:h-[480px] lg:text-[32px] lg:leading-[1.9]"
          >
            PCとQuestの
            <br />
            垣根をなくし、
            <br />
            みんなで一緒に楽しめる
            <br />
            世界をつくりたい
          </h1>
          <p className="qd-serif text-[15px] leading-[1.6] italic lg:max-w-[200px] lg:text-right">
            A VRChat creative team making worlds everyone can share.
          </p>
        </div>
      </div>
    </section>
  );
}
