"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const INK = "#1B1B3A";
const CREAM = "#FBF6EC";
const GOLD = "#F5A524";
const LEAF = "#25A869";
const CHILI = "#E4452E";
const IN = { once: true, margin: "-60px" } as const;

// Reveal helpers. With reduced motion, everything is simply shown, finished.
function useReveal() {
  const reduce = useReducedMotion();
  return {
    reduce,
    fade: (delay: number) =>
      reduce
        ? {}
        : {
            initial: { opacity: 0, y: 6 },
            whileInView: { opacity: 1, y: 0 },
            viewport: IN,
            transition: { delay, duration: 0.6, ease: EASE },
          },
    grow: (delay: number) =>
      reduce
        ? {}
        : {
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            viewport: IN,
            transition: { delay, duration: 0.7, ease: EASE },
            style: { transformBox: "fill-box" as const, transformOrigin: "left center" },
          },
    draw: (delay: number) =>
      reduce
        ? {}
        : {
            initial: { pathLength: 0 },
            whileInView: { pathLength: 1 },
            viewport: IN,
            transition: { delay, duration: 0.8, ease: EASE },
          },
  };
}

export type ArtVariant = "website" | "chat" | "flow";

export function ServiceArt({ variant }: { variant: ArtVariant }) {
  const { reduce, fade, grow, draw } = useReveal();
  const svgClass = "block h-auto w-full";

  if (variant === "website") {
    return (
      <svg viewBox="0 0 240 150" role="img" aria-label="A website coming together" className={svgClass}>
        <rect x="14" y="12" width="212" height="128" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
        <path d="M14 36H226" stroke={INK} strokeWidth="3" />
        <circle cx="28" cy="24" r="3.5" fill={CHILI} />
        <circle cx="40" cy="24" r="3.5" fill={GOLD} />
        <circle cx="52" cy="24" r="3.5" fill={LEAF} />

        <motion.g {...grow(0.2)}>
          <rect x="26" y="48" width="112" height="40" rx="6" fill={GOLD} stroke={INK} strokeWidth="2.5" />
        </motion.g>
        <motion.g {...grow(0.4)}>
          <rect x="26" y="96" width="76" height="7" rx="3.5" fill={INK} opacity="0.25" />
        </motion.g>
        <motion.g {...grow(0.5)}>
          <rect x="26" y="110" width="52" height="7" rx="3.5" fill={INK} opacity="0.25" />
        </motion.g>
        <motion.g {...fade(0.6)}>
          <rect x="150" y="48" width="64" height="40" rx="6" fill={CREAM} stroke={INK} strokeWidth="2.5" />
          <circle cx="170" cy="68" r="8" fill={LEAF} />
        </motion.g>
        <motion.g {...fade(0.85)}>
          <rect x="150" y="98" width="64" height="28" rx="14" fill={LEAF} stroke={INK} strokeWidth="2.5" />
          <text x="182" y="116" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
            Order
          </text>
        </motion.g>
      </svg>
    );
  }

  if (variant === "chat") {
    return (
      <svg viewBox="0 0 240 150" role="img" aria-label="A chatbot answering a customer" className={svgClass}>
        <motion.g {...fade(0.2)}>
          <rect x="60" y="12" width="164" height="32" rx="12" fill={GOLD} stroke={INK} strokeWidth="2.5" />
          <text x="72" y="32" fontSize="11" fontWeight="800" fill={INK}>
            Are you open today?
          </text>
        </motion.g>

        {/* typing dots, shown briefly before the answer */}
        {!reduce && (
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={IN}
            transition={{ delay: 0.6, duration: 0.9, times: [0, 0.2, 0.8, 1] }}
          >
            <rect x="16" y="56" width="48" height="26" rx="12" fill="#fff" stroke={INK} strokeWidth="2.5" />
            <circle cx="30" cy="69" r="3" fill={INK} />
            <circle cx="40" cy="69" r="3" fill={INK} />
            <circle cx="50" cy="69" r="3" fill={INK} />
          </motion.g>
        )}

        <motion.g {...fade(1.5)}>
          <rect x="16" y="56" width="160" height="50" rx="12" fill="#fff" stroke={INK} strokeWidth="2.5" />
          <text x="28" y="76" fontSize="11" fontWeight="800" fill={INK}>
            Yes! 10 am to 9 pm.
          </text>
          <text x="28" y="94" fontSize="10" fill={INK} opacity="0.7">
            Want to place an order?
          </text>
        </motion.g>
        <motion.g {...fade(1.9)}>
          <rect x="16" y="114" width="122" height="26" rx="13" fill={LEAF} stroke={INK} strokeWidth="2.5" />
          <text x="77" y="131" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
            Order on WhatsApp
          </text>
        </motion.g>
      </svg>
    );
  }

  // flow
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="An automation passing work from step to step" className={svgClass}>
      <motion.g {...fade(0)}>
        <rect x="12" y="52" width="54" height="46" rx="10" fill={GOLD} stroke={INK} strokeWidth="3" />
        <text x="39" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK}>
          Order
        </text>
      </motion.g>
      <motion.path
        d="M68 75H94M88 69L94 75L88 81"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(0.35)}
      />
      <motion.g {...fade(0.7)}>
        <rect x="93" y="52" width="54" height="46" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
        <text x="120" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK}>
          Sheet
        </text>
      </motion.g>
      <motion.path
        d="M149 75H175M169 69L175 75L169 81"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(1.05)}
      />
      <motion.g {...fade(1.4)}>
        <rect x="174" y="52" width="54" height="46" rx="10" fill={LEAF} stroke={INK} strokeWidth="3" />
        <text x="201" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">
          Alert
        </text>
      </motion.g>
      <motion.g {...fade(1.7)}>
        <rect x="64" y="112" width="112" height="24" rx="12" fill={CREAM} stroke={INK} strokeWidth="2.5" />
        <text x="120" y="128" textAnchor="middle" fontSize="10" fontWeight="800" fill={INK}>
          runs by itself
        </text>
      </motion.g>
    </svg>
  );
}