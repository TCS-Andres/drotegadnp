import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import Preloader from "@/components/Preloader";
import Script from "next/script";
import { CalendlyScripts } from "@/components/Calendly";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://drotegadnp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Otega Ojukwu, DNP, LFP | Health + Wealth | North Miami Beach",
    template: "%s | Dr. Otega DNP",
  },
  description:
    "Inform. Empower. Uplift. Integrated health, mental wellness, and financial empowerment from Dr. Otega Ojukwu — DNP, FNP-C, PMHNP-BC, LFP in North Miami Beach, FL.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dr. Otega DNP",
    title: "Dr. Otega Ojukwu, DNP, LFP | Health + Wealth | North Miami Beach",
    description:
      "Inform. Empower. Uplift. Integrated health, mental wellness, and financial empowerment from Dr. Otega Ojukwu in North Miami Beach, FL.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dr. Otega Ojukwu, DNP, LFP — Inform. Empower. Uplift." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Otega Ojukwu, DNP, LFP | Health + Wealth",
    description:
      "Inform. Empower. Uplift. Integrated health, mental wellness, and financial empowerment.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Dr. Otega Ojukwu, DNP, LFP",
      description:
        "Integrated health, mental wellness, and financial empowerment services in North Miami Beach, FL.",
      url: siteUrl,
      telephone: "305-978-0288",
      email: "connect@drotegadnp.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "657 NE 167th St",
        addressLocality: "North Miami Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: ["#", "#", "#"],
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#medical`,
      name: "Complete Health Inc.",
      description:
        "Primary care, mental health evaluation, and clinical services by Dr. Otega Ojukwu, DNP.",
      url: `${siteUrl}/services/health`,
      parentOrganization: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dr. Otega Ojukwu",
      jobTitle: "Doctor of Nursing Practice, Licensed Financial Professional",
      honorificPrefix: "Dr.",
      honorificSuffix: "DNP, FNP-C, PMHNP-BC, LFP",
      url: siteUrl,
      worksFor: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-body antialiased bg-background text-text-primary`}
      >
        <Preloader />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyBar />
        <CalendlyScripts />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
