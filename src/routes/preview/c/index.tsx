import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "~/components/preview/c/ContactCta";
import { Hero } from "~/components/preview/c/Hero";
import { MembersGrid } from "~/components/preview/c/MembersGrid";
import { Statement } from "~/components/preview/c/Statement";
import { WorksList } from "~/components/preview/c/WorksList";

export const Route = createFileRoute("/preview/c/")({
  head: () => ({ meta: [{ title: "デザイン案C — QuestMaker" }] }),
  component: TopC,
});

function TopC() {
  return (
    <>
      <Hero />
      <Statement />
      <WorksList />
      <MembersGrid />
      <ContactCta />
    </>
  );
}
