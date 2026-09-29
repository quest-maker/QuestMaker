const entries = [
  { no: "01", en: "About", ja: "私たちについて", hash: "#about" },
  { no: "02", en: "Works", ja: "制作実績", hash: "#works" },
  { no: "03", en: "Members", ja: "メンバー", hash: "#members" },
  { no: "04", en: "Contact", ja: "お問い合わせ", hash: "#contact" },
] as const;

/** 表紙の直後に置く目次。誌面の目次に倣い、章番号で各セクションへ飛べるようにする */
export function IndexNav() {
  return (
    <nav aria-labelledby="qd-index" className="mx-auto max-w-[1320px] px-5 pt-20 md:px-10 md:pt-28">
      <h2 id="qd-index" className="qd-serif border-b border-[#1A1819] pb-3 text-[15px] italic">
        Index
      </h2>
      <ol className="grid grid-cols-2 md:grid-cols-4">
        {entries.map((entry, i) => (
          <li
            key={entry.no}
            className={`border-b border-[#1A1819] ${i % 2 === 0 ? "border-r" : ""} md:border-r ${
              i === entries.length - 1 ? "md:border-r-0" : ""
            }`}
          >
            <a
              href={entry.hash}
              className="group flex h-full flex-col gap-6 px-3 py-5 transition-colors hover:bg-[#1A1819] hover:text-[#F1F0EC] md:gap-10 md:px-5 md:py-7"
            >
              <span className="qd-serif text-[15px] text-[#D9481C] italic">{entry.no}</span>
              <span>
                <span className="qd-serif block text-[28px] leading-none font-light md:text-[40px]">
                  {entry.en}
                </span>
                <span className="qd-mincho mt-2 block text-[12px] tracking-[0.15em] md:text-[13px]">
                  {entry.ja}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
