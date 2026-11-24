"use client";

import { useLang } from "@/components/providers/language-provider";

export function Marquee() {
  const { t } = useLang();
  // Repeat the list so the loop looks seamless
  const items = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-[3px] border-ink bg-ink py-4 text-cream"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((label, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-xl font-extrabold md:text-2xl">
            {label}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}