/**
 * 英字の大見出しに小さな和文ラベルを添える見出し。
 * 下層ページの冒頭ではページ見出しになるため as="h1" で切り替える。
 */
export function SectionTitle({
  en,
  ja,
  id,
  as: Tag = "h2",
  tone = "dark",
}: {
  en: string;
  ja: string;
  id?: string;
  as?: "h1" | "h2";
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-ink" : "text-white";
  return (
    <Tag id={id} className="flex flex-wrap items-end gap-x-4 gap-y-1">
      <span
        className={`font-display text-[48px] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[104px] ${color}`}
      >
        {en}
      </span>
      <span className="mb-1.5 inline-flex items-center gap-2 text-[13px] font-bold md:mb-4 md:text-[15px]">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <span className={color}>{ja}</span>
      </span>
    </Tag>
  );
}
