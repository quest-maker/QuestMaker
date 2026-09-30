import { ArrowUpRight } from "lucide-react";
import { categoryLabel, type Work } from "~/data/works";

/**
 * 作品カード。画像は 16:9 の原寸比のまま角丸で見せ、右下の権利表記を切らない。
 * 外部リンクがある作品だけカード全体をリンクにする。
 */
export function WorkCard({ work, index }: { work: Work; index: number }) {
  const body = (
    <>
      <div className="relative overflow-hidden rounded-[20px] bg-surface-muted md:rounded-[28px]">
        <img
          src={work.image}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.04]"
        />
        {work.externalUrl && (
          <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors group-hover:bg-accent-strong group-hover:text-white">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        )}
      </div>
      <WorkMeta work={work} index={index} className="mt-5" />
      <h3 className="mt-3 text-[19px] font-bold leading-[1.5] text-ink md:text-[22px]">
        {work.title}
      </h3>
      <p className="mt-1.5 text-[14px] leading-[1.8] text-text-muted">{work.subtitle}</p>
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

/** 番号・カテゴリ・年の 1 行。Top のカードと Works ページの一覧で同じ並びにする。 */
export function WorkMeta({
  work,
  index,
  className = "",
}: {
  work: Work;
  index: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-display text-[13px] font-bold text-ink">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="h-px w-8 bg-ink" aria-hidden="true" />
      <span className="font-display rounded-full border border-ink px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]">
        {categoryLabel[work.category]}
      </span>
      <span className="font-display text-[13px] font-medium text-text-subtle">{work.year}</span>
    </div>
  );
}
