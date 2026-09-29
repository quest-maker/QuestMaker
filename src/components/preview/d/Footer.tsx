import { Link } from "@tanstack/react-router";
import { officialLinks } from "~/data/links";

/** 案D のフッター。雑誌の奥付に倣い、誌名と連絡先を罫線で区切って並べる */
export function Footer() {
  return (
    <footer className="border-t border-[#1A1819]">
      <div className="mx-auto max-w-[1320px] px-5 pt-14 pb-10 md:px-10 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="qd-serif text-[56px] leading-none font-light tracking-[-0.03em] md:text-[88px]">
              QuestMaker
            </p>
            <p className="qd-mincho mt-4 text-sm tracking-[0.1em]">VRChat クリエイターチーム</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 text-sm md:col-span-5 md:col-start-8">
            <div className="border-t border-[#1A1819] py-3">
              <dt className="qd-serif text-[13px] italic opacity-70">Contents</dt>
              <dd className="mt-3 flex flex-col gap-2">
                <Link to="/preview/d" hash="about" className="hover:underline">
                  About
                </Link>
                <Link to="/preview/d" hash="works" className="hover:underline">
                  Works
                </Link>
                <Link to="/preview/d" hash="members" className="hover:underline">
                  Members
                </Link>
                <Link to="/preview/d/contact" className="hover:underline">
                  Contact
                </Link>
              </dd>
            </div>
            <div className="border-t border-[#1A1819] py-3">
              <dt className="qd-serif text-[13px] italic opacity-70">Follow</dt>
              <dd className="mt-3 flex flex-col gap-2">
                <a
                  href={officialLinks.x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  X {officialLinks.x.handle}
                </a>
                <a
                  href={officialLinks.booth.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  BOOTH
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <p className="qd-serif mt-14 border-t border-[#1A1819]/30 pt-5 text-[13px] italic opacity-70">
          © QuestMaker — VRChat World &amp; Live
        </p>
      </div>
    </footer>
  );
}
