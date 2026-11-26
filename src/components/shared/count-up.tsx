"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = { to: number; duration?: number };

export function CountUp({ to, duration = 1.4 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  const fmt = (v: number) => v.toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {/* Screen readers get the final number at once; sighted users see it count */}
      <span aria-hidden="true">{fmt(n)}</span>
      <span className="sr-only">{fmt(to)}</span>
    </span>
  );
}