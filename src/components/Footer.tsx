import { Link } from "@tanstack/react-router";
import { SocialButton } from "./SocialButton";
import { officialLinks } from "~/data/links";

/**
 * サイト共通フッター。
 * 左: ロゴ + チーム説明
 * 右: X / BOOTH / お問い合わせ
 * 下部: コピーライト
 */
export function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-border">
      <div className="max-w-[1200px] mx-auto px-7 py-8">
        <div className="flex justify-between items-start">
          <div>
            <img src="/images/QuestMaker_Logo_alpha.png" alt="QuestMaker" className="h-16" />
          </div>
          <div className="flex flex-col gap-2.5 items-end">
            <SocialButton variant="x" label={officialLinks.x.handle} href={officialLinks.x.url} />
            <SocialButton variant="booth" label="BOOTH ショップ" href={officialLinks.booth.url} />
            <Link to="/contact" className="text-[13px] font-medium text-text-muted link-hover">
              お問い合わせ
            </Link>
          </div>
        </div>
        <p className="text-center mt-5 text-[13px] text-text-subtle/50">
          &copy; 2026 QuestMaker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
