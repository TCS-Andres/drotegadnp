"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Heart, TrendingUp, BookOpen, Users, Shield } from "lucide-react";
import PreFooterCTA from "@/components/PreFooterCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const credentials = [
  { label: "Doctor of Nursing Practice (DNP)", icon: Award },
  { label: "Family Nurse Practitioner — Board Certified (FNP-C)", icon: Heart },
  { label: "Psychiatric Mental Health NP — Board Certified (PMHNP-BC)", icon: Shield },
  { label: "Licensed Financial Professional (LFP)", icon: TrendingUp },
  { label: "Published Author & Speaker", icon: BookOpen },
  { label: "20+ Years of Clinical Experience", icon: Users },
];

const milestones = [
  {
    title: "Clinical Excellence",
    description:
      "Over two decades of hands-on experience in primary care, psychiatric mental health, and preventive medicine. Dr. Otega has cared for thousands of patients across diverse communities.",
  },
  {
    title: "Lab Ownership",
    description:
      "As owner of ARCpoint Labs of North Miami Beach, Dr. Otega brings direct access to advanced diagnostic testing — from DNA and genetic testing to DOT compliance screenings.",
  },
  {
    title: "Financial Empowerment",
    description:
      "As a Licensed Financial Professional, Dr. Otega bridges the gap between health and wealth — offering income protection, financial needs analysis, and literacy education.",
  },
  {
    title: "Thought Leadership",
    description:
      "A published author, keynote speaker, and community educator, Dr. Otega is on a mission to inform, empower, and uplift individuals and families across South Florida and beyond.",
  },
];

function Hero() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          {...fadeUp}
          className="text-4xl sm:text-5xl md:text-[56px] font-heading font-bold text-primary leading-tight mb-6"
        >
          About Dr. Otega Ojukwu
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-[#2D2D2D] font-body max-w-2xl mx-auto"
        >
          Doctor of Nursing Practice. Dual Board-Certified NP. Licensed
          Financial Professional. Published Author. Speaker. One mission.
        </motion.p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/portrait.jpg"
              alt="Dr. Otega Ojukwu, DNP, LFP"
              width={500}
              height={667}
              className="w-full max-w-md mx-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-6">
              The Woman Behind the Mission
            </h2>
            <p className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-4">
              Dr. Otega Ojukwu is a Doctor of Nursing Practice, dual
              board-certified Family Nurse Practitioner and Psychiatric Mental
              Health Nurse Practitioner, Licensed Financial Professional,
              published author, and speaker with over 20 years of experience.
            </p>
            <p className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-4">
              She is the only provider in South Florida who integrates physical
              health, mental health, and financial wellness under one brand —
              because she believes you cannot build wealth if your health is
              failing, and you cannot maintain health if financial stress is
              overwhelming you.
            </p>
            <p className="text-lg text-[#2D2D2D] font-body leading-relaxed">
              Her approach is rooted in a simple truth: your health numbers and
              your financial numbers are deeply connected. When you understand
              both, you can take control of your future — and build something
              that lasts for generations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="bg-surface py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          Credentials & Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                <cred.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm font-body font-medium text-primary">
                {cred.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          A Career Built on Purpose
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-surface rounded-xl p-8"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-base text-[#2D2D2D] font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section
      className="py-20 md:py-28 px-4"
      style={{ background: "#1A1A1A" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-secondary leading-tight mb-8"
        >
          The Philosophy
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-[#FAF7F2] font-body leading-relaxed mb-8"
        >
          Dr. Otega does not believe in treating symptoms in isolation. She
          believes in treating the whole person — body, mind, and financial
          future. Her integrated model was born from the understanding that
          health and wealth are two sides of the same coin.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-secondary font-body italic"
        >
          &ldquo;Inform. Empower. Uplift. That is not just a tagline — it is
          the journey every person deserves.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

function ConnectCTA() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-6"
        >
          Ready to Work Together?
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-10"
        >
          Whether you need clinical care, lab testing, financial guidance, or a
          speaker for your next event — Dr. Otega is here to help you know your
          numbers and protect your future.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Book an Appointment
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-primary transition-all duration-200 text-lg"
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
      <Story />
      <Credentials />
      <Journey />
      <Philosophy />
      <ConnectCTA />
      <PreFooterCTA />
    </>
  );
}
