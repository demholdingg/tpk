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
    "Teknika Pesona Kahayan (TPK) is Indonesia's specialist in Material Handling and Heavy Equipment solutions. We provide premium rental services for forklifts, cranes, and port equipment with 24/7 maintenance support and certified operators.",
  keywords: [
    "Teknika Pesona Kahayan",
    "TPK",
    "material handling equipment",
    "heavy equipment",
    "forklift rental indonesia",
    "crane services",
    "port handling machinery",
    "heavy duty equipment maintenance",
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
    url: "https://www.pesonakahayan.co.id/", // Ensure trailing slash for consistency
    siteName: "Teknika Pesona Kahayan",
    title: "Teknika Pesona Kahayan – Excellence in Engineering",
    description: "Integrated Engineering Solutions for the Future",
    images: [
      {
        url: "https://www.pesonakahayan.co.id/images/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Teknika Pesona Kahayan - Heavy Equipment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknika Pesona Kahayan – Excellence in Engineering",
    description: "Integrated Engineering Solutions for the Future",
    images: ["https://www.pesonakahayan.co.id/images/og-image.jpg"], // Replace with your actual Twitter image
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
        {/* JSON-LD for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.pesonakahayan.co.id/#organization",
                  name: "Teknika Pesona Kahayan",
                  url: "https://www.pesonakahayan.co.id/",
                  logo: "https://www.pesonakahayan.co.id/images/logoteknika.png", // Replace with your actual logo URL
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+62-812-3456-7890", // Replace with your actual phone number
                    contactType: "customer service",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.pesonakahayan.co.id/#website",
                  url: "https://www.pesonakahayan.co.id/",
                  name: "Teknika Pesona Kahayan",
                  publisher: {
                    "@id": "https://www.pesonakahayan.co.id/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
