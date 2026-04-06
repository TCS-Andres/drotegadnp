import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Dr. Otega Ojukwu, DNP, LFP | Health + Wealth Services North Miami Beach",
  description:
    "Explore Dr. Otega's integrated services — preventive health care, lab testing, mental health, and financial wellness. One expert, three pillars, total well-being.",
  openGraph: {
    title: "Integrated Health + Wealth Services | Dr. Otega DNP",
    description:
      "Explore Dr. Otega's integrated services — preventive health care, lab testing, mental health, and financial wellness.",
    url: "https://drotegadnp.com/services",
  },
  twitter: {
    title: "Integrated Health + Wealth Services | Dr. Otega DNP",
    description:
      "Explore Dr. Otega's integrated services — preventive health care, lab testing, mental health, and financial wellness.",
  },
  alternates: { canonical: "https://drotegadnp.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
