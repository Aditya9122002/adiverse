export type Localized = { en: string; hi: string };

export type WorkItem = {
  slug: string;
  name: Localized;
  type: Localized;
  problem: Localized;
  result: Localized;
  stack: string[];
  liveUrl: string; // "" means no live link yet
  githubUrl: string;
  image?: string; // e.g. "/work/yojanagpt.png" (file goes in /public/work)
  accent: "gold" | "leaf" | "chili";
  art?: "chat" | "app";
  metrics?: { value: number; label: Localized }[];
};

export const work: WorkItem[] = [
  {
    slug: "yojanagpt",
    name: { en: "YojanaGPT", hi: "योजनाGPT" },
    type: { en: "AI assistant", hi: "AI असिस्टेंट" },
    problem: {
      en: "Thousands of government schemes are scattered across portals, mostly in English, so eligible people never find them.",
      hi: "हज़ारों सरकारी योजनाएँ अलग-अलग पोर्टल पर बिखरी हैं, ज़्यादातर अंग्रेज़ी में, इसलिए पात्र लोग उन तक पहुँच नहीं पाते।",
    },
    result: {
      en: "A RAG assistant that answers scheme questions in Indian languages, with eligibility checks, document lists and source links. Open source.",
      hi: "एक RAG असिस्टेंट जो भारतीय भाषाओं में योजनाओं के जवाब देता है: पात्रता जाँच, दस्तावेज़ सूची और स्रोत लिंक के साथ। ओपन सोर्स।",
    },
    stack: ["Python", "FastAPI", "ChromaDB", "Llama 3.3 (Groq)", "Docker"],
    liveUrl: "https://aditya9122002.github.io/yojanagpt/", // verify this works!
    githubUrl: "https://github.com/Aditya9122002/yojanagpt",
    accent: "chili",
    art: "chat",
    metrics: [
      { value: 22, label: { en: "languages", hi: "भाषाएँ" } },
      { value: 4357, label: { en: "schemes indexed", hi: "योजनाएँ" } },
      { value: 69, label: { en: "automated tests", hi: "ऑटोमेटेड टेस्ट" } },
    ],
  },
  {
    slug: "techuncut",
    name: { en: "TechUncut", hi: "TechUncut" },
    type: { en: "Web app", hi: "वेब ऐप" },
    problem: {
      en: "TODO: one line on what problem TechUncut solves.",
      hi: "TODO: TechUncut कौन सी समस्या हल करता है, एक लाइन में।",
    },
    result: {
      en: "TODO: one line on what it does today.",
      hi: "TODO: आज यह क्या करता है, एक लाइन में।",
    },
    stack: ["Next.js", "Vercel"],
    liveUrl: "https://tech-uncut.vercel.app",
    githubUrl: "https://github.com/Aditya9122002/TechUncut",
    accent: "gold",
  },
  {
    slug: "urban-library",
    name: { en: "Urban Library", hi: "Urban Library" },
    type: { en: "Project", hi: "प्रोजेक्ट" },
    problem: {
      en: "TODO: one line on the problem.",
      hi: "TODO: समस्या, एक लाइन में।",
    },
    result: {
      en: "TODO: one line on the outcome.",
      hi: "TODO: नतीजा, एक लाइन में।",
    },
    stack: ["TODO"],
    liveUrl: "",
    githubUrl: "https://github.com/Aditya9122002/Urban-Library",
    accent: "leaf",
  },
];