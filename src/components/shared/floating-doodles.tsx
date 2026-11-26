"use client";

import { motion, useReducedMotion, type MotionValue } from "framer-motion";
import { ParallaxLayer } from "@/components/shared/parallax-layer";
import { DUR, EASE } from "@/lib/motion";

const INK = "#1B1B3A";
const line = {
  fill: "none",
  stroke: INK,
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Doodle = {
  id: string;
  className: string;
  depth: number;
  duration: number; // seconds per drift cycle
  offset: number; // negative delay so they are out of phase
  node: React.ReactNode;
};

const DOODLES: Doodle[] = [
  {
    id: "sparkle",
    className: "left-[4%] top-[20%]",
    depth: 8,
    duration: 24,
    offset: 0,
    node: (
      <svg viewBox="0 0 40 40" className="w-8" aria-hidden="true">
        <path d="M20 3 24 16 37 20 24 24 20 37 16 24 3 20 16 16Z" fill="#F5A524" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "code",
    className: "left-[46%] top-[9%] hidden md:block",
    depth: 12,
    duration: 28,
    offset: 6,
    node: <span className="font-mono text-xl font-bold">{"</>"}</span>,
  },
  {
    id: "terminal",
    className: "right-[4%] top-[42%] hidden md:block",
    depth: 10,
    duration: 26,
    offset: 12,
    node: <span className="font-mono text-xl font-bold">{">_"}</span>,
  },
  {
    id: "braces",
    className: "left-[3%] top-[70%]",
    depth: 14,
    duration: 30,
    offset: 3,
    node: <span className="font-mono text-2xl font-bold">{"{ }"}</span>,
  },
  {
    id: "bean",
    className: "left-[52%] top-[88%] hidden md:block",
    depth: 9,
    duration: 22,
    offset: 9,
    node: (
      <svg viewBox="0 0 32 24" className="w-8" aria-hidden="true">
        <ellipse cx="16" cy="12" rx="13" ry="8" transform="rotate(-25 16 12)" {...line} />
        <path d="M5 17C14 10 19 14 27 6" {...line} />
      </svg>
    ),
  },
  {
    id: "arrow",
    className: "right-[10%] top-[80%] hidden md:block",
    depth: 11,
    duration: 27,
    offset: 15,
    node: (
      <svg viewBox="0 0 56 36" className="w-12" aria-hidden="true">
        <path d="M4 30C16 4 40 4 52 24M52 24 42 22M52 24 50 14" {...line} />
      </svg>
    ),
  },
  {
    id: "scribble",
    className: "left-[28%] top-[92%]",
    depth: 8,
    duration: 25,
    offset: 18,
    node: (
      <svg viewBox="0 0 54 20" className="w-12" aria-hidden="true">
        <path d="M2 10Q10 0 18 10T34 10T50 10" {...line} />
      </svg>
    ),
  },
  {
    id: "ai",
    className: "right-[3%] top-[8%]",
    depth: 12,
    duration: 29,
    offset: 21,
    node: <span className="font-display text-xl font-extrabold">AI</span>,
  },
];

type Props = { mx: MotionValue<number>; my: MotionValue<number> };

export function FloatingDoodles({ mx, my }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DUR.base * 1.5, ease: EASE }}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {DOODLES.map((d) => (
        <ParallaxLayer key={d.id} mx={mx} my={my} depth={d.depth} className={`absolute ${d.className}`}>
          <div
            className="drift opacity-30"
            style={{ animationDuration: `${d.duration}s`, animationDelay: `-${d.offset}s` }}
          >
            {d.node}
          </div>
        </ParallaxLayer>
      ))}
    </motion.div>
  );
}