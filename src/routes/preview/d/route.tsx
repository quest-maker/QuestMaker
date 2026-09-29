import { Outlet, createFileRoute } from "@tanstack/react-router";
import cssUrl from "~/components/preview/d/d.css?url";
import { Footer } from "~/components/preview/d/Footer";
import { Header } from "~/components/preview/d/Header";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Noto+Sans+JP:wght@400;500&family=Shippori+Mincho:wght@500;600&display=swap";

/** デザイン案D（Editorial）のレイアウト。オフホワイトの紙面に罫線で区切ったヘッダー・フッターを置く */
export const Route = createFileRoute("/preview/d")({
  head: () => ({
    meta: [{ name: "theme-color", content: "#F1F0EC" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_URL },
      { rel: "stylesheet", href: cssUrl },
    ],
  }),
  component: LayoutD,
});

function LayoutD() {
  return (
    <div className="qd-root min-h-screen overflow-x-clip antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
