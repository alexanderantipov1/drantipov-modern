import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Smile Again Foundation - Restoring Smiles, Restoring Lives | Dr. Antipov",
  description:
    "Smile Again Foundation, founded by Dr. Alexander Antipov in 2025, provides pro bono restorative dental care to patients in need. Mission-driven nonprofit serving Northern California.",
  alternates: { canonical: "/smile-again-foundation" },
  openGraph: {
    title: "Smile Again Foundation",
    description: "Restoring smiles for patients in need.",
    url: `${siteConfig.url}/smile-again-foundation`,
    type: "website",
    images: [{ url: "/images/office-tour/12/gallery@2x-surgical-planning.jpg", width: 1600, height: 1067, alt: "Smile Again Foundation" }],
  },
};

const pillars = [
  { title: "Pro bono full-arch restoration", description: "Free All-on-4 and complex implant restoration for selected patients facing financial hardship who would otherwise live without functional teeth." },
  { title: "Patient education", description: "Bilingual educational materials (English, Russian, Spanish) on oral health, implant care, and post-surgical recovery - distributed at community health events." },
  { title: "Provider training", description: "Hands-on workshops for dental and surgical residents on advanced implant techniques, taught by Dr. Antipov in collaboration with regional residency programs." },
  { title: "International mission support", description: "Supporting Dr. Kahwach's international mission work in Europe, Africa, the Caribbean, and the Middle East with surgical supplies and patient sponsorship." },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/smile-again-foundation#org`,
  name: "Smile Again Foundation",
  url: `${siteConfig.url}/smile-again-foundation`,
  founder: { "@id": `${siteConfig.url}/#physician` },
  foundingDate: "2025",
  description: "Nonprofit dedicated to expanding access to restorative dental care and mission-driven patient support.",
};

export default function SmileAgainFoundationPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Smile Again Foundation", url: `${siteConfig.url}/smile-again-foundation` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([orgSchema, breadcrumb])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/office-tour/12/gallery@2x-surgical-planning.jpg"
            alt="Dr. Antipov performing surgery, reviewing a 3D scan during a procedure"
            fill
            className="object-cover object-[center_30%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Smile Again Foundation</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Nonprofit &middot; Founded 2025</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Smile Again Foundation
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Restoring smiles, restoring lives. A nonprofit dedicated to making advanced restorative dental care accessible to patients who couldn't otherwise afford it.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center">Our mission</h2>
          <p className="mt-8 text-xl leading-9 text-neutral-700">
            Smile Again Foundation was founded in 2025 by Dr. Alexander V. Antipov, DDS - a board-certified oral and maxillofacial surgeon who has personally performed over 10,000 surgeries during his 25+ year career.
          </p>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            For too many people, the ability to chew, smile, and speak confidently is a luxury they can't afford. Smile Again Foundation exists to change that - providing pro bono full-arch restoration to selected patients, supporting bilingual community health education, and sponsoring international surgical mission work.
          </p>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Four pillars</h2>
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
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">For patients</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-neutral-900">Apply for sponsored care</h3>
              <p className="mt-3 text-neutral-700 leading-7">
                We accept a limited number of full-arch restoration candidates each year. Applications open during specific cycles. Email for the current application window.
              </p>
              <a href="mailto:foundation@galleriaoms.com" className="mt-5 inline-block text-primary-600 hover:text-primary-700 font-bold">
                foundation@galleriaoms.com
              </a>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">For partners & press</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-neutral-900">Press & partnerships</h3>
              <p className="mt-3 text-neutral-700 leading-7">
                Journalists, healthcare partners, and corporate sponsors - contact us for press releases, interview requests, and partnership inquiries.
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
          <h2 className="font-serif text-3xl font-bold mb-5 sm:text-4xl">Restore a smile. Change a life.</h2>
          <p className="text-lg text-white/85 mb-8">
            Help us reach more patients. Every restored smile begins with someone who believed it was possible.
          </p>
          <a href="mailto:foundation@galleriaoms.com" className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark">
            Contact the Foundation
          </a>
        </div>
      </section>
    </>
  );
}
