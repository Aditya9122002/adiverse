"use client";

import { useLang } from "@/components/providers/language-provider";
import { site, hasWhatsapp, hasEmail } from "@/data/site";

export function Footer() {
  const { t } = useLang();

  const links = [
    { href: "#services", label: t.navServices },
    { href: "#work", label: t.navWork },
    { href: "#process", label: t.navProcess },
    { href: "#faq", label: t.navFaq },
  ];

  return (
    <footer className="px-4 pb-8 md:px-6">
      <div className="dot-grid-light mx-auto max-w-6xl rounded-[2rem] bg-ink p-8 text-cream md:p-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border-[3px] border-cream bg-gold font-display text-lg font-extrabold text-ink">
                A
              </span>
              <span className="font-display text-xl font-extrabold">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs opacity-80">{t.footerTag}</p>
          </div>

          <div>
            <h3 className="font-sans text-base font-extrabold tracking-normal">
              {t.footerLinks}
            </h3>
            <ul className="mt-4 space-y-2 opacity-90">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-base font-extrabold tracking-normal">
              {t.footerTouch}
            </h3>
            <ul className="mt-4 space-y-2 opacity-90">
              {hasEmail && (
                <li>
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </li>
              )}
              {hasWhatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {site.github && (
                <li>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                </li>
              )}
              {site.linkedin && (
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/20 pt-6 text-sm opacity-70">
          © {new Date().getFullYear()} {site.name}. {t.footerRights} Made in India.
        </p>
      </div>
    </footer>
  );
}