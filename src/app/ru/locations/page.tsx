import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Clock } from "lucide-react";
import { getCitiesByState, getStateName } from "@/constants/cities";
import { siteConfig } from "@/constants/siteConfig";
import {
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Локации и зона обслуживания | Roseville, Сакраменто" },
  description:
    "Главный офис в Roseville, Калифорния. Принимаем пациентов из Сакраменто, района залива и десятков городов Северной Калифорнии. Имплантация, ортогнатика, эстетика лица.",
  alternates: {
    canonical: "/ru/locations",
    languages: {
      ru: "/ru/locations",
      en: "/locations",
      "x-default": "/locations",
    },
  },
  openGraph: {
    title: "Локации и зона обслуживания",
    description:
      "Офис в Roseville, Калифорния. Принимаем пациентов из Сакраменто и городов Северной Калифорнии.",
    url: `${siteConfig.url}/ru/locations`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/locations/locations@2x-dc292d32.jpg",
        width: 1200,
        height: 630,
        alt: "Локации и зона обслуживания доктора Антипова",
      },
    ],
  },
};

export default function RuLocationsPage() {
  const stateSlug = "ca";
  const stateName = getStateName(stateSlug) ?? "California";
  const stateCities = getCitiesByState(stateSlug);

  const regions = Array.from(new Set(stateCities.map((c) => c.region)));
  const citiesByRegion = regions.map((region) => ({
    region,
    cities: stateCities.filter((c) => c.region === region),
  }));

  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: siteConfig.url },
      { name: "Локации", url: `${siteConfig.url}/ru/locations` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      <PageHero
        image="/images/locations/locations@2x-dc292d32.jpg"
        eyebrow="Как нас найти"
        title="Локации и зона обслуживания"
        subtitle="Главный офис в Roseville, Калифорния. К нам приезжают пациенты из Сакраменто и десятков городов Северной Калифорнии."
        overlay="navy"
      />

      {/* Office + intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              Наш офис
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Вся хирургия проводится в современной операционной в Roseville.
              Доктор Александр Антипов выполняет полный спектр оральной и
              челюстно-лицевой хирургии: имплантация зубов, коррекция прикуса,
              хирургия апноэ сна (MMA), костная пластика и эстетические
              процедуры лица.
            </p>
            <div className="mt-6 space-y-3 text-neutral-700">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.suite}
                  <br />
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-primary"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Пн–Пт, приём по записи</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-bone border border-neutral-200 p-8">
            <h3 className="font-serif text-2xl font-bold text-neutral-900">
              Удобно добираться
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Roseville находится в центре региона: большинство пациентов
              доезжают за 30 минут или меньше. Для пациентов из других городов
              помогаем спланировать визит и при необходимости совмещаем этапы
              лечения за одну поездку.
            </p>
            <Link
              href="/ru/for-patients/consultation"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* Cities by region */}
      <section className="py-16 bg-bone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              Города {stateName}, которые мы обслуживаем
            </h2>
            <p className="mt-4 text-neutral-600">
              Выберите свой город — расскажем о маршруте, ориентирах и
              процедурах, которые чаще всего запрашивают в вашем районе.
            </p>
          </div>

          <div className="space-y-10">
            {citiesByRegion.map(({ region, cities: regionCities }) => (
              <div key={region}>
                <h3 className="font-bold text-lg text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {region}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/ru/locations/${stateSlug}/${c.slug}`}
                      className="block bg-white rounded-2xl p-5 border border-neutral-200 hover:border-primary hover:shadow-lg transition-all group"
                    >
                      <h4 className="font-bold text-neutral-900 group-hover:text-primary transition-colors">
                        {c.city}, {c.state}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        {c.driveTime} · {c.distanceMi} миль от Roseville
                      </p>
                      <span className="mt-3 inline-block text-primary text-sm font-semibold">
                        Открыть {c.city} →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold">
            Бесплатная консультация с 3D КТ
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            Одна команда хирургов в Roseville, современная диагностика и
            индивидуальный план лечения. Запишитесь удобным способом.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/ru/for-patients/consultation"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Записаться онлайн
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
