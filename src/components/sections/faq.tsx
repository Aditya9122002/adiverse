"use client";

import { useLang } from "@/components/providers/language-provider";

export function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="scroll-mt-28 bg-gold/15 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-extrabold tracking-[0.2em] text-chili">
          {t.faqLabel}
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl">
          {t.faqTitleA}
          <span className="marker">{t.faqTitleB}</span>
        </h2>

        <div className="mt-10 space-y-4">
          {t.faq.map((item) => (
            <details key={item.q} className="brut-card group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-extrabold marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-gold text-lg leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 opacity-80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}