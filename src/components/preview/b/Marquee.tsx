import { Fragment } from "react";

const words = ["WORLD", "LIVE", "EVENT", "QUEST & PC", "PLAY TOGETHER"];

/**
 * 活動領域を流す帯。reduced-motion の人には止まった帯として見せる（動きは b.css 側で制御）。
 * 同じ並びを 2 回続け、半分ずらした地点でつなぎ目なくループさせる。
 */
export function Marquee() {
  const row = (
    <span className="flex shrink-0 items-center">
      {["a", "b", "c"].map((set) => (
        <Fragment key={set}>
          {words.map((w) => (
            <Fragment key={w}>
              <span className="b-anton px-5 text-[28px] uppercase tracking-[0.04em] md:px-7 md:text-[40px]">
                {w}
              </span>
              <span className="text-[22px] text-[#FFE45C] md:text-[30px]">★</span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </span>
  );
  return (
    <div className="relative z-10 -rotate-2 scale-[1.04] overflow-hidden border-y-[3px] border-[#1B2559] bg-[#1B2559] py-3 text-white md:py-4">
      <p className="sr-only">{words.join(" / ")}</p>
      <div aria-hidden="true" className="b-marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
