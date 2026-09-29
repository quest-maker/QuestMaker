import { Link } from "@tanstack/react-router";
import { XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { SectionHead } from "./SectionHead";

/** 依頼への誘導を手紙の体裁で書き、読み物の流れのまま DM へ進めるようにする */
export function ContactLetter() {
  return (
    <section
      id="contact"
      aria-labelledby="qd-contact"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 pt-24 pb-24 md:px-10 md:pt-36 md:pb-36"
    >
      <SectionHead no="04" en="Contact" ja="お問い合わせ" id="qd-contact" />
      <div className="mx-auto mt-12 max-w-[760px] border border-[#1A1819] bg-[#F7F6F2] px-6 py-10 md:mt-16 md:px-14 md:py-14">
        <p className="qd-serif text-[15px] italic">Dear reader,</p>
        <p className="qd-mincho qd-letter mt-6 text-[17px] leading-[2.2em] tracking-[0.04em] md:text-[19px]">
          ワールド制作やライブ演出など、お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています。「みんなで一緒に楽しめる」場づくりのお手伝いができれば幸いです。
        </p>
        <p className="qd-mincho mt-6 text-right text-[15px] tracking-[0.1em]">QuestMaker</p>
        <div className="mt-10 flex flex-col gap-4 border-t border-[#1A1819] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2.5 bg-[#1A1819] px-7 text-[14px] font-medium tracking-[0.04em] text-[#F1F0EC] transition-opacity hover:opacity-85"
          >
            <XIcon size={14} />X で DM を送る
          </a>
          <Link
            to="/preview/d/contact"
            className="qd-serif text-[15px] italic underline decoration-1 underline-offset-4 hover:text-[#D9481C]"
          >
            ご連絡の前に — How to contact
          </Link>
        </div>
      </div>
    </section>
  );
}
