"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { Mascot } from "@/components/sections/mascot";
import { building } from "@/data/building";

// Flip to true after you add public/adi.png
const PORTRAIT = "/adi.png";
const HAS_PORTRAIT = true;

const CHIPS = [
  { label: "LLMs", cls: "left-[0%] top-[12%] -rotate-3 bob" },
  { label: "RAG", cls: "left-[-2%] top-[36%] rotate-2 bob-2" },
  { label: "FastAPI", cls: "left-[4%] top-[58%] -rotate-2 bob" },
  { label: "Open Source", cls: "right-[0%] top-[16%] rotate-3 bob-2" },
];

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.5, ease: "easeOut" as const },
        };

  return (
    <section
      id="top"
      className="dot-grid overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Text side */}
        <div>
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-sm font-bold"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
            {t.heroBadge}
          </motion.div>

          <motion.h1 {...rise(0.08)} className="mt-6 text-5xl sm:text-6xl lg:text-7xl">
            {t.heroHi} <span className="marker">{t.heroName}</span>
            {t.heroHiEnd}{" "}
            <span className="wave-hand" aria-hidden="true">
              👋
            </span>
            <br />
            {t.heroA} <span className="marker">{t.heroB}</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg opacity-80">
            {t.heroSub}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="brut-btn">
              {t.ctaWork} →
            </a>
            <a href="#contact" className="brut-btn !bg-white">
              {t.cta}
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.32)}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold"
          >
            {[t.chipLang, t.chipWhatsApp, t.chipFast].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-leaf text-[11px] text-white">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual side */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          {/* marigold blob */}
          <svg
            viewBox="0 0 400 400"
            aria-hidden="true"
            className="absolute inset-[4%] h-[92%] w-[92%]"
          >
            <path
              d="M310 60C380 120 400 230 340 310C280 390 150 400 80 330C10 260 20 130 100 70C170 10 250 10 310 60Z"
              fill="#F5A524"
            />
          </svg>

          {/* sparkle doodles */}
          <svg
            viewBox="0 0 60 60"
            aria-hidden="true"
            className="wiggle svg-anim absolute right-[22%] top-[0%] w-12"
          >
            <path d="M30 4v14M8 20l11 8M52 20l-11 8" stroke="#1B1B3A" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 140, damping: 16 }}
            className="absolute inset-x-[8%] bottom-0 top-[6%] z-10 flex items-end justify-center"
          >
            {HAS_PORTRAIT ? (
              <Image
                src={PORTRAIT}
                alt="Illustrated portrait of Adi, the developer behind Adiverse"
                width={900}
                height={900}
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="h-full w-auto object-contain"
              />
            ) : (
              <div className="w-3/5">
                <Mascot />
              </div>
            )}
          </motion.div>

          {/* tech chips */}
          {CHIPS.map((c, i) => (
            <motion.span
              key={c.label}
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 220, damping: 14 }}
              className={`brut-card absolute z-20 !rounded-xl bg-white px-3 py-1.5 font-display text-sm font-extrabold sm:text-base ${c.cls}`}
            >
              {c.label}
            </motion.span>
          ))}

          {/* currently building */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 160, damping: 16 }}
            className="brut-card absolute bottom-[2%] right-0 z-20 w-[56%] -rotate-2 bg-white"
          >
            <div className="flex items-center gap-1.5 border-b-[3px] border-ink px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-chili" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-gold" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-leaf" />
              <span className="ml-1 truncate text-[11px] font-extrabold sm:text-xs">
                {t.buildTitle}
              </span>
            </div>
            <ul className="space-y-1.5 p-3">
              {building.map((b) => (
                <li key={b.name} className="flex items-center justify-between gap-2 text-xs font-bold sm:text-sm">
                  {b.name}
                  <span
                    className={`rounded-full border-2 border-ink px-2 py-0.5 text-[10px] font-extrabold sm:text-xs ${
                      b.status === "live" ? "bg-leaf text-white" : "bg-gold"
                    }`}
                  >
                    {b.status === "live" ? t.live : t.building}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}