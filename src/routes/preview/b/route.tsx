import { Outlet, createFileRoute } from "@tanstack/react-router";
import cssUrl from "~/components/preview/b/b.css?url";
import { PopFooter } from "~/components/preview/b/PopFooter";
import { PopHeader } from "~/components/preview/b/PopHeader";

/** 案 B「Pop」のレイアウト。極太英字・手書き英字・丸ゴシックの 3 書体をここで読み込む。 */
export const Route = createFileRoute("/preview/b")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=M+PLUS+Rounded+1c:wght@500;700;800&family=Pacifico&display=swap",
      },
      { rel: "stylesheet", href: cssUrl },
    ],
  }),
  component: PopLayout,
});

function PopLayout() {
  return (
    <div className="b-root min-h-screen bg-[#BDEFFA] text-[#1B2559]">
      <PopHeader />
      <main className="-mt-[76px] md:-mt-[84px]">
        <Outlet />
      </main>
      <PopFooter />
    </div>
  );
}
