import { ArrowUpRight } from "lucide-react";
import type { Work } from "~/data/works";

const category = {
  live: { label: "LIVE", bg: "#FFD3EC" },
  game: { label: "GAME", bg: "#1ED760" },
} as const;

/**
 * 作品カード。画像は 16:9 の原寸比で見せて、右下の権利表記を切らない。
 */
export function PopWorkCard({ work }: { work: Work }) {
  const c = category[work.category];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] border-[#1B2559] bg-white shadow-[0_6px_0_#1B2559]">
      <div className="overflow-hidden border-b-[3px] border-[#1B2559]">
        <img
          src={work.image}
          alt={work.title}
          className="aspect-[16/9] w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center gap-2">
          <span
            className="b-anton rounded-full border-2 border-[#1B2559] px-3 py-0.5 text-[13px] tracking-[0.06em]"
            style={{ backgroundColor: c.bg }}
          >
            {c.label}
          </span>
          <span className="b-anton text-[16px] text-[#1B2559]/70">{work.year}</span>
        </div>
        <h3 className="mt-3 text-[18px] font-extrabold leading-[1.5]">{work.title}</h3>
        <p className="mt-1 text-[14px] font-medium leading-[1.8] text-[#1B2559]/75">
          {work.subtitle}
        </p>
        {work.externalUrl && (
          <div className="mt-auto pt-4">
            <a
              href={work.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${work.title} の VRChat ワールドページを開く`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1B2559] px-4 py-2 text-[13px] font-extrabold text-white transition-colors hover:bg-[#1EA0F0]"
            >
              ワールドを見る
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
