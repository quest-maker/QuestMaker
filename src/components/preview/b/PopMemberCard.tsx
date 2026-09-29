import { XIcon } from "~/components/ui/icons";
import type { Member } from "~/data/members";

/** roleLabel をキービジュアルの緑と青に割り当てる */
const roleColor = { green: "#1ED760", blue: "#1EA0F0" } as const;

/**
 * キャラカード風のメンバーカード。ステッカー画像を主役に大きく置き、
 * hover で左右交互に少し傾けて、カードを手に取ったような動きにする。
 */
export function PopMemberCard({ member, index }: { member: Member; index: number }) {
  const tilt = index % 2 === 0 ? "motion-safe:hover:-rotate-2" : "motion-safe:hover:rotate-2";
  return (
    <article
      className={`group relative h-full rounded-[28px] border-[3px] border-[#1B2559] bg-white p-3 pb-5 shadow-[0_6px_0_#1B2559] motion-safe:transition-transform motion-safe:duration-300 md:p-4 md:pb-6 ${tilt}`}
    >
      <div className="rounded-[20px] bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#E6F8FD_70%)]">
        <img
          src={member.panelImage}
          alt={`${member.name} のアバター`}
          className="aspect-square w-full object-contain p-1 md:p-3"
        />
      </div>
      <span
        className="b-anton mt-3 inline-block max-w-full rounded-full border-2 border-[#1B2559] px-3 py-0.5 text-[12px] tracking-[0.04em] md:text-[14px]"
        style={{ backgroundColor: roleColor[member.roleLabel] }}
      >
        {member.role}
      </span>
      <div className="mt-2 flex items-center justify-between gap-2">
        <h3 className="text-[18px] font-extrabold md:text-[22px]">{member.name}</h3>
        <a
          href={member.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} の X（${member.xHandle}）`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1B2559] text-white transition-colors hover:bg-[#1EA0F0]"
        >
          <XIcon size={13} />
        </a>
      </div>
      <p className="mt-2 hidden text-[13px] font-medium leading-[1.8] text-[#1B2559]/75 md:block">
        {member.description}
      </p>
    </article>
  );
}
