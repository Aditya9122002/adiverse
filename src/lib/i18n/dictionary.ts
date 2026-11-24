export type Lang = "en" | "hi";

export type Dictionary = {
  navServices: string;
  navWork: string;
  navProcess: string;
  navFaq: string;
  navCta: string;
  heroBadge: string;
  heroA: string;
  heroB: string;
  heroSub: string;
  cta: string;
  ctaWork: string;
  chipLang: string;
  chipWhatsApp: string;
  chipFast: string;
  before: string;
  after: string;
  missed: string;
  newOrder: string;
  bubble: string;
  marquee: string[];
  svcLabel: string;
  svcTitleA: string;
  svcTitleB: string;
  svcSub: string;
  svc: { icon: string; title: string; text: string; points: string[] }[];
  workLabel: string;
  workTitleA: string;
  workTitleB: string;
  workSub: string;
  problemLabel: string;
  resultLabel: string;
  visit: string;
  soon: string;
  nextTitle: string;
  nextText: string;
  nextBtn: string;
};

export const dictionary: Record<Lang, Dictionary> = {
  en: {
    navServices: "Services",
    navWork: "Work",
    navProcess: "How it works",
    navFaq: "FAQ",
    navCta: "Get a quote",
    heroBadge: "Now booking local shops",
    heroA: "Your dukaan, now",
    heroB: "online.",
    heroSub:
      "Websites, WhatsApp ordering and AI chatbots for local shops. Built fast, explained in plain words.",
    cta: "Get a free quote",
    ctaWork: "See my work",
    chipLang: "English + हिंदी",
    chipWhatsApp: "WhatsApp orders",
    chipFast: "Live in days",
    before: "Before",
    after: "After",
    missed: "12 missed calls",
    newOrder: "New order received",
    bubble: "Namaste! Tell me about your shop.",
    
    marquee: ["Websites", "WhatsApp ordering", "AI chatbots", "Automation", "Domains and email", "UPI payments"],
    svcLabel: "WHAT I DO",
    svcTitleA: "Everything tech, so you can",
    svcTitleB: "focus on the shop.",
    svcSub: "Pick one thing, or let me set up the whole package. You get something that works, and you know how to use it.",
    svc: [
      {
        icon: "🌐",
        title: "Websites",
        text: "A fast, mobile-first site that shows your products, timings and location.",
        points: ["Ready in days, not months", "Hindi and English", "You own everything"],
      },
      {
        icon: "💬",
        title: "AI chatbots",
        text: "A bot that answers customer questions and takes orders on WhatsApp, day and night.",
        points: ["Answers in Hindi and English", "Never misses a message", "Trained on your shop's details"],
      },
      {
        icon: "⚙️",
        title: "Automation",
        text: "Small tools that save hours: order sheets, reminders, billing, stock alerts.",
        points: ["Less manual work", "Fewer mistakes", "Set up once, runs daily"],
      },
    ],
    workLabel: "MY WORK",
    workTitleA: "Sites I've built, ",
    workTitleB: "live and clickable.",
    workSub: "Real shops, real websites. Tap any card to open the live site.",
    problemLabel: "Problem",
    resultLabel: "Result",
    visit: "Visit live site ↗",
    soon: "Link coming soon",
    nextTitle: "Your shop could be next.",
    nextText: "Tell me what you sell and where. I'll reply with a free quote within 24 hours.",
    nextBtn: "Get a free quote →",
  },
  hi: {
    navServices: "सेवाएँ",
    navWork: "काम",
    navProcess: "कैसे होता है",
    navFaq: "सवाल-जवाब",
    navCta: "कोट पाएँ",
    heroBadge: "लोकल दुकानों के लिए बुकिंग चालू",
    heroA: "आपकी दुकान, अब",
    heroB: "ऑनलाइन।",
    heroSub:
      "लोकल दुकानों के लिए वेबसाइट, व्हाट्सऐप ऑर्डर और AI चैटबॉट। जल्दी बनता है, आसान भाषा में समझाया जाता है।",
    cta: "फ्री कोट पाएँ",
    ctaWork: "मेरा काम देखें",
    chipLang: "English + हिंदी",
    chipWhatsApp: "व्हाट्सऐप ऑर्डर",
    chipFast: "कुछ ही दिनों में लाइव",
    before: "पहले",
    after: "बाद में",
    missed: "12 मिस्ड कॉल",
    newOrder: "नया ऑर्डर आया",
    bubble: "नमस्ते! अपनी दुकान के बारे में बताइए।",

    marquee: ["वेबसाइट", "व्हाट्सऐप ऑर्डर", "AI चैटबॉट", "ऑटोमेशन", "डोमेन और ईमेल", "UPI पेमेंट"],
    svcLabel: "मैं क्या करता हूँ",
    svcTitleA: "टेक का सारा काम मेरा, ताकि आप",
    svcTitleB: "दुकान पर ध्यान दें।",
    svcSub: "एक चीज़ चुनें, या पूरा पैकेज बनवाएँ। जो मिलेगा वो काम करेगा, और आपको चलाना भी आएगा।",
    svc: [
      {
        icon: "🌐",
        title: "वेबसाइट",
        text: "तेज़, मोबाइल-फ्रेंडली साइट जो आपके सामान, टाइमिंग और लोकेशन दिखाए।",
        points: ["महीनों नहीं, दिनों में तैयार", "हिंदी और अंग्रेज़ी", "सब कुछ आपका अपना"],
      },
      {
        icon: "💬",
        title: "AI चैटबॉट",
        text: "ऐसा बॉट जो ग्राहकों के सवालों के जवाब दे और व्हाट्सऐप पर ऑर्डर ले, दिन-रात।",
        points: ["हिंदी और अंग्रेज़ी में जवाब", "कोई मैसेज नहीं छूटता", "आपकी दुकान की जानकारी से तैयार"],
      },
      {
        icon: "⚙️",
        title: "ऑटोमेशन",
        text: "छोटे टूल जो घंटे बचाएँ: ऑर्डर शीट, रिमाइंडर, बिलिंग, स्टॉक अलर्ट।",
        points: ["कम हाथ का काम", "कम गलतियाँ", "एक बार सेट, रोज़ चले"],
      },
    ],

    workLabel: "मेरा काम",
    workTitleA: "मेरी बनाई साइटें, ",
    workTitleB: "लाइव और क्लिक करने लायक।",
    workSub: "असली दुकानें, असली वेबसाइट। किसी भी कार्ड पर टैप करके लाइव साइट खोलें।",
    problemLabel: "समस्या",
    resultLabel: "नतीजा",
    visit: "लाइव साइट देखें ↗",
    soon: "लिंक जल्द आ रहा है",
    nextTitle: "अगली दुकान आपकी हो सकती है।",
    nextText: "बताइए आप क्या बेचते हैं और कहाँ। 24 घंटे में फ्री कोट मिलेगा।",
    nextBtn: "फ्री कोट पाएँ →",

    
    
  },
  
  
};