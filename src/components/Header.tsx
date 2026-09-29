import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SocialButton } from "./SocialButton";
import { officialLinks } from "~/data/links";

const navItems = [
  { to: "/", label: "Top" },
  { to: "/works", label: "Works" },
  { to: "/members", label: "Members" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * サイト共通ナビバー。
 * 左: ロゴ画像 + テキスト
 * 中央: ナビリンク (Top / Works / Members / Contact)
 * 右: X / BOOTH ボタン
 * モバイル: ハンバーガーメニューでナビ・ソーシャルを折りたたみ
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-7 py-2">
        <Link to="/" className="flex items-center -my-3">
          <img
            src="/images/QuestMaker_Logo_alpha.png"
            alt="QuestMaker"
            className="h-[72px] md:h-[88px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-text-muted">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-hover"
                activeProps={{ className: "text-text font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="w-px h-4 bg-border" />

          <div className="flex gap-2">
            <SocialButton variant="x" href={officialLinks.x.url} compact />
            <SocialButton variant="booth" href={officialLinks.booth.url} compact />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-7 py-4 bg-surface">
          <nav className="flex flex-col gap-3 text-sm text-text-muted mb-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                activeProps={{ className: "text-text font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <SocialButton variant="x" href={officialLinks.x.url} compact />
            <SocialButton variant="booth" href={officialLinks.booth.url} compact />
          </div>
        </div>
      )}
    </header>
  );
}
