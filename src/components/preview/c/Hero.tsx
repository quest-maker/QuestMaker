import { useEffect, useState } from "react";
import { works } from "~/data/works";

const INTERVAL_MS = 6000;

/**
 * 全画面の作品写真ヒーロー。作品を自動でクロスフェードし、チームの実績そのものを第一印象にする。
 * 動きを減らす設定の閲覧者には自動切り替えを行わず、インジケータで手動で切り替えられるようにする。
 * 作品画像は右下に権利表記が焼き込まれているため、トリミングは右下を基準にし、暗くするグラデーションも左下に寄せる。
 */
export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    // 設定が途中で変わっても追従できるよう、切り替えのたびに設定を確認する
    const id = window.setInterval(() => {
      if (query.matches) setIndex((i) => (i + 1) % works.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const current = works[index];

  return (
    <section
      aria-label="最新の作品"
      className="relative flex min-h-svh flex-col overflow-hidden bg-[#0B0C10] md:block md:h-svh md:min-h-[640px]"
    >
      {/* モバイルは権利表記を残すため作品を 16:9 のまま見せ、余白は同じ作品をぼかして埋めて全画面の没入感を保つ */}
      <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden="true">
        <img
          src={current.image}
          alt=""
          className="h-full w-full scale-125 object-cover opacity-35 blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/40 via-transparent to-[#0B0C10]" />
      </div>
      <div className="relative aspect-video mt-28 w-full overflow-hidden md:absolute md:inset-0 md:mt-0 md:aspect-auto">
        {works.map((work, i) => (
          <img
            key={work.id}
            src={work.image}
            alt={i === index ? work.title : ""}
            aria-hidden={i !== index}
            data-active={i === index}
            className={`qc-kenburns absolute inset-0 h-full w-full object-cover object-right-bottom ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        ))}
        {/* 上端はヘッダーの文字を読ませるため、左下は作品名を読ませるために暗くする。右下の権利表記は覆わない */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0C10]/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_75%_70%_at_0%_100%,rgba(11,12,16,0.96)_0%,rgba(11,12,16,0.85)_40%,rgba(11,12,16,0.35)_70%,rgba(11,12,16,0)_100%)] md:block"
          aria-hidden="true"
        />
      </div>

      <div className="relative mt-auto px-5 pt-7 pb-12 md:absolute md:inset-x-0 md:bottom-0 md:px-10 md:pt-0 md:pb-24">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]" aria-live="polite">
            <p className="qc-mono flex items-center gap-3 text-[11px] text-[#3CF0FF]">
              <span className="h-px w-8 bg-[#3CF0FF]" aria-hidden="true" />
              Latest / 0{index + 1}
              <span className="text-[#9CA3AF]">
                — {current.category === "live" ? "Live" : "Game"}
              </span>
            </p>
            <h1 className="mt-5 text-[22px] leading-[1.5] font-medium tracking-[0.02em] text-white md:text-[30px]">
              {current.title}
            </h1>
            <p className="mt-2 text-sm text-[#9CA3AF] md:text-[15px]">{current.subtitle}</p>
          </div>

          <div className="flex items-center gap-5 self-start md:self-auto md:bg-[#0B0C10]/70 md:px-5 md:py-1 md:backdrop-blur-sm">
            <p className="qc-mono text-[10px] text-[#9CA3AF]">
              <span className="text-white">0{index + 1}</span> / 0{works.length}
            </p>
            <div className="flex gap-2">
              {works.map((work, i) => (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}枚目の作品を表示: ${work.title}`}
                  aria-current={i === index}
                  className="group py-3"
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      i === index ? "w-12 bg-[#3CF0FF]" : "w-6 bg-white/40 group-hover:bg-white"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
