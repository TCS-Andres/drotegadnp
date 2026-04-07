"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, type LucideIcon } from "lucide-react";
import PreFooterCTA from "@/components/PreFooterCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CrossPillarLink {
  text: string;
  href: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  services: ServiceItem[];
  whyChooseTitle: string;
  whyChooseItems: string[];
  crossPillarText: string;
  crossPillarLinks: CrossPillarLink[];
  disclaimerText: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  services,
  whyChooseTitle,
  whyChooseItems,
  crossPillarText,
  crossPillarLinks,
  disclaimerText,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Section 1 - Hero */}
      <section
        className={`relative flex items-center justify-center px-4 overflow-hidden ${
          heroImage
            ? "min-h-[60vh] md:min-h-[70vh]"
            : "bg-background py-20 md:py-28"
        }`}
      >
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt || title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-primary/30" />
          </>
        )}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-16 md:py-24">
          <motion.h1
            {...fadeUp}
            className={`text-4xl sm:text-5xl md:text-[56px] font-heading font-bold leading-tight mb-6 ${
              heroImage ? "text-white drop-shadow-lg" : "text-primary"
            }`}
          >
            {title}
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto ${
              heroImage ? "text-[#FAF7F2]/90" : "text-[#2D2D2D]"
            }`}
          >
            {subtitle}
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

      {/* Section 2 - Services */}
      <div className="gradient-separator" />
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 1;

            return (
              <div key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-14 py-12`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center shadow-gold-glow">
                      <Icon className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  <div className={isEven ? "md:text-right" : ""}>
                    <h3 className="text-2xl md:text-[28px] font-heading font-bold text-primary mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-lg text-[#2D2D2D] font-body leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </motion.div>

                {i < services.length - 1 && (
                  <div className="max-w-xs mx-auto h-px bg-secondary/20" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 - Why Choose */}
      <div className="gradient-separator" />
      <section className="bg-surface py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight text-center mb-12"
          >
            Why Choose {whyChooseTitle}
          </motion.h2>
          <div className="space-y-5">
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 glass-card rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 shadow-gold-glow">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-lg text-[#2D2D2D] font-body">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Cross-Pillar */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            {...fadeUp}
            className="text-lg text-[#2D2D2D] font-body leading-relaxed mb-8"
          >
            {crossPillarText}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {crossPillarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary font-semibold font-body text-lg hover:text-[#b8911f] transition-colors"
              >
                {link.text} &rarr;
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Disclaimer */}
      <section className="bg-background py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-text-secondary font-body italic text-center">
            {disclaimerText}
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <PreFooterCTA />
    </>
  );
}
