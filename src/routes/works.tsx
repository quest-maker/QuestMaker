import { createFileRoute } from "@tanstack/react-router";
import { WorkMeta } from "~/components/WorkCard";
import { Arrow } from "~/components/ui/arrow";
import { outlinePill } from "~/components/ui/pill";
import { SectionTitle } from "~/components/ui/section-title";
import { worksLead } from "~/data/site";
import { works } from "~/data/works";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "制作実績 — QuestMaker" },
      {
        name: "description",
        content: "QuestMakerの制作実績。VRChat上で制作したワールド・コンテンツを紹介します。",
      },
      { property: "og:title", content: "制作実績 — QuestMaker" },
    ],
  }),
  component: WorksPage,
});

/**
 * 作品を 1 件ずつケーススタディとして並べる。画像とテキストを左右交互に置き、
 * 件数が少なくても一覧が単調にならないようにする。モバイルでは画像→テキストの縦積み。
 */
function WorksPage() {
  return (
    <section className="pb-24 pt-12 md:pb-36 md:pt-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <SectionTitle as="h1" en="Works" ja="実績" />
        <p className="mt-6 max-w-[560px] text-[15px] leading-[1.9] text-text-muted">{worksLead}</p>

        <ol className="mt-14 space-y-20 md:mt-24 md:space-y-32">
          {works.map((work, i) => {
            const reversed = i % 2 === 1;
            return (
              <li key={work.id} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <div
                  className={`overflow-hidden rounded-[20px] bg-surface-muted md:col-span-7 md:rounded-[28px] ${reversed ? "md:order-2" : ""}`}
                >
                  <img
                    src={work.image}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                  <WorkMeta work={work} index={i} />
                  <h2 className="mt-4 text-[22px] font-bold leading-[1.5] text-ink md:text-[28px]">
                    {work.title}
                  </h2>
                  <p className="mt-2 text-[14px] font-bold leading-[1.8] text-accent-strong">
                    {work.subtitle}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.9] text-text-muted">
                    {work.description}
                  </p>
                  {work.externalUrl && (
                    <a
                      href={work.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${work.title} を VRChat で見る（新しいタブで開く）`}
                      className={`${outlinePill} mt-8`}
                    >
                      VRChat で見る
                      <Arrow />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
