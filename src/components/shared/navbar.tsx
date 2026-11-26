"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { LogoMark } from "@/components/shared/logo-mark";
import { Magnetic } from "@/components/shared/magnetic";
import { EASE, NAV } from "@/lib/motion";

// Sections the nav watches while you scroll
const WATCHED = ["top", "services", "work", "process", "faq", "contact"];
const SCROLL_COMPACT_PX = 24;

export function Navbar() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { id: "services", label: t.navServices },
    { id: "work", label: t.navWork },
    { id: "process", label: t.navProcess },
    { id: "faq", label: t.navFaq },
  ];

  // Escape closes the mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Compact the bar after a little scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_COMPACT_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in the middle of the screen
  useEffect(() => {
    const els = WATCHED.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: NAV.slide, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 px-3 md:px-6 transition-[padding] duration-300 ${
        scrolled ? "pt-2" : "pt-3"
      }`}
    >
      <nav
        aria-label="Main"
        className={`brut-card mx-auto flex max-w-6xl items-center justify-between gap-3 !rounded-full bg-cream px-3 transition-all duration-300 md:px-4 ${
          scrolled ? "py-1.5 !shadow-[3px_3px_0_var(--ink)]" : "py-2"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" aria-label="Adiverse home">
          <LogoMark />
          <motion.span
            initial={reduce ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: NAV.logoDelay + NAV.logoDraw,
              duration: 0.5,
              ease: EASE,
            }}
            className="font-display text-xl font-extrabold tracking-tight"
          >
            Adiverse
          </motion.span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-[15px] font-semibold md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className="relative isolate block px-1 py-1"
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-marker"
                    aria-hidden="true"
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-x-0 bottom-0.5 -z-10 h-2.5 rounded-full bg-gold"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <span className="hidden md:inline-block">
            <Magnetic>
              <a href="#contact" className="brut-btn !px-4 !py-2 text-sm">
                {t.navCta}
              </a>
            </Magnetic>
          </span>

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
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="brut-card mx-auto mt-3 max-w-6xl bg-cream p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1 text-lg font-bold">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 hover:bg-gold/30 ${
                      active === l.id ? "bg-gold/40" : ""
                    }`}
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
      </AnimatePresence>
    </motion.header>
  );
}