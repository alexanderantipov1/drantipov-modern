import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Are Zirconia Arches? Benefits, Cost & Lifespan",
  description:
    "Zirconia arches are the gold standard for full-arch dental implants. How they're made, why they last decades, what they cost, and how they compare to acrylic.",
  alternates: {
    canonical: "/for-patients/insights/zirconia-arches",
    languages: {
      "en": "/for-patients/insights/zirconia-arches",
      "x-default": "/for-patients/insights/zirconia-arches",
    },
  },
  keywords: [
    "zirconia arches",
    "zirconia dental implants",
    "full arch zirconia",
    "zirconia vs acrylic",
    "All-on-4 zirconia",
    "full mouth dental implants",
  ],
  openGraph: {
    title: "What Are Zirconia Arches? Benefits, Cost & Lifespan",
    description: "Why zirconia is the gold standard for full-arch implants — strength, aesthetics, lifespan, and cost.",
    images: [
      {
        url: "/images/blog/2026-06-19/zirconia-arches.png",
        width: 1200,
        height: 630,
        alt: "A polished zirconia full-arch dental prosthesis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are Zirconia Arches? Benefits, Cost & Lifespan",
    description: "Why zirconia is the gold standard for full-arch implants — strength, aesthetics, lifespan, and cost.",
    images: ["/images/blog/2026-06-19/zirconia-arches.png"],
  }
}

export default function ZirconiaArchesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/zirconia-arches#article","headline":"What Are Zirconia Arches? Benefits, Cost & Lifespan","description":"Zirconia arches are the gold standard for full-arch dental implants. How they are made, why they last decades, what they cost, and how they compare to acrylic.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/zirconia-arches","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/zirconia-arches.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/zirconia-arches"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is zirconia stronger than titanium?","acceptedAnswer":{"@type":"Answer","text":"Zirconia is harder and more resistant to wear and corrosion, while titanium is more flexible. They serve different roles: titanium implants anchor in the bone, and the zirconia arch is the visible set of teeth."}},{"@type":"Question","name":"Can zirconia arches break?","acceptedAnswer":{"@type":"Answer","text":"Medical-grade zirconia is extremely resistant to fracture. Catastrophic breaks are rare and usually involve trauma or significant misuse, such as chewing ice or opening packages with your teeth."}},{"@type":"Question","name":"Will my zirconia arch turn yellow?","acceptedAnswer":{"@type":"Answer","text":"No. Zirconia is highly stain-resistant. Surface staining from coffee or wine wipes off easily and the underlying material does not discolor."}},{"@type":"Question","name":"How long do zirconia arches last?","acceptedAnswer":{"@type":"Answer","text":"Properly placed zirconia arches routinely last 15 to 20+ years, and many patients never need a replacement."}},{"@type":"Question","name":"Is zirconia safe?","acceptedAnswer":{"@type":"Answer","text":"Yes. Zirconia is biocompatible and inert, widely used in medical implants, with no known allergies."}}]}]` }}
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
                <span>8 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              What Are Zirconia Arches? Benefits, Cost &amp; Lifespan
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Written and medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/zirconia-arches.png"
                alt="A polished zirconia full-arch dental prosthesis"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                If you have looked into All-on-4 or full-mouth dental implants, the final teeth are most often
                a <strong>zirconia arch</strong>. It is a complete upper or lower set of teeth milled from a
                single block of medical-grade ceramic and secured to your implants &mdash; and it has become
                the gold standard for full-arch prosthetics, replacing the acrylic-and-titanium hybrids common
                a decade ago.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; A zirconia arch is a full set of teeth milled from one solid ceramic block.</li>
                  <li>&bull; It attaches to 4&ndash;6 implants and functions as permanent teeth.</li>
                  <li>&bull; Expect 15&ndash;20+ years of life, with strong stain and wear resistance.</li>
                  <li>&bull; Higher upfront cost than acrylic, but typically lower lifetime cost.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is a Zirconia Arch?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A zirconia arch is a full-mouth dental prosthesis &mdash; replacing all the upper or lower
                teeth &mdash; milled from a single solid block of medical-grade zirconia ceramic. Zirconia is
                remarkably strong and biocompatible; the same material is used in hip replacements and
                aerospace applications. It attaches to your implants and works as a permanent set of teeth.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Zirconia Beats the Alternatives
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The traditional full-arch prosthesis bonds acrylic (PMMA) teeth to a titanium frame. Zirconia
                outperforms it on nearly every meaningful metric:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Property</th>
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Acrylic (PMMA)</th>
                      <th className="py-3 font-semibold text-neutral-900">Zirconia</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Strength</td><td className="py-3 pr-4">Can chip and fracture</td><td className="py-3">Extremely high, resists fracture</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Stain resistance</td><td className="py-3 pr-4">Stains over time</td><td className="py-3">Highly stain-resistant</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Wear</td><td className="py-3 pr-4">Teeth flatten over time</td><td className="py-3">Holds shape for decades</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Lifespan</td><td className="py-3 pr-4">5&ndash;7 years</td><td className="py-3">15&ndash;20+ years</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Aesthetics</td><td className="py-3 pr-4">Good initially, dulls</td><td className="py-3">Lifelike, lasting appearance</td></tr>
                    <tr><td className="py-3 pr-4">Cost</td><td className="py-3 pr-4">Lower upfront</td><td className="py-3">Higher upfront, lower lifetime</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For most patients, the lifetime cost of acrylic is actually higher because of repeated
                replacements. Compared with porcelain-fused-to-metal, monolithic zirconia also eliminates the
                porcelain-to-metal interface where chipping tends to occur.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Zirconia Arches Are Made
              </h2>
              <ol className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>Digital impressions capture your mouth, implant positions, and bite.</li>
                <li>Planning software designs the arch in 3D.</li>
                <li>A 5-axis milling machine carves the entire arch from a solid zirconia block.</li>
                <li>High-temperature sintering brings the ceramic to its final hardness and color.</li>
                <li>Staining and characterization add lifelike translucency.</li>
                <li>A final polish, try-in, and adjustment precede attachment to your implants.</li>
              </ol>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/full-mouth-dental-implants.png"
                  alt="A natural-looking full-arch result with a zirconia prosthesis"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Benefits of Zirconia Arches
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Decades of life:</strong> routinely 15&ndash;20+ years; many patients never need a replacement.</li>
                <li>&mdash; <strong>Natural appearance:</strong> layered and stained to mimic real-tooth translucency.</li>
                <li>&mdash; <strong>Eats anything:</strong> strong enough for apples, nuts, and hard breads that damage acrylic.</li>
                <li>&mdash; <strong>Resists staining and odor:</strong> a dense, smooth surface shrugs off coffee and wine.</li>
                <li>&mdash; <strong>Bacteria-resistant and biocompatible:</strong> supports healthier long-term gum tissue.</li>
                <li>&mdash; <strong>Permanent and fixed:</strong> cleaned in place, no adhesive, no clicking, no nightly removal.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Drawbacks to Consider
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Higher upfront cost than acrylic (though usually lower over a lifetime).</li>
                <li>&mdash; Slightly heavier; most patients adapt within a week.</li>
                <li>&mdash; Adjustments happen at the implant level; major changes can require remilling.</li>
                <li>&mdash; Zirconia is unforgiving of misalignment, which is why guided placement and surgical experience matter.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Cost of Zirconia Arches
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Configuration</th>
                      <th className="py-3 font-semibold text-neutral-900">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Single zirconia arch on existing implants</td><td className="py-3">$14,000&ndash;$22,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-4 (implants + zirconia arch)</td><td className="py-3">$25,000&ndash;$35,000 per arch</td></tr>
                    <tr><td className="py-3 pr-4">Both arches (full mouth)</td><td className="py-3">$40,000&ndash;$70,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Pricing varies with implant count, whether extractions or grafting are needed, one arch versus
                both, and material grade. Financing options can spread the cost into manageable monthly
                payments.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Lifespan and Maintenance
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Implants are designed to last 20+ years (often a lifetime) and the zirconia arch 15&ndash;20+
                years. Daily care is simple: brush twice a day with a soft brush, use a water flosser under the
                arch, and wear a night guard if you grind. Professional hygiene visits every 3&ndash;6 months
                &mdash; often with the arch removed for a thorough cleaning at the implant level &mdash; keep
                everything healthy.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                &ldquo;Same-Day Zirconia&rdquo; &mdash; The Honest Version
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Some practices advertise same-day teeth in zirconia. The accurate version: on surgery day a
                high-quality acrylic provisional arch is placed; 3&ndash;6 months later, after full healing,
                the final zirconia arch is fabricated and fitted. This staged approach is the standard of care
                &mdash; the final position needs healed soft tissue, the implants must integrate before bearing
                full force, and zirconia is milled after final impressions. You still leave surgery with teeth
                that look great; the zirconia simply replaces the temporary later.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is zirconia stronger than titanium?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Zirconia is harder and more resistant to wear and corrosion; titanium is more flexible.
                    They serve different roles &mdash; titanium implants anchor in the bone, and the zirconia
                    arch is the visible set of teeth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Can zirconia arches break?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Medical-grade zirconia is extremely fracture-resistant. Catastrophic breaks are rare and
                    usually involve trauma or misuse, like chewing ice or opening packages with your teeth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Will my zirconia arch turn yellow?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    No. Zirconia is highly stain-resistant. Surface staining wipes off easily and the
                    underlying material does not discolor &mdash; though that also means it cannot be whitened.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is zirconia safe?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. It is biocompatible and inert, widely used in medical implants, with no known
                    allergies.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery Procedure</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — National Institute of Dental and Craniofacial Research: Dental Implants</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/30638320/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Monolithic zirconia in implant-supported restorations — clinical performance review (PubMed)</a></li>
              </ul>
            </section>

            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-primary-700">DA</span>
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

            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Considering Full-Arch Dental Implants?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation to find out whether zirconia arches are right for you &mdash; and to
                  receive a precise, itemized cost estimate.
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
