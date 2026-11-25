"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/components/providers/language-provider";
import { ProjectArt } from "@/components/sections/project-art";
import { work } from "@/data/work";

const ACCENT = {
  gold: "bg-gold",
  leaf: "bg-leaf text-white",
  chili: "bg-chili text-white",
} as const;

export function Work() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-28 bg-gold/15 px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-extrabold tracking-[0.2em] text-chili">
          {t.workLabel}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl md:text-6xl">
          {t.workTitleA}
          <span className="marker">{t.workTitleB}</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{t.workSub}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => {
            return (
              <motion.article
                key={w.slug}
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="brut-card group flex flex-col overflow-hidden"
              >
                {/* preview */}
                <div className="relative border-b-[3px] border-ink bg-cream">
                  {w.image ? (
                    <Image
                      src={w.image}
                      alt={`${w.name[lang]} website preview`}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                      <ProjectArt variant={w.art ?? "app"} name={w.name.en} />
                    </div>
                  )}
                  <span
                    className={`sticker absolute left-3 top-3 text-xs ${ACCENT[w.accent]}`}
                  >
                    {w.type[lang]}
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl">{w.name[lang]}</h3>

                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-extrabold text-chili">{t.problemLabel}</dt>
                      <dd className="mt-0.5 opacity-80">{w.problem[lang]}</dd>
                    </div>
                    <div>
                      <dt className="font-extrabold text-leaf">{t.resultLabel}</dt>
                      <dd className="mt-0.5 opacity-80">{w.result[lang]}</dd>
                    </div>
                  </dl>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {w.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border-2 border-ink bg-cream px-2.5 py-0.5 text-xs font-bold"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                    {w.liveUrl ? (
                      <a
                        href={w.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brut-btn !px-4 !py-2 text-sm"
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
                        className="text-sm font-extrabold underline underline-offset-4"
                      >
                        {t.code}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}

          {/* CTA card */}
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: work.length * 0.1, duration: 0.5, ease: "easeOut" }}
            className="brut-card dot-grid flex flex-col justify-center bg-gold p-8 md:col-span-2 lg:col-span-3"
          >
            <h3 className="text-3xl md:text-4xl">{t.nextTitle}</h3>
            <p className="mt-3 max-w-xl text-lg">{t.nextText}</p>
            <div className="mt-6">
              <a href="#contact" className="brut-btn !bg-ink !text-cream">
                {t.nextBtn}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}