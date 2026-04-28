import Image from "next/image";
import Link from "next/link";
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
      <header className="border-b border-dark/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/ru" className="flex items-center gap-3">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <a
            href={officePhoneHref}
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
          >
            {officePhone}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-light py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/ru/questions" className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Гиды по имплантам
            </Link>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">{article.h1}</h1>
            <p className="mt-6 text-xl leading-9 text-muted">{article.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {article.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-semibold text-muted">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <article className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
            <div className="max-w-3xl">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Короткий ответ</p>
                <p className="mt-3 text-lg leading-8 text-dark">{article.summary}</p>
              </div>

              <div className="mt-10 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-3xl font-bold tracking-tight text-dark">{section.heading}</h2>
                    <p className="mt-4 text-lg leading-8 text-muted">{section.body}</p>
                  </section>
                ))}
              </div>

              <section className="mt-14">
                <h2 className="text-3xl font-bold tracking-tight text-dark">FAQ</h2>
                <div className="mt-6 grid gap-5">
                  {article.faqs.map((faq) => (
                    <article key={faq.question} className="rounded-2xl border border-dark/10 p-6">
                      <h3 className="text-xl font-bold text-dark">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Первичная заявка</p>
                <h2 className="mt-3 text-2xl font-bold text-dark">Нужен индивидуальный план?</h2>
                <p className="mt-3 leading-7 text-muted">
                  Оставьте заявку: город, вопрос, сроки и удобный способ связи. Консультация проходит в офисе
                  Roseville.
                </p>
                <Link
                  href="/ru#contact"
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

              <div className="rounded-2xl border border-dark/10 bg-light p-6">
                <h2 className="text-xl font-bold text-dark">Похожие вопросы</h2>
                <div className="mt-4 grid gap-3">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/ru/questions/${item.slug}`} className="font-semibold text-primary hover:text-primary-dark">
                      {item.h1}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
