import { Link } from "@tanstack/react-router";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { en, navItems } from "./tokens";

/**
 * 案 A のフッター。STYLY の、フッター最下部に淡いチーム名を大きく敷く締め方に寄せる。
 */
export function StudioFooter() {
  return (
    <footer className="overflow-hidden bg-white pt-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Link to="/preview/a" className="inline-flex items-center gap-2">
            <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-12 w-auto" />
            <span className={`${en} text-[20px] font-extrabold text-[#111]`}>QuestMaker</span>
          </Link>
          <p className="mt-4 text-[13px] leading-[1.9] text-[#555]">
            PCとQuestの垣根をなくし、
            <br />
            みんなで一緒に楽しめる世界をつくるVRChatクリエイターチーム。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション" className="md:col-span-3">
          <p className={`${en} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]`}>
            Sitemap
          </p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to="/preview/a"
                  hash={item.hash}
                  className={`${en} text-[15px] font-semibold text-[#111] hover:text-[#16A34A]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/preview/a/contact"
                className={`${en} text-[15px] font-semibold text-[#111] hover:text-[#16A34A]`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className={`${en} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]`}>
            Follow
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={officialLinks.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#111] hover:text-[#16A34A]"
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
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#111] hover:text-[#16A34A]"
              >
                <BoothIcon size={16} />
                BOOTH
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1320px] items-center justify-between border-t border-[#EDEDED] px-5 py-5 md:px-10">
        <p className={`${en} text-[12px] text-[#888]`}>© QuestMaker</p>
        <p className={`${en} text-[12px] uppercase tracking-[0.2em] text-[#888]`}>
          VRChat Creative Team
        </p>
      </div>

      <p
        aria-hidden="true"
        className={`${en} -mb-[0.22em] select-none whitespace-nowrap text-center text-[18vw] font-extrabold leading-none tracking-[-0.04em] text-[#F2F2F2]`}
      >
        QuestMaker
      </p>
    </footer>
  );
}
