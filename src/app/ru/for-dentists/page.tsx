import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";
import RuCTA from "@/components/ru-home/RuCTA";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import RussianChatbot from "@/components/RussianChatbot";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { siteUrl, officePhone, officePhoneHref, officeEmail } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Стоматологам - направления и обучение | Доктор Антипов",
  description:
    "Сотрудничество со стоматологами: направления на сложные хирургические случаи, прозрачная коммуникация, обучающие материалы. Партнёрство с практикой доктора Антипова.",
  alternates: {
    canonical: `${siteUrl}/ru/for-dentists`,
    languages: {
      ru: `${siteUrl}/ru/for-dentists`,
      en: `${siteUrl}/for-dentists`,
      "x-default": `${siteUrl}/for-dentists`,
    },
  },
  openGraph: {
    title: "Стоматологам - направления и сотрудничество",
    description: "Партнёрство со стоматологическими практиками. Прозрачная коммуникация, направления, образование. Доктор Антипов, Roseville CA.",
    url: "https://drantipov.com/ru/for-dentists",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg",
        width: 1920,
        height: 1080,
        alt: "Стоматологам - направления и сотрудничество",
      },
    ],
  },
};

const services = [
  { title: "Имплантационная хирургия", description: "От одиночного импланта до полной реабилитации с протоколами немедленной нагрузки." },
  { title: "Реконструкция полного зубного ряда", description: "Имплантация All-on-4 и All-on-6 для пациентов с полной адентией или утратой большинства зубов." },
  { title: "Костная пластика", description: "Наращивание альвеолярного гребня, синус-лифтинг, сложные виды костной пластики." },
  { title: "Корректирующая хирургия челюстей", description: "Ортогнатика при тяжёлых нарушениях прикуса и асимметрии лица." },
  { title: "Хирургия апноэ сна", description: "Максилло-мандибулярное выдвижение (MMA) для лечения обструктивного апноэ сна." },
  { title: "Удаление зубов мудрости", description: "От простых до сложных удалений с вариантами седации." },
];

const whyRefer = [
  { title: "Прозрачная коммуникация", description: "Подробные послеоперационные отчёты в течение 24 часов - с фото и рекомендациями для протезного этапа." },
  { title: "Совместный подход", description: "Мы работаем как продолжение вашей практики, вовлекая вас на каждом этапе хирургического пути пациента." },
  { title: "Современные технологии", description: "3D КТ (cone beam), цифровое планирование и навигационная хирургия с шаблонами - для предсказуемого результата." },
  { title: "Внимание к пациенту", description: "Ваши пациенты получают такой же индивидуальный подход, как у вас - сохраняя стандарт качества вашей практики." },
];

export default function RussianForDentistsPage() {
  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <RuNavbar />
      <main>
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg" alt="Сотрудничество со стоматологами" fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <nav aria-label="Навигация" className="text-sm text-white/60 mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Стоматологам</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Для коллег</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">Партнёрство со стоматологами</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Направляйте ваших пациентов на сложные хирургические случаи - мы обеспечим качественную хирургию, прозрачную коммуникацию и возврат пациента в вашу практику для протезирования.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/ru/for-dentists/refer-patients" className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark">Направить пациента</Link>
              <a href={officePhoneHref} className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20">Позвонить {officePhone}</a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">Услуги для направления</h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">Полный спектр оральной и челюстно-лицевой хирургии</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-3xl border border-dark/5 bg-light p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
                  <p className="text-muted leading-7 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">Почему стоматологи направляют к нам</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {whyRefer.map((w) => (
                <div key={w.title} className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-3">{w.title}</h3>
                  <p className="text-muted leading-7">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-4">Связаться напрямую</h2>
            <p className="text-lg text-muted mb-8">Для срочных вопросов или обсуждения случая - свяжитесь с нашей командой:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={officePhoneHref} className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark">{officePhone}</a>
              <a href={`mailto:${officeEmail}`} className="rounded-2xl border border-primary/30 px-7 py-4 text-base font-bold text-primary hover:bg-primary hover:text-white transition-colors">{officeEmail}</a>
            </div>
          </div>
        </section>

        <RuCTA />
      </main>
      <RuFooter />
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  );
}
