import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, Shield, Award, DollarSign } from "lucide-react";
import {
  cities,
  getCityByStateAndSlug,
  getStateName,
} from "@/constants/cities";
import { siteConfig } from "@/constants/siteConfig";
import {
  getCityLocalBusinessSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

const SERVICE_LABELS: Record<string, { label: string; href: string; description: string }> = {
  implants: {
    label: "Зубные импланты",
    href: "/ru/expertise/single-tooth",
    description: "Восстановление одного или нескольких зубов на постоянных титановых имплантах.",
  },
  "full-arch": {
    label: "Импланты на полную челюсть (All-on-4 / All-on-X)",
    href: "/ru/expertise/full-arch-implants",
    description: "Восстановление всей челюсти всего на 4 имплантах, удерживающих полную дугу.",
  },
  "jaw-surgery": {
    label: "Ортогнатическая хирургия",
    href: "/ru/expertise/jaw-surgery",
    description: "Ортогнатические операции при скелетных нарушениях прикуса, асимметрии и коррекции прикуса.",
  },
  cosmetic: {
    label: "Эстетическая хирургия лица",
    href: "/ru/surgical-cases/facial-cosmetic-surgery",
    description: "Удаление родинок без рубцов, коррекция профиля лица и эстетические процедуры.",
  },
  "sleep-apnea": {
    label: "Хирургия апноэ сна (MMA)",
    href: "/ru/expertise/sleep-apnea",
    description: "Максилломандибулярное выдвижение при обструктивном апноэ сна.",
  },
  "bone-grafting": {
    label: "Костная пластика и синус-лифтинг",
    href: "/ru/expertise/bone-grafting",
    description: "Восстановление основы для имплантов при утрате костной ткани.",
  },
};

export async function generateStaticParams() {
  return cities.map((c) => ({ state: c.state.toLowerCase(), city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state, city: slug } = await params;
  const city = getCityByStateAndSlug(state, slug);
  if (!city) return {};

  const title = `Челюстно-лицевой хирург для пациентов из ${city.city}, ${city.state} — Dr. Alexander V. Antipov`;
  const description = `Сертифицированный челюстно-лицевой хирург принимает пациентов из ${city.city}. Всего ${city.driveTime} от клиники в Roseville. Зубные импланты, ортогнатическая хирургия, апноэ сна (MMA), эстетическая хирургия лица. Бесплатная консультация с 3D КТ.`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/ru/locations/${state}/${city.slug}`,
      languages: {
        ru: `/ru/locations/${state}/${city.slug}`,
        en: `/locations/${state}/${city.slug}`,
        "x-default": `/locations/${state}/${city.slug}`,
      },
    },
  };
}

function getCityFAQs(city: ReturnType<typeof getCityByStateAndSlug>) {
  if (!city) return [];
  return [
    {
      question: `Как далеко клиника Dr. Antipov от ${city.city}?`,
      answer: `Наша клиника в Roseville находится примерно в ${city.distanceMi} милях от ${city.city} — около ${city.driveTime} на машине. ${city.routes[0]}.`,
    },
    {
      question: `Сколько стоят зубные импланты для пациентов из ${city.city}?`,
      answer:
        "Один зубной имплант (имплант, абатмент и коронка) обычно стоит $4,000–$6,000. Восстановление полной челюсти, например All-on-4, как правило, обходится в $25,000–$35,000 за дугу. Точная стоимость зависит от объёма костной ткани, количества имплантов и необходимости костной пластики — мы предоставляем понятную письменную смету на бесплатной консультации с 3D КТ и предлагаем рассрочку через CareCredit и Cherry.",
    },
    {
      question: `Принимаете ли вы стоматологическую страховку для пациентов из ${city.city}?`,
      answer:
        "Мы работаем с большинством крупных стоматологических PPO-страховок. Хирургические процедуры (ортогнатическая хирургия, MMA при апноэ сна, лечение травм лица) во многом покрываются медицинской страховкой — мы проверим обе страховки перед вашей консультацией.",
    },
    {
      question: `Доступны ли экстренные приёмы челюстно-лицевого хирурга для пациентов из ${city.city}?`,
      answer:
        "Да. Мы обеспечиваем круглосуточную экстренную дежурную помощь при срочных случаях челюстно-лицевой хирургии. Звоните (916) 783-2110 — мы принимаем экстренных пациентов со всего района Sacramento Metro.",
    },
    {
      question: `Чем Dr. Antipov отличается от других челюстно-лицевых хирургов рядом с ${city.city}?`,
      answer:
        "Dr. Antipov — дипломант Американской коллегии челюстно-лицевой хирургии (ABOMS), с опытом более 25 лет и правом практики в больницах Sutter Roseville, Sutter General, Mercy General и Mercy San Juan. Он лично провёл каждую операцию с момента открытия своей клиники в Roseville в 2008 году.",
    },
    {
      question: `Могу ли я получить бесплатную консультацию с 3D КТ, если живу в ${city.city}?`,
      answer: `Да — бесплатные 3D КТ-снимки и консультации доступны всем новым пациентам, включая тех, кто приезжает из ${city.city}. Снимок занимает около 10 минут и даёт полную картину челюсти, пазух и плотности кости для точного планирования лечения.`,
    },
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city: slug } = await params;
  const city = getCityByStateAndSlug(state, slug);
  if (!city) notFound();

  const stateName = getStateName(state) ?? city.stateName;
  const stateSlug = city.state.toLowerCase();
  const faqs = getCityFAQs(city);
  const services = city.servicesEmphasis
    .map((s) => SERVICE_LABELS[s])
    .filter((s): s is { label: string; href: string; description: string } => Boolean(s));

  const structuredData = [
    getCityLocalBusinessSchema(city),
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteConfig.url}/ru` },
      { name: "Локации", url: `${siteConfig.url}/ru/locations` },
      { name: stateName, url: `${siteConfig.url}/ru/locations/${stateSlug}` },
      { name: city.city, url: `${siteConfig.url}/ru/locations/${stateSlug}/${city.slug}` },
    ]),
    getFAQSchema(faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/ru" className="hover:text-white">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href="/ru/locations" className="hover:text-white">
              Локации
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/ru/locations/${stateSlug}`} className="hover:text-white">
              {stateName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.city}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                Приём пациентов из региона {city.region}
              </span>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Челюстно-лицевой хирург — <span className="text-primary">{city.city}, {city.state}</span>
              </h1>
              <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
                Dr. Alexander V. Antipov проводит челюстно-лицевую хирургию полного профиля для пациентов из {city.city} с момента открытия своей клиники в Roseville в 2008 году. {city.demographic}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="text-white">{city.driveTime}</strong> от Roseville
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="text-white">{city.distanceMi} миль</strong> расстояние
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Сертификация ABOMS</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9167832110"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Позвонить (916) 783-2110
                </a>
                <Link
                  href="/ru/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Записаться на консультацию
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8">
                <div className="flex items-start gap-3 mb-5">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-1">Квалификация клиники</h2>
                    <p className="text-sm text-white/70">25+ лет опыта хирургии полного профиля</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-white/85">
                  <li>· Дипломант Американской коллегии челюстно-лицевой хирургии (ABOMS)</li>
                  <li>· Право практики в больницах Sutter Roseville и Mercy General</li>
                  <li>· Стоматологическая лицензия Калифорнии #50724</li>
                  <li>· Разрешение на общую анестезию #GA 1446</li>
                  <li>· Основатель фонда Smile Again Foundation</li>
                  <li>· Albert Einstein College of Medicine — ординатура по челюстно-лицевой хирургии</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving routes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Как добраться из {city.city}
              </h2>
              <p className="text-neutral-600 mb-6">
                Наша клиника находится по адресу <strong>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</strong>. Из {city.city} большинство пациентов едет одним из этих маршрутов:
              </p>
              <ul className="space-y-3">
                {city.routes.map((route, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-neutral-700">{route}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Знакомые ориентиры рядом с {city.city}
              </h2>
              <p className="text-neutral-600 mb-6">
                Многие наши пациенты из {city.city} описывают своё местоположение относительно этих известных мест:
              </p>
              <ul className="grid grid-cols-1 gap-2">
                {city.landmarks.map((landmark) => (
                  <li key={landmark} className="flex items-center gap-2 text-neutral-700">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services emphasis */}
      <section className="py-16 bg-bone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              Услуги для пациентов из {city.city}
            </h2>
            <p className="mt-4 text-neutral-600">
              Ниже — процедуры, которые чаще всего выбирают пациенты, приезжающие из {city.city}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
                <span className="mt-3 inline-block text-primary text-sm font-semibold">
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              Прозрачные цены
            </span>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              Стоимость зубных имплантов в {city.city}
            </h2>
            <p className="mt-4 text-neutral-600">
              Доступные и прозрачные цены на импланты для пациентов из {city.city} — с рассрочкой через
              CareCredit и Cherry и письменной сметой на бесплатной консультации с 3D КТ.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-bone rounded-2xl p-6 border border-neutral-200">
              <DollarSign className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold text-lg text-neutral-900">Один зубной имплант</h3>
              <p className="mt-1 text-2xl font-bold text-primary">$4,000&ndash;$6,000</p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Имплант, абатмент и индивидуальная коронка для замены одного утраченного зуба.
              </p>
            </div>
            <div className="bg-bone rounded-2xl p-6 border border-neutral-200">
              <DollarSign className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold text-lg text-neutral-900">Полная челюсть (All-on-4)</h3>
              <p className="mt-1 text-2xl font-bold text-primary">$25,000&ndash;$35,000</p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Полный несъёмный ряд зубов всего на четырёх имплантах, за дугу.
              </p>
            </div>
            <div className="bg-bone rounded-2xl p-6 border border-neutral-200">
              <DollarSign className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold text-lg text-neutral-900">Рассрочка</h3>
              <p className="mt-1 text-2xl font-bold text-primary">Варианты без первого взноса</p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Ежемесячные планы через CareCredit и Cherry, а также работа с PPO-страховкой.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-neutral-600">
            Итоговая стоимость зависит от объёма костной ткани, количества имплантов и необходимости костной пластики.{" "}
            <Link href="/ru/all-on-4-cost" className="text-primary font-semibold underline">
              Смотреть полный разбор стоимости All-on-4 →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-bone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 text-center mb-10">
            Частые вопросы — пациенты из {city.city}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-bone/50 border border-neutral-200 rounded-2xl p-5 cursor-pointer"
              >
                <summary className="font-semibold text-neutral-900 list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DualCTA
        variant="dual"
        heading={`Готовы записаться из ${city.city}?`}
        subheading={`Большинство пациентов из ${city.city} добираются до нас примерно за ${city.driveTime}. Бесплатная консультация с 3D КТ, две клиники, одна надёжная хирургическая команда.`}
      />
    </>
  );
}
