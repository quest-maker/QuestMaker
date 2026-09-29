import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";

/**
 * 案C のヘッダー。ヒーローの写真を隠さないよう最上部では透過し、
 * スクロールして本文に入ったら黒地に切り替えて文字を読ませる。
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;
  const navClass =
    "qc-mono text-[11px] text-white/80 transition-colors duration-200 hover:text-[#3CF0FF]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[#0B0C10] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <Link
          to="/preview/c"
          className="flex items-center gap-2.5"
          aria-label="QuestMaker トップへ"
        >
          <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-8 w-8" />
          <span className="qc-en text-[17px] font-semibold tracking-[-0.01em] text-white">
            QuestMaker
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <nav aria-label="メインナビゲーション" className="flex items-center gap-8">
            <Link to="/preview/c" className={navClass}>
              Top
            </Link>
            <Link to="/preview/c" hash="works" className={navClass}>
              Works
            </Link>
            <Link to="/preview/c" hash="members" className={navClass}>
              Members
            </Link>
            <Link to="/preview/c/contact" className={navClass}>
              Contact
            </Link>
          </nav>
          <span className="h-3.5 w-px bg-white/25" aria-hidden="true" />
          <div className="flex items-center gap-4">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuestMaker 公式 X"
              className="text-white/80 transition-colors hover:text-[#3CF0FF]"
            >
              <XIcon size={15} />
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuestMaker BOOTH"
              className="text-white/80 transition-colors hover:text-[#3CF0FF]"
            >
              <BoothIcon size={17} />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="h-[calc(100svh-64px)] bg-[#0B0C10] px-5 pt-6 md:hidden">
          <nav aria-label="メインナビゲーション（モバイル）" className="flex flex-col">
            {(
              [
                { label: "Top", hash: undefined, to: "/preview/c" },
                { label: "Works", hash: "works", to: "/preview/c" },
                { label: "Members", hash: "members", to: "/preview/c" },
                { label: "Contact", hash: undefined, to: "/preview/c/contact" },
              ] as const
            ).map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/10 py-5"
              >
                <span className="qc-mono text-[10px] text-[#3CF0FF]">0{i + 1}</span>
                <span className="qc-en text-3xl font-light text-white">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex gap-6">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="qc-mono flex items-center gap-2 text-[11px] text-white/80"
            >
              <XIcon size={14} /> X
            </a>
            <a
              href={officialLinks.booth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="qc-mono flex items-center gap-2 text-[11px] text-white/80"
            >
              <BoothIcon size={16} /> Booth
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
