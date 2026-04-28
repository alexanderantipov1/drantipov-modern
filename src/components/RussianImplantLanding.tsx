import Image from "next/image";
import Link from "next/link";
import RussianLeadForm from "@/components/RussianLeadForm";
import {
  implantJourneySteps,
  officeAddress,
  officePhone,
  officePhoneHref,
  processSteps,
  russianArticlePages,
  russianCityPages,
  russianServiceFaqs,
  RussianCityPage,
} from "@/data/russianImplantFunnel";

interface RussianImplantLandingProps {
  page: RussianCityPage;
  path: string;
  showCityLinks?: boolean;
}

const treatments = [
  {
    title: "All-on-4 / All-on-6",
    body: "Полная дуга фиксированных зубов на имплантах. Временные зубы в день операции возможны, когда это подходит по анатомии и плану лечения.",
  },
  {
    title: "Zygomatic implants",
    body: "Вариант для тяжёлой потери кости в верхней челюсти, когда обычные импланты или костная пластика недостаточны.",
  },
  {
    title: "Bone grafting / sinus lift",
    body: "3D-планирование, костная пластика, наращивание гребня и sinus lift для подготовки к имплантации.",
  },
  {
    title: "Second opinion",
    body: "Если вам уже сказали, что импланты невозможны, оставьте заявку и обсудите, какие данные нужны для оценки.",
  },
  {
    title: "Wisdom teeth / oral surgery",
    body: "Можно начать с заявки по wisdom teeth, oral surgery и срочным вопросам, чтобы команда подсказала следующий шаг.",
  },
];

export default function RussianImplantLanding({ page, path, showCityLinks = false }: RussianImplantLandingProps) {
  const featuredQuestions = russianServiceFaqs.slice(0, 5);
  const featuredArticles = russianArticlePages.slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
            <a href="#treatments" className="transition hover:text-primary">Импланты</a>
            <a href="#process" className="transition hover:text-primary">Процесс</a>
            <a href="#faq" className="transition hover:text-primary">FAQ</a>
            {showCityLinks && <a href="#cities" className="transition hover:text-primary">Города</a>}
            <a href="#contact" className="transition hover:text-primary">Контакты</a>
          </nav>
          <a
            href={officePhoneHref}
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
          >
            {officePhone}
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-dark text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg"
              alt="Dr. Antipov dental implant surgery in Roseville California"
              fill
              className="object-cover opacity-35"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
                Dental implant concierge
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {page.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{page.subtitle}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-primary px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/25"
                >
                  Бесплатная консультация
                </a>
                <a
                  href={officePhoneHref}
                  className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Позвонить {officePhone}
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {page.proof.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/10 p-4 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md lg:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">Roseville office</p>
              <h2 className="mt-3 text-3xl font-bold">Dr. Alexander Antipov, DDS</h2>
              <p className="mt-4 text-white/80">
                Сертифицированный челюстно-лицевой хирург. Dental implants, All-on-4, All-on-6, zygomatic implants,
                bone grafting, IV sedation и computer-guided surgery.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Адрес</dt>
                  <dd className="mt-1 text-white">{officeAddress}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Телефон</dt>
                  <dd className="mt-1">
                    <a href={officePhoneHref} className="text-white underline decoration-primary underline-offset-4">
                      {officePhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Регион</dt>
                  <dd className="mt-1 text-white">{page.region}</dd>
                </div>
              </dl>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-white/80">
                <strong className="text-white">Коротко:</strong> Dr. Antipov принимает пациентов на консультации по
                dental implants, All-on-4, All-on-6, zygomatic implants и bone grafting в Roseville, CA.
              </div>
            </div>
          </div>
        </section>

        <section id="treatments" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Направления</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Это отдельный путь для пациентов, которым нужна имплантация.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Страница помогает быстро понять варианты лечения, подготовить вопросы и перейти к консультации
                по dental implants в Roseville, California.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {treatments.map((item) => (
                <article key={item.title} className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Процесс</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                От заявки до консультации в Roseville
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-dark/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" id="journey">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Клинический план</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Как проходит immediate implants & teeth case
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Этот план основан на clinical guide Dr. Antipov: от консультации и CT scan до temporary fixed
                  teeth, заживления и final prosthesis. Он отвечает на главный вопрос пациента: что происходит дальше.
                </p>
              </div>
              <div className="grid gap-4">
                {implantJourneySteps.map((step) => (
                  <article key={step.title} className="grid gap-4 rounded-2xl border border-dark/10 bg-white p-5 shadow-sm sm:grid-cols-[3.5rem_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                      {step.phase}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                      <p className="mt-2 leading-7 text-muted">{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-light py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Ответы</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Вопросы, которые пациенты задают Google, ChatGPT и Perplexity
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Структурированные ответы помогают быстрее понять стоимость, сроки, страховку, bone loss и
                варианты All-on-4. Эти же ответы размечены FAQ schema для поисковых систем и AI-поиска.
              </p>
              <Link
                href="/ru/questions"
                className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-3 text-base font-bold text-white transition hover:bg-primary-dark"
              >
                Смотреть все гиды по имплантам
              </Link>
            </div>
            <div className="grid gap-5">
              {featuredQuestions.map((item) => (
                <article key={item.question} className="rounded-2xl border border-dark/10 bg-white p-6">
                  <h3 className="text-xl font-bold text-dark">{item.question}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Полезные ответы</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Страницы под high-intent implant questions
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Каждая страница отвечает на один конкретный вопрос в формате, который удобно читать пациентам и
                цитировать AI search engines.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/ru/questions/${article.slug}`}
                  className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Гид</p>
                  <h3 className="mt-3 text-xl font-bold text-dark">{article.h1}</h3>
                  <p className="mt-3 line-clamp-4 leading-7 text-muted">{article.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {showCityLinks && (
          <section id="cities" className="bg-light py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">City-by-city SEO</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Локальные landing pages по городам
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Local pages помогают пациентам искать по городу, а консультация остается централизованной вокруг
                  офиса Dr. Antipov в Roseville.
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {russianCityPages.map((cityPage) => (
                  <Link
                    key={cityPage.slug}
                    href={`/ru/${cityPage.slug}`}
                    className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-dark">{cityPage.city}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{cityPage.region}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="contact" className="bg-light py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Первичная заявка</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Оставьте заявку
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Форма сохраняет город, выбранную услугу, сроки, удобный канал связи, landing page и UTM-метки, чтобы
                обратная связь была быстрее и точнее.
              </p>
            </div>
            <RussianLeadForm defaultCity={page.city} landingPath={path} />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© Dr. Alexander Antipov, DDS — Roseville, California.</p>
          <a href="/" className="font-semibold text-primary hover:text-primary-dark">
            Основной сайт DrAntipov.com
          </a>
        </div>
      </footer>
    </div>
  );
}
