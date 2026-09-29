import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/preview/")({
  head: () => ({ meta: [{ title: "デザイン案の比較 — QuestMaker" }] }),
  component: PreviewIndex,
});

const variants = [
  {
    to: "/preview/a",
    name: "A. Studio",
    summary: "白基調・余白大・英字大見出しのクリエイティブスタジオ型",
    refs: "ANYCOLOR / REALITY / STYLY / カバー",
  },
  {
    to: "/preview/b",
    name: "B. Pop",
    summary: "ブランド色の全面背景・ステッカー装飾のポップなエンタメ型",
    refs: "HIKKY / サンリオ / UUUM",
  },
  {
    to: "/preview/c",
    name: "C. Immersive",
    summary: "黒基調で作品写真に語らせる没入型",
    refs: "チームラボ / ライゾマティクス / クラスター",
  },
  {
    to: "/preview/d",
    name: "D. Editorial",
    summary: "オフホワイトとセリフ体の雑誌型",
    refs: "ライゾマティクス / 東宝 / アニプレックス",
  },
] as const;

/** 各デザイン案の入口。採用案が決まったら /preview ごと削除する。 */
function PreviewIndex() {
  return (
    <main className="min-h-screen bg-bg px-7 py-16">
      <div className="max-w-[880px] mx-auto">
        <h1 className="text-3xl font-extrabold text-text">デザイン案の比較</h1>
        <p className="text-text-muted mt-3">
          各案とも Top と Contact を実装しています。本番ページは{" "}
          <Link to="/" className="underline">
            /
          </Link>{" "}
          です。
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {variants.map((v) => (
            <li key={v.to}>
              <Link
                to={v.to}
                className="block h-full rounded-2xl border border-border bg-surface p-6 card-hover"
              >
                <p className="text-lg font-bold text-text">{v.name}</p>
                <p className="text-sm text-text-muted mt-2">{v.summary}</p>
                <p className="text-xs text-text-subtle mt-4">参考: {v.refs}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
