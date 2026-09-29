import { en } from "./tokens";

/**
 * 英字の大見出しに小さな和文ラベルを添える見出し。カバーの「Business 事業」の組み方に寄せる。
 */
export function SectionTitle({
  en: english,
  ja,
  id,
  tone = "dark",
}: {
  en: string;
  ja: string;
  id?: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-[#111]" : "text-white";
  return (
    <h2 id={id} className="flex flex-wrap items-end gap-x-4 gap-y-1">
      <span
        className={`${en} text-[48px] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[104px] ${color}`}
      >
        {english}
      </span>
      <span className="mb-1.5 inline-flex items-center gap-2 text-[13px] font-bold md:mb-4 md:text-[15px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
        <span className={tone === "dark" ? "text-[#111]" : "text-white"}>{ja}</span>
      </span>
    </h2>
  );
}
