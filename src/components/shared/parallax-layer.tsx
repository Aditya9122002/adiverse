"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number; // max pixels of drift
  className?: string;
  children: React.ReactNode;
};

export function ParallaxLayer({ mx, my, depth, className, children }: Props) {
  const x = useTransform(mx, [-1, 1], [-depth, depth]);
  const y = useTransform(my, [-1, 1], [-depth, depth]);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}