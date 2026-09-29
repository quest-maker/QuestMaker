import { Outlet, createFileRoute } from "@tanstack/react-router";
import cssUrl from "~/components/preview/c/c.css?url";
import { Footer } from "~/components/preview/c/Footer";
import { Header } from "~/components/preview/c/Header";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap";

/** デザイン案C（Immersive）のレイアウト。黒基調の独自ヘッダー・フッターで各ページを包む */
export const Route = createFileRoute("/preview/c")({
  head: () => ({
    meta: [{ name: "theme-color", content: "#0B0C10" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_URL },
      { rel: "stylesheet", href: cssUrl },
    ],
  }),
  component: LayoutC,
});

function LayoutC() {
  return (
    <div className="qc-root min-h-screen overflow-x-clip antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
