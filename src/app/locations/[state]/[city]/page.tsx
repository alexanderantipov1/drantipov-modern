import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, Shield, Award } from "lucide-react";
import {
  cities,
  getCityByStateAndSlug,
  getStateName,
} from "@/constants/cities";
import { siteConfig } from "@/constants/siteConfig";
import { buildMetadata } from "@/lib/seo";
import {
  getCityLocalBusinessSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

const SERVICE_LABELS: Record<string, { label: string; href: string; description: string }> = {
  implants: {
    label: "Dental Implants",
    href: "/expertise/single-tooth",
    description: "Single-tooth and multi-tooth restoration with permanent titanium implants.",
  },
  "full-arch": {
    label: "Full-Arch Implants (All-on-4 / All-on-X)",
    href: "/expertise/full-arch-implants",
    description: "Full mouth reconstruction with as few as 4 implants supporting a full arch.",
  },
  "jaw-surgery": {
    label: "Corrective Jaw Surgery",
    href: "/expertise/jaw-surgery",
    description: "Orthognathic surgery for skeletal malocclusion, asymmetry, and bite correction.",
  },
  cosmetic: {
    label: "Facial Cosmetic Surgery",
    href: "/surgical-cases/facial-cosmetic-surgery",
    description: "Scarless mole removal, facial profile refinement, and aesthetic procedures.",
  },
  "sleep-apnea": {
    label: "Sleep Apnea Surgery (MMA)",
    href: "/expertise/sleep-apnea",
    description: "Maxillomandibular advancement for obstructive sleep apnea.",
  },
  "bone-grafting": {
    label: "Bone Grafting & Sinus Lifts",
    href: "/expertise/bone-grafting",
    description: "Rebuilding the foundation for implants when bone has been lost.",
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

  const title = `Oral Surgeon serving ${city.city}, ${city.state} — Dr. Alexander V. Antipov`;
  const description = `Board-certified oral & maxillofacial surgeon for patients in ${city.city}. Just ${city.driveTime} from our Roseville office. Dental implants, jaw surgery, sleep apnea (MMA), facial cosmetic surgery. Free 3D CT consultation.`;

  return buildMetadata({
    path: `/locations/${state}/${city.slug}`,
    absoluteTitle: title,
    description,
  });
}

function getCityFAQs(city: ReturnType<typeof getCityByStateAndSlug>) {
  if (!city) return [];
  return [
    {
      question: `How far is Dr. Antipov's office from ${city.city}?`,
      answer: `Our Roseville office is approximately ${city.distanceMi} miles from ${city.city} — about ${city.driveTime} by car. ${city.routes[0]}.`,
    },
    {
      question: `Do you accept dental insurance for patients from ${city.city}?`,
      answer:
        "We work with most major PPO dental insurance plans. For surgical procedures (jaw surgery, sleep apnea MMA, facial trauma), much of the treatment is covered under medical insurance — we'll verify both before your consultation.",
    },
    {
      question: `Are emergency oral surgery appointments available for ${city.city} patients?`,
      answer:
        "Yes. We provide 24/7 emergency on-call service for urgent oral and maxillofacial surgery needs. Call (916) 783-2110 — patients from the entire Sacramento Metro area are welcome for emergencies.",
    },
    {
      question: `What makes Dr. Antipov different from other oral surgeons near ${city.city}?`,
      answer:
        "Dr. Antipov is a Diplomate of the American Board of Oral and Maxillofacial Surgery (ABOMS), with 25+ years of experience and hospital privileges at Sutter Roseville, Sutter General, Mercy General, and Mercy San Juan. He has personally performed every surgery since opening his Roseville practice in 2008.",
    },
    {
      question: `Can I get a free 3D CT consultation if I live in ${city.city}?`,
      answer: `Yes — complimentary 3D CT scans and consultations are available to all new patients, including those traveling from ${city.city}. The scan takes about 10 minutes and provides a complete view of your jaw, sinuses, and bone density for accurate treatment planning.`,
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
      { name: "Home", url: siteConfig.url },
      { name: "Locations", url: `${siteConfig.url}/locations` },
      { name: stateName, url: `${siteConfig.url}/locations/${stateSlug}` },
      { name: city.city, url: `${siteConfig.url}/locations/${stateSlug}/${city.slug}` },
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
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">
              Locations
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/locations/${stateSlug}`} className="hover:text-white">
              {stateName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.city}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                Serving {city.region}
              </span>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Oral Surgeon serving <span className="text-primary">{city.city}, {city.state}</span>
              </h1>
              <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
                Dr. Alexander V. Antipov has provided full-scope oral &amp; maxillofacial surgery to patients from {city.city} since opening his Roseville practice in 2008. {city.demographic}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="text-white">{city.driveTime}</strong> from Roseville
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="text-white">{city.distanceMi} mi</strong> distance
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>ABOMS Board-Certified</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9167832110"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call (916) 783-2110
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8">
                <div className="flex items-start gap-3 mb-5">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-1">Practice Credentials</h2>
                    <p className="text-sm text-white/70">25+ years of full-scope surgical experience</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-white/85">
                  <li>· Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS)</li>
                  <li>· Hospital privileges at Sutter Roseville &amp; Mercy General</li>
                  <li>· California Dental License #50724</li>
                  <li>· General Anesthesia Permit #GA 1446</li>
                  <li>· Founder, Smile Again Foundation</li>
                  <li>· Albert Einstein College of Medicine — OMS Residency</li>
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
                Getting here from {city.city}
              </h2>
              <p className="text-neutral-600 mb-6">
                Our office is at <strong>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</strong>. From {city.city}, most patients take one of these routes:
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
                Familiar landmarks near {city.city}
              </h2>
              <p className="text-neutral-600 mb-6">
                Many of our {city.city} patients describe their location relative to these well-known places:
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
              Services for {city.city} patients
            </h2>
            <p className="mt-4 text-neutral-600">
              Below are the procedures most frequently chosen by patients traveling from {city.city}.
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
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 text-center mb-10">
            Frequently asked questions — {city.city} patients
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
        heading={`Ready to schedule from ${city.city}?`}
        subheading={`Most ${city.city} patients reach us in about ${city.driveTime}. Free 3D CT consultation, two practices, one trusted surgical team.`}
      />
    </>
  );
}
