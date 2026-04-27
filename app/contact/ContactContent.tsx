"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CalendlyInline } from "@/components/Calendly";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const serviceOptions = [
  "Health & Clinical",
  "Lab & Diagnostics",
  "Financial Wellness",
  "Speaking/Workshop Inquiry",
  "General Question",
];

const visitSteps = [
  {
    num: "1",
    title: "Book Your Appointment",
    description:
      "Choose your service, pick a time, and let us know what you need.",
  },
  {
    num: "2",
    title: "Dr. Otega Reviews Your Needs",
    description:
      "Before your visit, your information is reviewed so your time together is focused and productive.",
  },
  {
    num: "3",
    title: "Leave With Clarity and a Plan",
    description:
      "You will walk away understanding your numbers and knowing exactly what to do next.",
  },
];

function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(201, 162, 39, 0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(107, 28, 42, 0.03) 0%, transparent 50%)' }} />
      <div className="floating-shape w-56 h-56 border border-secondary/15 animate-float-slow" style={{ top: '5%', left: '-3%', opacity: 0.04, background: 'transparent' }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          {...fadeUp}
          className="text-4xl sm:text-5xl md:text-[56px] font-heading font-bold text-primary leading-tight mb-6"
        >
          Let&apos;s Get Started
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-[#2D2D2D] font-body max-w-2xl mx-auto"
        >
          Ready to know your numbers? Book an appointment, ask a question, or
          connect with Dr. Otega today.
        </motion.p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: Replace YOUR_FORM_ID with actual Formspree form ID
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-2xl font-heading font-bold text-secondary text-center">
          Thank you! We will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-body font-medium text-primary mb-1.5">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-body font-medium text-primary mb-1.5">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-body font-medium text-primary mb-1.5">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-body font-medium text-primary mb-1.5">
          Service Needed
        </label>
        <select id="service" name="service" className={inputClass}>
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="preferred-time" className="block text-sm font-body font-medium text-primary mb-1.5">
          Preferred Date/Time
        </label>
        <input
          type="text"
          id="preferred-time"
          name="preferred-time"
          placeholder="e.g. Tuesday afternoon, March 15"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] transition-colors text-lg disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Your Request"}
      </button>
    </form>
  );
}

function ContactSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left - Form */}
          <motion.div {...fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
            <ContactForm />
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <a
                href="tel:3059780288"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary font-body">Phone</p>
                  <p className="text-xl font-semibold text-primary font-body group-hover:text-secondary transition-colors">
                    305-978-0288
                  </p>
                </div>
              </a>

              <a
                href="mailto:connect@drotegadnp.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary font-body">Email</p>
                  <p className="text-lg font-medium text-primary font-body group-hover:text-secondary transition-colors">
                    connect@drotegadnp.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary font-body">Address</p>
                  <p className="text-lg font-medium text-primary font-body">
                    657 NE 167th St, North Miami Beach, FL
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary font-body">Hours</p>
                  <p className="text-lg font-medium text-primary font-body">
                    Hours coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.8!2d-80.162!3d25.929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU1JzQ0LjQiTiA4MMKwMDknNDMuMiJX!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Otega DNP Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section className="relative bg-surface py-20 md:py-28 px-4 overflow-hidden">
      {/* Subtle background treatment */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201, 162, 39, 0.04) 0%, transparent 60%)' }} />
      <div className="floating-shape w-48 h-48 border border-secondary/10 animate-float-medium" style={{ top: '10%', right: '-2%', opacity: 0.04, background: 'transparent' }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-8"
        >
          Book Online
        </motion.h2>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background rounded-2xl overflow-hidden shadow-glass"
        >
          <CalendlyInline />
        </motion.div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-16"
        >
          Your First Visit
        </motion.h2>

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

          {visitSteps.map((step, i) => (
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

function ContactPreFooter() {
  return (
    <section className="relative py-20 px-4 overflow-hidden mesh-gradient-accent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
          Have Questions? Call Us Directly.
        </h2>
        <a
          href="tel:3059780288"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] transition-colors text-lg"
        >
          <Phone className="w-5 h-5" />
          Call 305-978-0288
        </a>
      </div>
    </section>
  );
}

export default function ContactContent() {
  return (
    <>
      <Hero />
      <ContactSection />
      <Booking />
      <WhatToExpect />
      <ContactPreFooter />
    </>
  );
}
