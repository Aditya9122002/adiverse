const INK = "#1B1B3A";
const CREAM = "#FBF6EC";
const GOLD = "#F5A524";
const CHILI = "#E4452E";
const LEAF = "#25A869";

const FONT = "var(--font-inter), var(--font-hindi), sans-serif";

type Props = { variant: "chat" | "app"; name: string };

export function ProjectArt({ variant, name }: Props) {
  if (variant === "chat") {
    return (
      <svg
        viewBox="0 0 400 250"
        role="img"
        aria-label="Illustration of a multilingual AI chat answering a question"
        className="block h-auto w-full"
        style={{ fontFamily: FONT }}
      >
        <rect width="400" height="250" fill={CREAM} />
        <circle cx="360" cy="30" r="46" fill={GOLD} opacity="0.25" />

        {/* language chips */}
        {[
          ["हिंदी", 16, 52],
          ["Tamil", 74, 52],
          ["Bengali", 132, 62],
          ["+19", 200, 38],
        ].map(([label, x, w]) => (
          <g key={String(label)}>
            <rect x={Number(x)} y="12" width={Number(w)} height="24" rx="12" fill="#fff" stroke={INK} strokeWidth="2.5" />
            <text x={Number(x) + Number(w) / 2} y="28" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK}>
              {label}
            </text>
          </g>
        ))}

        {/* user bubble */}
        <rect x="148" y="54" width="238" height="40" rx="14" fill={GOLD} stroke={INK} strokeWidth="3" />
        <text x="162" y="79" fontSize="11.5" fontWeight="800" fill={INK}>
          PM Kisan ke liye kaun eligible hai?
        </text>

        {/* AI bubble */}
        <rect x="16" y="108" width="286" height="122" rx="14" fill="#fff" stroke={INK} strokeWidth="3" />
        <text x="30" y="132" fontSize="11.5" fontWeight="800" fill={INK}>
          Here are the documents you need:
        </text>
        <text x="30" y="152" fontSize="11" fill={INK} opacity="0.8">1. Aadhaar card</text>
        <text x="30" y="168" fontSize="11" fill={INK} opacity="0.8">2. Land records</text>
        <text x="30" y="184" fontSize="11" fill={INK} opacity="0.8">3. Bank passbook</text>
        <rect x="30" y="196" width="150" height="24" rx="12" fill={LEAF} stroke={INK} strokeWidth="2.5" />
        <text x="105" y="212" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#fff">
          Source: myscheme.gov.in
        </text>

        {/* sticker */}
        <g transform="rotate(6 340 190)">
          <rect x="300" y="170" width="88" height="40" rx="10" fill={CHILI} stroke={INK} strokeWidth="3" />
          <text x="344" y="187" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">22</text>
          <text x="344" y="202" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff">languages</text>
        </g>
      </svg>
    );
  }

  // generic "app" illustration
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label={`Illustration of the ${name} app`}
      className="block h-auto w-full"
      style={{ fontFamily: FONT }}
    >
      <rect width="400" height="250" fill={CREAM} />
      <circle cx="40" cy="220" r="50" fill={GOLD} opacity="0.25" />

      {/* sidebar */}
      <rect x="16" y="16" width="76" height="218" rx="12" fill={INK} />
      <rect x="28" y="30" width="30" height="30" rx="8" fill={GOLD} />
      {[78, 100, 122, 144].map((y) => (
        <rect key={y} x="28" y={y} width="52" height="8" rx="4" fill={CREAM} opacity="0.35" />
      ))}

      {/* title */}
      <text x="108" y="40" fontSize="18" fontWeight="800" fill={INK}>
        {name}
      </text>
      <rect x="108" y="50" width="120" height="6" rx="3" fill={INK} opacity="0.25" />

      {/* cards */}
      <rect x="108" y="72" width="130" height="74" rx="12" fill={GOLD} stroke={INK} strokeWidth="3" />
      <rect x="250" y="72" width="134" height="74" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="108" y="160" width="130" height="62" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="250" y="160" width="134" height="62" rx="12" fill={LEAF} stroke={INK} strokeWidth="3" />

      {/* card details */}
      <rect x="122" y="88" width="64" height="8" rx="4" fill={INK} />
      <rect x="122" y="106" width="96" height="6" rx="3" fill={INK} opacity="0.4" />
      <rect x="122" y="120" width="76" height="6" rx="3" fill={INK} opacity="0.4" />
      <circle cx="268" cy="94" r="10" fill={CHILI} />
      <rect x="286" y="90" width="80" height="8" rx="4" fill={INK} />
      <rect x="264" y="116" width="104" height="6" rx="3" fill={INK} opacity="0.3" />
      <rect x="264" y="128" width="70" height="6" rx="3" fill={INK} opacity="0.3" />
      <rect x="122" y="176" width="70" height="8" rx="4" fill={INK} />
      <rect x="122" y="194" width="98" height="6" rx="3" fill={INK} opacity="0.3" />
      <rect x="264" y="176" width="70" height="8" rx="4" fill="#fff" />
      <rect x="264" y="194" width="98" height="6" rx="3" fill="#fff" opacity="0.6" />
    </svg>
  );
}