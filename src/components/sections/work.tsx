"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { ProjectArt } from "@/components/sections/project-art";
import { CountUp } from "@/components/shared/count-up";
import { work, type WorkItem } from "@/data/work";
import { DUR, EASE } from "@/lib/motion";

const ACCENT = {
  gold: "bg-gold",
  leaf: "bg-leaf text-white",
  chili: "bg-chili text-white",
} as const;

function LaunchCard({ w, featured }: { w: WorkItem; featured: boolean }) {
  const { t, lang } = useLang();

  return (
    <article
      className={`brut-card launch group h-full overflow-hidden ${
        featured ? "lg:grid lg:grid-cols-[1.1fr_1fr]" : "flex flex-col"
      }`}
    >
      {/* Preview */}
      <div
        className={`relative overflow-hidden border-b-[3px] border-ink bg-cream ${
          featured ? "lg:border-b-0 lg:border-r-[3px]" : ""
        }`}
      >
        <div className="launch-zoom">
          {w.image ? (
            <Image
              src={w.image}
              alt={`${w.name[lang]} website preview`}
              width={1200}
              height={750}
              sizes={featured ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
              className="h-auto w-full object-cover object-top"
            />
          ) : (
            <ProjectArt variant={w.art ?? "app"} name={w.name.en} />
          )}
        </div>

        <span className={`sticker launch-sticker absolute left-3 top-3 z-10 text-xs ${ACCENT[w.accent]}`}>
          {w.type[lang]}
        </span>

        {/* Stack: slides up on hover or focus, always visible on touch */}
        <ul className="reveal-on-hover absolute inset-x-3 bottom-3 z-10 flex flex-wrap gap-1.5">
          {w.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-bold shadow-[2px_2px_0_var(--ink)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Story */}
      <div className="flex flex-col p-6 md:p-8">
        <h3 className={featured ? "text-3xl md:text-4xl" : "text-2xl"}>{w.name[lang]}</h3>

        <dl className="mt-5 space-y-3 text-sm md:text-base">
          <div>
            <dt className="font-extrabold text-chili">{t.problemLabel}</dt>
            <dd className="mt-0.5 opacity-80">{w.problem[lang]}</dd>
          </div>
          <div>
            <dt className="font-extrabold text-leaf">{t.resultLabel}</dt>
            <dd className="mt-0.5 opacity-80">{w.result[lang]}</dd>
          </div>
        </dl>

        {w.metrics && (
          <ul className="mt-6 grid grid-cols-3 gap-3 border-y-[3px] border-dashed border-ink/25 py-4">
            {w.metrics.map((m) => (
              <li key={m.label.en}>
                <p className="font-display text-2xl font-extrabold md:text-3xl">
                  <CountUp to={m.value} />
                </p>
                <p className="text-xs font-bold opacity-70">{m.label[lang]}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          {w.liveUrl ? (
            <a
              href={w.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-btn glow !px-4 !py-2 text-sm"
            >
              {t.visit}
            </a>
          ) : (
            <span className="inline-block rounded-full border-[3px] border-dashed border-ink/40 px-4 py-2 text-sm font-bold opacity-60">
              {t.soon}
            </span>
          )}
          {w.githubUrl && (
            <a
              href={w.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-link text-sm font-extrabold underline decoration-2 underline-offset-4"
            >
              {t.code}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { delay, duration: DUR.base, ease: EASE },
        };

  return (
    <section id="work" className="scroll-mt-28 bg-gold/15 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal()}>
          <p className="text-sm font-extrabold tracking-[0.2em] text-chili">{t.workLabel}</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
            {t.workTitleA}
            <span className="marker">{t.workTitleB}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg opacity-80">{t.workSub}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {work.map((w, i) => (
            <motion.div
              key={w.slug}
              {...reveal(0.08 * i)}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <LaunchCard w={w} featured={i === 0} />
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div {...reveal(0.08 * work.length)} className="lg:col-span-2">
            <div className="brut-card dot-grid flex flex-col justify-center bg-gold p-8">
              <h3 className="text-3xl md:text-4xl">{t.nextTitle}</h3>
              <p className="mt-3 max-w-xl text-lg">{t.nextText}</p>
              <div className="mt-6">
                <a href="#contact" className="brut-btn !bg-ink !text-cream">
                  {t.nextBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}