import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Dr. Otega Ojukwu | DNP, FNP-C, PMHNP-BC, LFP",
  description:
    "Learn about Dr. Otega Ojukwu — Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional, published author, and speaker with over 20 years of experience.",
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

export default function AboutPage() {
  return <AboutContent />;
}
