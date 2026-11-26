"use client";

import Image from "next/image";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { Mascot } from "@/components/sections/mascot";
import { FloatingDoodles } from "@/components/shared/floating-doodles";
import { Magnetic } from "@/components/shared/magnetic";
import { ParallaxLayer } from "@/components/shared/parallax-layer";
import { usePointerParallax } from "@/hooks/use-pointer-parallax";
import { building } from "@/data/building";
import { DUR, EASE, IDLE, PARALLAX, TILT_DEG, TIMELINE } from "@/lib/motion";

// Flip to true after you add public/adi.png
const PORTRAIT = "/adi.png";
const HAS_PORTRAIT = true;

const CHIPS = [
  { label: "LLMs", pos: "left-[0%] top-[12%]", tilt: "-rotate-3", float: "bob" },
  { label: "RAG", pos: "left-[-2%] top-[36%]", tilt: "rotate-2", float: "bob-2" },
  { label: "FastAPI", pos: "left-[4%] top-[58%]", tilt: "-rotate-2", float: "bob" },
  { label: "Open Source", pos: "right-[0%] top-[16%]", tilt: "rotate-3", float: "bob-2" },
];

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const { ref, x, y } = usePointerParallax();
  const lean = useTransform(x, [-1, 1], [-TILT_DEG, TILT_DEG]);

  const rise = (delay: number, dy = 20) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: dy },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: DUR.base, ease: EASE },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay, duration: DUR.base, ease: EASE },
        };

  const idle = reduce
    ? {}
    : {
        animate: { y: [0, -IDLE.floatPx, 0], scaleY: [1, IDLE.breathe, 1] },
        transition: { duration: IDLE.seconds, repeat: Infinity, ease: "easeInOut" as const },
        style: { transformOrigin: "50% 100%" },
      };

  return (
    <section
      ref={ref}
      id="top"
      className="dot-grid relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-40"
    >
      <FloatingDoodles mx={x} my={y} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Text side */}
        <div>
          <motion.div
            {...rise(TIMELINE.badge)}
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-sm font-bold"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
            {t.heroBadge}
          </motion.div>

          <motion.h1 {...rise(TIMELINE.headline)} className="mt-6 text-5xl sm:text-6xl lg:text-7xl">
            {t.heroHi} <span className="marker">{t.heroName}</span>
            {t.heroHiEnd}{" "}
            <span className="wave-hand" aria-hidden="true">
              👋
            </span>
            <br />
            {t.heroA} <span className="marker">{t.heroB}</span>
          </motion.h1>

          <motion.p {...rise(TIMELINE.sub)} className="mt-6 max-w-xl text-lg opacity-80">
            {t.heroSub}
          </motion.p>

          <motion.div {...rise(TIMELINE.buttons)} className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a href="#work" className="brut-btn">
                {t.ctaWork} →
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="brut-btn !bg-white">
                {t.cta}
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul
            {...rise(TIMELINE.proof)}
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

        {/* Visual side: a living workspace */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          {/* marigold blob */}
          <motion.svg
            viewBox="0 0 400 400"
            aria-hidden="true"
            className="absolute inset-[4%] h-[92%] w-[92%]"
            {...fade(TIMELINE.blob)}
          >
            <path
              d="M310 60C380 120 400 230 340 310C280 390 150 400 80 330C10 260 20 130 100 70C170 10 250 10 310 60Z"
              fill="#F5A524"
            />
          </motion.svg>

          {/* portrait: parallax → lean toward cursor → entrance → idle float */}
          <ParallaxLayer
            mx={x}
            my={y}
            depth={PARALLAX.portrait}
            className="absolute inset-x-[8%] bottom-0 top-[6%] z-10"
          >
            <motion.div style={{ rotate: lean, transformOrigin: "50% 100%" }} className="h-full w-full">
              <motion.div {...rise(TIMELINE.portrait, 40)} className="h-full w-full">
                <motion.div {...idle} className="flex h-full items-end justify-center">
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
              </motion.div>
            </motion.div>
          </ParallaxLayer>

          {/* tech chips */}
          {CHIPS.map((c, i) => (
            <ParallaxLayer
              key={c.label}
              mx={x}
              my={y}
              depth={PARALLAX.chips}
              className={`absolute z-20 ${c.pos}`}
            >
              <motion.div {...rise(TIMELINE.chips + i * 0.1, 16)}>
                <span
                  className={`brut-card block !rounded-xl bg-white px-3 py-1.5 font-display text-sm font-extrabold sm:text-base ${c.tilt} ${c.float}`}
                >
                  {c.label}
                </span>
              </motion.div>
            </ParallaxLayer>
          ))}

          {/* currently building */}
          <ParallaxLayer
            mx={x}
            my={y}
            depth={PARALLAX.card}
            className="absolute bottom-[2%] right-0 z-20 w-[56%]"
          >
            <motion.div {...rise(TIMELINE.card, 24)}>
              <div className="brut-card -rotate-2 bg-white">
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
                    <li
                      key={b.name}
                      className="flex items-center justify-between gap-2 text-xs font-bold sm:text-sm"
                    >
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
              </div>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}