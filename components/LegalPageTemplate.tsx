import Link from "next/link";

interface LegalSection {
  title: string;
  content: string | string[];
}

interface LegalPageTemplateProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPageTemplate({
  title,
  lastUpdated,
  sections,
}: LegalPageTemplateProps) {
  return (
    <section className="bg-background min-h-screen py-16 md:py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-body text-text-secondary">
          <Link href="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-primary">{title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          {title}
        </h1>
        <p className="text-sm text-text-secondary font-body mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                section.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-base text-[#2D2D2D] font-body leading-relaxed mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-base text-[#2D2D2D] font-body leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
