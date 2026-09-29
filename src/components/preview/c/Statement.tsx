import { Label } from "./Label";

/** ミッションを黒地に置く。見出しは大きめの和文、写真は余白の中に 1 枚だけ置く */
export function Statement() {
  return (
    <section id="about" aria-labelledby="qc-statement" className="scroll-mt-20 bg-[#0B0C10]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-40">
        <div className="md:col-span-6 lg:col-span-6">
          <Label rule>Statement</Label>
          <h2
            id="qc-statement"
            className="mt-10 text-[22px] leading-[1.75] font-medium tracking-[0.04em] text-white md:text-[36px] md:leading-[1.6]"
          >
            PCとQuestの垣根をなくし、
            <br />
            みんなで一緒に楽しめる
            <br className="hidden md:inline" />
            世界をつくりたい
          </h2>
          <p className="mt-10 max-w-[520px] text-[15px] leading-[2.1] tracking-[0.04em] text-[#9CA3AF]">
            そんな思いを胸に集まった仲間たちで結成したVRChatのクリエイターチームです。プラットフォームの壁を越えて「みんなで仲良く」楽しめるコンテンツを制作しています！
          </p>
          <dl className="mt-14 grid max-w-[520px] grid-cols-2 border-t border-white/10">
            <div className="border-r border-white/10 py-5 pr-5">
              <dt className="qc-mono text-[10px] text-[#6B7280]">Platform</dt>
              <dd className="qc-en mt-2 text-[15px] text-white">PC / Quest</dd>
            </div>
            <div className="py-5 pl-5">
              <dt className="qc-mono text-[10px] text-[#6B7280]">Field</dt>
              <dd className="qc-en mt-2 text-[15px] text-white">VRChat World &amp; Live</dd>
            </div>
          </dl>
        </div>

        <figure className="md:col-span-6 md:col-start-7 md:pt-24">
          <img
            src="/images/group-photo-1.webp"
            alt="VRChat 内で撮影した QuestMaker メンバーの集合写真"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="qc-mono mt-4 flex justify-between text-[10px] text-[#6B7280]">
            <span>QuestMaker in VRChat</span>
            <span>Photo 01</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
