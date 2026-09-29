/**
 * 案 A の書体・配色。英字見出しは Outfit、和文は全体既定の Noto Sans JP を使う。
 * アクセント色はボタン hover・下線・ドットだけに限定し、白と墨の面を主役にする。
 */
export const en = "font-[family-name:Outfit,sans-serif]";

export const navItems = [
  { label: "Top", hash: undefined },
  { label: "Works", hash: "works" },
  { label: "Members", hash: "members" },
] as const;

/** 枠線ピル。サブアクション用 */
export const outlinePill = `${en} group inline-flex items-center gap-3 rounded-full border border-[#111] px-6 py-3 text-[14px] font-semibold tracking-[0.04em] text-[#111] transition-colors hover:border-[#16A34A] hover:text-[#16A34A]`;

/** 黒塗りピル。主 CTA 用 */
export const solidPill = `${en} group inline-flex items-center gap-3 rounded-full bg-[#111] px-7 py-3.5 text-[14px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-[#16A34A]`;
