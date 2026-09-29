import { createFileRoute } from "@tanstack/react-router";
import { About } from "~/components/preview/d/About";
import { ContactLetter } from "~/components/preview/d/ContactLetter";
import { Hero } from "~/components/preview/d/Hero";
import { IndexNav } from "~/components/preview/d/IndexNav";
import { Members } from "~/components/preview/d/Members";
import { Works } from "~/components/preview/d/Works";

export const Route = createFileRoute("/preview/d/")({
  head: () => ({ meta: [{ title: "デザイン案D — QuestMaker" }] }),
  component: TopD,
});

function TopD() {
  return (
    <>
      <Hero />
      <IndexNav />
      <About />
      <Works />
      <Members />
      <ContactLetter />
    </>
  );
}
