import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Thought Leadership", href: "/thought-leadership" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Disclaimers", href: "/disclaimers" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Dr. Otega DNP"
              width={180}
              height={60}
              className="h-[60px] w-auto mb-4"
            />
            <p className="text-secondary font-medium text-lg italic">
              Inform. Empower. Uplift.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-background/80">
              <li>
                <a
                  href={`tel:${brand.contact.phone.replace(/-/g, "")}`}
                  className="hover:text-secondary transition-colors"
                  aria-label={`Call us at ${brand.contact.phone}`}
                >
                  {brand.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="hover:text-secondary transition-colors"
                  aria-label={`Email us at ${brand.contact.email}`}
                >
                  {brand.contact.email}
                </a>
              </li>
              <li>{brand.contact.address}</li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={brand.social.instagram}
                className="text-background/60 hover:text-secondary transition-colors"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={brand.social.facebook}
                className="text-background/60 hover:text-secondary transition-colors"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={brand.social.linkedin}
                className="text-background/60 hover:text-secondary transition-colors"
                aria-label="Connect with us on LinkedIn"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Dr. Otega DNP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
