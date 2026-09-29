import { members } from "~/data/members";
import { XIcon } from "~/components/ui/icons";
import { Label } from "./Label";

/**
 * メンバー 6 人のグリッド。ステッカー調の明るいアバターは黒基調の中で浮くため、
 * 通常はモノクロで沈め、ホバー（キーボードではフォーカス）したときだけ色を戻す。
 */
export function MembersGrid() {
  return (
    <section id="members" aria-labelledby="qc-members" className="scroll-mt-16 bg-[#0B0C10]">
      <div className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-40">
        <div className="flex items-end justify-between border-t border-white/10 pt-10">
          <div>
            <Label rule>Team</Label>
            <h2
              id="qc-members"
              className="qc-en mt-6 text-[40px] leading-none font-light tracking-[-0.02em] text-white md:text-[64px]"
            >
              Members
            </h2>
          </div>
          <p className="qc-mono text-[10px] text-[#6B7280]">0{members.length} Creators</p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px bg-white/10 md:mt-20 lg:grid-cols-3">
          {members.map((member, i) => (
            <li key={member.id} className="group relative bg-[#0B0C10]">
              <div className="relative aspect-square overflow-hidden bg-[#111318]">
                <img
                  src={member.panelImage}
                  alt={`${member.name} のアバター`}

                  className="h-full w-full scale-[1.04] object-contain opacity-60 grayscale transition duration-500 group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <p className="qc-mono absolute top-3 left-3 text-[10px] text-[#6B7280] md:top-5 md:left-5">
                  0{i + 1}
                </p>
              </div>
              <div className="flex items-start justify-between gap-3 px-3 pt-4 pb-6 md:px-5 md:pt-5 md:pb-8">
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-white md:text-lg">{member.name}</p>
                  <p className="qc-mono mt-2 text-[9px] text-[#3CF0FF] md:text-[10px]">
                    {member.role}
                  </p>
                  <p className="mt-3 hidden text-[13px] leading-[1.9] text-[#9CA3AF] md:block">
                    {member.description}
                  </p>
                </div>
                <a
                  href={member.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} の X（${member.xHandle}）`}
                  className="shrink-0 p-1 text-[#9CA3AF] transition-colors hover:text-[#3CF0FF]"
                >
                  <XIcon size={14} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
