import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SplashScreen } from "@/components/ui/SplashScreen";

// ── Fonts ──────────────────────────────────────────────────────────────────────
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// ── Metadata ───────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Teknika Pesona Kahayan – Excellence in Engineering",
    template: "%s | Teknika Pesona Kahayan",
  },
  description:
    "Teknika Pesona Kahayan is a trusted integrated engineering solutions provider, delivering precision-engineered infrastructure across Indonesia. Specializing in Mechanical Electrical, Network Telecommunication, and Heavy Equipment, we are committed to innovation, sustainability, and safety.",
  keywords: [
    "engineering",
    "infrastructure",
    "mechanical electrical",
    "network telecommunication",
    "heavy equipment",
    "fiber optic",
    "genset",
    "forklift",
    "Indonesia",
    "precision engineering",
    "sustainability",
    "safety",
    "innovation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pesonakahayan.co.id",
    siteName: "Teknika Pesona Kahayan",
    title: "Teknika Pesona Kahayan – Excellence in Engineering",
    description: "Integrated Engineering Solutions for the Future",
  },
};

// ── Layout ─────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-white text-gray-900">
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
