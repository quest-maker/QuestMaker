import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { navItems } from "./tokens";

/**
 * UUUM の浮いた角丸ヘッダーに、HIKKY の「右端で目立つ CONTACT ボタン」を組み合わせる。
 * Contact はモバイルでも常時見せ、メニューを開かずに相談の入口へ行けるようにする。
 */
export function PopHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-full border-[3px] border-[#1B2559] bg-white py-1.5 pl-3 pr-1.5 shadow-[0_5px_0_#1B2559] md:pl-5">
        <Link to="/preview/b" className="flex items-center gap-1.5" onClick={() => setOpen(false)}>
          <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-10 w-auto md:h-11" />
          <span className="b-anton text-[20px] tracking-[0.02em] text-[#1B2559] md:text-[22px]">
            QUESTMAKER
          </span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to="/preview/b"
              hash={item.hash}
              className="b-anton rounded-full px-4 py-2 text-[17px] uppercase tracking-[0.04em] text-[#1B2559] transition-colors hover:bg-[#BDEFFA]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QuestMaker 公式 X"
            className="hidden h-10 w-10 place-items-center rounded-full text-[#1B2559] hover:bg-[#BDEFFA] md:grid"
          >
            <XIcon size={16} />
          </a>
          <a
            href={officialLinks.booth.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QuestMaker BOOTH"
            className="hidden h-10 w-10 place-items-center rounded-full text-[#1B2559] hover:bg-[#FFD3EC] md:grid"
          >
            <BoothIcon size={18} />
          </a>
          <Link
            to="/preview/b/contact"
            className="b-anton inline-flex items-center gap-1.5 rounded-full border-[3px] border-[#1B2559] bg-[#1ED760] px-3.5 py-1.5 text-[15px] uppercase tracking-[0.04em] text-[#1B2559] transition-transform motion-safe:hover:-translate-y-0.5 md:px-5 md:py-2 md:text-[17px]"
          >
            <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#1B2559] text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1280px] rounded-[28px] border-[3px] border-[#1B2559] bg-white p-5 shadow-[0_5px_0_#1B2559] md:hidden">
          <nav aria-label="メインナビゲーション" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to="/preview/b"
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="b-anton rounded-2xl px-3 py-2 text-[30px] uppercase text-[#1B2559] hover:bg-[#BDEFFA]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B2559] px-4 py-2 text-[13px] font-bold text-white"
            >
              <XIcon size={13} />
              {officialLinks.x.handle}
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FC4D50] px-4 py-2 text-[13px] font-bold text-white"
            >
              <BoothIcon size={15} />
              BOOTH
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
