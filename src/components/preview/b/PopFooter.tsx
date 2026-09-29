import { Link } from "@tanstack/react-router";
import { BoothIcon, XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { navItems } from "./tokens";

/**
 * 案 B のフッター。HIKKY の「SERVICE SERVICE SERVICE」の繰り返し英字を、チーム名の袋文字で敷く。
 */
export function PopFooter() {
  return (
    <footer className="overflow-hidden bg-[#1B2559] text-white">
      <p
        aria-hidden="true"
        className="b-anton select-none whitespace-nowrap pt-10 text-[64px] uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.35)] md:text-[120px]"
      >
        QuestMaker QuestMaker QuestMaker QuestMaker
      </p>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Link to="/preview/b" className="inline-flex items-center gap-2">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white">
              <img src="/images/QuestMaker_Logo_alpha.png" alt="" className="h-11 w-auto" />
            </span>
            <span className="b-anton text-[26px] tracking-[0.02em]">QUESTMAKER</span>
          </Link>
          <p className="mt-4 text-[13px] font-medium leading-[1.9] text-white/80">
            PCとQuestの垣根をなくし、みんなで一緒に楽しめる世界をつくるVRChatクリエイターチーム
          </p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to="/preview/b"
                  hash={item.hash}
                  className="b-anton inline-block rounded-full border-2 border-white/40 px-4 py-1.5 text-[16px] uppercase hover:border-[#1ED760] hover:text-[#1ED760]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/preview/b/contact"
                className="b-anton inline-block rounded-full border-2 border-white/40 px-4 py-1.5 text-[16px] uppercase hover:border-[#1ED760] hover:text-[#1ED760]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-wrap gap-2 md:justify-end">
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[14px] font-extrabold text-[#1B2559]"
          >
            <XIcon size={14} />
            {officialLinks.x.handle}
          </a>
          <a
            href={officialLinks.booth.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FC4D50] px-5 text-[14px] font-extrabold text-white"
          >
            <BoothIcon size={16} />
            BOOTH
          </a>
        </div>
      </div>
      <p className="border-t border-white/15 py-5 text-center text-[12px] text-white/60">
        © QuestMaker
      </p>
    </footer>
  );
}
