"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { ShopScene } from "@/components/sections/shop-scene";
import { Mascot } from "@/components/sections/mascot";

// Types text letter by letter. Splits by grapheme so Hindi stays intact.
function useTypewriter(text: string, speed = 38) {
  const reduce = useReducedMotion();
  const [out, setOut] = useState("");

  useEffect(() => {
    if (reduce) {
      setOut(text);
      return;
    }
    const parts: string[] =
      typeof Intl !== "undefined" && "Segmenter" in Intl
        ? Array.from(
            new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
            (s) => s.segment
          )
        : Array.from(text);

    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(parts.slice(0, i).join(""));
      if (i >= parts.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduce]);

  return out;
}

function Dots({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-cream px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-chili" />
      <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-gold" />
      <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-leaf" />
      <span className="ml-2 truncate text-xs font-bold opacity-70">{label}</span>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const typed = useTypewriter(t.bubble);

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
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
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
            {t.heroA} <span className="marker">{t.heroB}</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg opacity-80">
            {t.heroSub}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="brut-btn">
              {t.cta} →
            </a>
            <a href="#work" className="brut-btn !bg-white">
              {t.ctaWork}
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
        <div className="relative mx-auto aspect-[4/4.6] w-full max-w-md lg:max-w-none">
          {/* BEFORE card */}
          <div className="bob absolute left-[1%] top-[3%] w-[66%]">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 160, damping: 18 }}
              className="brut-card overflow-hidden"
            >
              <Dots label="yourshop.in (not found)" />
              <ShopScene state="before" />
            </motion.div>
          </div>

          {/* AFTER card */}
          <div className="bob-2 absolute right-0 top-[24%] w-[66%]">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 160, damping: 18 }}
              className="brut-card overflow-hidden"
            >
              <Dots label="yourshop.in" />
              <ShopScene state="after" />
            </motion.div>
          </div>

          {/* stickers */}
          <span className="sticker absolute left-0 top-[-1%] z-10 bg-chili text-xs text-white sm:text-sm">
            {t.before}
          </span>
          <span className="sticker wiggle absolute right-[2%] top-[6%] z-10 bg-gold text-xs sm:text-sm">
            {t.missed}
          </span>
          <span className="sticker absolute right-[3%] top-[21%] z-10 rotate-3 bg-leaf text-xs text-white sm:text-sm">
            {t.after}
          </span>
          <motion.span
            animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="sticker absolute right-[1%] top-[63%] z-10 bg-leaf text-xs text-white sm:text-sm"
          >
            {t.newOrder}
          </motion.span>

          {/* mascot */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 140, damping: 16 }}
            className="absolute bottom-0 left-[-2%] z-20 w-[36%]"
          >
            <Mascot />
          </motion.div>

          {/* speech bubble */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 16 }}
            className="brut-card absolute bottom-[3%] right-0 z-20 w-[60%] bg-white p-3 sm:p-4"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[11px] bottom-5 h-4 w-4 rotate-45 border-b-[3px] border-l-[3px] border-ink bg-white"
            />
            <p className="font-display text-xs font-extrabold text-chili">Adi</p>
            <p className="sr-only">{t.bubble}</p>
            <p aria-hidden="true" className="min-h-[2.8em] text-xs font-bold leading-snug sm:text-sm">
              {typed}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}