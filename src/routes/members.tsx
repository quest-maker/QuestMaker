import { createFileRoute } from "@tanstack/react-router";
import { MemberGrid } from "~/components/MemberGrid";
import { SectionTitle } from "~/components/ui/section-title";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "メンバー紹介 — QuestMaker" },
      {
        name: "description",
        content:
          "QuestMakerのメンバー紹介。個性豊かなクリエイターたちが集まって、楽しいコンテンツを作っています。",
      },
      { property: "og:title", content: "メンバー紹介 — QuestMaker" },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  return (
    <section className="pb-24 pt-12 md:pb-36 md:pt-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <SectionTitle as="h1" en="Members" ja="メンバー" />
        <p className="mt-6 max-w-[560px] text-[15px] leading-[1.9] text-text-muted">
          個性豊かなクリエイターたちが集まって、楽しいコンテンツを作っています。
        </p>
        <MemberGrid className="mt-12 md:mt-20" showDescriptionOnMobile headingLevel="h2" />
      </div>
    </section>
  );
}
