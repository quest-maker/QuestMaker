import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "~/components/PageHeader";
import { XIcon } from "~/components/ui/icons";
import { buttonClass } from "~/components/ui/button";
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
 * お問い合わせページ。窓口は公式 X の DM に一本化している。
 * フォームやメールアドレスを用意するまでの間、迷わず DM へ辿り着けることを優先する。
 */
function ContactPage() {
  return (
    <>
      <PageHeader
        label="CONTACT"
        labelColor="green"
        title="お問い合わせ"
        subtitle="お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています"
      />

      <div className="px-7 py-12 bg-bg">
        <div className="max-w-[720px] mx-auto bg-surface border border-border rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4">
            <span className="shrink-0 grid place-items-center w-14 h-14 rounded-full bg-cta text-white">
              <XIcon size={24} />
            </span>
            <div>
              <p className="text-[13px] text-text-muted">QuestMaker 公式 X</p>
              <p className="text-xl font-bold text-text">{officialLinks.x.handle}</p>
            </div>
          </div>

          <p className="text-[15px] text-text-muted leading-[1.8] mt-6">
            ご連絡の際は、以下を添えていただけるとスムーズです。
          </p>
          <ul className="mt-3 space-y-2">
            {dmChecklist.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] text-text">
                <span
                  className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accent-green shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass("primary", "lg")} w-full mt-8`}
          >
            <XIcon size={16} />
            X で DM を送る
          </a>
          <p className="text-[13px] text-text-subtle text-center mt-3">
            X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
          </p>
        </div>
      </div>
    </>
  );
}
