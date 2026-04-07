"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Health & Clinical", href: "/services/health" },
  { name: "Lab & Diagnostics", href: "/services/lab-testing" },
  { name: "Financial Wellness", href: "/services/financial-wellness" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Thought Leadership", href: "/thought-leadership" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Dr. Otega DNP - Home">
              <Image
                src="/logo.png"
                alt="Dr. Otega DNP"
                width={300}
                height={100}
                className="h-20 md:h-[100px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-primary/80 hover:text-secondary transition-colors font-medium py-2"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          role="menu"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              role="menuitem"
                              className="block px-5 py-3 text-primary hover:bg-surface hover:text-secondary transition-colors text-sm font-medium"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-primary/80 hover:text-secondary transition-colors font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book an Appointment
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-primary p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-primary flex flex-col pt-24 px-8 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-full mb-8 min-h-[44px]"
            >
              Book an Appointment
            </Link>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-2xl font-heading text-white hover:text-secondary transition-colors border-b border-white/10 min-h-[44px]"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4">
                        {services.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-lg text-secondary/80 hover:text-secondary transition-colors min-h-[44px]"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
