import { Outlet, createFileRoute } from "@tanstack/react-router";
import { StudioFooter } from "~/components/preview/a/StudioFooter";
import { StudioHeader } from "~/components/preview/a/StudioHeader";

/** 案 A「Studio」のレイアウト。白地と墨だけで組み、英字書体 Outfit をここで読み込む。 */
export const Route = createFileRoute("/preview/a")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: StudioLayout,
});

function StudioLayout() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <StudioHeader />
      <main>
        <Outlet />
      </main>
      <StudioFooter />
    </div>
  );
}
