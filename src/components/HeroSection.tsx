/**
 * トップページのヒーロー画像。header.png をフルワイドで表示。
 * aspect-ratio: 3/1 でモックアップと同じ比率を維持。
 */
export function HeroSection() {
  return (
    <img
      className="w-full object-cover object-center"
      style={{ aspectRatio: "3 / 1" }}
      src="/images/header.png"
      alt="QuestMaker ヒーロー画像"
    />
  );
}
