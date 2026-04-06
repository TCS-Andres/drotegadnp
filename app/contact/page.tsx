import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment | Dr. Otega Ojukwu, DNP, LFP | North Miami Beach",
  description:
    "Book an appointment with Dr. Otega Ojukwu for health, lab testing, or financial wellness services. Call 305-978-0288 or schedule online today.",
  openGraph: {
    title: "Contact & Book an Appointment | Dr. Otega DNP",
    description:
      "Book an appointment for health, lab testing, or financial wellness services. Call 305-978-0288.",
    url: "https://drotegadnp.com/contact",
  },
  twitter: {
    title: "Contact & Book an Appointment | Dr. Otega DNP",
    description:
      "Book an appointment for health, lab testing, or financial wellness. Call 305-978-0288.",
  },
  alternates: { canonical: "https://drotegadnp.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
