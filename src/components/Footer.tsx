import { Link } from "@tanstack/react-router";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { navItems } from "~/components/nav-items";
import { officialLinks } from "~/data/links";

/**
 * サイト共通フッター。最下部に淡いチーム名を大きく敷き、ページの終わりを示す。
 */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-white pt-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-12 w-auto" />
            <span className="font-display text-[20px] font-extrabold text-ink">QuestMaker</span>
          </Link>
          <p className="mt-4 text-[13px] leading-[1.9] text-text-muted">
            PCとQuestの垣根をなくし、
            <br />
            みんなで一緒に楽しめる世界をつくるVRChatクリエイターチーム。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション" className="md:col-span-3">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-subtle">
            Sitemap
          </p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-display text-[15px] font-semibold text-ink hover:text-accent-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-subtle">
            Follow
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={officialLinks.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink hover:text-accent-strong"
              >
                <XIcon size={14} />
                {officialLinks.x.handle}
              </a>
            </li>
            <li>
              <a
                href={officialLinks.booth.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-ink hover:text-accent-strong"
              >
                <BoothIcon size={16} />
                BOOTH
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1320px] items-center justify-between border-t border-line px-5 py-5 md:px-10">
        <p className="font-display text-[12px] text-text-subtle">© QuestMaker</p>
        <p className="font-display text-[12px] uppercase tracking-[0.2em] text-text-subtle">
          VRChat Creative Team
        </p>
      </div>

      <p
        aria-hidden="true"
        className="font-display -mb-[0.22em] select-none whitespace-nowrap text-center text-[18vw] font-extrabold leading-none tracking-[-0.04em] text-surface-muted"
      >
        QuestMaker
      </p>
    </footer>
  );
}
