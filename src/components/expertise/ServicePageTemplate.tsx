import Link from "next/link";
import type { Metadata } from "next";
import { Section, Container, GlassCard } from "@/components/sections";
import { ExpertisePageHero } from "@/components/expertise/ExpertisePageHero";
import {
  getMedicalProcedureSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";
import { buildMetadata } from "@/lib/seo";
import DualCTA from "@/components/DualCTA";
import type { ServicePageData } from "@/constants/servicePages";

export function buildServiceMetadata(data: ServicePageData): Metadata {
  return buildMetadata({
    path: `/expertise/${data.slug}`,
    absoluteTitle: data.metaTitle,
    description: data.metaDescription,
    ogImage: data.ogImage,
  });
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const url = `${siteConfig.url}/expertise/${data.slug}`;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Expertise", url: `${siteConfig.url}/expertise` },
    { name: data.breadcrumbName, url },
  ]);
  const procedure = getMedicalProcedureSchema({
    name: data.procedureName,
    description: data.procedureDescription,
    url,
    procedureType: data.procedureType,
  });
  const faqSchema = getFAQSchema(data.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([breadcrumb, procedure, faqSchema])}
      />

      <ExpertisePageHero
        badge={data.badge}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        image={data.heroImage}
      />

      {/* Answer-first lead */}
      <Section background="default" padding="xl">
        <Container size="md">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-6">
            {data.answerHeading}
          </h2>
          <div className="space-y-4">
            {data.answer.map((p, i) => (
              <p key={i} className="text-lg leading-8 text-neutral-700">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Content sections */}
      {data.sections.map((section, idx) => (
        <Section
          key={section.heading}
          background={idx % 2 === 0 ? "accent" : "default"}
          padding="xl"
        >
          <Container size="lg">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-3">
              {section.heading}
            </h2>
            {section.lead && (
              <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
                {section.lead}
              </p>
            )}
            <div
              className={`grid gap-6 ${!section.lead ? "mt-12" : ""} md:grid-cols-2 ${
                section.cards.length >= 3 ? "lg:grid-cols-3" : ""
              }`}
            >
              {section.cards.map((card) => (
                <GlassCard key={card.title} className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{card.title}</h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* FAQ */}
      <Section background="accent" padding="xl">
        <Container size="md">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((f, i) => (
              <details
                key={f.question}
                open={i === 0}
                className="group rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm"
              >
                <summary className="cursor-pointer font-bold text-neutral-900 list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <svg
                    className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="leading-7 text-neutral-700 mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related */}
      {data.relatedLinks.length > 0 && (
        <Section background="default" padding="lg">
          <Container size="md">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 text-center mb-8">
              Related expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <DualCTA />
    </>
  );
}
