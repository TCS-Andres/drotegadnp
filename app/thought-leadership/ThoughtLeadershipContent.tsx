"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PreFooterCTA from "@/components/PreFooterCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const speakingTopics = [
  "Integrated Health + Wealth Strategies",
  "Prevention and Early Detection",
  "Know Your Numbers — Health & Financial Metrics",
  "Building Generational Wealth",
  "Empowerment Through Education",
];

function Hero() {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          {...fadeUp}
          className="text-4xl sm:text-5xl md:text-[56px] font-heading font-bold text-primary leading-tight mb-6"
        >
          Inform. Empower. Uplift.
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-[#2D2D2D] font-body mb-10 max-w-2xl mx-auto"
        >
          Dr. Otega does not just practice health and wealth — she teaches it.
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Book Dr. Otega to Speak
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Books() {
  const books = [
    {
      title: "What Is Your Net Worth?",
      subtitle: "A Practical Guide to Financial Health, Protection, and Retirement Readiness",
      description:
        "A serious work on financial clarity, structural stability, and long-term wealth positioning. Dr. Otega presents a clear, methodical approach to understanding and improving your financial condition — moving you from financial activity to financial stability.",
      image: "/book-net-worth.jpg",
      url: "https://www.amazon.com/dp/B0GW2JGVK4",
    },
    {
      title: "The Insurance Producer's Book of Business",
      subtitle: "A Professional System for Tracking Insured Clients and Policy Owners",
      description:
        "A working system for serious producers, advisors, and agency builders. This professional tracking system gives you a clear, structured way to document, manage, and grow your insured clients and policy owners with precision.",
      image: "/book-insurance-producer.jpg",
      url: "https://www.amazon.com/dp/B0GV9SM833",
    },
    {
      title: "The Networking Professional's Planner — Quarter 3",
      subtitle: "A Daily Execution System for Pipeline Control, Follow-Up, and Predictable Production",
      description:
        "A precision execution system for professionals who refuse to let summer slow down their business. Build unstoppable Q4 momentum with daily execution pages, pipeline frameworks, and strategic follow-up systems.",
      image: "/book-networking-planner.jpg",
      url: "https://www.amazon.com/dp/B0GTDJ5WHR",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-14"
        >
          Knowledge You Can Keep
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card gradient-border rounded-xl flex flex-col overflow-hidden shimmer-hover"
            >
              <div className="relative w-full aspect-[3/4] bg-[#F5F0E8]">
                <Image
                  src={book.image}
                  alt={`Cover of ${book.title}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-primary text-lg mb-1 leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-text-secondary font-body italic mb-3">
                  {book.subtitle}
                </p>
                <p className="text-sm text-[#2D2D2D] font-body leading-relaxed mb-6 flex-1">
                  {book.description}
                </p>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-sm"
                >
                  Buy Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  return (
    <section className="bg-surface py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-10"
        >
          Bringing the Mission to the Stage
        </motion.h2>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden mb-10"
        >
          <Image
            src="/speaking-hero.jpg"
            alt="Dr. Otega speaking at a professional conference"
            width={1200}
            height={675}
            className="w-full h-56 sm:h-72 md:h-96 object-cover object-center"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed text-center mb-10"
        >
          Dr. Otega is available for keynotes, panel discussions, corporate
          wellness presentations, community events, and financial literacy
          workshops.
        </motion.p>

        <div className="space-y-4 mb-12">
          {speakingTopics.map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
              <p className="text-lg text-[#2D2D2D] font-body">{topic}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Inquire About Speaking
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

function Workshops() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-10"
        >
          Empowering Communities, One Room at a Time
        </motion.h2>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden mb-10"
        >
          <Image
            src="/workshop-hero.jpg"
            alt="Dr. Otega leading a community health and wellness workshop"
            width={1200}
            height={675}
            className="w-full h-56 sm:h-72 md:h-96 object-cover object-center"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-10"
        >
          Whether it is a corporate wellness lunch-and-learn, a community health
          fair, or a financial literacy workshop for families, Dr. Otega brings
          clarity, energy, and actionable education to every room she enters.
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Request a Workshop
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

function Movement() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 80%, rgba(107,28,42,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,162,39,0.08) 0%, transparent 50%), #1A1A1A' }}
    >
      {/* Floating decorative shapes */}
      <div className="floating-shape w-44 h-44 border border-secondary animate-float-slow" style={{ top: '10%', left: '5%', opacity: 0.07, background: 'transparent' }} />
      <div className="floating-shape w-28 h-28 bg-accent animate-float-medium" style={{ bottom: '15%', right: '10%', opacity: 0.06 }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-secondary leading-tight mb-8 gold-glow"
        >
          More Than a Brand. A Movement.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-[#FAF7F2] font-body leading-relaxed mb-10 max-w-[700px] mx-auto"
        >
          Inform. Empower. Uplift. is not a tagline — it is the three-stage
          journey every person experiences when they work with Dr. Otega. First,
          we inform you about your numbers. Then, we empower you with tools and
          strategies. Finally, we uplift you toward lasting, generational change.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-secondary font-body italic"
        >
          &ldquo;Teach each other how to fish than give each other
          fish.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

export default function ThoughtLeadershipContent() {
  return (
    <>
      <Hero />
      <Books />
      <Speaking />
      <Workshops />
      <Movement />
      <PreFooterCTA />
    </>
  );
}
