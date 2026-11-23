"use client";

import { useLang } from "@/components/providers/language-provider";
import { LanguageToggle } from "@/components/shared/language-toggle";

export default function Home() {
  const { t } = useLang();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <LanguageToggle />
      <h1 className="text-5xl font-bold">{t.heroTitle}</h1>
      <p className="text-lg">{t.heroSub}</p>
      <button className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground">
        {t.cta}
      </button>
    </main>
  );
}