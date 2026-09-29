/**
 * ステッカー風の装飾。HIKKY の画面四隅に散らした立体物の役割を、キービジュアルと同じ
 * 星とキラキラで置き換える。すべて装飾なので読み上げ対象から外す。
 */

function starPoints(cx: number, cy: number, outer: number, inner: number, n = 5) {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / n) * i - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

export function StarSticker({ fill, className = "" }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <polygon
        points={starPoints(50, 54, 44, 21)}
        fill={fill}
        stroke="#fff"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <polygon
        points={starPoints(50, 54, 44, 21)}
        fill="none"
        stroke="#1B2559"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleSticker({ fill, className = "" }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        d="M50 4 C54 36 64 46 96 50 C64 54 54 64 50 96 C46 64 36 54 4 50 C36 46 46 36 50 4Z"
        fill={fill}
        stroke="#fff"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 吹き出し。中の短い英字は装飾なので alt 相当の意味を持たせない */
export function BubbleSticker({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 130" aria-hidden="true" className={className}>
      <path
        d="M24 10 H196 A18 18 0 0 1 214 28 V78 A18 18 0 0 1 196 96 H86 L52 124 L58 96 H24 A18 18 0 0 1 6 78 V28 A18 18 0 0 1 24 10Z"
        fill="#fff"
        stroke="#1B2559"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text
        x="110"
        y="66"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontSize="38"
        fill="#1B2559"
      >
        {text}
      </text>
    </svg>
  );
}
