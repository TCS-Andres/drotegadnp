"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
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
  // TODO: Replace with actual book covers and Amazon links
  const books = [
    { title: "Book One", status: "Available on Amazon" },
    { title: "Book Two", status: "Available on Amazon" },
    { title: "Book Three", status: "Available on Amazon" },
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
              className="aspect-[3/4] bg-surface rounded-xl border-2 border-secondary flex flex-col items-center justify-center p-8"
            >
              <BookOpen className="w-14 h-14 text-secondary mb-6" />
              <p className="font-heading font-bold text-primary text-lg mb-2 text-center">
                {book.title}
              </p>
              <p className="text-sm text-text-secondary font-body mb-6">
                {book.status}
              </p>
              <a
                href="#"
                className="px-6 py-2.5 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-primary transition-all duration-200 text-sm"
              >
                Shop on Amazon
              </a>
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
            className="w-full h-64 md:h-80 object-cover"
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
            className="w-full h-64 md:h-80 object-cover"
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
      className="py-20 md:py-28 px-4"
      style={{ background: "#1A1A1A" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-secondary leading-tight mb-8"
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
