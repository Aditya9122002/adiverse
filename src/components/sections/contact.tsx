"use client";

import { useState } from "react";
import { useLang } from "@/components/providers/language-provider";
import { site, hasWhatsapp, hasEmail } from "@/data/site";

export function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [need, setNeed] = useState(0);
  const [msg, setMsg] = useState("");

  const message = `Hi, I'm ${name || "a visitor"}. I need: ${t.needs[need]}.\n\n${msg}`;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasWhatsapp) return;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const input =
    "w-full rounded-xl border-[3px] border-ink bg-white px-4 py-3 text-base font-medium outline-none focus:shadow-[3px_3px_0_var(--ink)]";

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-24 md:px-6">
      <div className="brut-card dot-grid mx-auto max-w-6xl bg-gold p-6 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* left: copy + direct buttons */}
          <div>
            <p className="text-sm font-extrabold tracking-[0.2em]">{t.contactLabel}</p>
            <h2 className="mt-3 text-4xl md:text-6xl">
              {t.contactTitleA}
              <span className="underline decoration-ink decoration-[6px] underline-offset-[6px]">
                {t.contactTitleB}
              </span>
            </h2>
            <p className="mt-5 max-w-md text-lg">{t.contactSub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {hasWhatsapp && (
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brut-btn !bg-leaf !text-white"
                >
                  {t.waBtn}
                </a>
              )}
              {hasEmail && (
                <a href={`mailto:${site.email}`} className="brut-btn !bg-white">
                  {t.mailBtn}
                </a>
              )}
              {!hasWhatsapp && !hasEmail && (
                <span className="rounded-full border-[3px] border-dashed border-ink/50 px-4 py-2 font-bold">
                  {t.soonContact}
                </span>
              )}
            </div>
          </div>

          {/* right: form */}
          <form onSubmit={onSubmit} className="brut-card space-y-5 p-5 md:p-7">
            <div>
              <label htmlFor="c-name" className="mb-1.5 block font-extrabold">
                {t.fName}
              </label>
              <input
                id="c-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className={input}
              />
            </div>

            <fieldset>
              <legend className="mb-1.5 font-extrabold">{t.fNeed}</legend>
              <div className="flex flex-wrap gap-2">
                {t.needs.map((n, i) => (
                  <label key={n} className="cursor-pointer">
                    <input
                      type="radio"
                      name="need"
                      checked={need === i}
                      onChange={() => setNeed(i)}
                      className="peer sr-only"
                    />
                    <span className="inline-block rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-sm font-bold peer-checked:bg-ink peer-checked:text-cream peer-focus-visible:ring-4 peer-focus-visible:ring-gold">
                      {n}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="c-msg" className="mb-1.5 block font-extrabold">
                {t.fMsg}
              </label>
              <textarea
                id="c-msg"
                required
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder={t.fMsgHint}
                className={input}
              />
            </div>

            <button
              type="submit"
              disabled={!hasWhatsapp}
              className="brut-btn w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t.fSend}
            </button>

            {hasEmail && (
              <p className="text-center text-sm font-bold">
                {t.or}{" "}
                <a
                  className="underline underline-offset-4"
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(message)}`}
                >
                  {t.mailBtn}
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}