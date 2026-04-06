import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="bg-accent py-20 px-4" aria-label="Call to action">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
          Ready to Know Your Numbers?
        </h2>
        <p className="text-background/90 text-lg mb-8">
          Take the first step toward a healthier, wealthier future.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full hover:bg-[#b8911f] hover:-translate-y-0.5 transition-all duration-200 text-lg min-h-[48px]"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
