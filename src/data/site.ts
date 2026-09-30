/**
 * 複数のページ・meta で同じ言い回しを使うサイト文言。
 * 改行位置は表示箇所ごとに違うので、行に分けて持ち、改行するかどうかは各コンポーネントが決める。
 */

/** チームのミッション。Top の Hero で 3 行の見出しとして組む */
export const missionLines = [
  "PCとQuestの垣根をなくし、",
  "みんなで一緒に楽しめる",
  "世界をつくりたい",
] as const;

/** チームの一行紹介。フッターと meta description で使う */
export const taglineLines = [
  "PCとQuestの垣根をなくし、",
  "みんなで一緒に楽しめる世界をつくるVRChatクリエイターチーム",
] as const;

export const tagline = taglineLines.join("");

/** About 本文。highlight の部分にマーカーを引く */
export const aboutBody = {
  before:
    "そんな思いを胸に集まった仲間たちで結成したVRChatのクリエイターチームです。プラットフォームの壁を越えて",
  highlight: "「みんなで仲良く」",
  after: "楽しめるコンテンツを制作しています！",
} as const;

/** 作品一覧のリード文。Top の Works 節と /works で使う */
export const worksLead =
  "ライブ演出からゲームワールドまで。PC でも Quest でも、同じ空間を一緒に楽しめるように作っています。";
