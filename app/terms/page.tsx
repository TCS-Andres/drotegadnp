import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dr. Otega Ojukwu, DNP, LFP",
  description: "Terms and conditions for using drotegadnp.com.",
  alternates: { canonical: "https://drotegadnp.com/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website (drotegadnp.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website. We reserve the right to modify these terms at any time, and your continued use of the site constitutes acceptance of any changes.",
  },
  {
    title: "Use of This Website",
    content: [
      "This website is provided for informational and educational purposes. You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the site.",
      "You may not use this website to transmit harmful, threatening, or unlawful content, attempt to gain unauthorized access to our systems, or interfere with the proper functioning of the website.",
    ],
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website — including text, graphics, logos, images, and software — is the property of Dr. Otega Ojukwu and her affiliated entities and is protected by United States copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written consent.",
  },
  {
    title: "Services and Professional Relationships",
    content:
      "The information provided on this website does not constitute medical advice, mental health advice, financial advice, or any form of professional consultation. Use of this website does not establish a provider-patient or professional-client relationship. Professional relationships are established only through formal agreements and in-person or telehealth consultations.",
  },
  {
    title: "Limitation of Liability",
    content:
      "This website and its content are provided on an \"as is\" basis without warranties of any kind, either express or implied. Dr. Otega Ojukwu and her affiliated entities shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida. Any disputes arising from the use of this website shall be resolved in the courts of Miami-Dade County, Florida.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting to this website. We encourage you to review these terms periodically to stay informed of any updates.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at connect@drotegadnp.com or call 305-978-0288. You may also visit us at 657 NE 167th St, North Miami Beach, FL.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms & Conditions"
      lastUpdated="April 2026"
      sections={sections}
    />
  );
}
