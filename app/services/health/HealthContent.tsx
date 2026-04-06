"use client";

import {
  Microscope,
  FileText,
  HeartPulse,
  Brain,
  Zap,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const services = [
  {
    title: "Comprehensive Preventive Lab Testing & Early Detection",
    description:
      "Advanced lab panels designed to catch health risks before symptoms start. Metabolic, cardiovascular, hormonal, and infectious disease markers — because the best time to act is before something goes wrong.",
    icon: Microscope,
  },
  {
    title: "Personalized Lab Result Interpretation & Consultations",
    description:
      "One-on-one consultations where your results are explained in plain language. No jargon, no confusion — just clarity and an actionable plan to improve your health.",
    icon: FileText,
  },
  {
    title: "Primary Care & Chronic Disease Management",
    description:
      "Ongoing care for hypertension, diabetes, high cholesterol, and more. Focused on stabilization, prevention, and long-term wellness — not just prescriptions.",
    icon: HeartPulse,
  },
  {
    title: "Mental Health Evaluation & Medication Management",
    description:
      "Comprehensive psychiatric assessments, treatment plans, and medication management for anxiety, depression, and other conditions. Empathetic, non-judgmental, whole-person care.",
    icon: Brain,
  },
  {
    title: "Hormone & Wellness Optimization",
    description:
      "Specialized testing and guidance for men's and women's hormonal health. Improve energy, mood, metabolism, and overall quality of life.",
    icon: Zap,
  },
];

const whyChooseItems = [
  "Dual board-certified (FNP-C + PMHNP-BC)",
  "Owns her own lab for faster testing and interpretation",
  "20+ years of clinical experience",
  "Treats the whole person — body and mind",
];

const crossPillarLinks = [
  { text: "Lab & Diagnostics", href: "/services/lab-testing" },
  { text: "Financial Wellness", href: "/services/financial-wellness" },
];

export default function HealthContent() {
  return (
    <ServicePageTemplate
      title="Health & Clinical Services"
      subtitle="Expert-level primary care and mental health services — focused on prevention, clarity, and total well-being."
      services={services}
      whyChooseTitle="Dr. Otega for Health & Clinical"
      whyChooseItems={whyChooseItems}
      crossPillarText="Your health does not exist in a vacuum. See how lab diagnostics and financial wellness complete the picture."
      crossPillarLinks={crossPillarLinks}
      disclaimerText="Clinical services are provided through Complete Health Inc. under appropriate licensing and regulation. Content is for educational purposes only and does not establish a provider-patient relationship without a formal agreement."
    />
  );
}
