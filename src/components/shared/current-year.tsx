"use client";

import { useEffect, useState } from "react";

// Safe default used in the pre-built HTML. Update it once a year if you like.
const FALLBACK_YEAR = 2026;

export function CurrentYear() {
  const [year, setYear] = useState(FALLBACK_YEAR);

  useEffect(() => {
    // Runs only in the browser, after the page loads
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}