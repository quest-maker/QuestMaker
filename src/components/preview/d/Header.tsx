import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";

const linkClass =
  "qd-serif text-[15px] tracking-[0.01em] text-[#1A1819] underline-offset-4 decoration-1 hover:underline";

/**
 * 案D のヘッダー。誌名（ロゴ）を中央に置き、ナビを左右に振り分けて雑誌の天の組みにする。
 * 上下を細い罫線で挟み、ページ全体の罫線のリズムと揃える。
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1819] bg-[#F1F0EC]/95 backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-[72px] md:px-10">
        <nav aria-label="メインナビゲーション" className="hidden items-center gap-7 md:flex">
          <Link to="/preview/d" className={linkClass}>
            Top
          </Link>
          <Link to="/preview/d" hash="works" className={linkClass}>
            Works
          </Link>
          <Link to="/preview/d" hash="members" className={linkClass}>
            Members
          </Link>
        </nav>
        <span className="md:hidden" aria-hidden="true" />

        <Link
          to="/preview/d"
          className="qd-serif text-[24px] font-medium tracking-[-0.02em] md:text-[28px]"
          aria-label="QuestMaker トップへ"
        >
          QuestMaker
        </Link>

        <div className="hidden items-center justify-end gap-6 md:flex">
          <Link to="/preview/d/contact" className={linkClass}>
            Contact
          </Link>
          <span className="h-4 w-px bg-[#1A1819]/40" aria-hidden="true" />
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QuestMaker 公式 X"
            className="transition-opacity hover:opacity-60"
          >
            <XIcon size={15} />
          </a>
          <a
            href={officialLinks.booth.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QuestMaker BOOTH"
            className="transition-opacity hover:opacity-60"
          >
            <BoothIcon size={17} />
          </a>
        </div>

        <div className="flex justify-end md:hidden">
          <button
            type="button"
            className="-mr-2 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#1A1819] px-5 pb-8 md:hidden">
          <nav aria-label="メインナビゲーション（モバイル）">
            <ol>
              {(
                [
                  { label: "Top", to: "/preview/d", hash: undefined },
                  { label: "Works", to: "/preview/d", hash: "works" },
                  { label: "Members", to: "/preview/d", hash: "members" },
                  { label: "Contact", to: "/preview/d/contact", hash: undefined },
                ] as const
              ).map((item, i) => (
                <li key={item.label} className="border-b border-[#1A1819]/30">
                  <Link
                    to={item.to}
                    hash={item.hash}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="qd-serif text-sm text-[#D9481C] italic">0{i + 1}</span>
                    <span className="qd-serif text-[28px] font-light">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-6 flex gap-6 text-sm">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <XIcon size={14} /> X
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BoothIcon size={16} /> BOOTH
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
