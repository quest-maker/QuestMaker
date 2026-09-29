import { Outlet, createFileRoute } from "@tanstack/react-router";

/**
 * デザイン比較用プレビューの親ルート。
 * 採用案を決めるまでの一時的なページなので、検索エンジンに載せない。
 */
export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: Outlet,
});
