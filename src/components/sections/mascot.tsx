const INK = "#1B1B3A";
const CREAM = "#FBF6EC";
const GOLD = "#F5A524";
const SKIN = "#C98B5E";

export function Mascot() {
  return (
    <svg
      viewBox="0 0 200 260"
      role="img"
      aria-label="Illustrated Adiverse shopkeeper waving hello"
      className="block h-auto w-full overflow-visible"
    >
      <g className="bob-sm">
        {/* resting left arm */}
        <rect x="32" y="150" width="24" height="64" rx="12" fill={CREAM} stroke={INK} strokeWidth="4" />

        {/* torso (kurta) */}
        <rect x="52" y="138" width="96" height="84" rx="26" fill={CREAM} stroke={INK} strokeWidth="4" />
        <rect x="94" y="144" width="12" height="40" fill={GOLD} />
        <circle cx="100" cy="158" r="3.5" fill={INK} />
        <circle cx="100" cy="174" r="3.5" fill={INK} />

        {/* ears */}
        <circle cx="62" cy="100" r="8" fill={SKIN} stroke={INK} strokeWidth="4" />
        <circle cx="138" cy="100" r="8" fill={SKIN} stroke={INK} strokeWidth="4" />

        {/* head */}
        <ellipse cx="100" cy="96" rx="38" ry="42" fill={SKIN} stroke={INK} strokeWidth="4" />

        {/* hair */}
        <path d="M60 92 C54 48 146 48 140 92 C132 72 68 72 60 92 Z" fill={INK} />

        {/* beard + mustache */}
        <path d="M63 100 C60 144 140 144 137 100 C128 112 72 112 63 100 Z" fill={INK} />
        <path d="M80 108 Q100 98 120 108 Q100 116 80 108 Z" fill={INK} />
        <path d="M90 122 Q100 131 110 122" fill="none" stroke={CREAM} strokeWidth="3.5" strokeLinecap="round" />

        {/* eyebrows + eyes */}
        <path d="M74 83 Q84 77 94 83" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M106 83 Q116 77 126 83" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <ellipse className="svg-anim blink" cx="84" cy="92" rx="4.5" ry="5.5" fill={INK} />
        <ellipse className="svg-anim blink" cx="116" cy="92" rx="4.5" ry="5.5" fill={INK} />

        {/* waving right arm */}
        <g className="wave-arm">
          <rect x="146" y="92" width="24" height="70" rx="12" fill={CREAM} stroke={INK} strokeWidth="4" />
          <circle cx="158" cy="86" r="13" fill={SKIN} stroke={INK} strokeWidth="4" />
        </g>

        {/* shop counter */}
        <rect x="14" y="198" width="172" height="62" rx="10" fill={INK} />
        <rect x="8" y="190" width="184" height="16" rx="8" fill={GOLD} stroke={INK} strokeWidth="4" />
      </g>
    </svg>
  );
}