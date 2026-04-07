"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Brain,
  TrendingUp,
  Clock,
  Sparkles,
  BookOpen,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Heart,
  FlaskConical,
} from "lucide-react";
import PreFooterCTA from "@/components/PreFooterCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const credentials = [
  {
    abbr: "DNP",
    icon: GraduationCap,
    name: "Doctor of Nursing Practice",
    description: "The highest level of clinical nursing education.",
  },
  {
    abbr: "FNP-C",
    icon: HeartPulse,
    name: "Board-Certified Family Nurse Practitioner",
    description: "Primary and preventive care across the lifespan.",
  },
  {
    abbr: "PMHNP-BC",
    icon: Brain,
    name: "Board-Certified Psychiatric Mental Health NP",
    description:
      "Mental health evaluation, treatment, and medication management.",
  },
  {
    abbr: "LFP",
    icon: TrendingUp,
    name: "Licensed Financial Professional",
    description:
      "Income protection, life insurance, annuities, and wealth-building strategies.",
  },
  {
    abbr: "20+",
    icon: Clock,
    name: "Years Combined Experience",
    description: "Over two decades of clinical and real-world expertise.",
  },
];

const values = [
  {
    title: "Prevention Over Reaction",
    description:
      "The best care prevents disease and financial crisis before they start.",
    icon: ShieldCheck,
  },
  {
    title: "Education as Empowerment",
    description:
      "When people understand their numbers, they can take control.",
    icon: BookOpen,
  },
  {
    title: "Holistic Integration",
    description:
      "Health, mental health, and finances are interconnected — not separate.",
    icon: Layers,
  },
  {
    title: "Accessibility & Equity",
    description:
      "Expert-level care should not be reserved for the privileged.",
    icon: Users,
  },
  {
    title: "Integrity & Trust",
    description:
      "Every service delivered within its licensed and regulated scope.",
    icon: ShieldCheck,
  },
  {
    title: "Transformation Over Transaction",
    description:
      "Every interaction is an opportunity to inform, empower, and uplift.",
    icon: Sparkles,
  },
  {
    title: "Excellence & Authority",
    description: "Evidence-based, expert-level care — not opinions.",
    icon: Zap,
  },
];

const pillars = [
  {
    name: "Complete Health Inc.",
    label: "Health & Clinical",
    icon: Heart,
    href: "/services/health",
  },
  {
    name: "ARCpoint Labs",
    label: "Lab & Diagnostics",
    icon: FlaskConical,
    href: "/services/lab-testing",
  },
  {
    name: "Wealth & Health Consulting",
    label: "Financial Wellness",
    icon: TrendingUp,
    href: "/services/financial-wellness",
  },
];

function Hero() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          {...fadeUp}
          className="text-4xl sm:text-5xl md:text-[56px] font-heading font-bold text-primary leading-tight mb-8"
        >
          The Person Behind the Mission
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-sm mx-auto mb-10"
        >
          <Image
            src="/portrait.jpg"
            alt="Dr. Otega Ojukwu, DNP, LFP"
            width={500}
            height={667}
            className="w-full rounded-2xl object-cover"
            priority
          />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#2D2D2D] font-body leading-relaxed max-w-3xl mx-auto"
        >
          Dr. Otega Ojukwu is more than a healthcare provider or financial
          professional. She is a mission-driven builder, educator, and advocate
          who created an entirely new category of care — one that sees the whole
          person, not just a diagnosis or a spreadsheet.
        </motion.p>
      </div>
    </section>
  );
}

function HerStory() {
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(201, 162, 39, 0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 20%, rgba(107, 28, 42, 0.03) 0%, transparent 50%)' }} />
      {/* Faint floating accent */}
      <div className="floating-shape w-56 h-56 border border-secondary/15 animate-float-slow" style={{ top: '10%', right: '-3%', opacity: 0.04, background: 'transparent' }} />
      <div className="relative z-10 max-w-[800px] mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-accent leading-tight mb-10"
        >
          Health and Wealth Are Inseparable
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-6"
        >
          Dr. Otega operates with a transformation-over-transaction mindset. She
          does not see herself as simply a healthcare provider or a financial
          advisor — she is a life strategist who helps people gain clarity,
          protection, and generational wealth.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-6"
        >
          Her philosophy is built on a conviction: people cannot build wealth if
          their health is failing, and they cannot maintain health if financial
          stress is overwhelming them. This integrated worldview is what makes
          her brand unique and her mission urgent.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed"
        >
          She believes deeply in serving underserved communities with the same
          level of expert care that premium clients receive. Her work is as much
          a mission as it is a business.
        </motion.p>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="relative bg-surface py-20 md:py-28 px-4 overflow-hidden">
      {/* Very subtle floating shapes */}
      <div className="floating-shape w-72 h-72 bg-secondary animate-float-slow" style={{ top: '-5%', left: '-4%', opacity: 0.03 }} />
      <div className="floating-shape w-40 h-40 border border-accent/20 animate-float-medium" style={{ bottom: '8%', right: '-2%', opacity: 0.04, background: 'transparent' }} />
      <div className="floating-shape w-20 h-20 bg-secondary animate-float-fast" style={{ top: '50%', right: '8%', opacity: 0.025 }} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          Expertise You Can Trust
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.abbr}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card shimmer-hover rounded-xl p-6 shadow-glass"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                <cred.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl font-heading font-bold text-primary mb-1">
                {cred.abbr}
              </p>
              <p className="text-sm font-body font-medium text-primary mb-2">
                {cred.name}
              </p>
              <p className="text-sm text-text-secondary font-body">
                {cred.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          What Drives Dr. Otega
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:-translate-y-1 hover:shadow-gold-glow transition-all duration-300"
              style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(180deg, #C9A227, #E8D48B, #C9A227) 1' }}
            >
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-[#2D2D2D] font-body leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegratedVision() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden mesh-gradient-accent">
      {/* Floating shapes */}
      <div className="floating-shape w-56 h-56 border border-secondary animate-float-slow" style={{ top: '5%', right: '5%', opacity: 0.08, background: 'transparent' }} />
      <div className="floating-shape w-40 h-40 bg-secondary animate-float-medium" style={{ bottom: '10%', left: '3%', opacity: 0.05 }} />
      <div className="floating-shape w-24 h-24 border border-secondary/40 animate-float-fast" style={{ top: '50%', left: '20%', opacity: 0.07, background: 'transparent' }} />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-white leading-tight mb-6"
        >
          One Mission. Three Pillars.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#FAF7F2]/80 font-body mb-14 max-w-2xl mx-auto"
        >
          Dr. Otega Ojukwu operates across three entities — each serving a
          distinct pillar of her integrated health and wealth model.
        </motion.p>

        {/* Three pillars connected */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-0 items-center mb-14">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < pillars.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-secondary/30 -translate-y-1/2 z-0"
                  aria-hidden="true"
                />
              )}

              <Link href={pillar.href} className="relative z-10 block group">
                <div className="bg-[#FAF7F2]/10 backdrop-blur-sm border border-secondary/30 rounded-2xl p-8 mx-2 hover:bg-[#FAF7F2]/15 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-xl font-heading font-bold text-[#FAF7F2] mb-1">
                    {pillar.name}
                  </p>
                  <p className="text-sm text-secondary font-body font-medium">
                    {pillar.label}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Center label */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-secondary font-heading font-bold text-lg mb-8"
        >
          Dr. Otega Ojukwu, DNP, LFP
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.6 }}>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <>
      <Hero />
      <HerStory />
      <Credentials />
      <Values />
      <IntegratedVision />
      <PreFooterCTA />
    </>
  );
}
