import type { Metadata } from "next";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "About Dr. Otega Ojukwu | DNP, FNP-C, PMHNP-BC, LFP",
  description:
    "Learn about Dr. Otega Ojukwu — Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional, published author, and speaker.",
  openGraph: {
    title: "About Dr. Otega Ojukwu | DNP, FNP-C, PMHNP-BC, LFP",
    description:
      "Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional, published author, and speaker.",
    url: "https://drotegadnp.com/about",
  },
  twitter: {
    title: "About Dr. Otega Ojukwu | DNP, FNP-C, PMHNP-BC, LFP",
    description:
      "Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional.",
  },
  alternates: { canonical: "https://drotegadnp.com/about" },
};

export default function About() {
  return (
    <>
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About</h1>
        <p className="text-text-secondary text-lg">About page content coming soon.</p>
      </div>
      <PreFooterCTA />
    </>
  );
}
