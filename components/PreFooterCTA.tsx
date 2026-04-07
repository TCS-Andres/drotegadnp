import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="relative py-20 px-4 overflow-hidden mesh-gradient-accent" aria-label="Call to action">
      {/* Floating decorative shapes */}
      <div className="floating-shape w-48 h-48 border border-secondary animate-float-slow" style={{ top: '10%', right: '10%', opacity: 0.1, background: 'transparent' }} />
      <div className="floating-shape w-32 h-32 bg-secondary animate-float-medium" style={{ bottom: '15%', left: '8%', opacity: 0.06 }} />
      <div className="floating-shape w-20 h-20 border border-secondary/50 animate-float-fast" style={{ top: '60%', right: '30%', opacity: 0.08, background: 'transparent' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4 gold-glow">
          Ready to Know Your Numbers?
        </h2>
        <p className="text-background/90 text-lg mb-8">
          Take the first step toward a healthier, wealthier future.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-secondary/90 backdrop-blur-sm text-primary font-semibold rounded-full hover:bg-secondary hover:-translate-y-0.5 hover:shadow-gold-glow transition-all duration-300 text-lg min-h-[48px] border border-secondary/30"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
