import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { LanguageProvider } from "@/components/providers/language-provider";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600", "800"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adiverse | Websites, chatbots and AI for local shops",
  description:
    "Adiverse helps local shops get online with fast websites, WhatsApp ordering and AI chatbots, in English and Hindi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${hindi.variable} antialiased`}
      >
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}