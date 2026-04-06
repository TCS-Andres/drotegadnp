import type { Metadata } from "next";
import ThoughtLeadershipContent from "./ThoughtLeadershipContent";

export const metadata: Metadata = {
  title: "Books, Speaking & Education | Dr. Otega Ojukwu, DNP, LFP | Inform. Empower. Uplift.",
  description:
    "Explore Dr. Otega's published books, speaking engagements, and educational workshops on health, wealth, and empowerment. Book Dr. Otega for your next event.",
  openGraph: {
    title: "Books, Speaking & Education | Dr. Otega DNP",
    description:
      "Explore Dr. Otega's published books, speaking engagements, and educational workshops.",
    url: "https://drotegadnp.com/thought-leadership",
  },
  twitter: {
    title: "Books, Speaking & Education | Dr. Otega DNP",
    description:
      "Published books, speaking engagements, and educational workshops on health, wealth, and empowerment.",
  },
  alternates: { canonical: "https://drotegadnp.com/thought-leadership" },
};

export default function ThoughtLeadershipPage() {
  return <ThoughtLeadershipContent />;
}
