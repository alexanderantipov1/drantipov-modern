import Link from "next/link";
import type { ServiceBrief } from "@/data/ruServiceBriefs";
import { MultiStepConsultationForm } from "@/components/forms/MultiStepConsultationForm";
import { siteConfig } from "@/constants/siteConfig";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getWebPageSchema,
  structuredDataScript,
} from "@/lib/structured-data";

/** RU-only service detail. Navigation and footer belong to the RU root layout. */
export default function RuTreatmentServicePage({ service }: { service: ServiceBrief }) {
  const path = `/ru/expertise/${service.slug}`;
  const breadcrumbs = [
    { name: "Главная", url: `${siteConfig.url}/ru` },
    { name: "Услуги", url: `${siteConfig.url}/ru/expertise` },
    { name: service.title, url: `${siteConfig.url}${path}` },
  ];

  return (
    <main className="bg-white text-dark" lang="ru">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([
          getWebPageSchema({ path, name: service.title, locale: "ru", type: "MedicalWebPage" }),
          getBreadcrumbSchema(breadcrumbs),
          getFAQSchema(service.faqs),
        ])}
      />
      <header className="bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/ru/expertise" className="hover:text-primary-light">Услуги</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
            {service.category === "cosmetic" ? "Эстетические процедуры" : "Имплантация зубов"}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">{service.description}</p>
          <a href="#consultation" className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-4 font-bold text-white transition hover:bg-primary-dark">
            Обсудить {service.category === "cosmetic" ? "процедуру" : "лечение"} на консультации
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <p className="text-lg leading-8">{service.intro}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Материал носит информационный характер и не заменяет очную консультацию.
            Показания, противопоказания, риски, стоимость и сроки определяются индивидуально.
            Результат лечения не гарантирован.
          </p>
        </div>

        {service.sections.map((section, index) => (
          <section key={`${section.heading}-${index}`} aria-labelledby={`service-section-${index}`}>
            <h2 id={`service-section-${index}`} className="font-serif text-3xl font-bold tracking-tight">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i} className="mt-4 text-lg leading-8 text-muted">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-muted">
                {section.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            )}
            {section.table && (
              <div className="mt-6 overflow-x-auto rounded-2xl border border-dark/10" role="region" aria-label={section.heading} tabIndex={0}>
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">{section.heading}</caption>
                  <thead className="bg-light">
                    <tr>
                      {section.table.headers.map((heading, i) => (
                        <th key={i} scope="col" className="px-5 py-4 font-bold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i} className="border-t border-dark/10">
                        {row.map((cell, j) => j === 0
                          ? <th key={j} scope="row" className="px-5 py-4 font-semibold">{cell}</th>
                          : <td key={j} className="px-5 py-4 align-top text-muted">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section aria-labelledby="service-faq">
          <h2 id="service-faq" className="font-serif text-3xl font-bold">Частые вопросы</h2>
          <div className="mt-6 space-y-3">
            {service.faqs.map((faq, i) => (
              <details key={faq.question} open={i === 0} className="rounded-2xl border border-dark/10 bg-light px-6 py-4">
                <summary className="cursor-pointer font-bold">{faq.question}</summary>
                <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="service-sources">
          <h2 id="service-sources" className="font-serif text-2xl font-bold">Источники и дополнительная информация</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5">
            {service.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} className="text-primary underline underline-offset-4 hover:text-primary-dark">{source.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-labelledby="service-related">
          <h2 id="service-related" className="font-serif text-2xl font-bold">Связанные материалы</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.related.map((related) => (
              <li key={related.href}>
                <Link href={related.href} className="block rounded-2xl border border-dark/10 px-5 py-4 font-semibold text-primary hover:border-primary">
                  {related.label} →
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>

      <section id="consultation" aria-labelledby="service-consultation" className="scroll-mt-24 bg-light px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Индивидуальная консультация</p>
            <h2 id="service-consultation" className="mt-4 font-serif text-3xl font-bold">Обсудите ваши цели с врачом</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Направление обращения: {service.treatment}. Оставьте контактные данные и вопрос.
              Клиника уточнит возможность записи, условия и стоимость консультации.
            </p>
            <p className="mt-4 leading-7 text-muted">
              Запись подтверждается сотрудником клиники. Позвоните, чтобы уточнить доступность процедуры и время консультации.
            </p>
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="mt-6 inline-flex rounded-2xl border border-primary px-5 py-3 font-bold text-primary hover:bg-white">
              Позвонить {siteConfig.contact.phone}
            </a>
          </div>
          <div className="rounded-3xl border border-dark/10 bg-white p-6 shadow-sm sm:p-8">
            <MultiStepConsultationForm
              key={service.slug}
              variant="inline"
              locale="ru"
              treatment={service.treatment}
              category={service.category}
              inquiryMode={["all-on-4-revision", "peri-implantitis", "implant-consultation", "sinus-lift"].includes(service.slug)}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
