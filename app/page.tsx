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
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4 overflow-hidden mesh-gradient-hero"
    >
      {/* Floating decorative shapes */}
      <div className="floating-shape w-64 h-64 bg-secondary animate-float-slow" style={{ top: '10%', right: '10%', opacity: 0.06 }} />
      <div className="floating-shape w-48 h-48 border-2 border-secondary animate-float-medium" style={{ bottom: '15%', left: '5%', opacity: 0.08, background: 'transparent' }} />
      <div className="floating-shape w-32 h-32 bg-accent animate-float-fast" style={{ top: '60%', right: '25%', opacity: 0.05 }} />
      <div className="floating-shape w-20 h-20 border border-secondary animate-float-medium" style={{ top: '25%', left: '15%', opacity: 0.1, background: 'transparent' }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(201, 162, 39, 0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-heading font-bold text-white leading-tight mb-6"
        >
          Know Your Numbers.
          <br />
          Protect Your Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-[#FAF7F2] font-body mb-4 max-w-2xl mx-auto"
        >
          Physical Health. Mental Wellness. Financial Empowerment. One Trusted
          Expert.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
          transition={{ duration: 0.6, delay: 1.4 }}
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
    <section className="relative bg-background py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(26,26,26,0.04) 0%, transparent 100%)' }} />
      {/* Decorative gold blob */}
      <div className="floating-shape w-72 h-72 bg-secondary animate-float-slow" style={{ top: '20%', right: '-5%', opacity: 0.03 }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
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
  /* Guide section with glass card effect on text */
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
            <Image
              src="/portrait.jpg"
              alt="Dr. Otega Ojukwu, DNP, LFP"
              width={500}
              height={667}
              className="w-full max-w-md mx-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-8 md:p-10"
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
    <section className="relative bg-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="floating-shape w-96 h-96 bg-secondary animate-float-slow" style={{ top: '-10%', left: '-5%', opacity: 0.03 }} />
      <div className="floating-shape w-64 h-64 bg-accent animate-float-medium" style={{ bottom: '5%', right: '-3%', opacity: 0.03 }} />
      <div className="relative z-10 max-w-6xl mx-auto">
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
              className="glass-card shimmer-hover rounded-xl p-8 shadow-glass hover:shadow-gold-glow transition-all duration-300"
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
          {/* Connecting line - desktop (gradient) */}
          <div
            className="hidden md:block absolute top-7 left-[calc(16.667%+28px)] right-[calc(16.667%+28px)] h-0.5"
            style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.1), rgba(201,162,39,0.5), rgba(201,162,39,0.1))' }}
            aria-hidden="true"
          />
          {/* Connecting line - mobile (gradient) */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-7 w-0.5"
            style={{ background: 'linear-gradient(180deg, rgba(201,162,39,0.1), rgba(201,162,39,0.5), rgba(201,162,39,0.1))' }}
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
              <div className="relative z-10 w-14 h-14 rounded-full bg-secondary shadow-gold-glow flex items-center justify-center flex-shrink-0 md:mb-6">
                <span className="text-primary font-heading font-bold text-xl">
                  {step.num}
                </span>
              </div>
              <div className="glass-card rounded-xl p-4 md:p-0 md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none">
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
        className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1 gold-glow"
      >
        {displayed ? value : "\u00A0"}
      </motion.p>
      <p className="text-sm text-[#FAF7F2]/70 font-body">{label}</p>
    </div>
  );
}

function CredentialsTrustBar() {
  return (
    <section className="relative bg-primary py-16 px-4 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative"
            >
              {i < trustStats.length - 1 && (
                <div className="hidden md:block gradient-separator-v absolute right-0 top-2 bottom-2" />
              )}
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
  /* Transformation section */
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
              className="aspect-[3/4] glass-card gradient-border rounded-xl flex flex-col items-center justify-center p-8 shimmer-hover"
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
