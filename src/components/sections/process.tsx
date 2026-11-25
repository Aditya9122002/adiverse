"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";

const TINTS = ["bg-gold", "bg-leaf text-white", "bg-chili text-white", "bg-ink text-cream"];

export function Process() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="process" className="scroll-mt-28 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-extrabold tracking-[0.2em] text-chili">
          {t.procLabel}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
          {t.procTitleA}
          <span className="marker">{t.procTitleB}</span>
        </h2>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="brut-card relative p-6 pt-10"
            >
              <span
                className={`absolute -top-5 left-5 grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink font-display text-xl font-extrabold shadow-[3px_3px_0_var(--ink)] ${TINTS[i]}`}
              >
                {i + 1}
              </span>
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-2 opacity-80">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}