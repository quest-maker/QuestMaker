import { Link } from "@tanstack/react-router";
import { officialLinks } from "~/data/links";

/** 案C のフッター。写真の余韻を邪魔しないよう、等幅の小さな文字 1 行に収める */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0C10]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <Link to="/preview/c" className="qc-en text-[15px] font-semibold text-white">
          QuestMaker
        </Link>
        <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-x-7 gap-y-3">
          <Link
            to="/preview/c"
            hash="works"
            className="qc-mono text-[10px] text-[#9CA3AF] hover:text-white"
          >
            Works
          </Link>
          <Link
            to="/preview/c"
            hash="members"
            className="qc-mono text-[10px] text-[#9CA3AF] hover:text-white"
          >
            Members
          </Link>
          <Link
            to="/preview/c/contact"
            className="qc-mono text-[10px] text-[#9CA3AF] hover:text-white"
          >
            Contact
          </Link>
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="qc-mono text-[10px] text-[#9CA3AF] hover:text-white"
          >
            X ↗
          </a>
          <a
            href={officialLinks.booth.url}
            target="_blank"
            rel="noopener noreferrer"
            className="qc-mono text-[10px] text-[#9CA3AF] hover:text-white"
          >
            Booth ↗
          </a>
        </nav>
        <p className="qc-mono text-[10px] text-[#6B7280]">© QuestMaker — VRChat Creative Team</p>
      </div>
    </footer>
  );
}
