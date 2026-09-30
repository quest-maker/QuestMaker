import { XIcon } from "~/components/ui/icons";
import { members } from "~/data/members";

/**
 * メンバーのパネル一覧。Top では紹介文を md 以上だけに出し、モバイルで縦に間延びさせない。
 * Members ページでは showDescriptionOnMobile で常に出す。
 */
export function MemberGrid({
  className = "",
  showDescriptionOnMobile = false,
  headingLevel: Heading = "h3",
}: {
  className?: string;
  showDescriptionOnMobile?: boolean;
  /** メンバー名の見出しレベル。ページの h1 直下に置くときは h2 を渡す */
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 ${className}`}
    >
      {members.map((m) => (
        <li key={m.id}>
          <div className="group overflow-hidden rounded-[20px] bg-surface-muted md:rounded-[32px]">
            <img
              src={m.panelImage}
              alt={`${m.name} のアバター`}
              className="aspect-square w-full object-contain p-3 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04] md:p-8"
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-2 md:mt-5">
            <div className="min-w-0">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong md:text-[12px]">
                {m.role}
              </p>
              <Heading className="mt-1 text-[18px] font-bold text-ink md:text-[24px]">
                {m.name}
              </Heading>
            </div>
            <a
              href={m.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} の X（${m.xHandle}）`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink text-ink transition-colors hover:border-accent-strong hover:bg-accent-strong hover:text-white md:h-10 md:w-10"
            >
              <XIcon size={13} />
            </a>
          </div>
          <p
            className={`mt-2 text-[13px] leading-[1.8] text-text-muted ${showDescriptionOnMobile ? "" : "hidden md:block"}`}
          >
            {m.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
