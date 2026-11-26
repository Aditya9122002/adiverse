"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = { children: React.ReactNode; strength?: number; max?: number };

export function Magnetic({ children, strength = 0.25, max = 8 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.6 });
  const y = useSpring(my, { stiffness: 150, damping: 20, mass: 0.6 });
  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-block"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(clamp((e.clientX - (r.left + r.width / 2)) * strength));
        my.set(clamp((e.clientY - (r.top + r.height / 2)) * strength));
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}