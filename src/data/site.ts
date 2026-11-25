export const site = {
  name: "Adiverse",
  // Digits only, with country code and no "+" or spaces. Example: "919876543210"
  whatsapp: "9556433244", // ← your WhatsApp number
  email: "adi1999india@gmail.com", // ← your email
  github: "https://github.com/Aditya9122002",
  linkedin: "", // ← optional, your LinkedIn URL
};

export const hasWhatsapp = /^\d{10,15}$/.test(site.whatsapp);
export const hasEmail = site.email.includes("@");