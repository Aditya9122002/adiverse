"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { LanguageToggle } from "@/components/shared/language-toggle";

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const links = [
    { href: "#services", label: t.navServices },
    { href: "#work", label: t.navWork },
    { href: "#process", label: t.navProcess },
    { href: "#faq", label: t.navFaq },
  ];

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
    >
      <nav
        aria-label="Main"
        className="brut-card mx-auto flex max-w-6xl items-center justify-between gap-3 !rounded-full bg-cream px-3 py-2 md:px-4"
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" aria-label="Adiverse home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border-[3px] border-ink bg-gold font-display text-lg font-extrabold">
            A
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            Adiverse
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-[15px] font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a href="#contact" className="brut-btn hidden !px-4 !py-2 text-sm md:inline-flex">
            {t.navCta}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-white md:hidden"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {open && (
        <motion.div
          id="mobile-menu"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="brut-card mx-auto mt-3 max-w-6xl bg-cream p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1 text-lg font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 hover:bg-gold/30"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="brut-btn mt-3 w-full justify-center"
          >
            {t.navCta}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}