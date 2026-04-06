"use client";

import { Dna, Eye, Truck, ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const services = [
  {
    title: "DNA & Genetic Testing",
    description:
      "Personalized genetic insights for paternity, ancestry, wellness traits, and health predispositions. Helping guide lifestyle choices, prevention strategies, and informed decision-making.",
    icon: Dna,
  },
  {
    title: "Serum Tears Coordination & Ocular Wellness Support",
    description:
      "Facilitation of serum tear therapy for patients with severe dry eye and ocular surface disease. Supporting healing using the body's own natural components.",
    icon: Eye,
  },
  {
    title: "Mobile & On-Site Health Screenings",
    description:
      "Convenient on-location testing for businesses, community events, and organizations. Workforce wellness and community health — made easy.",
    icon: Truck,
  },
  {
    title: "DOT & Non-DOT Drug & Alcohol Testing",
    description:
      "Certified testing for employers and individuals. Federal compliance, workplace safety, fast turnaround, and confidential results.",
    icon: ShieldCheck,
  },
];

const whyChooseItems = [
  "ARCpoint Labs network — trusted, certified, reliable",
  "Direct access to advanced diagnostics",
  "Walk-in and appointment-based testing",
  "Mobile and on-site capabilities for businesses",
  "Quick turnaround and confidential results",
];

const crossPillarLinks = [
  { text: "Health & Clinical", href: "/services/health" },
  { text: "Financial Wellness", href: "/services/financial-wellness" },
];

export default function LabTestingContent() {
  return (
    <ServicePageTemplate
      title="Laboratory & Diagnostic Services"
      subtitle="Advanced testing. Early detection. The clarity you need to take control of your health."
      services={services}
      whyChooseTitle="ARCpoint Labs of North Miami Beach"
      whyChooseItems={whyChooseItems}
      crossPillarText="Testing is the first step. See how clinical care and financial protection complete your plan."
      crossPillarLinks={crossPillarLinks}
      disclaimerText="Laboratory testing is provided through ARCpoint Labs of North Miami Beach. Lab results do not diagnose or treat medical conditions. Always consult a qualified healthcare provider for medical advice."
    />
  );
}
