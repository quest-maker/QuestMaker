import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";

export const Route = createFileRoute("/preview/d/contact")({
  head: () => ({ meta: [{ title: "お問い合わせ | デザイン案D — QuestMaker" }] }),
  component: ContactD,
});

/** DM に添えてもらう項目。依頼内容の把握に最低限必要なものに絞る */
const dmChecklist = [
  "お名前（団体名・VRChat の表示名など）",
  "ご依頼・ご相談の内容",
  "ご希望の時期やスケジュール感",
];

/** 便箋に見立てた 1 カラム。窓口は公式 X の DM だけなので、添える項目を読んだ流れで DM へ進ませる */
function ContactD() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 pt-6 pb-24 md:px-10 md:pt-8 md:pb-36">
      <div className="qd-serif flex items-center justify-between border-y border-[#1A1819] py-2 text-[12px] italic md:text-[14px]">
        <span>Contact</span>
        <span>Letters to QuestMaker</span>
      </div>

      <article className="mx-auto mt-14 max-w-[720px] md:mt-20">
        <p className="qd-serif text-center text-[15px] text-[#D9481C] italic">— Correspondence —</p>
        <h1 className="qd-mincho mt-5 text-center text-[30px] leading-[1.6] font-semibold tracking-[0.08em] md:text-[44px]">
          お問い合わせ
        </h1>
        <p className="qd-mincho mt-8 text-center text-[15px] leading-[2.1] tracking-[0.04em] md:text-[17px]">
          お仕事のご依頼・ご相談は、
          <br className="md:hidden" />
          公式XアカウントのDMで受け付けています。
        </p>

        <div className="mt-14 border border-[#1A1819] bg-[#F7F6F2] px-6 py-10 md:px-12 md:py-12">
          <h2 className="qd-mincho text-[18px] font-semibold tracking-[0.06em] md:text-[20px]">
            ご連絡の際に添えていただきたいこと
          </h2>
          <p className="mt-3 text-[14px] leading-[1.9]">以下を添えていただけるとスムーズです。</p>
          <table className="mt-8 w-full border-t border-[#1A1819]">
            <caption className="sr-only">DM に添えていただきたい項目</caption>
            <tbody>
              {dmChecklist.map((item, i) => (
                <tr key={item} className="border-b border-[#1A1819]">
                  <th
                    scope="row"
                    className="qd-serif w-14 py-5 text-left align-baseline text-[20px] font-light text-[#D9481C] italic md:w-20 md:text-[24px]"
                  >
                    0{i + 1}
                  </th>
                  <td className="qd-mincho py-5 align-baseline text-[16px] leading-[1.8] tracking-[0.03em] md:text-[18px]">
                    {item}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <dl className="mt-10 flex items-baseline justify-between gap-4 border-b border-[#1A1819]/40 pb-4">
            <dt className="qd-serif text-[15px] italic">To</dt>
            <dd className="qd-serif text-[24px] font-medium tracking-[-0.01em] md:text-[28px]">
              {officialLinks.x.handle}
            </dd>
          </dl>

          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-14 w-full items-center justify-between bg-[#1A1819] px-6 text-[15px] font-medium tracking-[0.04em] text-[#F1F0EC] transition-opacity hover:opacity-85"
          >
            <span className="flex items-center gap-3">
              <XIcon size={15} />X で DM を送る
            </span>
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <p className="mt-4 text-center text-[12px] leading-[1.8] opacity-80">
            X のプロフィールページが開きます。「メッセージ」ボタンから DM を送信してください。
          </p>
        </div>
      </article>
    </div>
  );
}
