import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SparkleSticker, StarSticker } from "~/components/preview/b/Stickers";
import { XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";

export const Route = createFileRoute("/preview/b/contact")({
  head: () => ({ meta: [{ title: "お問い合わせ｜デザイン案B — QuestMaker" }] }),
  component: PopContact,
});

/** DM に添えてもらうと返信が早くなる項目。依頼内容の把握に最低限必要なものに絞る。 */
const dmChecklist = [
  { text: "お名前（団体名・VRChat の表示名など）", bg: "#FFE45C", rotate: "-rotate-6" },
  { text: "ご依頼・ご相談の内容", bg: "#FFD3EC", rotate: "rotate-3" },
  { text: "ご希望の時期やスケジュール感", bg: "#BDEFFA", rotate: "-rotate-3" },
];

/**
 * 案 B の Contact。緑の色面に白い大きなカードを 1 枚だけ置き、
 * 吹き出しの見出し → 添えてほしい 3 項目 → DM ボタンの順に読ませる。
 */
function PopContact() {
  return (
    <section className="b-dots-green relative overflow-hidden bg-[#1ED760] px-3 pb-20 pt-[112px] md:px-8 md:pb-28 md:pt-[150px]">
      <StarSticker
        fill="#FFE45C"
        className="b-float absolute left-4 top-[96px] w-14 md:left-[8%] md:top-[130px] md:w-24"
      />
      <SparkleSticker
        fill="#fff"
        className="absolute right-6 top-[120px] w-10 md:right-[10%] md:top-[180px] md:w-16"
      />

      <div className="relative mx-auto max-w-[880px]">
        <div className="text-center">
          <p className="b-script -rotate-3 text-[40px] leading-none md:text-[60px]">Let's talk!</p>
          <h1 className="b-anton mt-1 text-[80px] uppercase leading-[0.9] md:text-[150px]">
            Contact
          </h1>
        </div>

        <div className="mt-10 rounded-[36px] border-[3px] border-[#1B2559] bg-white px-5 pb-8 pt-10 shadow-[0_8px_0_#1B2559] md:mt-14 md:rounded-[48px] md:px-14 md:pb-14 md:pt-14">
          {/* 吹き出しの見出し。しっぽをカードの内側へ向けて「話しかけている」形にする */}
          <div className="relative mx-auto w-fit">
            <p className="relative rounded-[24px] border-[3px] border-[#1B2559] bg-[#BDEFFA] px-6 py-3 text-center text-[18px] font-extrabold leading-[1.6] md:px-8 md:text-[22px]">
              お仕事のご依頼・ご相談は
              <br className="md:hidden" />
              公式XのDMへ！
            </p>
            <span
              aria-hidden="true"
              className="absolute -bottom-[13px] left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-[#1B2559] bg-[#BDEFFA]"
            />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#1B2559] text-white">
              <XIcon size={22} />
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#1B2559]/70">QuestMaker 公式 X</p>
              <p className="text-[22px] font-extrabold md:text-[26px]">{officialLinks.x.handle}</p>
            </div>
          </div>

          <p className="mt-10 text-center text-[15px] font-bold">
            ご連絡の際は、以下を添えていただけるとスムーズです。
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {dmChecklist.map((item, i) => (
              <li
                key={item.text}
                className="relative rounded-[24px] border-[3px] border-[#1B2559] bg-white px-5 pb-5 pt-9 text-[15px] font-extrabold leading-[1.7] md:min-h-[140px]"
              >
                <span
                  aria-hidden="true"
                  className={`b-anton absolute -top-5 left-4 grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#1B2559] text-[24px] shadow-[0_3px_0_#1B2559] ${item.rotate}`}
                  style={{ backgroundColor: item.bg }}
                >
                  {i + 1}
                </span>
                {item.text}
              </li>
            ))}
          </ol>

          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-full border-[3px] border-[#1B2559] bg-[#1B2559] px-6 py-5 text-[18px] font-extrabold text-white shadow-[0_6px_0_#1EA0F0] transition-transform motion-safe:hover:-translate-y-1 md:text-[20px]"
          >
            <XIcon size={18} />
            DM で相談する
            <ExternalLink size={18} aria-hidden="true" />
          </a>
          <p className="mt-4 text-center text-[13px] font-medium leading-[1.8] text-[#1B2559]/75">
            X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
          </p>
        </div>
      </div>
    </section>
  );
}
