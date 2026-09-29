/**
 * サンリオの「Characters キャラクター」のような英和併記見出し。
 * 英字は極太コンデンスで大きく、和文は丸ゴシックのピルで添える。
 */
export function PopTitle({
  en,
  ja,
  pill,
  className = "",
}: {
  en: string;
  ja: string;
  /** 和文ピルの背景色 */
  pill: string;
  className?: string;
}) {
  return (
    <h2 className={`flex flex-col items-start gap-3 ${className}`}>
      <span className="b-anton text-[64px] uppercase leading-[0.9] md:text-[120px]">{en}</span>
      <span
        className="rounded-full border-[3px] border-[#1B2559] px-4 py-1 text-[14px] font-extrabold text-[#1B2559] md:text-[16px]"
        style={{ backgroundColor: pill }}
      >
        {ja}
      </span>
    </h2>
  );
}
