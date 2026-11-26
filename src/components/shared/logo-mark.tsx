"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, NAV } from "@/lib/motion";

const INK = "#1B1B3A";
const GOLD = "#F5A524";

export function LogoMark({ size = 40 }: { size?: number }) {
  const reduce = useReducedMotion();

  // With reduced motion, the logo is simply shown, fully drawn.
  const draw = (delay: number, duration: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { delay, duration, ease: EASE },
        };

  const fillIn = reduce
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: NAV.logoDelay + NAV.logoDraw * 0.6,
          duration: 0.5,
          ease: EASE,
        },
      };

  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <motion.circle cx="20" cy="20" r="17" fill={GOLD} {...fillIn} />
      <motion.circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        {...draw(NAV.logoDelay, NAV.logoDraw * 0.7)}
      />
      <motion.path
        d="M12.5 29 20 11 27.500 29M15.500 23.500h9"
        fill="none"
        stroke={INK}
        strokeWidth="3.500"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(NAV.logoDelay + NAV.logoDraw * 0.45, NAV.logoDraw * 0.55)}
      />
    </svg>
  );
}