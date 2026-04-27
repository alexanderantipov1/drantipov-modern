import Image from "next/image";
import RussianLeadForm from "@/components/RussianLeadForm";
import {
  officeAddress,
  officePhone,
  officePhoneHref,
  processSteps,
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
    body: "Полная дуга фиксированных зубов на имплантах. Same-day temporary teeth возможны, когда это подходит по анатомии и плану лечения.",
  },
  {
    title: "Zygomatic implants",
    body: "Вариант для тяжелой потери кости в верхней челюсти, когда обычные импланты или grafting могут быть недостаточны.",
  },
  {
    title: "Bone grafting / sinus lift",
    body: "3D planning, organic bone grafting options, ridge augmentation and sinus lift для подготовки к имплантации.",
  },
  {
    title: "Second opinion",
    body: "Если вам уже сказали, что импланты невозможны, можно начать с intake и обсудить, какие данные нужны для оценки.",
  },
];

const questions = [
  {
    title: "Мне сказали, что кости недостаточно. Есть варианты?",
    body: "Dr. Antipov performs advanced bone grafting and zygomatic implants for severe bone loss cases. Final recommendations require exam and 3D CT imaging.",
  },
  {
    title: "Можно ли получить зубы в день операции?",
    body: "For All-on-4 and All-on-6 cases, same-day temporary teeth may be possible when anatomy and surgical planning support immediate loading.",
  },
  {
    title: "Я живу не рядом с Roseville. Можно начать удаленно?",
    body: "Да. Оставьте город, вопрос и контакт. Команда поможет понять, какие фото, снимки или документы стоит подготовить перед консультацией.",
  },
];

export default function RussianImplantLanding({ page, path, showCityLinks = false }: RussianImplantLandingProps) {
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
            <a href="#treatments" className="transition hover:text-primary">
              Импланты
            </a>
            <a href="#process" className="transition hover:text-primary">
              Процесс
            </a>
            <a href="#contact" className="transition hover:text-primary">
              Контакты
            </a>
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
                Русскоязычный dental implant concierge
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
                  Получить implant consultation
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
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md lg:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">Roseville office</p>
              <h2 className="mt-3 text-3xl font-bold">Dr. Alexander Antipov, DDS</h2>
              <p className="mt-4 text-white/80">
                Board-certified oral and maxillofacial surgeon. Dental implants, All-on-4, All-on-6, zygomatic implants,
                bone grafting, IV sedation, and computer-guided surgery.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Address</dt>
                  <dd className="mt-1 text-white">{officeAddress}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Phone</dt>
                  <dd className="mt-1">
                    <a href={officePhoneHref} className="text-white underline decoration-primary underline-offset-4">
                      {officePhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Source market</dt>
                  <dd className="mt-1 text-white">{page.region}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="treatments" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Treatment focus</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Это не обычная локальная реклама. Это intake для implant treatment.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Воронка создана для русскоязычных пациентов, которые рассматривают Dr. Antipov как destination/provider
                для dental implants в Roseville, California.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {treatments.map((item) => (
                <article key={item.title} className="rounded-3xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Concierge flow</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                От заявки на русском до консультации в Roseville
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-dark/5">
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

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Before booking</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Что спрашивают перед имплантацией
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Русскоязычный intake помогает быстрее понять главный вопрос: что возможно, какие данные нужны, и есть ли смысл
                ехать на консультацию.
              </p>
            </div>
            <div className="grid gap-5">
              {questions.map((item) => (
                <article key={item.title} className="rounded-3xl border border-dark/10 p-6">
                  <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-light py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Russian intake</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Оставьте заявку на русском
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Форма сохраняет city, treatment interest, timing, preferred contact, landing page и UTM context в email body,
                чтобы follow-up был быстрее и точнее.
              </p>
            </div>
            <RussianLeadForm defaultCity={page.city} landingPath={path} />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© Dr. Alexander Antipov, DDS — русскоязычный intake для dental implant consultations.</p>
          <a href="/" className="font-semibold text-primary hover:text-primary-dark">
            Main DrAntipov.com site
          </a>
        </div>
      </footer>
    </div>
  );
}
