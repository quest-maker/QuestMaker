import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { XIcon } from "~/components/ui/icons";
import { officialLinks } from "~/data/links";
import { Label } from "./Label";

/** Top の締め。大きな英字一文で依頼を促し、窓口である X の DM へ直接つなぐ */
export function ContactCta() {
  return (
    <section aria-labelledby="qc-contact" className="relative overflow-hidden bg-[#0B0C10]">
      <img
        src="/images/group-photo-2.webp"
        alt=""
        aria-hidden="true"

        className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/70 to-[#0B0C10]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-44">
        <Label rule>Contact</Label>
        <h2
          id="qc-contact"
          className="qc-en mt-10 max-w-[1000px] text-[44px] leading-[1.02] font-light tracking-[-0.035em] text-white md:text-[104px]"
        >
          Let&rsquo;s build the next stage.
        </h2>
        <p className="mt-8 max-w-[520px] text-[15px] leading-[2] tracking-[0.04em] text-[#9CA3AF]">
          お仕事のご依頼・ご相談は、公式XアカウントのDMで受け付けています。
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={officialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="qc-mono inline-flex h-14 items-center justify-center gap-3 border border-[#3CF0FF] px-8 text-[12px] text-[#3CF0FF] transition-colors duration-200 hover:bg-[#3CF0FF] hover:text-[#0B0C10] hover:shadow-[0_0_24px_rgba(60,240,255,0.25)]"
          >
            <XIcon size={14} />
            DM on X
          </a>
          <Link
            to="/preview/c/contact"
            className="qc-mono inline-flex items-center gap-2 text-[11px] text-white/80 transition-colors hover:text-white"
          >
            How to contact
            <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
