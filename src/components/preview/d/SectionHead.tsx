interface SectionHeadProps {
  no: string;
  en: string;
  ja: string;
  id: string;
}

/** 各章の扉。番号・英字の章題・和文の副題を 1 本の罫線に載せ、目次と同じ番号で章を辿れるようにする */
export function SectionHead({ no, en, ja, id }: SectionHeadProps) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-[#1A1819] pb-4">
      <h2 id={id} className="flex items-baseline gap-4 md:gap-6">
        <span className="qd-serif text-[15px] text-[#D9481C] italic md:text-lg">{no}</span>
        <span className="qd-serif text-[44px] leading-none font-light tracking-[-0.02em] md:text-[80px]">
          {en}
        </span>
      </h2>
      <p className="qd-mincho pb-1 text-[13px] tracking-[0.2em] md:text-[15px]">{ja}</p>
    </div>
  );
}
