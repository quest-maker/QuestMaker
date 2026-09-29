import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Label } from "~/components/preview/c/Label";
import { XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";

export const Route = createFileRoute("/preview/c/contact")({
  head: () => ({ meta: [{ title: "お問い合わせ | デザイン案C — QuestMaker" }] }),
  component: ContactC,
});

/** DM に添えてもらう項目。依頼内容の把握に最低限必要なものに絞る */
const dmChecklist = [
  "お名前（団体名・VRChat の表示名など）",
  "ご依頼・ご相談の内容",
  "ご希望の時期やスケジュール感",
];

/** 窓口は公式 X の DM だけなので、黒地の 1 カラムで迷わず DM ボタンへ辿り着かせる */
function ContactC() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-36 pb-28 md:px-10 md:pt-52 md:pb-44">
      <div className="max-w-[960px]">
        <Label rule>Contact</Label>
        <h1 className="qc-en mt-10 text-[48px] leading-[1.02] font-light tracking-[-0.035em] text-white md:text-[96px]">
          Let&rsquo;s build
          <br />
          the next stage.
        </h1>
        <p className="mt-10 text-[15px] leading-[2] tracking-[0.04em] text-[#9CA3AF] md:text-base">
          お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています。
          <br className="hidden md:inline" />
          ご連絡の際は、以下を添えていただけるとスムーズです。
        </p>

        <ol className="mt-16 border-t border-white/15">
          {dmChecklist.map((item, i) => (
            <li
              key={item}
              className="grid grid-cols-[48px_1fr] items-baseline border-b border-white/15 py-7 md:grid-cols-[120px_1fr] md:py-9"
            >
              <span className="qc-mono text-[11px] text-[#3CF0FF]">0{i + 1}</span>
              <span className="text-[16px] leading-[1.8] font-normal tracking-[0.03em] text-white md:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="qc-mono text-[10px] text-[#6B7280]">Official X</p>
            <p className="qc-en mt-3 text-2xl font-medium tracking-[-0.01em] text-white md:text-3xl">
              {officialLinks.x.handle}
            </p>
          </div>
          <div className="md:w-[380px]">
            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-full items-center justify-between border border-[#3CF0FF] bg-[#3CF0FF] px-7 text-[15px] font-medium tracking-[0.04em] text-[#0B0C10] transition-colors duration-200 hover:bg-transparent hover:text-[#3CF0FF]"
            >
              <span className="flex items-center gap-3">
                <XIcon size={15} />X で DM を送る
              </span>
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <p className="mt-4 text-[12px] leading-[1.8] text-[#9CA3AF]">
              X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
