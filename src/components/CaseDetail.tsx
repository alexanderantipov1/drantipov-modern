import Link from "next/link"
import Image from "next/image"
import { Section, Container } from "@/components/sections"
import { Button } from "@/components/ui/button"
import {
  SurgicalCase,
  CaseArticle,
  correctiveJawSurgeryCases,
  dentalImplantsCases,
  facialCosmeticSurgeryCases,
} from "@/constants/cases"
import {
  correctiveJawSurgeryCases as ruCorrectiveJawSurgeryCases,
  dentalImplantsCases as ruDentalImplantsCases,
  facialCosmeticSurgeryCases as ruFacialCosmeticSurgeryCases,
} from "@/constants/ruCases"
import { getCaseSchema, getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"
import { ArrowLeft, Calendar, User, Stethoscope, Activity, Clock } from "lucide-react"
import DualCTA from "@/components/DualCTA"

const CATEGORY_LABEL: Record<SurgicalCase["category"], string> = {
  "corrective-jaw-surgery": "Corrective Jaw Surgery",
  "dental-implants": "Dental Implants",
  "facial-cosmetic-surgery": "Facial Cosmetic Surgery",
}

const CATEGORY_LABEL_RU: Record<SurgicalCase["category"], string> = {
  "corrective-jaw-surgery": "Ортогнатическая хирургия",
  "dental-implants": "Имплантация зубов",
  "facial-cosmetic-surgery": "Эстетическая хирургия лица",
}

interface CaseDetailProps {
  caseData: SurgicalCase
  article?: CaseArticle
  locale?: "en" | "ru"
}

const CASES_BY_CATEGORY: Record<SurgicalCase["category"], SurgicalCase[]> = {
  "corrective-jaw-surgery": correctiveJawSurgeryCases,
  "dental-implants": dentalImplantsCases,
  "facial-cosmetic-surgery": facialCosmeticSurgeryCases,
}

const CASES_BY_CATEGORY_RU: Record<SurgicalCase["category"], SurgicalCase[]> = {
  "corrective-jaw-surgery": ruCorrectiveJawSurgeryCases,
  "dental-implants": ruDentalImplantsCases,
  "facial-cosmetic-surgery": ruFacialCosmeticSurgeryCases,
}

/**
 * Returns up to `count` sibling cases from the same category, chosen cyclically
 * starting after the current case so every case is surfaced as a "related" item
 * by an equal number of siblings.
 */
function getRelatedCases(caseData: SurgicalCase, count = 3, isRu = false): SurgicalCase[] {
  const siblings = (isRu ? CASES_BY_CATEGORY_RU : CASES_BY_CATEGORY)[caseData.category]
  const index = siblings.findIndex((c) => c.id === caseData.id)
  if (index === -1) return siblings.slice(0, count)
  const related: SurgicalCase[] = []
  for (let i = 1; i <= count && i < siblings.length; i++) {
    related.push(siblings[(index + i) % siblings.length]!)
  }
  return related
}

export function CaseDetail({ caseData, article, locale = "en" }: CaseDetailProps) {
  const isRu = locale === "ru"
  const categoryLabel = isRu ? CATEGORY_LABEL_RU[caseData.category] : CATEGORY_LABEL[caseData.category]
  const localePrefix = isRu ? "/ru" : ""
  const backHref = `${localePrefix}/surgical-cases/${caseData.category}`
  const relatedCases = getRelatedCases(caseData, 3, isRu)
  const url = `${siteConfig.url}${localePrefix}/surgical-cases/${caseData.category}/${caseData.id}`
  const lead = article?.excerpt || caseData.description

  const structuredData: object[] = [
    getCaseSchema(caseData),
    getBreadcrumbSchema([
      { name: isRu ? "Главная" : "Home", url: `${siteConfig.url}${localePrefix}` },
      { name: isRu ? "Клинические случаи" : "Surgical Cases", url: `${siteConfig.url}${localePrefix}/surgical-cases` },
      { name: categoryLabel, url: `${siteConfig.url}${backHref}` },
      { name: caseData.title, url },
    ]),
  ]

  if (article) {
    const publishedDate = caseData.date ? new Date(caseData.date) : null
    const datePublished =
      publishedDate && !isNaN(publishedDate.getTime())
        ? publishedDate.toISOString().split("T")[0]
        : undefined

    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.metaTitle,
      description: article.metaDescription,
      keywords: article.keywords.join(", "),
      url,
      mainEntityOfPage: url,
      image: `${siteConfig.url}${caseData.imagePath}`,
      about: caseData.title,
      inLanguage: isRu ? "ru" : "en-US",
      ...(datePublished ? { datePublished } : {}),
      isPartOf: { "@id": `${siteConfig.url}/#organization` },
      author: {
        "@type": "Person",
        name: caseData.surgeon || "Dr. Alexander Antipov",
      },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      {/* Article Header */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href={backHref}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {isRu ? `Назад к разделу «${categoryLabel}»` : `Back to ${categoryLabel} Cases`}
              </Link>
            </Button>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {categoryLabel}
                </span>
                <span className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium">
                  {isRu ? "Случай" : "Case Study"} {caseData.id.toUpperCase()}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-tight">
                {caseData.title}
              </h1>

              {lead && (
                <p className="text-xl text-neutral-600 leading-relaxed">{lead}</p>
              )}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-neutral-600 border-t border-neutral-200/70 mt-2">
                {caseData.surgeon && (
                  <div className="flex items-center gap-2 pt-4">
                    <User className="h-4 w-4 text-primary-600" />
                    <span className="font-medium">{caseData.surgeon}</span>
                  </div>
                )}
                {caseData.date && (
                  <div className="flex items-center gap-2 sm:pt-4">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span>{caseData.date}</span>
                  </div>
                )}
                {article?.readMinutes && (
                  <div className="flex items-center gap-2 sm:pt-4">
                    <Clock className="h-4 w-4 text-primary-600" />
                    <span>{isRu ? `${article.readMinutes} мин чтения` : `${article.readMinutes} min read`}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Image */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <figure className="space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-glass-lg">
                <Image
                  src={caseData.imagePath}
                  alt={
                    isRu
                      ? `${caseData.title} — результат «до и после» (${categoryLabel.toLowerCase()}), врач ${caseData.surgeon || "Dr. Antipov"}, Roseville, CA`
                      : `${caseData.title} — before and after ${categoryLabel.toLowerCase()} result by ${caseData.surgeon || "Dr. Antipov"} in Roseville, CA`
                  }
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                />
              </div>
              <figcaption className="text-sm text-neutral-500 text-center">
                {isRu
                  ? `${caseData.title} — ${categoryLabel}, выполнено: ${caseData.surgeon || "Dr. Antipov"}, Galleria Oral & Facial Surgery, Roseville, CA.`
                  : <>{caseData.title} — {categoryLabel} performed by {caseData.surgeon || "Dr. Antipov"} at Galleria Oral &amp; Facial Surgery, Roseville, CA.</>}
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* Article Body */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            {/* Clinical Summary */}
            {((caseData.diagnosis && caseData.diagnosis.length > 0) ||
              (caseData.procedures && caseData.procedures.length > 0)) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {caseData.diagnosis && caseData.diagnosis.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-neutral-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Stethoscope className="h-5 w-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-neutral-900">{isRu ? "Диагноз" : "Diagnosis"}</h2>
                    </div>
                    <ul className="space-y-2.5">
                      {caseData.diagnosis.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-neutral-700 text-sm">
                          <span className="text-primary-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {caseData.procedures && caseData.procedures.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-neutral-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-neutral-900">{isRu ? "Выполненные процедуры" : "Procedures Performed"}</h2>
                    </div>
                    <ul className="space-y-2.5">
                      {caseData.procedures.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-neutral-700 text-sm">
                          <span className="text-primary-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Narrative */}
            {article && (
              <article className="space-y-10">
                {article.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-lg text-neutral-700 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            )}

            {/* Keyword tags */}
            {article?.keywords && article.keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-4">
                  {isRu ? "Связанные темы" : "Related Topics"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-block px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <Section background="gradient" padding="xl">
          <Container size="lg">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 text-center mb-3">
                {isRu ? `Похожие случаи: ${categoryLabel}` : `Related ${categoryLabel} Cases`}
              </h2>
              <p className="text-center text-neutral-600 mb-10">
                {isRu
                  ? `Другие результаты по направлению «${categoryLabel.toLowerCase()}» из нашей практики.`
                  : `Explore more ${categoryLabel.toLowerCase()} outcomes from our practice.`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCases.map((c) => (
                  <Link
                    key={c.id}
                    href={`${localePrefix}/surgical-cases/${c.category}/${c.id}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-glass border border-neutral-100 transition-all duration-300 hover:shadow-glass-lg hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={c.imagePath}
                        alt={
                          isRu
                            ? `${c.title} — случай по направлению «${categoryLabel.toLowerCase()}», врач Dr. Antipov, Roseville, CA`
                            : `${c.title} — ${categoryLabel.toLowerCase()} case by Dr. Antipov in Roseville, CA`
                        }
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium uppercase tracking-wide text-primary-600">
                        {isRu ? "Случай" : "Case"} {c.id.toUpperCase()}
                      </span>
                      <h3 className="mt-1.5 text-base font-semibold text-neutral-900 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {c.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild variant="outline">
                  <Link href={backHref}>{isRu ? `Смотреть все случаи: ${categoryLabel}` : `View all ${categoryLabel} cases`}</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <DualCTA
        variant="surgical"
        heading={isRu ? "Подойдёт ли вам похожая процедура?" : "Could a Similar Procedure Help You?"}
        subheading={
          isRu
            ? `Запишитесь на консультацию в Galleria Oral & Facial Surgery в Roseville, CA, чтобы обсудить с нашей командой ваши варианты по направлению «${categoryLabel.toLowerCase()}». Принимаем пациентов из Roseville, Sacramento и округа Placer.`
            : `Schedule a consultation at Galleria Oral & Facial Surgery in Roseville, CA to discuss your ${categoryLabel.toLowerCase()} options with our team. Serving Roseville, Sacramento, and Placer County.`
        }
      />
    </>
  )
}
