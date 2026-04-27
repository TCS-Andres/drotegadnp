"use client";

import { Dna, Eye, Truck, ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { brand } from "@/lib/brand";

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
      heroImage="/lab-hero.jpg"
      heroImageAlt="Modern laboratory diagnostic testing facility"
      services={services}
      whyChooseTitle="ARCpoint Labs of North Miami Beach"
      whyChooseItems={whyChooseItems}
      whyChooseWebsite={{
        url: "https://www.arcpointlabs.com/north-miami-beach/",
        image: "/lab-hero.jpg",
        imageAlt: "ARCpoint Labs of North Miami Beach diagnostic facility",
        heading: "Visit the ARCpoint Labs Website",
        description:
          "Explore the full menu of lab and diagnostic services, schedule a screening, or learn more about ARCpoint Labs of North Miami Beach.",
        ctaLabel: "Visit ArcPointLabs.com",
      }}
      whyChooseSocial={{
        image: "/portrait.jpg",
        imageAlt: "Dr. Otega Ojukwu, DNP",
        heading: "Stay Connected with ARCpoint Labs",
        description:
          "Follow along on Instagram and LinkedIn for screening events, wellness tips, and behind-the-scenes updates from Dr. Otega and the ARCpoint Labs team.",
        ctas: [
          {
            label: "Follow @arcpointlabsofnmb",
            url: brand.social.arcpointInstagram,
            icon: "instagram",
          },
          {
            label: "Connect on LinkedIn",
            url: brand.social.arcpointLinkedin,
            icon: "linkedin",
          },
        ],
      }}
      crossPillarText="Testing is the first step. See how clinical care and financial protection complete your plan."
      crossPillarLinks={crossPillarLinks}
      disclaimerText="Laboratory testing is provided through ARCpoint Labs of North Miami Beach. Lab results do not diagnose or treat medical conditions. Always consult a qualified healthcare provider for medical advice."
    />
  );
}
