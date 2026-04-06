"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Heart, FlaskConical, TrendingUp, BookOpen } from "lucide-react";
import PreFooterCTA from "@/components/PreFooterCTA";

const credentials = ["DNP", "FNP-C", "PMHNP-BC", "LFP"];

const problemParagraphs = [
  "You visit one provider for your health concerns, another for your mental wellness, and maybe — if you get to it — someone for your finances. None of them talk to each other. None of them see the full picture.",
  "The result? Confusion. Reactive decisions. Missed warning signs. And a constant feeling that something important is falling through the cracks — because it is.",
  "It does not have to be this way.",
];

const pillars = [
  {
    icon: Heart,
    title: "Health & Clinical",
    description:
      "Expert-level primary care and mental health services focused on prevention, clarity, and total well-being. From comprehensive lab interpretation to psychiatric care — your health starts here.",
    href: "/services/health",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    description:
      "Advanced testing for early detection, genetic insights, drug and alcohol compliance, and mobile screenings. Know your numbers before your numbers know you.",
    href: "/services/lab-testing",
  },
  {
    icon: TrendingUp,
    title: "Financial Wellness",
    description:
      "Income protection, wealth-building strategies, and financial literacy education. Secure your family's future with a plan built around your numbers.",
    href: "/services/financial-wellness",
  },
];

const steps = [
  {
    num: "1",
    title: "Know Your Numbers",
    description:
      "Get tested, get assessed, and get informed about the metrics that matter most.",
  },
  {
    num: "2",
    title: "Get Your Plan",
    description:
      "Receive a personalized strategy across health and wealth — tailored to your numbers and your goals.",
  },
  {
    num: "3",
    title: "Build Your Future",
    description:
      "Take confident action toward generational health and wealth — with a trusted expert by your side.",
  },
];

function Hero() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(to bottom, #1A1A1A, #2D2D2D)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="Dr. Otega DNP logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-heading font-bold text-white leading-tight mb-6"
        >
          Know Your Numbers.
          <br />
          Protect Your Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-[#FAF7F2] font-body mb-4 max-w-2xl mx-auto"
        >
          Physical Health. Mental Wellness. Financial Empowerment. One Trusted
          Expert.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-base text-secondary font-semibold font-body mb-10"
        >
          {credentials.map((cred, i) => (
            <span key={cred}>
              {i > 0 && (
                <span className="inline-block mx-2 w-1.5 h-1.5 rounded-full bg-secondary align-middle" />
              )}
              {cred}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
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

function Problem() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[48px] font-heading font-bold text-primary leading-tight mb-12"
        >
          Your Health and Wealth Are Connected — But Nobody Treats Them That Way
        </motion.h2>

        <div className="space-y-6">
          {problemParagraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-lg text-[#2D2D2D] font-body leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section className="bg-surface py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-2xl border-2 border-secondary bg-background flex items-center justify-center">
              <span className="text-text-secondary font-body text-lg">
                Dr. Otega Photo
              </span>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-6">
              Meet Dr. Otega Ojukwu
            </h2>
            <p className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-4">
              Dr. Otega Ojukwu is a Doctor of Nursing Practice, dual
              board-certified Family Nurse Practitioner and Psychiatric Mental
              Health Nurse Practitioner, Licensed Financial Professional,
              published author, and speaker with over 20 years of experience.
            </p>
            <p className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-8">
              She is the only provider in South Florida who integrates physical
              health, mental health, and financial wellness under one brand —
              because she believes you cannot build wealth if your health is
              failing, and you cannot maintain health if financial stress is
              overwhelming you.
            </p>
            <Link
              href="/about"
              className="text-secondary font-semibold font-body text-lg hover:text-[#b8911f] transition-colors"
            >
              Learn More About Dr. Otega &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ThreeInOneModel() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          One Expert. Three Pillars. Total Well-Being.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-surface rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-base text-[#2D2D2D] font-body leading-relaxed mb-6">
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className="text-secondary font-semibold font-body hover:text-[#b8911f] transition-colors"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowYourNumbers() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-16"
        >
          Your Path to Clarity
        </motion.h2>

        {/* Timeline */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line - desktop */}
          <div
            className="hidden md:block absolute top-7 left-[calc(16.667%+28px)] right-[calc(16.667%+28px)] h-0.5 bg-secondary/30"
            aria-hidden="true"
          />
          {/* Connecting line - mobile */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-secondary/30"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 md:mb-6">
                <span className="text-primary font-heading font-bold text-xl">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-[#2D2D2D] font-body leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustStats = [
  { value: "20+", label: "Years Experience" },
  { value: "DNP", label: "Doctor of Nursing Practice" },
  { value: "2x", label: "Board-Certified NP" },
  { value: "LFP", label: "Licensed Financial Professional" },
  { value: "Author", label: "Published Author & Speaker" },
];

function AnimatedStat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setDisplayed(true), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay]);

  return (
    <div ref={ref} className="text-center px-4 py-6 md:py-0">
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={displayed ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1"
      >
        {displayed ? value : "\u00A0"}
      </motion.p>
      <p className="text-sm text-[#FAF7F2]/70 font-body">{label}</p>
    </div>
  );
}

function CredentialsTrustBar() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${
                i < trustStats.length - 1
                  ? "md:border-r md:border-secondary/20"
                  : ""
              }`}
            >
              <AnimatedStat
                value={stat.value}
                label={stat.label}
                delay={i * 0.15}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-12"
        >
          Clarity With a Plan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-6"
        >
          Imagine knowing exactly where you stand — with your health and your
          finances. No more confusion. No more guessing. No more waiting until
          something goes wrong.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-10"
        >
          That is what working with Dr. Otega delivers. You walk away with a
          clear understanding of your numbers, a personalized strategy to improve
          them, and the confidence to take control of your future.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-secondary font-body italic leading-relaxed"
        >
          We do not just provide services — we help you understand your numbers,
          take control, and build a healthier, wealthier future.
        </motion.p>

        {/* TODO: Add testimonials section when available */}
      </div>
    </section>
  );
}

const bookPlaceholders = [
  { title: "Book One", status: "Available on Amazon" },
  { title: "Book Two", status: "Coming Soon" },
  { title: "Book Three", status: "Coming Soon" },
];

function ThoughtLeadershipPreview() {
  return (
    <section className="bg-surface py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-6"
        >
          Educating. Inspiring. Transforming.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed text-center max-w-2xl mx-auto mb-14"
        >
          Dr. Otega is a published author, speaker, and educator on a mission to
          help individuals and families understand their health and wealth
          numbers.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {bookPlaceholders.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="aspect-[3/4] bg-background rounded-xl border-2 border-secondary/40 flex flex-col items-center justify-center p-8"
            >
              <BookOpen className="w-12 h-12 text-secondary mb-4" />
              <p className="font-heading font-bold text-primary text-lg mb-2">
                {book.title}
              </p>
              <p className="text-sm text-secondary font-body font-medium">
                {book.status}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/thought-leadership"
            className="text-secondary font-semibold font-body text-lg hover:text-[#b8911f] transition-colors"
          >
            Explore Dr. Otega&apos;s Work &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Guide />
      <ThreeInOneModel />
      <KnowYourNumbers />
      <CredentialsTrustBar />
      <Transformation />
      <ThoughtLeadershipPreview />
      <PreFooterCTA />
    </>
  );
}
