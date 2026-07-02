import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "Гид для иногородних пациентов — Розвилл, Калифорния",
  description:
    "Полный гид для пациентов из других штатов и стран: аэропорты Сакраменто, рекомендованные отели, жильё на восстановление и как спланировать многодневное лечение у доктора Антипова.",
  alternates: {
    canonical: "/ru/for-patients/travel",
    languages: {
      en: "/for-patients/travel",
      ru: "/ru/for-patients/travel",
      "x-default": "/for-patients/travel",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Гид для иногородних пациентов — Розвилл, Калифорния",
    description: "Логистика для пациентов, прилетающих из других штатов.",
    url: `${siteConfig.url}/ru/for-patients/travel`,
    type: "website",
    images: [{ url: "/images/landing-pages/dental-implants/art/office01-d1051d16.jpg", width: 1920, height: 1080, alt: "Гид для иногородних пациентов в Розвилле" }],
  },
};

const flightInfo = [
  { airport: "SMF — Сакраменто International", drive: "30 мин", note: "Ближайший крупный аэропорт. United, Southwest, Delta, American, Alaska — прямые рейсы из большинства городов США." },
  { airport: "OAK — Окленд International", drive: "1 ч 45 мин", note: "Часто билеты дешевле. Хаб Southwest. Удобная I-80 East до Розвилла." },
  { airport: "SFO — Сан-Франциско International", drive: "2 ч 15 мин", note: "Большинство международных рейсов. Аренда Hertz/Avis доступна." },
  { airport: "RNO — Reno-Tahoe International", drive: "2 ч 15 мин", note: "Альтернатива для пациентов из Невады или из района Рино-Тахо." },
];

const hotels = [
  { name: "Hyatt Place Roseville", distance: "5 минут", price: "$160–200/ночь", note: "В пешей доступности от клиники. Рекомендуем для коротких послеоперационных визитов." },
  { name: "Hilton Garden Inn Roseville", distance: "8 минут", price: "$170–220/ночь", note: "Тихо, есть номера-сьюты, полный завтрак включён." },
  { name: "Residence Inn by Marriott", distance: "10 минут", price: "$200–280/ночь", note: "Кухонная зона — идеально для длительного проживания. Полноценная кухня для мягкой пищи." },
  { name: "Holiday Inn Express Roseville-Galleria", distance: "10 минут", price: "$130–180/ночь", note: "Бюджетный вариант. Бесплатный завтрак, удобная парковка." },
];

const itineraryDays = [
  { day: "День 1 — Прилёт и отдых", description: "Прилетаете, заселяетесь в отель, лёгкий ужин. Алкоголь накануне операции — нельзя. Пейте воду." },
  { day: "День 2 — День операции", description: "Предоперационная консультация (если её не было заранее). All-on-4 или импланты занимают 3–5 часов под внутривенной седацией. Сопровождающий отвозит вас в отель. Отдых, лёд, мягкая пища." },
  { day: "День 3 — Контрольный осмотр", description: "Короткий повторный визит (~20 минут): хирург проверяет операционные зоны, отслеживает боль и отёк. Большинство пациентов возвращается в отель." },
  { day: "Дни 4–5 — Восстановление", description: "Оставайтесь рядом с клиникой, мягкая диета, лёгкая активность. Большинство пациентов улетает домой на 5–6 день с разрешения хирурга." },
  { day: "Опционально дни 6–7", description: "Если план лечения требует поэтапной хирургии (например, костная пластика + импланты), дополнительные дни упрощают логистику." },
];

const checklist = [
  "Удостоверение личности с фото и страховые карты",
  "Список принимаемых лекарств с дозировками",
  "Удобная свободная одежда с короткими рукавами",
  "Мягкая подушка для опоры в дороге обратно",
  "Запас мягкой пищи в отеле (йогурт, протеиновые коктейли, супы)",
  "Сопровождающий в день операции (обязателен при внутривенной седации)",
  "Арендованная машина или аккаунт в Uber/Lyft для передвижения",
  "Наушники для расслабления во время восстановления",
];

export default function TravelPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg" alt="Гид для иногородних пациентов" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/ru/for-patients" className="hover:text-primary-light">Пациентам</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Гид для иногородних</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Пациентам из других штатов и стран</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Поездка в Розвилл на операцию
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Полное логистическое руководство для пациентов, прилетающих из других штатов или стран. Аэропорты, отели, сроки восстановления и чего ждать во время визита.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Как добраться</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {flightInfo.map((f) => (
              <div key={f.airport} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{f.airport}</h3>
                  <span className="text-sm font-bold text-primary-600">{f.drive} на машине</span>
                </div>
                <p className="text-neutral-700 leading-7 text-sm">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Где остановиться</h2>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
            Все рекомендованные отели — в пределах 10 минут от клиники. Выбирайте в зависимости от продолжительности визита и предпочтений по сервису.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {hotels.map((h) => (
              <div key={h.name} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{h.name}</h3>
                  <span className="text-xs font-bold text-primary-600 whitespace-nowrap">{h.distance}</span>
                </div>
                <p className="text-sm font-bold text-neutral-900 mb-2">{h.price}</p>
                <p className="text-neutral-700 leading-7 text-sm">{h.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-600">
            Цены типичны для стандартных номеров. В большинстве отелей есть сьюты и номера для длительного проживания. Мы поможем подобрать вариант, если расскажете о плане лечения.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Типовой график лечения на 5 дней</h2>
          <ol className="relative space-y-8 border-l-2 border-primary-600/30 pl-8">
            {itineraryDays.map((d, i) => (
              <li key={d.day} className="relative">
                <span className="absolute -left-[42px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-xs font-bold text-primary-600">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{d.day}</h3>
                <p className="mt-2 leading-7 text-neutral-700">{d.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Чек-лист для поездки</h2>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-neutral-700 leading-7">
                  <svg className="h-5 w-5 shrink-0 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
