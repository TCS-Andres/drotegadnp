import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Important Disclaimers | Dr. Otega Ojukwu, DNP, LFP",
  description:
    "Legal disclaimers covering health, lab, financial, and general services provided by Dr. Otega Ojukwu.",
  alternates: { canonical: "https://drotegadnp.com/disclaimers" },
};

const sections = [
  {
    title: "1. General Information Disclaimer",
    content:
      "The content on this website is provided for educational and informational purposes only. It is not intended to serve as professional advice of any kind. Use of this website does not establish a provider-client, provider-patient, or professional relationship of any type without a formal, signed agreement.",
  },
  {
    title: "2. Medical & Mental Health Disclaimer",
    content:
      "Clinical services, including primary care and psychiatric mental health services, are provided through Complete Health Inc. under appropriate licensing and regulation. Information on this website is not a substitute for professional medical or mental health advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions. Never disregard professional medical advice or delay seeking treatment because of something you have read on this website.",
  },
  {
    title: "3. Laboratory Services Disclaimer",
    content:
      "Laboratory and diagnostic testing is provided through ARCpoint Labs of North Miami Beach. Lab results are intended for informational purposes and do not diagnose, treat, or cure any medical condition. Always consult a qualified healthcare provider for interpretation of lab results and medical advice. Testing availability, turnaround times, and pricing may vary.",
  },
  {
    title: "4. Financial Services Disclaimer",
    content:
      "Financial services are offered by Dr. Otega Ojukwu as a Licensed Financial Professional. Services include income protection strategies, life insurance, annuities, and financial education. Dr. Otega does not provide legal advice, tax advice, or investment advisory services. Consult a qualified attorney, CPA, or registered investment advisor for legal, tax, or investment matters.",
  },
  {
    title: "5. No Guarantees Disclaimer",
    content:
      "Results may vary by individual. No guarantees are made regarding specific health outcomes, earnings, financial returns, or any other results from using our services or following the information provided on this website. Individual outcomes depend on a variety of factors unique to each person.",
  },
  {
    title: "6. Dual Roles / Multiple Entities Disclosure",
    content:
      "Dr. Otega Ojukwu operates under multiple entities, including Complete Health Inc. (clinical services), ARCpoint Labs of North Miami Beach (laboratory services), and her role as a Licensed Financial Professional (financial wellness services). Each entity is governed by separate professional standards, licensing requirements, and regulatory bodies. Services provided under each entity are distinct and independent.",
  },
  {
    title: "7. Payment & Voluntary Services Disclaimer",
    content:
      "Fees may apply for clinical, laboratory, and financial services. Specific fees and payment terms will be communicated prior to service delivery. Participation in educational workshops, speaking engagements, and financial literacy sessions is voluntary unless otherwise agreed upon in a formal contract or engagement agreement.",
  },
  {
    title: "8. Privacy & HIPAA Notice",
    content:
      "Health information collected through clinical services is handled in accordance with the Health Insurance Portability and Accountability Act (HIPAA). Financial information is handled with strict confidentiality in accordance with applicable privacy laws. For our complete Privacy Policy, please visit our Privacy Policy page.",
  },
  {
    title: "9. Emergency Disclaimer",
    content:
      "For medical or mental health emergencies, call 911 or visit the nearest emergency room immediately. This website is not a substitute for emergency medical care. If you are experiencing a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988.",
  },
  {
    title: "10. External Links Disclaimer",
    content:
      "This website may contain links to third-party websites, products, or services. These links are provided for your convenience and informational purposes only. Dr. Otega Ojukwu is not responsible for the content, accuracy, privacy practices, or data policies of any external websites. Inclusion of a link does not imply endorsement or affiliation.",
  },
];

export default function DisclaimersPage() {
  return (
    <LegalPageTemplate
      title="Important Disclaimers"
      lastUpdated="April 2026"
      sections={sections}
    />
  );
}
