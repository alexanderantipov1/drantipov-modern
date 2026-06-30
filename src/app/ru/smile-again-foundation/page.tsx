import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Smile Again Foundation — Возвращаем улыбки, возвращаем жизни | Доктор Антипов",
  description:
    "Smile Again Foundation основан доктором Александром Антиповым в 2025 году. Некоммерческая организация, которая бесплатно проводит восстановительное стоматологическое лечение нуждающимся пациентам в Северной Калифорнии.",
  alternates: { canonical: "/ru/smile-again-foundation", languages: { ru: "/ru/smile-again-foundation", en: "/smile-again-foundation" } },
  openGraph: {
    locale: "ru_RU",
    title: "Smile Again Foundation",
    description: "Возвращаем улыбки нуждающимся пациентам.",
    url: `${siteConfig.url}/ru/smile-again-foundation`,
    type: "website",
    images: [{ url: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg", width: 1920, height: 1080, alt: "Smile Again Foundation" }],
  },
};

const pillars = [
  { title: "Бесплатная имплантация полного зубного ряда", description: "Бесплатные All-on-4 и сложная имплантационная реконструкция для пациентов с тяжёлым финансовым положением, которые без помощи остались бы без функциональных зубов." },
  { title: "Образование пациентов", description: "Двуязычные обучающие материалы (английский, русский, испанский) о здоровье полости рта, уходе за имплантами и восстановлении после операций — раздаются на общественных мероприятиях." },
  { title: "Обучение врачей", description: "Практические воркшопы для стоматологических и хирургических резидентов по продвинутым имплантационным техникам. Доктор Антипов проводит их совместно с региональными резидентурами." },
  { title: "Поддержка международных миссий", description: "Поддерживаем международную миссионерскую работу доктора Кахвача в Европе, Африке, Карибском бассейне и на Ближнем Востоке — хирургическими материалами и спонсорством пациентов." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/smile-again-foundation#org`,
  name: "Smile Again Foundation",
  url: `${siteConfig.url}/ru/smile-again-foundation`,
  founder: { "@id": `${siteConfig.url}/#physician` },
  foundingDate: "2025",
  description: "Некоммерческая организация, которая расширяет доступ к восстановительной стоматологии и поддерживает миссионерское лечение пациентов.",
};

export default function SmileAgainFoundationPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: `${siteConfig.url}/ru` },
    { name: "Smile Again Foundation", url: `${siteConfig.url}/ru/smile-again-foundation` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([orgSchema, breadcrumb])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg" alt="Smile Again Foundation — Доктор Антипов" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Smile Again Foundation</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Некоммерческая организация · Основан в 2025</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Smile Again Foundation
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Возвращаем улыбки и меняем жизни. Некоммерческая организация, делающая продвинутую восстановительную стоматологию доступной для тех, кто иначе не смог бы её получить.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center">Наша миссия</h2>
          <p className="mt-8 text-xl leading-9 text-neutral-700">
            Smile Again Foundation основан в 2025 году доктором Александром В. Антиповым, DDS — сертифицированным челюстно-лицевым хирургом, лично выполнившим более 10 000 операций за свою 25+ летнюю карьеру.
          </p>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Для слишком многих людей возможность жевать, улыбаться и уверенно говорить — это роскошь, которую они не могут себе позволить. Smile Again Foundation создан, чтобы это изменить: бесплатная имплантация полного зубного ряда для отдельных пациентов, поддержка двуязычного просвещения по здоровью и международная хирургическая миссионерская работа.
          </p>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Четыре направления</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{p.title}</h3>
                <p className="text-neutral-700 leading-7">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">Пациентам</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-neutral-900">Заявка на спонсируемое лечение</h3>
              <p className="mt-3 text-neutral-700 leading-7">
                Каждый год мы принимаем ограниченное число кандидатов на бесплатную имплантацию полного ряда. Заявки открыты в определённые периоды. Напишите нам, чтобы узнать про текущее окно подачи.
              </p>
              <a href="mailto:foundation@galleriaoms.com" className="mt-5 inline-block text-primary-600 hover:text-primary-700 font-bold">
                foundation@galleriaoms.com
              </a>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">Партнёрам и прессе</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-neutral-900">Пресса и партнёрство</h3>
              <p className="mt-3 text-neutral-700 leading-7">
                Журналисты, медицинские партнёры и корпоративные спонсоры — пишите нам по поводу пресс-релизов, интервью и партнёрства.
              </p>
              <a href="mailto:press@galleriaoms.com" className="mt-5 inline-block text-primary-600 hover:text-primary-700 font-bold">
                press@galleriaoms.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-5 sm:text-4xl">Верните улыбку. Измените жизнь.</h2>
          <p className="text-lg text-white/85 mb-8">
            Помогите нам охватить больше пациентов. Каждая восстановленная улыбка начинается с того, кто поверил, что это возможно.
          </p>
          <a href="mailto:foundation@galleriaoms.com" className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark">
            Contact the Foundation
          </a>
        </div>
      </section>
    </>
  );
}
