export type Lang = "en" | "hi";

export type Dictionary = {
  heroTitle: string;
  heroSub: string;
  cta: string;
};

export const dictionary: Record<Lang, Dictionary> = {
  en: {
    heroTitle: "Your dukaan, now online.",
    heroSub: "Websites, chatbots and AI for local shops.",
    cta: "Get a free quote",
  },
  hi: {
    heroTitle: "आपकी दुकान, अब ऑनलाइन।",
    heroSub: "लोकल दुकानों के लिए वेबसाइट, चैटबॉट और AI।",
    cta: "फ्री कोट पाएँ",
  },
};