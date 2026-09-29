import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { Arrow } from "./ArrowCircle";
import { en, navItems } from "./tokens";

/**
 * 案 A のヘッダー。ANYCOLOR / REALITY の、白地に大文字英字ナビを細く並べる作法に寄せる。
 * Contact だけは黒ピルにして、ページ内のどこからでも相談の入口が見えるようにする。
 */
export function StudioHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-3 md:px-10">
        <Link to="/preview/a" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-11 w-auto md:h-12" />
          <span className={`${en} text-[19px] font-extrabold tracking-[-0.01em] text-[#111]`}>
            QuestMaker
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="メインナビゲーション" className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to="/preview/a"
                hash={item.hash}
                className={`${en} text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111] underline-offset-[6px] decoration-[#22C55E] decoration-2 hover:underline`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuestMaker 公式 X"
              className="grid h-9 w-9 place-items-center rounded-full text-[#111] hover:bg-[#F2F2F2]"
            >
              <XIcon size={15} />
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuestMaker BOOTH"
              className="grid h-9 w-9 place-items-center rounded-full text-[#111] hover:bg-[#F2F2F2]"
            >
              <BoothIcon size={17} />
            </a>
          </div>
          <Link
            to="/preview/a/contact"
            className={`${en} group inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#16A34A]`}
          >
            Contact
            <Arrow size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#111] text-[#111] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E5E5E5] bg-white px-5 pb-8 pt-4 md:hidden">
          <nav aria-label="メインナビゲーション" className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to="/preview/a"
                hash={item.hash}
                onClick={() => setOpen(false)}
                className={`${en} border-b border-[#EDEDED] py-4 text-[28px] font-extrabold text-[#111]`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/preview/a/contact"
              onClick={() => setOpen(false)}
              className={`${en} border-b border-[#EDEDED] py-4 text-[28px] font-extrabold text-[#111]`}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-6 flex gap-3">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#111] px-4 py-2 text-[13px] font-semibold"
            >
              <XIcon size={13} />
              {officialLinks.x.handle}
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#111] px-4 py-2 text-[13px] font-semibold"
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
