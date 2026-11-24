type Props = { state: "before" | "after" };

const INK = "#1B1B3A";
const CREAM = "#FBF6EC";
const GOLD = "#F5A524";
const CHILI = "#E4452E";
const LEAF = "#25A869";

export function ShopScene({ state }: Props) {
  const after = state === "after";
  const items = [GOLD, CHILI, LEAF, GOLD];

  return (
    <svg
      viewBox="0 0 400 280"
      role="img"
      aria-label={
        after
          ? "A shopfront taking orders on a phone"
          : "A shopfront with a paper notebook for orders"
      }
      className="block h-auto w-full"
    >
      <rect width="400" height="280" fill={CREAM} />
      <circle cx="335" cy="48" r="26" fill={GOLD} opacity="0.4" />
      <rect y="228" width="400" height="52" fill={INK} opacity="0.08" />

      {/* shop body */}
      <rect x="60" y="100" width="280" height="128" fill={GOLD} fillOpacity="0.22" stroke={INK} strokeWidth="3" />

      {/* signboard */}
      <rect x="110" y="38" width="180" height="42" rx="6" fill={INK} />
      <text x="200" y="66" textAnchor="middle" fontSize="18" fontWeight="800" fill={CREAM}>
        SHARMA STORE
      </text>

      {/* windows */}
      {[80, 250].map((x) => (
        <g key={x}>
          <rect x={x} y="140" width="70" height="52" fill={CREAM} stroke={INK} strokeWidth="3" />
          <rect x={x} y="164" width="70" height="3" fill={INK} />
          {items.map((c, i) => (
            <rect key={i} x={x + 6 + i * 16} y="148" width="11" height="15" rx="2" fill={c} />
          ))}
        </g>
      ))}

      {/* door */}
      <rect x="170" y="140" width="60" height="88" rx="4" fill={INK} />
      <rect x="178" y="148" width="44" height="40" rx="3" fill={CREAM} opacity="0.9" />
      <circle cx="220" cy="200" r="4" fill={GOLD} />

      {/* awning */}
      {Array.from({ length: 8 }).map((_, i) => {
        const c = i % 2 === 0 ? CHILI : CREAM;
        const x = 60 + i * 35;
        return (
          <g key={i}>
            <rect x={x} y="96" width="35" height="26" fill={c} stroke={INK} strokeWidth="2" />
            <path d={`M${x} 122 a17.5 17.5 0 0 0 35 0 Z`} fill={c} stroke={INK} strokeWidth="2" />
          </g>
        );
      })}


      {/* state-only details */}
      {after ? (
        <g>
          <g className="svg-anim bob-sm">
            <rect x="352" y="170" width="34" height="58" rx="7" fill={INK} />
            <rect x="356" y="176" width="26" height="46" rx="4" fill={LEAF} />
            <rect x="360" y="184" width="18" height="4" rx="2" fill={CREAM} />
            <rect x="360" y="192" width="14" height="4" rx="2" fill={CREAM} />
          </g>
          <g className="svg-anim pop">
            <circle cx="384" cy="170" r="9" fill={CHILI} stroke={INK} strokeWidth="2" />
            <text x="384" y="174" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">
              1
            </text>
          </g>
        </g>
      ) : (
        <g className="svg-anim wiggle">
          <rect x="350" y="190" width="38" height="38" rx="3" fill="#fff" stroke={INK} strokeWidth="3" />
          <path d="M356 202h26M356 210h20M356 218h24" stroke={CHILI} strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}