import { ArrowUpRight } from "lucide-react";
import type { Work } from "~/data/works";
import { en } from "./tokens";

const categoryLabel = { live: "Live", game: "Game" } as const;

/**
 * 作品カード。画像は 16:9 の原寸比のまま角丸で見せ、右下の権利表記を切らない。
 * 外部リンクがある作品だけカード全体をリンクにする。
 */
export function StudioWorkCard({ work, index }: { work: Work; index: number }) {
  const body = (
    <>
      <div className="relative overflow-hidden rounded-[20px] bg-[#F2F2F2] md:rounded-[28px]">
        <img
          src={work.image}
          alt={work.title}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.04]"
        />
        {work.externalUrl && (
          <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#111] shadow-sm transition-colors group-hover:bg-[#22C55E] group-hover:text-white">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span className={`${en} text-[13px] font-bold text-[#111]`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-[#111]" aria-hidden="true" />
        <span
          className={`${en} rounded-full border border-[#111] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]`}
        >
          {categoryLabel[work.category]}
        </span>
        <span className={`${en} text-[13px] font-medium text-[#666]`}>{work.year}</span>
      </div>
      <h3 className="mt-3 text-[19px] font-bold leading-[1.5] text-[#111] md:text-[22px]">
        {work.title}
      </h3>
      <p className="mt-1.5 text-[14px] leading-[1.8] text-[#555]">{work.subtitle}</p>
    </>
  );

  if (work.externalUrl) {
    return (
      <a
        href={work.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`${work.title}（VRChat のワールドページを開く）`}
      >
        {body}
      </a>
    );
  }
  return <div className="group">{body}</div>;
}
