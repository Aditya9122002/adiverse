// One motion language for the whole site.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DUR = { base: 0.8 } as const;

// Entrance order, in seconds. Background → illustration → headline → buttons.
export const TIMELINE = {
  blob: 0.1,
  portrait: 0.35,
  badge: 0.45,
  headline: 0.6,
  sub: 0.78,
  buttons: 0.92,
  chips: 0.85,
  proof: 1.05,
  card: 1.25,
} as const;

export const IDLE = { floatPx: 4, breathe: 1.012, seconds: 6 } as const;
export const TILT_DEG = 1.5;
export const PARALLAX = { portrait: 6, chips: 14, card: 10 } as const;
export const NAV = { slide: 0.7, logoDelay: 0.25, logoDraw: 0.9 } as const;