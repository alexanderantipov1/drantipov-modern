import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Oral Surgery Glossary — Terms Explained" },
  description: "Plain-English definitions for implants, jaw surgery, sleep apnea, bone grafting, and other oral surgery terminology.",
  alternates: {
    canonical: `${siteConfig.url}/glossary`,
    languages: {
      en: `${siteConfig.url}/glossary`,
      "x-default": `${siteConfig.url}/glossary`,
    },
  },
  openGraph: {
    title: "Dental Implant & Oral Surgery Glossary",
    description: "Definitions for key oral surgery terms — implants, osseointegration, bone grafting, orthognathic surgery.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Implant & Oral Surgery Glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implant & Oral Surgery Glossary",
    description: "Definitions for key oral surgery terms — implants, osseointegration, bone grafting, orthognathic surgery.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
};

interface Term {
  term: string;
  body: string;
}

const sections: { heading: string; intro: string; terms: Term[] }[] = [
  {
    heading: "Dental Implants",
    intro: "Core terms in implantology — what 'implant' means, how protocols differ, and why surgeons use specific names.",
    terms: [
      { term: "Dental implant", body: "A titanium or zirconia post surgically placed in the jawbone to replace a missing tooth root. After osseointegration, a crown, bridge, or denture attaches to it." },
      { term: "Single tooth implant", body: "Replacement of a single missing tooth with an implant + abutment + crown. Doesn't affect adjacent teeth (unlike traditional bridges)." },
      { term: "All-on-4", body: "Full arch of fixed teeth supported by 4 implants. Two front implants placed vertically, two rear implants angled to avoid sinuses and nerves. Typically immediate-load: temporary teeth attached the day of surgery." },
      { term: "All-on-6", body: "Same concept as All-on-4 but with 6 implants for additional support — usually when adequate bone volume is present or a larger jaw is treated." },
      { term: "Zygomatic implants", body: "Long implants anchored in the zygomatic (cheek) bone instead of the upper jaw. Used when severe bone loss makes traditional implants and sinus lifts impossible." },
      { term: "Immediate load", body: "Protocol where temporary teeth are attached to implants the same day as surgery. Requires sufficient primary stability (typically ≥35 Ncm)." },
      { term: "Osseointegration", body: "Biological fusion of the implant surface with surrounding bone. Takes 3-6 months. Without full integration, the implant cannot bear long-term load." },
      { term: "Snap-on dentures / Overdentures", body: "A denture that snaps onto 2-4 implants via buttons or a bar. Removable for cleaning but holds firmly during eating." },
    ],
  },
  {
    heading: "Bone & Preparation",
    intro: "An implant needs sufficient bone volume and density. When it's not there, here's how it gets built up.",
    terms: [
      { term: "Bone grafting", body: "Adding bone material to a site that lacks enough native bone for an implant. Materials include autogenous (your own), allograft (donor), xenograft (bovine), or synthetic options." },
      { term: "Sinus lift", body: "Procedure to add bone in the upper jaw by lifting the floor of the maxillary sinus. Lateral approach (window) or crestal approach (through the implant site)." },
      { term: "Ridge augmentation", body: "Restoring the width or height of the alveolar ridge lost to long-term tooth absence. Performed separately or simultaneously with implant placement." },
      { term: "Socket preservation", body: "Placing bone material in the socket immediately after tooth extraction to prevent bone resorption and preserve volume for future implants." },
      { term: "Block graft", body: "A solid block of bone (autogenous or allograft) screwed into a deficient area. Used for severe ridge defects." },
    ],
  },
  {
    heading: "Corrective Jaw Surgery",
    intro: "Orthognathic surgery terms — what each procedure does and when it's used.",
    terms: [
      { term: "Le Fort I osteotomy", body: "Surgical cut across the upper jaw above the tooth roots. Used to reposition the maxilla forward, back, up, down, or to split it into segments." },
      { term: "BSSO (Bilateral Sagittal Split Osteotomy)", body: "Surgical splitting of the lower jaw on both sides to reposition it forward or backward. The most common mandibular orthognathic procedure." },
      { term: "Genioplasty", body: "Surgical reshaping of the chin — advancement, reduction, lengthening, or rotation. Often combined with jaw surgery for facial harmony." },
      { term: "MMA (Maxillomandibular Advancement)", body: "Simultaneous forward movement of both jaws. Highly effective surgical treatment for obstructive sleep apnea." },
      { term: "Malocclusion", body: "Misalignment of the bite. Class I = generally normal alignment with crowding. Class II = upper jaw ahead of lower (overbite). Class III = lower jaw ahead of upper (underbite)." },
      { term: "Virtual surgical planning (VSP)", body: "3D digital simulation of jaw surgery using CBCT data. Allows precise pre-surgical planning and creation of patient-specific surgical guides." },
    ],
  },
  {
    heading: "Anesthesia & Sedation",
    intro: "Levels of comfort available during oral surgery — what each one means.",
    terms: [
      { term: "Local anesthesia", body: "Numbing of just the surgical area. Patient stays fully awake. Used for simple extractions and minor procedures." },
      { term: "Nitrous oxide", body: "Inhaled 'laughing gas' for mild relaxation. Patient remains conscious. Wears off within minutes after stopping." },
      { term: "IV sedation", body: "Sedative medications delivered intravenously. Patient breathes on their own but remembers little to nothing. Most common choice for wisdom teeth, implants, and biopsies." },
      { term: "General anesthesia", body: "Patient is fully unconscious with airway support. Used for major procedures like orthognathic surgery in hospital settings." },
      { term: "ABOMS (American Board of Oral and Maxillofacial Surgery)", body: "Board certification verifying that a surgeon completed an accredited OMS residency and passed rigorous written and oral examinations. The gold standard for OMS practice." },
    ],
  },
  {
    heading: "Imaging & Diagnostics",
    intro: "The diagnostic tools used to plan oral surgery accurately.",
    terms: [
      { term: "CBCT (Cone Beam CT)", body: "3D dental imaging that shows bone, sinuses, nerves, and tooth roots in high detail. Essential for implant planning, jaw surgery, and complex extractions. Far lower radiation than medical CT." },
      { term: "Panoramic X-ray", body: "Single 2D image showing all teeth, both jaws, and surrounding structures. Useful for screening but less detailed than CBCT for surgical planning." },
      { term: "Periapical X-ray", body: "Small detailed 2D image of one or two teeth and surrounding bone. Used for diagnosing individual tooth issues." },
      { term: "Intraoral scan", body: "Digital scan of the teeth and gums replacing physical impressions. Used for designing crowns, surgical guides, and orthodontic plans." },
    ],
  },
  {
    heading: "Recovery & Complications",
    intro: "Common terms patients hear during recovery and what they mean.",
    terms: [
      { term: "Dry socket (Alveolar osteitis)", body: "Painful condition when the blood clot in an extraction site dislodges, exposing bone. Occurs in 1-5% of extractions. Treated with medicated dressing." },
      { term: "Pericoronitis", body: "Infection of the gum tissue around a partially erupted tooth — often the cause for wisdom tooth removal." },
      { term: "Paresthesia", body: "Temporary or rarely permanent numbness from nerve irritation. Most common with lower wisdom teeth near the inferior alveolar nerve. Usually resolves over weeks to months." },
      { term: "Pericoronitis", body: "Infection of the gum tissue around a partially erupted wisdom tooth, often the reason for surgical removal." },
    ],
  },
];

export default function GlossaryPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${siteConfig.url}/glossary#termset`,
    name: "Oral & Maxillofacial Surgery Glossary",
    url: `${siteConfig.url}/glossary`,
    hasDefinedTerm: sections.flatMap((s) =>
      s.terms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.body,
        inDefinedTermSet: `${siteConfig.url}/glossary#termset`,
      })),
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([definedTermSet])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg"
            alt="Glossary of oral surgery terms"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Glossary</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Patient education</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Oral & Maxillofacial Surgery — Glossary
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
            Plain-English definitions for the terms you'll hear at consultation: All-on-4, zygomatic implants, sinus lift, osseointegration, MMA, and more.
          </p>
          <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
            {sections.map((s, i) => (
              <a
                key={s.heading}
                href={`#section-${i}`}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-primary hover:border-primary"
              >
                {s.heading}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((s, i) => (
        <section
          key={s.heading}
          id={`section-${i}`}
          className={`py-20 lg:py-24 ${i % 2 === 1 ? "bg-light" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">{s.heading}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {s.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700 max-w-3xl">{s.intro}</p>
            <dl className="mt-10 grid gap-6 md:grid-cols-2">
              {s.terms.map((t) => (
                <div
                  key={t.term}
                  className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  id={`term-${t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <dt>
                    <h3 className="text-xl font-bold text-neutral-900">{t.term}</h3>
                  </dt>
                  <dd className="mt-3 leading-7 text-neutral-700 text-sm">{t.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <section className="bg-dark py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Term you don't see here?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Bring your question to a free consultation. Dr. Antipov or our coordinator will explain exactly what your diagnosis means and what treatment options exist for your case.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-primary-600 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Schedule a free consultation
            </Link>
            <Link
              href="/expertise"
              className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse procedures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
