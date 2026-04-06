import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Otega Ojukwu, DNP, LFP",
  description:
    "Privacy policy for drotegadnp.com covering health information (HIPAA), financial data, and website usage.",
  alternates: { canonical: "https://drotegadnp.com/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect personal information that you voluntarily provide when using our services, including your name, email address, phone number, mailing address, and any information submitted through our contact forms or appointment requests.",
      "We may also collect health-related information as part of clinical services and financial information as part of financial wellness services. This information is collected only with your explicit consent and handled in accordance with applicable laws and regulations.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Your personal information is used to provide the services you have requested, communicate with you regarding appointments and inquiries, improve our services, and comply with legal obligations.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be shared with trusted service providers who assist us in operating our website and delivering services, subject to confidentiality agreements.",
    ],
  },
  {
    title: "HIPAA Notice",
    content: [
      "Health information collected through our clinical services is handled in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We maintain appropriate administrative, technical, and physical safeguards to protect the privacy and security of your protected health information (PHI).",
      "You have the right to request access to your health records, request corrections, and receive an accounting of disclosures. For a complete Notice of Privacy Practices, please contact our office directly.",
    ],
  },
  {
    title: "Financial Information Confidentiality",
    content:
      "Financial information collected as part of our financial wellness services is treated with strict confidentiality. This information is used solely for the purpose of providing financial education, needs analysis, and income protection strategies. We adhere to all applicable privacy regulations governing financial services.",
  },
  {
    title: "Cookies and Website Data",
    content:
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand visitor behavior. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our website may contain links to third-party websites or integrate with third-party services such as scheduling platforms, payment processors, and analytics tools. These third parties have their own privacy policies, and we are not responsible for their data practices. We encourage you to review the privacy policies of any third-party services you interact with.",
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise any of these rights, please contact us using the information provided below.",
      "If you are a Florida resident, you may have additional rights under state law. Please contact us for more information about your specific rights.",
    ],
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at connect@drotegadnp.com or call 305-978-0288. You may also visit us at 657 NE 167th St, North Miami Beach, FL.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      lastUpdated="April 2026"
      sections={sections}
    />
  );
}
