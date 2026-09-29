/**
 * 案 B の配色。キービジュアル（header.png）のロゴの緑と青、背景のパステルから取る。
 * 文字は黒ではなく濃紺にして、パステル面の上でも硬くなりすぎないようにする。
 */
export const color = {
  navy: "#1B2559",
  green: "#1ED760",
  blue: "#1EA0F0",
  aqua: "#BDEFFA",
  pink: "#FFD3EC",
  yellow: "#FFE45C",
} as const;

export const navItems = [
  { label: "Top", hash: undefined },
  { label: "Works", hash: "works" },
  { label: "Members", hash: "members" },
] as const;
