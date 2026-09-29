import { members } from "~/data/members";
import { XIcon } from "~/components/ui/icons";
import { SectionHead } from "./SectionHead";

/** メンバー紹介をインタビュー誌面の人物欄に見立て、丸い顔写真と肩書きを 2 段組みで並べる */
export function Members() {
  return (
    <section
      id="members"
      aria-labelledby="qd-members"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-36"
    >
      <SectionHead no="03" en="Members" ja="メンバー" id="qd-members" />
      <ul className="grid md:grid-cols-2 md:gap-x-12">
        {members.map((member, i) => (
          <li key={member.id} className="border-b border-[#1A1819]">
            <article className="grid grid-cols-[72px_1fr] gap-5 py-8 md:grid-cols-[104px_1fr] md:gap-7 md:py-10">
              <img
                src={member.image}
                alt={`${member.name} のアイコン`}
                className="aspect-square w-full rounded-full object-cover"
              />
              <div>
                <p className="qd-serif text-[13px] text-[#D9481C] italic">0{i + 1}</p>
                <div className="mt-1 flex items-baseline justify-between gap-3">
                  <h3 className="qd-mincho text-[22px] font-semibold tracking-[0.04em]">
                    {member.name}
                  </h3>
                  <a
                    href={member.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} の X（${member.xHandle}）`}
                    className="shrink-0 p-1 transition-opacity hover:opacity-60"
                  >
                    <XIcon size={14} />
                  </a>
                </div>
                <p className="qd-serif mt-1 text-[15px] italic">{member.role}</p>
                <p className="mt-4 text-[14px] leading-[1.95] tracking-[0.02em]">
                  {member.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
