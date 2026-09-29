import { ArrowRight } from "lucide-react";

/**
 * ボタン内の右矢印。hover で右へ少しずれて、押せる方向を示す。
 */
export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <ArrowRight
      size={size}
      aria-hidden="true"
      className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
    />
  );
}
