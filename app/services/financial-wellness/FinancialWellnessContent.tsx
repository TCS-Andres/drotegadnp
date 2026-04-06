"use client";

import { Shield, BarChart3, GraduationCap } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const services = [
  {
    title: "Income Protection & Life Insurance Strategies",
    description:
      "Customized solutions including term life, IULs, and annuities — designed to protect your income, build cash value, and secure generational wealth. Not one-size-fits-all. Tailored to your numbers.",
    icon: Shield,
  },
  {
    title: "Financial Needs Analysis & Wealth-Building Planning",
    description:
      "A structured review of your assets, liabilities, and goals to create a personalized roadmap for financial stability, growth, and long-term wealth.",
    icon: BarChart3,
  },
  {
    title: "Financial Literacy Coaching, Speaking & Workshops",
    description:
      "Educational sessions that simplify complex financial concepts. Empowering individuals, families, and groups to make informed life decisions. Available for organizations, community events, and corporate programs.",
    icon: GraduationCap,
  },
];

const whyChooseItems = [
  "Licensed Financial Professional",
  "Education-first approach — no pushy sales, no jargon",
  "Unique perspective from someone who understands health and wealth as connected",
  "Generational wealth is not just a phrase — it is the plan",
];

const crossPillarLinks = [
  { text: "Health & Clinical", href: "/services/health" },
  { text: "Lab & Diagnostics", href: "/services/lab-testing" },
];

export default function FinancialWellnessContent() {
  return (
    <ServicePageTemplate
      title="Financial Wellness Services"
      subtitle="Protect your income. Build your wealth. Secure your family's future."
      services={services}
      whyChooseTitle="Dr. Otega for Financial Wellness"
      whyChooseItems={whyChooseItems}
      crossPillarText="You cannot build wealth if your health is failing. See how clinical care and diagnostic testing protect your foundation."
      crossPillarLinks={crossPillarLinks}
      disclaimerText="Financial services are offered by Dr. Otega Ojukwu as a Licensed Financial Professional. Services include income protection strategies, life insurance, annuities, and financial education. No legal or tax advice is provided. Consult a qualified professional for legal or tax matters."
    />
  );
}
