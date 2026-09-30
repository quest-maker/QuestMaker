import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Arrow } from "~/components/ui/arrow";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { navItems } from "~/components/nav-items";
import { officialLinks } from "~/data/links";

/** Contact は右端の黒ピルで出すため、横並びのテキストナビからは外す */
const textNavItems = navItems.filter((item) => item.to !== "/contact");

/**
 * サイト共通ヘッダー。白地に大文字英字のナビを細く並べる。
 * Contact だけは黒ピルにして、どのページからでも相談の入口が見えるようにする。
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-11 w-auto md:h-12" />
          <span className="font-display text-[19px] font-extrabold tracking-[-0.01em] text-ink">
            QuestMaker
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="メインナビゲーション" className="flex items-center gap-8">
            {textNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "underline" }}
                className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-ink underline-offset-[6px] decoration-accent decoration-2 hover:underline"
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
              className="grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-surface-muted"
            >
              <XIcon size={15} />
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuestMaker BOOTH"
              className="grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-surface-muted"
            >
              <BoothIcon size={17} />
            </a>
          </div>
          <Link
            to="/contact"
            activeProps={{ className: "bg-accent-strong" }}
            inactiveProps={{ className: "bg-ink" }}
            className="font-display group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-strong"
          >
            Contact
            <Arrow size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-8 pt-4 md:hidden">
          <nav aria-label="メインナビゲーション" className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent-strong" }}
                inactiveProps={{ className: "text-ink" }}
                onClick={() => setOpen(false)}
                className="font-display border-b border-line py-4 text-[28px] font-extrabold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex gap-3">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-[13px] font-semibold"
            >
              <XIcon size={13} />
              {officialLinks.x.handle}
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-[13px] font-semibold"
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
