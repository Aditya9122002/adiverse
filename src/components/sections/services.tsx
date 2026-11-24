"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";

const TINTS = ["bg-gold", "bg-leaf/30", "bg-chili/20"];

export function Services() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-28 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-extrabold tracking-[0.2em] text-chili">
          {t.svcLabel}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
          {t.svcTitleA} <span className="marker">{t.svcTitleB}</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{t.svcSub}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.svc.map((s, i) => (
            <motion.article
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="brut-card flex flex-col p-6"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink text-2xl ${TINTS[i]}`}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <h3 className="mt-5 text-2xl">{s.title}</h3>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}