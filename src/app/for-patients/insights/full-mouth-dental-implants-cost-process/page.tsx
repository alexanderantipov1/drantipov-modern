import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Mouth Dental Implants in Roseville & Sacramento: Cost & Process",
  description:
    "A complete guide to full mouth dental implants in the Sacramento region — All-on-4, the step-by-step process, cost ranges, candidacy, and what makes treatment succeed, from Dr. Antipov.",
  alternates: {
    canonical: "/for-patients/insights/full-mouth-dental-implants-cost-process",
    languages: {
      "en": "/for-patients/insights/full-mouth-dental-implants-cost-process",
      "x-default": "/for-patients/insights/full-mouth-dental-implants-cost-process",
    },
  },
  keywords: [
    "full mouth dental implants",
    "full mouth dental implants Roseville",
    "full mouth dental implants Sacramento",
    "All-on-4",
    "full arch restoration",
    "dental implants cost Sacramento",
  ],
  openGraph: {
    title: "Full Mouth Dental Implants in Roseville & Sacramento: Cost & Process",
    description: "All-on-4 and full-arch restoration explained — the process, candidacy, and honest cost ranges for the Sacramento region.",
    images: [
      {
        url: "/images/blog/2026-06-19/full-mouth-dental-implants.png",
        width: 1200,
        height: 630,
        alt: "Full mouth dental implants restore a complete, confident smile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Mouth Dental Implants in Roseville & Sacramento: Cost & Process",
    description: "All-on-4 and full-arch restoration explained — the process, candidacy, and honest cost ranges for the Sacramento region.",
    images: ["/images/blog/2026-06-19/full-mouth-dental-implants.png"],
  }
}

export default function FullMouthDentalImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/full-mouth-dental-implants-cost-process#article","headline":"Full Mouth Dental Implants in Roseville and Sacramento: Cost, Process, and What to Expect","description":"A complete guide to full mouth dental implants in the Sacramento region, including All-on-4, the step-by-step process, cost ranges, candidacy, and what separates a successful outcome from a failed one.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/full-mouth-dental-implants-cost-process","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/full-mouth-dental-implants.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/full-mouth-dental-implants-cost-process"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are full mouth dental implants?","acceptedAnswer":{"@type":"Answer","text":"Full mouth dental implants replace all teeth on one or both arches with a fixed, implant-supported prosthesis. The most common solutions are All-on-4 and All-on-X, which use 4 to 8 implants per arch to anchor a complete set of teeth."}},{"@type":"Question","name":"How much do full mouth dental implants cost near Sacramento?","acceptedAnswer":{"@type":"Answer","text":"In the greater Sacramento region, a single arch typically ranges from about $18,000 to $30,000, and both arches from roughly $30,000 to $55,000, depending on the number of implants, materials, and any preparatory procedures. An itemized treatment plan at consultation gives you the exact figure for your case."}},{"@type":"Question","name":"Are full mouth dental implants permanent?","acceptedAnswer":{"@type":"Answer","text":"Yes. The titanium implant posts are designed to be permanent, and the prosthetic teeth are fixed rather than removable. With proper care the restoration is built to last many years."}},{"@type":"Question","name":"Can I get full mouth implants the same day?","acceptedAnswer":{"@type":"Answer","text":"In many qualifying cases, yes. A fixed temporary prosthesis can be placed the same day as surgery, with the final prosthesis delivered after 3 to 6 months of healing."}},{"@type":"Question","name":"Where can I get full mouth dental implants near Roseville?","acceptedAnswer":{"@type":"Answer","text":"Dr. Alexander Antipov is a board-certified oral and maxillofacial surgeon in Roseville, CA, serving the greater Sacramento region with full-arch implant restoration."}}]}]` }}
      />
      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                Dental Implants
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>June 19, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Full Mouth Dental Implants in Roseville &amp; Sacramento: Cost, Process, and What to Expect
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Written and medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/full-mouth-dental-implants.png"
                alt="Full mouth dental implants restore a complete, confident smile"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Few procedures in modern dentistry change a person&rsquo;s daily life as completely as a
                full-mouth implant restoration. If you are living with failing teeth, loose dentures, or the
                quiet self-consciousness of a compromised smile, fixed implant teeth can restore how you eat,
                speak, and feel &mdash; permanently. Here is an honest, plain-language walk through the
                options, the process, and what the investment actually looks like in the Sacramento region.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Full mouth dental implants replace an entire arch with fixed, non-removable teeth.</li>
                  <li>&bull; The most common approach is All-on-4; All-on-6 and overdentures are alternatives.</li>
                  <li>&bull; A single arch generally runs $18,000&ndash;$30,000 in the Sacramento region.</li>
                  <li>&bull; Many patients leave surgery the same day with a fixed temporary set of teeth.</li>
                  <li>&bull; 3D imaging, surgical experience, and prosthetic quality drive long-term success.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Are Full Mouth Dental Implants?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                &ldquo;Full mouth dental implants&rdquo; refers to restoring all of the teeth in the upper
                arch, the lower arch, or both, using dental implants as the foundation. Unlike a conventional
                denture that rests on the gums and lifts out, an implant-supported full-arch restoration is
                anchored directly into the jawbone &mdash; it stays put when you chew, laugh, and sleep.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                There are three solutions most patients choose between:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>All-on-4:</strong> four implants per arch support a complete fixed set of teeth.</li>
                <li>&mdash; <strong>All-on-X (All-on-6 and beyond):</strong> typically five to eight implants per arch when a case benefits from extra support.</li>
                <li>&mdash; <strong>Implant-supported overdenture:</strong> a denture that snaps onto implants for stability, for patients who prefer a removable option.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Are You a Candidate?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                You may be a strong candidate if you are missing all or most teeth on an arch, wear
                complete dentures and want a permanent alternative, have several teeth that cannot be saved,
                or have struggled for years with appliances that never quite fit. Good general health and
                being a non-smoker (or willing to quit) improve outcomes considerably.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Even significant bone loss &mdash; a common result of years without teeth &mdash; does not
                automatically rule you out. Modern full-arch techniques, including All-on-4 and zygomatic
                approaches, are designed to work with the bone many patients already have. A 3D cone-beam CT
                scan tells us exactly what we are working with and which approach fits your anatomy.
              </p>

              {/* Featured Image */}
              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/all-on-x-cost.png"
                  alt="Treatment planning for a full-arch implant restoration"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Full-Arch Process, Step by Step
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Consultation and 3D imaging.</strong> We review your medical and dental history,
                  examine you, and take a cone-beam CT scan that maps your bone, sinuses, and nerves &mdash;
                  the foundation of safe, precise planning.
                </li>
                <li>
                  <strong>Digital treatment planning.</strong> Using planning software, implant positions are
                  designed virtually before surgery to optimize stability and avoid critical structures.
                </li>
                <li>
                  <strong>Implant placement and same-day teeth.</strong> Any remaining failing teeth are
                  removed and the implants are placed. In most qualifying cases, a fixed temporary arch is
                  attached the same day &mdash; you leave with teeth.
                </li>
                <li>
                  <strong>Healing and osseointegration.</strong> Over 3&ndash;6 months the implants fuse to
                  the bone. You follow a modified soft diet and attend short follow-up visits.
                </li>
                <li>
                  <strong>Final prosthesis.</strong> Once integration is complete, final impressions are
                  taken and your permanent restoration &mdash; usually zirconia or acrylic over a titanium
                  frame &mdash; is fabricated, fitted, and secured.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Full Mouth Dental Implant Cost in the Sacramento Region
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Cost depends on which arch is treated, how many implants are used, the prosthetic material
                you choose, and whether preparatory work like grafting is needed. The ranges below reflect
                typical figures across the greater Sacramento area (Roseville, Folsom, Rocklin, El Dorado
                Hills). They are estimates &mdash; your exact, itemized plan is presented at consultation, with
                no vague ranges and no hidden fees.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Treatment</th>
                      <th className="py-3 font-semibold text-neutral-900">Estimated Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Single arch All-on-4</td><td className="py-3">$18,000 &ndash; $25,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Single arch All-on-6</td><td className="py-3">$22,000 &ndash; $30,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Both arches All-on-4</td><td className="py-3">$30,000 &ndash; $45,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Both arches All-on-6</td><td className="py-3">$38,000 &ndash; $55,000</td></tr>
                    <tr><td className="py-3 pr-4">Implant-supported overdenture (per arch)</td><td className="py-3">$12,000 &ndash; $20,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Flexible financing lets many patients begin treatment now and pay over time. For a number of
                people, a monthly payment is comparable to what they already spend on adhesives, relines, and
                denture repairs.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Separates Success From Failure
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Three factors decide the long-term outcome of a full-arch case:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Planning quality.</strong> 3D imaging and digital planning are not optional extras; they are the basis of predictable placement.</li>
                <li>&mdash; <strong>Surgical experience.</strong> Full-arch reconstruction is among the most demanding work in the field. Volume and specialty training produce more consistent results.</li>
                <li>&mdash; <strong>Prosthetic craftsmanship.</strong> The implants anchor the result, but the prosthesis is what you live in. The right materials and bite mechanics are the difference between a restoration that lasts decades and one that fails early.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What are full mouth dental implants?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    They replace all teeth on one or both arches with a fixed, implant-supported prosthesis.
                    The most common solutions are All-on-4 and All-on-X, using 4 to 8 implants per arch to
                    anchor a complete set of teeth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">How much do they cost near Sacramento?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A single arch typically ranges from about $18,000 to $30,000, and both arches from roughly
                    $30,000 to $55,000, depending on implant count, materials, and any preparatory procedures.
                    Your exact figure is outlined in a written, itemized plan at consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Are they permanent?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. The titanium posts are designed to be permanent, and the prosthetic teeth are fixed
                    rather than removable. With good care, the restoration is built to last many years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Can I get teeth the same day?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    In many qualifying cases, yes. A fixed temporary arch is placed the same day as surgery,
                    with the permanent prosthesis delivered after 3 to 6 months of healing.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery Procedure</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M — All-on-4 immediate-function concept with Brånemark System implants</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — National Institute of Dental and Craniofacial Research: Dental Implants</a></li>
              </ul>
            </section>

            {/* Author Info */}
            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-primary-100 flex-shrink-0">
                  <Image
                    src="/images/doctor-hand3-cutout.png"
                    alt="Dr. Alexander V. Antipov, DDS"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Dr. Alexander V. Antipov</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Board-certified oral and maxillofacial surgeon in Roseville, CA, specializing in dental
                    implants, All-on-4 and All-on-6 full-arch restoration, and corrective jaw surgery. Serving
                    the greater Sacramento region.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Considering Full-Arch Implants?
                </h3>
                <p className="text-neutral-700 mb-6">
                  A 3D CT and in-person exam are the only way to know which approach fits your anatomy &mdash;
                  and to receive a precise, itemized cost for your case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/expertise/full-arch-implants">Full-Arch Implants</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
