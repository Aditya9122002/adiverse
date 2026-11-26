"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { ServiceArt, type ArtVariant } from "@/components/sections/service-art";
import { TiltCard } from "@/components/shared/tilt-card";
import { DUR, EASE } from "@/lib/motion";

const ART: ArtVariant[] = ["website", "chat", "flow"];
const TINTS = ["bg-gold/25", "bg-leaf/20", "bg-chili/15"];

export function Services() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { delay, duration: DUR.base, ease: EASE },
        };

  return (
    <section id="services" className="scroll-mt-28 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal()}>
          <p className="text-sm font-extrabold tracking-[0.2em] text-chili">
            {t.svcLabel}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
            {t.svcTitleA} <span className="marker">{t.svcTitleB}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg opacity-80">{t.svcSub}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.svc.map((s, i) => (
            <motion.div key={s.title} {...reveal(0.1 + i * 0.12)}>
              <TiltCard className="h-full">
                <article className="brut-card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[8px_8px_0_var(--ink)]">
                  <div className={`relative border-b-[3px] border-ink p-4 ${TINTS[i]}`}>
                    <span className="sticker absolute left-3 top-3 z-10 bg-white text-xs">
                      {`0${i + 1}`}
                    </span>
                    <ServiceArt variant={ART[i]} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-2 opacity-80">{s.text}</p>
                    <ul className="mt-5 space-y-2 text-sm font-bold">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-ink bg-leaf text-[11px] text-white">
                            ✓
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}