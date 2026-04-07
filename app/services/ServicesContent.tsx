"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PreFooterCTA from "@/components/PreFooterCTA";
import {
  Heart,
  FlaskConical,
  TrendingUp,
  Users,
  Stethoscope,
  Building2,
  Megaphone,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const pillars = [
  {
    icon: Heart,
    title: "Health & Clinical",
    description:
      "Expert-level primary care and mental health services focused on prevention, clarity, and total well-being.",
    services: [
      "Preventive lab testing",
      "Lab result interpretation",
      "Primary care",
      "Mental health evaluation",
      "Hormone optimization",
    ],
    href: "/services/health",
    cta: "Explore Health & Clinical",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    description:
      "Advanced testing for early detection, genetic insights, and mobile screenings — know your numbers before your numbers know you.",
    services: [
      "DNA & genetic testing",
      "Serum tears coordination",
      "Mobile screenings",
      "DOT/Non-DOT testing",
    ],
    href: "/services/lab-testing",
    cta: "Explore Lab & Diagnostics",
  },
  {
    icon: TrendingUp,
    title: "Financial Wellness",
    description:
      "Income protection, wealth-building strategies, and financial literacy education to secure your family's future.",
    services: [
      "Income protection",
      "Financial needs analysis",
      "Financial literacy coaching",
    ],
    href: "/services/financial-wellness",
    cta: "Explore Financial Wellness",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Individuals & Families",
    description:
      "Proactive health testing, mental wellness, and financial education for your household.",
  },
  {
    icon: Stethoscope,
    title: "Patients",
    description:
      "Clinical and mental health services through Complete Health Inc.",
  },
  {
    icon: Building2,
    title: "Businesses & Employers",
    description:
      "DOT/Non-DOT testing, corporate wellness, mobile on-site screenings.",
  },
  {
    icon: Megaphone,
    title: "Community Organizations",
    description:
      "Speaking, workshops, and financial literacy education.",
  },
];

function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle warm radial gradient */}
      <div className="absolute inset-0 pointer-events-none warm-radial-glow" />
      {/* Floating decorative shapes */}
      <div className="floating-shape w-72 h-72 border border-secondary/20 animate-float-slow" style={{ top: '-5%', right: '-3%', opacity: 0.05, background: 'transparent' }} />
      <div className="floating-shape w-48 h-48 bg-secondary animate-float-medium" style={{ bottom: '5%', left: '-2%', opacity: 0.03 }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          {...fadeUp}
          className="text-4xl sm:text-5xl md:text-[56px] font-heading font-bold text-primary leading-tight mb-6"
        >
          Integrated Health + Wealth Services
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-[#2D2D2D] font-body mb-10 max-w-2xl mx-auto"
        >
          Most people manage their health, mental wellness, and finances in
          silos. Dr. Otega brings them together.
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PillarCards() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          One Expert. Three Pillars.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-surface rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-base text-[#2D2D2D] font-body leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {pillar.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2.5 text-[#2D2D2D] font-body text-sm"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.href}
                className="text-secondary font-semibold font-body hover:text-[#b8911f] transition-colors mt-auto"
              >
                {pillar.cta} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyIntegratedCare() {
  return (
    <section className="bg-surface py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-10"
        >
          The Full Picture, Not Fragments
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-6"
        >
          We are the only practice in South Florida that combines a Doctor of
          Nursing Practice, dual board-certified NP, and Licensed Financial
          Professional under one brand — delivering physical health, mental
          health, and financial wellness in one integrated experience.
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed"
        >
          While others specialize in one area, Dr. Otega provides a fully
          integrated approach — helping you understand your health, protect your
          income, and build wealth all in one place.
        </motion.p>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 pointer-events-none subtle-gradient-shift" />
      {/* Faint floating shape */}
      <div className="floating-shape w-64 h-64 border border-secondary/15 animate-float-slow" style={{ bottom: '5%', right: '-2%', opacity: 0.04, background: 'transparent' }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          Built for You
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                <audience.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-[#2D2D2D] font-body leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesContent() {
  return (
    <>
      <Hero />
      <PillarCards />
      <WhyIntegratedCare />
      <WhoWeServe />
      <PreFooterCTA />
    </>
  );
}
