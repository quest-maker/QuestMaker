import { ArrowUpRight } from "lucide-react";
import { works } from "~/data/works";
import { Label } from "./Label";

/**
 * 実績を全幅の写真で縦に積む。キャプションを左右交互に置いて、
 * 同じ大きさの写真が続いても視線の流れに変化をつける。
 */
export function WorksList() {
  return (
    <section id="works" aria-labelledby="qc-works" className="scroll-mt-16 bg-[#0B0C10]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex items-end justify-between border-t border-white/10 pt-10">
          <div>
            <Label rule>Selected Works</Label>
            <h2
              id="qc-works"
              className="qc-en mt-6 text-[40px] leading-none font-light tracking-[-0.02em] text-white md:text-[64px]"
            >
              Works
            </h2>
          </div>
          <p className="qc-mono text-[10px] text-[#6B7280]">0{works.length} Projects</p>
        </div>

        <ol className="mt-16 flex flex-col gap-24 pb-24 md:mt-24 md:gap-36 md:pb-40">
          {works.map((work, i) => {
            const reverse = i % 2 === 1;
            return (
              <li key={work.id}>
                <article>
                  <div className="group relative overflow-hidden bg-black">
                    <img
                      src={work.image}
                      alt={work.title}

                      className="aspect-video w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </div>
                  <div
                    className={`mt-6 grid gap-6 md:mt-8 md:grid-cols-12 md:gap-10 ${reverse ? "md:text-right" : ""}`}
                  >
                    <p
                      className={`qc-en text-[56px] leading-none font-extralight text-white/90 md:col-span-2 md:text-[88px] ${
                        reverse ? "md:order-2 md:col-start-11" : ""
                      }`}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </p>
                    <div
                      className={`md:col-span-7 ${reverse ? "md:order-1 md:col-start-4" : "md:col-start-3"}`}
                    >
                      <p
                        className={`qc-mono flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#9CA3AF] ${reverse ? "md:justify-end" : ""}`}
                      >
                        <span className="text-[#3CF0FF]">
                          {work.category === "live" ? "Live World" : "Game World"}
                        </span>
                        <span>{work.year}</span>
                      </p>
                      <h3 className="mt-4 text-xl leading-[1.6] font-medium tracking-[0.02em] text-white md:text-2xl">
                        {work.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#9CA3AF]">{work.subtitle}</p>
                      <p className="mt-5 text-[14px] leading-[2] tracking-[0.03em] text-[#9CA3AF]">
                        {work.description}
                      </p>
                      {work.externalUrl && (
                        <a
                          href={work.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="qc-mono group/link mt-7 inline-flex items-center gap-2 border-b border-white/30 pb-1.5 text-[11px] text-white transition-colors hover:border-[#3CF0FF] hover:text-[#3CF0FF]"
                        >
                          View in VRChat
                          <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                          <span className="sr-only">（{work.title}、新しいタブで開く）</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
