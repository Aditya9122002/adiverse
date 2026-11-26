"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";

// Tracks the pointer inside an element as -1..1 values, smoothed and overdamped
// (no overshoot). Does nothing on touch screens or with reduced motion.
export function usePointerParallax() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.8 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, rawX, rawY]);

  return { ref, x, y };
}