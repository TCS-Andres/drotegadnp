import type { Metadata } from "next";
import FinancialWellnessContent from "./FinancialWellnessContent";

export const metadata: Metadata = {
  title: "Financial Wellness Services | Dr. Otega Ojukwu, LFP | Income Protection & Wealth Building | South Florida",
  description:
    "Income protection, life insurance strategies, financial planning, and wealth-building education from a Licensed Financial Professional in North Miami Beach.",
  openGraph: {
    title: "Financial Wellness Services | Dr. Otega DNP",
    description:
      "Income protection, life insurance strategies, financial planning, and wealth-building education.",
    url: "https://drotegadnp.com/services/financial-wellness",
  },
  twitter: {
    title: "Financial Wellness Services | Dr. Otega DNP",
    description:
      "Income protection, life insurance strategies, and financial planning from a Licensed Financial Professional.",
  },
  alternates: { canonical: "https://drotegadnp.com/services/financial-wellness" },
};

export default function FinancialWellnessPage() {
  return <FinancialWellnessContent />;
}
