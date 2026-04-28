"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { brand } from "@/lib/brand";

const HIDDEN_PATHS = new Set<string>(["/services/lab-testing"]);

const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const ctas = [
  {
    label: "Instagram",
    href: brand.social.instagram,
    ariaLabel: "Follow Dr. Otega on Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: brand.social.facebook,
    ariaLabel: "Follow Dr. Otega on Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: brand.social.linkedin,
    ariaLabel: "Connect with Dr. Otega on LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function FollowSocials() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.has(pathname)) return null;

  return (
    <section
      className="bg-surface py-16 md:py-20 px-4"
      aria-label="Follow Dr. Otega on social media"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-[40px] font-heading font-bold text-primary leading-tight mb-4"
        >
          Stay Connected with Dr. Otega
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#2D2D2D] font-body mb-10 max-w-2xl mx-auto"
        >
          Follow along on social media for health insights, financial
          empowerment tips, and updates from Dr. Otega and the Complete Health
          team.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cta.ariaLabel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-primary font-semibold font-body hover:bg-[#b8911f] transition-colors min-h-[48px]"
            >
              {cta.icon}
              <span>{cta.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
