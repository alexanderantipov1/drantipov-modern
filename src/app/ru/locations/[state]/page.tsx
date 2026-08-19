import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Phone, Shield, Award } from "lucide-react";
import {
  stateSlugs,
  getCitiesByState,
  getStateName,
} from "@/constants/cities";
import { siteConfig } from "@/constants/siteConfig";
import {
  getBreadcrumbSchema,
  getCityLocalBusinessSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

export async function generateStaticParams() {
  return stateSlugs.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  const stateCities = getCitiesByState(state);
  if (!stateName || stateCities.length === 0) return {};

  const title = `Челюстно-лицевой хирург в штате ${stateName} - Dr. Alexander V. Antipov`;
  const description = `Сертифицированный челюстно-лицевой хирург принимает пациентов из ${stateCities.length}+ населённых пунктов штата ${stateName} в клинике в Roseville: зубные импланты, ортогнатическая хирургия, апноэ сна (MMA) и эстетическая хирургия лица. Бесплатная консультация с 3D КТ.`;

  return {
    title: title.length > 60 ? { absolute: `Челюстно-лицевой хирург - штат ${stateName} | Dr. Antipov` } : { absolute: title },
    description,
    alternates: {
      canonical: `/ru/locations/${state}`,
      languages: {
        ru: `/ru/locations/${state}`,
        en: `/locations/${state}`,
        "x-default": `/locations/${state}`,
      },
    },
  };
}

export default async function StateHubPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateName = getStateName(state);
  const stateCities = getCitiesByState(state);
  if (!stateName || stateCities.length === 0) notFound();

  // Group cities by region for an internal-link-dense hub.
  const regions = Array.from(new Set(stateCities.map((c) => c.region)));
  const citiesByRegion = regions.map((region) => ({
    region,
    cities: stateCities.filter((c) => c.region === region),
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}/ru/locations/${state}#business`,
      inLanguage: "ru",
      name: `${siteConfig.name} - приём пациентов из штата ${stateName}`,
      description: `Практика челюстно-лицевой хирургии, обслуживающая пациентов по всему штату ${stateName}, под руководством Dr. Alexander V. Antipov (дипломант ABOMS).`,
      url: `${siteConfig.url}/ru/locations/${state}`,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}`,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.7521,
        longitude: -121.2880,
      },
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
      areaServed: stateCities.map((c) => ({
        "@type": "City",
        name: c.city,
        containedInPlace: { "@type": "State", name: c.stateName },
      })),
    },
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteConfig.url}/ru` },
      { name: "Локации", url: `${siteConfig.url}/ru/locations` },
      { name: stateName, url: `${siteConfig.url}/ru/locations/${state}` },
    ]),
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
            <span className="text-white">{stateName}</span>
          </nav>

          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            Приём пациентов из штата {stateName}
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Челюстно-лицевой хирург - штат <span className="text-primary">{stateName}</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
            Dr. Alexander V. Antipov проводит челюстно-лицевую хирургию полного профиля для пациентов по всему штату {stateName} в своей клинике в Roseville - зубные импланты, ортогнатическая хирургия, апноэ сна (MMA), костная пластика и эстетические операции на лице.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-4 w-4 text-primary" />
              <span>Сертификация ABOMS</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="h-4 w-4 text-primary" />
              <span>25+ лет хирургии полного профиля</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4 text-primary" />
              <span>{stateCities.length} населённых пунктов</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              <Phone className="h-4 w-4" />
              Позвонить (916) 783-2110
            </a>
          </div>
        </div>
      </section>

      {/* Cities by region */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              Населённые пункты штата {stateName}, которые мы обслуживаем
            </h2>
            <p className="mt-4 text-neutral-600">
              Выберите свой город - там вы найдёте маршруты, местные ориентиры и процедуры, которые чаще всего запрашивают в вашем районе.
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
                      href={`/ru/locations/${state}/${c.slug}`}
                      className="block bg-bone rounded-2xl p-5 border border-neutral-200 hover:border-primary hover:shadow-lg transition-all group"
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

      <DualCTA
        variant="dual"
        heading={`Приём пациентов по всему штату ${stateName}`}
        subheading="Бесплатная консультация с 3D КТ, две клиники и одна надёжная хирургическая команда в Roseville."
      />
    </>
  );
}
