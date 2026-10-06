/**
 * 英字の大見出しに読み上げ用の和文を添える見出し。
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
    <Tag id={id} className="flex items-end">
      <span
        className={`font-display text-[48px] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[104px] ${color}`}
      >
        {en}
      </span>
      <span className="sr-only"> {ja}</span>
    </Tag>
  );
}
