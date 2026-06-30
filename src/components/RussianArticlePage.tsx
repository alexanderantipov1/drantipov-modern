import Image from "next/image";
import Link from "next/link";
import RuNavbar from "@/components/ru-home/RuNavbar";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import FloatingArticleCTA from "@/components/FloatingArticleCTA";
import RuFooter from "@/components/ru-home/RuFooter";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import RussianChatbot from "@/components/RussianChatbot";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import {
  officeAddress,
  officePhone,
  officePhoneHref,
  russianArticlePages,
  RussianArticlePage as RussianArticlePageData,
} from "@/data/russianImplantFunnel";

interface RussianArticlePageProps {
  article: RussianArticlePageData;
}

export default function RussianArticlePage({ article }: RussianArticlePageProps) {
  const related = russianArticlePages.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <ReadingProgressBar />
      <RuNavbar />

      <main>
        {/* Hero */}
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg"
              alt={article.h1}
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <nav aria-label="Навигация" className="text-sm text-white/60 mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/ru/questions" className="hover:text-primary-light">Гиды</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold line-clamp-1">{article.h1}</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Гид по имплантам</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {article.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">{article.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {article.keywords.slice(0, 6).map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article + Sidebar */}
        <article className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
            <div className="max-w-3xl">
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Короткий ответ</p>
                <p className="mt-3 text-lg leading-8 text-dark">{article.summary}</p>
              </div>

              <div className="mt-10 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-dark">{section.heading}</h2>
                    <p className="mt-4 text-lg leading-8 text-muted">{section.body}</p>
                  </section>
                ))}
              </div>

              {/* FAQ */}
              <section className="mt-14">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-dark">Частые вопросы</h2>
                <div className="mt-6 space-y-3">
                  {article.faqs.map((faq, i) => (
                    <details key={faq.question} open={i === 0} className="group rounded-2xl border border-dark/10 bg-light px-6 py-4 shadow-sm">
                      <summary className="cursor-pointer text-left font-bold text-dark transition group-open:mb-3 list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4">
                        <span>{faq.question}</span>
                        <svg className="w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <p className="leading-7 text-muted">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-dark/10 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Первичная заявка</p>
                <h2 className="mt-3 text-2xl font-bold text-dark">Нужен индивидуальный план?</h2>
                <p className="mt-3 leading-7 text-muted text-sm">
                  Оставьте заявку: город, вопрос, сроки и удобный способ связи. Консультация проходит в офисе Roseville.
                </p>
                <Link
                  href="/ru/contact"
                  className="mt-5 inline-flex w-full justify-center rounded-2xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-primary-dark"
                >
                  Оставить заявку
                </Link>
                <a
                  href={officePhoneHref}
                  className="mt-3 inline-flex w-full justify-center rounded-2xl border border-dark/10 px-5 py-3 font-bold text-dark transition hover:border-primary hover:text-primary"
                >
                  Позвонить {officePhone}
                </a>
                <p className="mt-4 text-sm leading-6 text-muted">{officeAddress}</p>
              </div>

              <div className="rounded-3xl border border-dark/10 bg-light p-7">
                <h2 className="text-xl font-bold text-dark mb-4">Похожие вопросы</h2>
                <div className="space-y-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/ru/questions/${item.slug}`}
                      className="block text-sm font-semibold text-primary hover:text-primary-dark leading-snug"
                    >
                      {item.h1} →
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <RuFooter />
      <StickyConciergeBar />
      <RussianChatbot />
      <FloatingArticleCTA />
      <MicrosoftClarity />
    </div>
  );
}
