import { createFileRoute } from "@tanstack/react-router";
import { XIcon } from "~/components/ui/icons";
import { Arrow } from "~/components/preview/a/ArrowCircle";
import { en, solidPill } from "~/components/preview/a/tokens";
import { officialLinks } from "~/data/links";

export const Route = createFileRoute("/preview/a/contact")({
  head: () => ({ meta: [{ title: "お問い合わせ｜デザイン案A — QuestMaker" }] }),
  component: StudioContact,
});

/** DM に添えてもらうと返信が早くなる項目。依頼内容の把握に最低限必要なものに絞る。 */
const dmChecklist = [
  "お名前（団体名・VRChat の表示名など）",
  "ご依頼・ご相談の内容",
  "ご希望の時期やスケジュール感",
];

/**
 * 案 A の Contact。窓口は公式 X の DM だけなので、巨大英字の直下に 1 枚のカードを置き、
 * 読む順に「どこへ」「何を添えて」「どう送るか」が並ぶようにする。
 */
function StudioContact() {
  return (
    <section className="relative overflow-hidden pb-24 pt-12 md:pb-36 md:pt-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <p
          className={`${en} flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em]`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
          お問い合わせ
        </p>
        <h1
          className={`${en} mt-4 text-[72px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#111] md:text-[184px]`}
        >
          Contact
        </h1>
        <p className="mt-6 text-[16px] font-bold leading-[1.8] md:text-[20px]">
          お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています。
        </p>

        <div className="mt-12 grid overflow-hidden rounded-[28px] bg-[#F2F2F2] md:mt-16 md:grid-cols-12 md:rounded-[40px]">
          <div className="p-7 md:col-span-5 md:p-14">
            <p className={`${en} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]`}>
              Official X
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#111] text-white">
                <XIcon size={22} />
              </span>
              <div>
                <p className="text-[13px] text-[#555]">QuestMaker 公式 X</p>
                <p className={`${en} text-[24px] font-bold md:text-[28px]`}>
                  {officialLinks.x.handle}
                </p>
              </div>
            </div>

            <a
              href={officialLinks.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${solidPill} mt-10 w-full justify-between py-4 text-[15px]`}
            >
              <span className="inline-flex items-center gap-2.5">
                <XIcon size={15} />X で DM を送る
              </span>
              <Arrow />
            </a>
            <p className="mt-4 text-[12px] leading-[1.8] text-[#555]">
              X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
            </p>
          </div>

          <div className="border-t border-[#DCDCDC] bg-white/60 p-7 md:col-span-7 md:border-l md:border-t-0 md:p-14">
            <p className="text-[15px] font-bold leading-[1.8]">
              ご連絡の際は、以下を添えていただけるとスムーズです。
            </p>
            <ol className="mt-6">
              {dmChecklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-[#DCDCDC] py-5 last:border-b"
                >
                  <span
                    className={`${en} shrink-0 whitespace-nowrap text-[28px] font-extrabold leading-none text-[#111] md:text-[40px]`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium leading-[1.7] md:text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
