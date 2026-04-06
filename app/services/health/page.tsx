import type { Metadata } from "next";
import HealthContent from "./HealthContent";

export const metadata: Metadata = {
  title: "Health & Clinical Services | Dr. Otega Ojukwu, DNP | Primary Care & Mental Health | North Miami Beach",
  description:
    "Comprehensive primary care, mental health evaluation, medication management, and hormone optimization from a dual board-certified nurse practitioner in North Miami Beach.",
  openGraph: {
    title: "Health & Clinical Services | Dr. Otega DNP",
    description:
      "Comprehensive primary care, mental health evaluation, medication management, and hormone optimization in North Miami Beach.",
    url: "https://drotegadnp.com/services/health",
  },
  twitter: {
    title: "Health & Clinical Services | Dr. Otega DNP",
    description:
      "Comprehensive primary care, mental health evaluation, medication management, and hormone optimization.",
  },
  alternates: { canonical: "https://drotegadnp.com/services/health" },
};

export default function HealthPage() {
  return <HealthContent />;
}
