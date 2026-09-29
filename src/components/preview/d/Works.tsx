import { ArrowUpRight } from "lucide-react";
import { works } from "~/data/works";
import { SectionHead } from "./SectionHead";

/**
 * 実績を番号付きのケーススタディとして並べる。写真と罫線の表組みを左右交互に置き、
 * 同じ形の記事が続いても誌面に変化をつける。
 */
export function Works() {
  return (
    <section
      id="works"
      aria-labelledby="qd-works"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-36"
    >
      <SectionHead no="02" en="Works" ja="制作実績" id="qd-works" />
      <ol>
        {works.map((work, i) => {
          const reverse = i % 2 === 1;
          return (
            <li key={work.id} className="border-b border-[#1A1819] py-12 md:py-16 last:border-b-0">
              <article className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                <figure className={`lg:col-span-7 ${reverse ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="aspect-video w-full object-cover"
                  />
                </figure>
                <div
                  className={`flex flex-col lg:col-span-5 ${reverse ? "lg:order-1 lg:col-start-1" : ""}`}
                >
                  <p className="qd-serif text-[15px] text-[#D9481C] italic">No. 0{i + 1}</p>
                  <h3 className="qd-mincho mt-3 text-[22px] leading-[1.6] font-semibold tracking-[0.02em] md:text-[26px]">
                    {work.title}
                  </h3>
                  <p className="qd-mincho mt-2 text-[14px] tracking-[0.05em] opacity-80">
                    {work.subtitle}
                  </p>
                  <p className="mt-6 text-[14px] leading-[2] tracking-[0.02em]">
                    {work.description}
                  </p>
                  <table className="mt-8 w-full border-t border-[#1A1819] text-[13px] lg:mt-auto">
                    <caption className="sr-only">{work.title} の作品情報</caption>
                    <tbody>
                      <tr className="border-b border-[#1A1819]/40">
                        <th scope="row" className="qd-serif w-28 py-3 text-left font-normal italic">
                          Category
                        </th>
                        <td className="py-3">
                          {work.category === "live" ? "Live World" : "Game World"}
                        </td>
                      </tr>
                      <tr className="border-b border-[#1A1819]/40">
                        <th scope="row" className="qd-serif py-3 text-left font-normal italic">
                          Year
                        </th>
                        <td className="qd-serif py-3">{work.year}</td>
                      </tr>
                      <tr className="border-b border-[#1A1819]">
                        <th scope="row" className="qd-serif py-3 text-left font-normal italic">
                          Link
                        </th>
                        <td className="py-3">
                          {work.externalUrl ? (
                            <a
                              href={work.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 underline decoration-1 underline-offset-4 hover:text-[#D9481C]"
                            >
                              VRChat で見る
                              <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                              <span className="sr-only">（新しいタブで開く）</span>
                            </a>
                          ) : (
                            <span className="opacity-60">—</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
