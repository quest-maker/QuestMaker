import { createFileRoute } from "@tanstack/react-router";
import { Arrow } from "~/components/ui/arrow";
import { XIcon } from "~/components/ui/icons";
import { solidPill } from "~/components/ui/pill";
import { officialLinks } from "~/data/links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ — QuestMaker" },
      {
        name: "description",
        content: "QuestMakerへのお問い合わせは公式XアカウントのDMで受け付けています。",
      },
      { property: "og:title", content: "お問い合わせ — QuestMaker" },
    ],
  }),
  component: ContactPage,
});

/** DM に添えてもらうと返信が早くなる項目。依頼内容の把握に最低限必要なものに絞る。 */
const dmChecklist = [
  "お名前（団体名・VRChat の表示名など）",
  "ご依頼・ご相談の内容",
  "ご希望の時期やスケジュール感",
];

/**
 * お問い合わせページ。窓口は公式 X の DM に一本化しているので、大見出しの直下に 1 枚のカードを置き、
 * 読む順に「どこへ」「何を添えて」「どう送るか」が並ぶようにする。
 */
function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-12 md:pb-36 md:pt-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <p className="font-display flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          お問い合わせ
        </p>
        <h1 className="font-display mt-4 text-[72px] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink md:text-[184px]">
          Contact
        </h1>
        <p className="mt-6 text-[16px] font-bold leading-[1.8] md:text-[20px]">
          お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています。
        </p>

        <div className="mt-12 grid overflow-hidden rounded-[28px] bg-surface-muted md:mt-16 md:grid-cols-12 md:rounded-[40px]">
          <div className="p-7 md:col-span-5 md:p-14">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-subtle">
              Official X
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-white">
                <XIcon size={22} />
              </span>
              <div>
                <p className="text-[13px] text-text-muted">QuestMaker 公式 X</p>
                <p className="font-display text-[24px] font-bold md:text-[28px]">
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
            <p className="mt-4 text-[12px] leading-[1.8] text-text-muted">
              X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
            </p>
          </div>

          <div className="border-t border-line-strong bg-white/60 p-7 md:col-span-7 md:border-l md:border-t-0 md:p-14">
            <p className="text-[15px] font-bold leading-[1.8]">
              ご連絡の際は、以下を添えていただけるとスムーズです。
            </p>
            <ol className="mt-6">
              {dmChecklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-line-strong py-5 last:border-b"
                >
                  <span className="font-display shrink-0 whitespace-nowrap text-[28px] font-extrabold leading-none text-ink md:text-[40px]">
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
