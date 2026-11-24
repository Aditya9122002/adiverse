export type Localized = { en: string; hi: string };

export type WorkItem = {
  slug: string;
  name: Localized;
  type: Localized;
  problem: Localized;
  result: Localized;
  liveUrl: string; // "#" or "" means "link coming soon"
  image?: string; // e.g. "/work/shop-1.jpg" (put the file in /public/work)
  accent: "gold" | "leaf" | "chili";
};

// TODO: replace every placeholder below with your real projects.
export const work: WorkItem[] = [
  {
    slug: "shop-1",
    name: { en: "Shop name 1", hi: "दुकान का नाम 1" },
    type: { en: "Kirana store", hi: "किराना दुकान" },
    problem: {
      en: "Customers could not find the shop online.",
      hi: "ग्राहक दुकान को ऑनलाइन नहीं ढूँढ पाते थे।",
    },
    result: {
      en: "A fast site with products, timings and WhatsApp ordering.",
      hi: "तेज़ साइट: सामान, टाइमिंग और व्हाट्सऐप ऑर्डर के साथ।",
    },
    liveUrl: "#", // ← your live link
    accent: "gold",
  },
  {
    slug: "shop-2",
    name: { en: "Shop name 2", hi: "दुकान का नाम 2" },
    type: { en: "Salon", hi: "सैलून" },
    problem: {
      en: "Bookings came only by phone calls.",
      hi: "बुकिंग सिर्फ़ फ़ोन कॉल से आती थी।",
    },
    result: {
      en: "An online booking page with services and prices.",
      hi: "सर्विस और रेट के साथ ऑनलाइन बुकिंग पेज।",
    },
    liveUrl: "#",
    accent: "leaf",
  },
  {
    slug: "shop-3",
    name: { en: "Shop name 3", hi: "दुकान का नाम 3" },
    type: { en: "Cafe", hi: "कैफ़े" },
    problem: {
      en: "The menu lived only on paper.",
      hi: "मेन्यू सिर्फ़ काग़ज़ पर था।",
    },
    result: {
      en: "A digital menu with a QR code and order button.",
      hi: "QR कोड और ऑर्डर बटन के साथ डिजिटल मेन्यू।",
    },
    liveUrl: "#",
    accent: "chili",
  },
];