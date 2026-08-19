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
import { buildMetadata } from "@/lib/seo";
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

  const title = `Oral Surgeon serving ${stateName} - Dr. Alexander V. Antipov`;
  const description = `Board-certified oral & maxillofacial surgeon serving ${stateCities.length}+ ${stateName} communities from Roseville: dental implants, jaw surgery, sleep apnea (MMA), and facial cosmetic surgery. Free 3D CT consultation.`;

  return buildMetadata({
    path: `/locations/${state}`,
    absoluteTitle: title.length > 60 ? `Oral Surgeon serving ${stateName} | Dr. Antipov` : title,
    description,
  });
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
      "@id": `${siteConfig.url}/locations/${state}#business`,
      name: `${siteConfig.name} - Serving ${stateName}`,
      description: `Oral & maxillofacial surgery practice serving patients across ${stateName}, led by Dr. Alexander V. Antipov (ABOMS Diplomate).`,
      url: `${siteConfig.url}/locations/${state}`,
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
      { name: "Home", url: siteConfig.url },
      { name: "Locations", url: `${siteConfig.url}/locations` },
      { name: stateName, url: `${siteConfig.url}/locations/${state}` },
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
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">
              Locations
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{stateName}</span>
          </nav>

          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            Serving {stateName}
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Oral Surgeon serving <span className="text-primary">{stateName}</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
            Dr. Alexander V. Antipov provides full-scope oral &amp; maxillofacial surgery to patients across {stateName} from his Roseville practice - dental implants, corrective jaw surgery, sleep apnea (MMA), bone grafting, and facial cosmetic procedures.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-4 w-4 text-primary" />
              <span>ABOMS Board-Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="h-4 w-4 text-primary" />
              <span>25+ years of full-scope surgery</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4 text-primary" />
              <span>{stateCities.length} communities served</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call (916) 783-2110
            </a>
          </div>
        </div>
      </section>

      {/* Cities by region */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900">
              {stateName} communities we serve
            </h2>
            <p className="mt-4 text-neutral-600">
              Choose your city for local driving routes, landmarks, and the procedures most requested in your area.
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
                      href={`/locations/${state}/${c.slug}`}
                      className="block bg-bone rounded-2xl p-5 border border-neutral-200 hover:border-primary hover:shadow-lg transition-all group"
                    >
                      <h4 className="font-bold text-neutral-900 group-hover:text-primary transition-colors">
                        {c.city}, {c.state}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600">
                        {c.driveTime} · {c.distanceMi} mi from Roseville
                      </p>
                      <span className="mt-3 inline-block text-primary text-sm font-semibold">
                        View {c.city} →
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
        heading={`Serving patients across ${stateName}`}
        subheading="Free 3D CT consultation, two practices, one trusted surgical team based in Roseville."
      />
    </>
  );
}
