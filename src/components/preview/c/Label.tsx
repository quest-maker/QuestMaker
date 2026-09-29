import type { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  /** シアンの短い線を前に置く。セクションの起点だけに使い、多用しない */
  rule?: boolean;
  className?: string;
}

/** 英字だけの等幅ラベル。見出しを小さく抑え、写真に主役を譲るための部品 */
export function Label({ children, rule = false, className = "" }: LabelProps) {
  return (
    <p className={`qc-mono flex items-center gap-3 text-[11px] text-[#9CA3AF] ${className}`}>
      {rule && <span className="h-px w-8 bg-[#3CF0FF]" aria-hidden="true" />}
      {children}
    </p>
  );
}
