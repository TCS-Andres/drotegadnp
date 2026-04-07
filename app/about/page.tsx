import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title:
    "About Dr. Otega Ojukwu, DNP, LFP | Health + Wealth Expert | North Miami Beach",
  description:
    "Learn about Dr. Otega Ojukwu — Doctor of Nursing Practice, dual board-certified NP, and Licensed Financial Professional helping families know their numbers.",
  openGraph: {
    title: "About Dr. Otega Ojukwu, DNP, LFP | Health + Wealth Expert",
    description:
      "Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional helping families know their numbers.",
    url: "https://drotegadnp.com/about",
  },
  twitter: {
    title: "About Dr. Otega Ojukwu, DNP, LFP | Health + Wealth Expert",
    description:
      "Doctor of Nursing Practice, dual board-certified NP, Licensed Financial Professional.",
  },
  alternates: { canonical: "https://drotegadnp.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
