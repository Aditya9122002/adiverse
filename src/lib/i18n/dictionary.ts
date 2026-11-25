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
  code: string;
  soon: string;
  nextTitle: string;
  nextText: string;
  nextBtn: string;
  procLabel: string;
  procTitleA: string;
  procTitleB: string;
  steps: { title: string; text: string }[];
  faqLabel: string;
  faqTitleA: string;
  faqTitleB: string;
  faq: { q: string; a: string }[];
  heroHi: string;
  heroName: string;
  heroHiEnd: string;
  buildTitle: string;
  live: string;
  building: string;
  contactLabel: string;
  contactTitleA: string;
  contactTitleB: string;
  contactSub: string;
  fName: string;
  fNeed: string;
  needs: string[];
  fMsg: string;
  fMsgHint: string;
  fSend: string;
  or: string;
  waBtn: string;
  mailBtn: string;
  soonContact: string;
  footerTag: string;
  footerLinks: string;
  footerTouch: string;
  footerRights: string;
};

export const dictionary: Record<Lang, Dictionary> = {
  en: {
    navServices: "Services",
    navWork: "Work",
    navProcess: "How it works",
    navFaq: "FAQ",
    navCta: "Get a quote",
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
    code: "Code on GitHub ↗",
    soon: "Link coming soon",
    nextTitle: "Your shop could be next.",
    nextText: "Tell me what you sell and where. I'll reply with a free quote within 24 hours.",
    nextBtn: "Get a free quote →",

    procLabel: "HOW IT WORKS",
    procTitleA: "Four simple steps, ",
    procTitleB: "no tech talk.",
    steps: [
      { title: "Tell me", text: "Share what you do and what you need, by WhatsApp, email or the quote form." },
      { title: "Get a quote", text: "I reply with a clear plan and price before any work starts." },
      { title: "I build", text: "You see progress along the way and tell me what to change." },
      { title: "Launch and handover", text: "Your project goes live, and I show you how to use it. You own everything." },
    ],
    faqLabel: "FAQ",
    faqTitleA: "Questions people ",
    faqTitleB: "ask me.",
    faq: [
      { q: "Who do you work with?", a: "Shops, startups, creators and small teams. If you have an idea or a business that needs a website, a chatbot or some automation, we can talk." },
      { q: "How much does it cost?", a: "It depends on what you need. Tell me about your project and I'll send a clear quote before we start." },
      { q: "How long does it take?", a: "Small sites can be ready within days. Bigger projects take longer. I'll give you a timeline in the quote." },
      { q: "Do I need to know anything technical?", a: "No. I explain everything in plain words, in English or Hindi, and show you how to use what I build." },
      { q: "Who owns the website or chatbot?", a: "You do. Domain, code and accounts are set up in your name." },
      { q: "Can you build something with AI for my business?", a: "Yes. For example, a chatbot that answers customer questions or takes orders on WhatsApp. I can also build custom AI tools for your team." },
    ],
    heroHi: "Hey, I'm",
    heroName: "Adi",
    heroHiEnd: ".",
    heroBadge: "AI Engineer · Builder · Product Thinker",
    heroA: "I build AI and websites that",
    heroB: "solve real problems.",
    buildTitle: "Currently building",
    live: "Live",
    building: "Building",

    contactLabel: "LET'S TALK",
    contactTitleA: "Tell me about your ",
    contactTitleB: "project.",
    contactSub: "A few lines are enough. I'll reply with a free quote within 24 hours.",
    fName: "Your name",
    fNeed: "What do you need?",
    needs: ["A website", "An AI chatbot", "Automation", "Not sure yet"],
    fMsg: "About your project",
    fMsgHint: "What do you do, and what would you like built?",
    fSend: "Send on WhatsApp →",
    or: "or",
    waBtn: "Chat on WhatsApp",
    mailBtn: "Send an email",
    soonContact: "Contact details coming soon",
    footerTag: "Websites and AI that work for you.",
    footerLinks: "Explore",
    footerTouch: "Get in touch",
    footerRights: "All rights reserved.",
  },
  hi: {
    navServices: "सेवाएँ",
    navWork: "काम",
    navProcess: "कैसे होता है",
    navFaq: "सवाल-जवाब",
    navCta: "कोट पाएँ",
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
    code: "GitHub पर कोड ↗",
    soon: "लिंक जल्द आ रहा है",
    nextTitle: "अगली दुकान आपकी हो सकती है।",
    nextText: "बताइए आप क्या बेचते हैं और कहाँ। 24 घंटे में फ्री कोट मिलेगा।",
    nextBtn: "फ्री कोट पाएँ →",

    procLabel: "कैसे होता है",
    procTitleA: "चार आसान कदम, ",
    procTitleB: "बिना टेक की भाषा के।",
    steps: [
      { title: "मुझे बताइए", text: "आप क्या करते हैं और क्या चाहिए, व्हाट्सऐप, ईमेल या कोट फ़ॉर्म से बताइए।" },
      { title: "कोट पाइए", text: "काम शुरू होने से पहले मैं साफ़ प्लान और रेट बताता हूँ।" },
      { title: "मैं बनाता हूँ", text: "आप बीच-बीच में प्रगति देखते हैं और बदलाव बताते हैं।" },
      { title: "लॉन्च और हैंडओवर", text: "आपका प्रोजेक्ट लाइव होता है और मैं चलाना सिखाता हूँ। सब कुछ आपका अपना।" },
    ],
    faqLabel: "सवाल-जवाब",
    faqTitleA: "लोग मुझसे ",
    faqTitleB: "ये पूछते हैं।",
    faq: [
      { q: "आप किनके साथ काम करते हैं?", a: "दुकानों, स्टार्टअप, क्रिएटर और छोटी टीमों के साथ। अगर आपके पास आइडिया या बिज़नेस है जिसे वेबसाइट, चैटबॉट या ऑटोमेशन चाहिए, तो बात करते हैं।" },
      { q: "खर्चा कितना आता है?", a: "यह आपकी ज़रूरत पर निर्भर है। अपने प्रोजेक्ट के बारे में बताइए, काम शुरू होने से पहले मैं साफ़ कोट भेज दूँगा।" },
      { q: "कितना समय लगता है?", a: "छोटी साइट कुछ दिनों में तैयार हो सकती है। बड़े प्रोजेक्ट में ज़्यादा समय लगता है। कोट में मैं टाइमलाइन बता दूँगा।" },
      { q: "क्या मुझे टेक्निकल जानकारी चाहिए?", a: "नहीं। मैं सब कुछ आसान भाषा में, हिंदी या अंग्रेज़ी में समझाता हूँ और चलाना भी सिखाता हूँ।" },
      { q: "वेबसाइट या चैटबॉट का मालिक कौन होगा?", a: "आप। डोमेन, कोड और अकाउंट आपके नाम पर बनते हैं।" },
      { q: "क्या आप मेरे बिज़नेस के लिए AI बना सकते हैं?", a: "हाँ। जैसे ऐसा चैटबॉट जो ग्राहकों के सवालों के जवाब दे या व्हाट्सऐप पर ऑर्डर ले। टीम के लिए कस्टम AI टूल भी बना सकता हूँ।" },
    ],

    heroHi: "नमस्ते, मैं",
    heroName: "आदि",
    heroHiEnd: " हूँ।",
    heroBadge: "AI इंजीनियर · बिल्डर · प्रोडक्ट थिंकर",
    heroA: "मैं AI और वेबसाइट बनाता हूँ जो",
    heroB: "असली समस्याएँ सुलझाएँ।",
    buildTitle: "अभी बना रहा हूँ",
    live: "लाइव",
    building: "बन रहा है",

    contactLabel: "बात करें",
    contactTitleA: "अपने ",
    contactTitleB: "प्रोजेक्ट के बारे में बताइए।",
    contactSub: "कुछ लाइनें काफ़ी हैं। 24 घंटे में फ्री कोट के साथ जवाब दूँगा।",
    fName: "आपका नाम",
    fNeed: "आपको क्या चाहिए?",
    needs: ["वेबसाइट", "AI चैटबॉट", "ऑटोमेशन", "अभी पक्का नहीं"],
    fMsg: "अपने प्रोजेक्ट के बारे में",
    fMsgHint: "आप क्या करते हैं और क्या बनवाना चाहते हैं?",
    fSend: "व्हाट्सऐप पर भेजें →",
    or: "या",
    waBtn: "व्हाट्सऐप पर चैट करें",
    mailBtn: "ईमेल भेजें",
    soonContact: "संपर्क की जानकारी जल्द आ रही है",
    footerTag: "वेबसाइट और AI जो आपके लिए काम करें।",
    footerLinks: "देखें",
    footerTouch: "संपर्क करें",
    footerRights: "सर्वाधिकार सुरक्षित।",
    
  },
  
  
};