import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RelatedArticles } from "@/components/RelatedArticles"
import { structuredDataScript, getFAQSchema } from "@/lib/structured-data"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import type { RevisionArticle, Para } from "@/constants/revisionArticles"

const SITE = "https://www.drantipov.com"

function renderSegments(para: Para, keyPrefix: string) {
  if (typeof para === "string") return para
  return para.map((seg, i) => {
    if (typeof seg === "string") return <span key={`${keyPrefix}-${i}`}>{seg}</span>
    return (
      <Link key={`${keyPrefix}-${i}`} href={seg.href} className="text-primary-600 underline">
        {seg.text}
      </Link>
    )
  })
}

export function InsightArticle({ article }: { article: RevisionArticle }) {
  const canonical = `/for-patients/insights/${article.slug}`
  const url = SITE + canonical

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    inLanguage: "en",
    url,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    image: [`${SITE}${article.image}`],
    author: {
      "@type": "Person",
      name: "Dr. Alexander V. Antipov, DDS",
      url: `${SITE}/about`,
      identifier: `${SITE}/#physician`,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Alexander V. Antipov, DDS",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo-d10cd66c.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([articleSchema, getFAQSchema(article.faqs)])}
      />

      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Hero */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">{article.category}</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by{" "}
              <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> —
              Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp;
              Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src={article.image}
                alt={article.heroAlt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                {renderSegments(article.intro, "intro")}
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  {article.tldr.map((item, i) => (
                    <li key={`tldr-${i}`}>&bull; {item}</li>
                  ))}
                </ul>
              </GlassCard>

              {article.sections.map((section, si) => (
                <div key={`section-${si}`}>
                  <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                    {section.heading}
                  </h2>
                  {section.paras?.map((para, pi) => (
                    <p key={`s${si}-p${pi}`} className="text-neutral-700 leading-relaxed mb-6">
                      {renderSegments(para, `s${si}-p${pi}`)}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                      {section.list.map((item, li) => (
                        <li key={`s${si}-l${li}`}>&mdash; {renderSegments(item, `s${si}-l${li}`)}</li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, hi) => (
                              <th key={`s${si}-h${hi}`} className="border-b border-neutral-200 py-3 px-4">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={`s${si}-r${ri}`}>
                              {row.map((cell, ci) => (
                                <td key={`s${si}-r${ri}-c${ci}`} className="border-b border-neutral-200 py-3 px-4">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                {article.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <GlassCard className="my-12 p-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">{article.cta.heading}</h2>
                <p className="text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">{article.cta.body}</p>
                <Button asChild size="lg">
                  <Link href="/contact">Book a Free Dental Implant Consultation</Link>
                </Button>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug={article.slug} />
    </>
  )
}
