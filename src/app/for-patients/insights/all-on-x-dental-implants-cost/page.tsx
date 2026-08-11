import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "All-on-X Dental Implants Cost Explained: 4, 6, 8 Implants" },
  description:
    "Understand what All-on-X means, how costs compare between 4, 6, and 8 implants, what a full quote includes, and how to decide what your case actually needs.",
  alternates: {
    canonical: "/for-patients/insights/all-on-x-dental-implants-cost",
    languages: {
      "en": "/for-patients/insights/all-on-x-dental-implants-cost",
      "x-default": "/for-patients/insights/all-on-x-dental-implants-cost",
    },
  },
  keywords: [
    "All-on-X dental implants cost",
    "All-on-4 cost",
    "All-on-6 cost",
    "All-on-8",
    "full arch implant cost",
    "dental implant cost Sacramento",
  ],
  openGraph: {
    title: "All-on-X Dental Implants Cost Explained: 4, 6, 8 Implants",
    description: "How full-arch implant cost changes with 4, 6, or 8 implants — and how to compare quotes the right way.",
    images: [
      {
        url: "/images/blog/2026-06-19/all-on-x-cost.png",
        width: 1200,
        height: 630,
        alt: "All-on-X full-arch dental implant cost by implant count",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-on-X Dental Implants Cost Explained: 4, 6, 8 Implants",
    description: "How full-arch implant cost changes with 4, 6, or 8 implants — and how to compare quotes the right way.",
    images: ["/images/blog/2026-06-19/all-on-x-cost.png"],
  }
}

export default function AllOnXCostPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/all-on-x-dental-implants-cost#article","headline":"All-on-X Dental Implants Cost Explained: 4, 6, 8 Implants","description":"What All-on-X means, how cost differs between 4, 6, and 8 implants per arch, what should be included in a quote, and how to decide what your case actually needs.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/all-on-x-dental-implants-cost","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/all-on-x-cost.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/all-on-x-dental-implants-cost"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is All-on-4 strong enough for normal eating?","acceptedAnswer":{"@type":"Answer","text":"Yes. All-on-4 supports roughly 95% of natural bite force, and most patients eat what they want, including hard and chewy foods."}},{"@type":"Question","name":"Why choose All-on-6 over All-on-4?","acceptedAnswer":{"@type":"Answer","text":"Better load distribution on longer arches, extra support for heavy biters, eliminating the distal cantilever, and redundancy if an implant ever fails. For the right case the added cost is worthwhile."}},{"@type":"Question","name":"Is the cost the same for top and bottom?","acceptedAnswer":{"@type":"Answer","text":"The upper arch is often slightly higher because the bone is typically softer and closer to the sinus, sometimes requiring a sinus lift or zygomatic implants."}},{"@type":"Question","name":"What if I can only afford one arch now?","acceptedAnswer":{"@type":"Answer","text":"Many patients treat the more pressing arch first and stage the second over time. Financing can also spread the cost into manageable monthly payments."}},{"@type":"Question","name":"What should a real All-on-X quote include?","acceptedAnswer":{"@type":"Answer","text":"A complete quote accounts for 3D imaging, any needed extractions, sedation, the temporary teeth, and the final prosthesis — not just the implants themselves. Comparing quotes that leave out these steps can make one option look cheaper than it really is."}},{"@type":"Question","name":"How is the right number of implants decided?","acceptedAnswer":{"@type":"Answer","text":"The number is determined by 3D imaging and your bite — not by price alone. Bone volume and density, arch length, and how hard you bite all influence whether four, six, or more implants are recommended for a predictable long-term result."}}]}]` }}
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
              All-on-X Dental Implants Cost Explained: 4, 6, 8 Implants
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/all-on-x-cost.png"
                alt="All-on-X full-arch dental implant cost by implant count"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                The cost of All-on-X full-arch implants depends mainly on how many implants your arch needs
                &mdash; usually four, six, or sometimes eight &mdash; plus imaging, extractions, sedation, and
                the prosthesis, explains Dr. Alexander Antipov, a board-certified oral &amp; maxillofacial
                surgeon in Roseville, CA. &ldquo;All-on-X&rdquo; is an umbrella term for full-arch implant
                treatment: the goal is always to replace an entire upper or lower set of teeth with fixed,
                permanent teeth, and the number of implants is what changes &mdash; and so does the cost.
                Here is how to make sense of it.
              </p>
              <p className="italic text-neutral-600 mb-8">
                Costs and terms vary by provider and plan &mdash; confirm details with your own provider
                before making decisions.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What &ldquo;All-on-X&rdquo; Means
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The &ldquo;X&rdquo; is simply whatever number the case calls for: <strong>All-on-4</strong>
                {" "}(four implants per arch, the most common), <strong>All-on-6</strong> (six implants, more
                support), or <strong>All-on-8</strong> (eight implants, reserved for very long arches or
                unusual bone). All of them anchor a fixed full-arch prosthesis.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Quick Cost Comparison
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Configuration</th>
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Per Arch</th>
                      <th className="py-3 font-semibold text-neutral-900">Both Arches</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-4 (acrylic provisional + zirconia final)</td><td className="py-3 pr-4">$25,000&ndash;$35,000</td><td className="py-3">$45,000&ndash;$65,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-6 (acrylic provisional + zirconia final)</td><td className="py-3 pr-4">$30,000&ndash;$42,000</td><td className="py-3">$55,000&ndash;$80,000</td></tr>
                    <tr><td className="py-3 pr-4">All-on-8</td><td className="py-3 pr-4">$40,000+</td><td className="py-3">$75,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                These figures reflect national averages for premium materials and configurations. Your exact
                cost is determined after a 3D scan and exam, then presented as a written, itemized plan.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why the Cost Difference?
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>More implants, more material and time.</strong> Each titanium implant and each placement adds cost and surgical minutes.</li>
                <li>&mdash; <strong>Abutment configurations.</strong> More implants often need angled or multi-unit abutments &mdash; premium components.</li>
                <li>&mdash; <strong>Prosthesis design.</strong> A six-implant bridge distributes load differently than a four-implant one and can require different engineering.</li>
                <li>&mdash; <strong>Imaging and planning.</strong> More implants mean more complex 3D planning and surgical guides.</li>
                <li>&mdash; <strong>Bone preparation.</strong> Additional sites can require grafting or other bone work.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Should Be Included in the Price?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A quote you can actually compare should include the consultation and 3D imaging, treatment
                planning with a surgical guide, any necessary extractions, all implants and abutments, the
                same-day temporary teeth, the final zirconia (or premium) prosthesis, sedation, follow-up
                visits for the first year, and adjustments. A quote that excludes extractions, sedation, or
                the final prosthesis is not comparable to one that includes them.
              </p>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/zirconia-arches.png"
                  alt="A zirconia full-arch prosthesis, the most common final restoration"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Many Implants Do You Actually Need?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Four implants</strong> are biomechanically sufficient for most patients with adequate
                front-jaw bone, a standard arch length, and no severe grinding. The All-on-4 design &mdash;
                two upright front implants and two angled back implants &mdash; is backed by 20+ years of
                research.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Six implants</strong> make sense for longer arches, heavy bite forces, bruxism, or
                when eliminating the rear cantilever improves long-term predictability. <strong>Eight
                implants</strong> are uncommon &mdash; reserved for very long arches, severe parafunction, or
                compromised bone that calls for redundancy.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The right number should come from your 3D scan, your bite, and your habits &mdash; not from a
                fixed sales script. Be wary of any practice that always recommends more (or always fewer)
                implants regardless of the case, or that quotes a price before evaluating you.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Materials Affect Cost Too
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The prosthetic material matters as much as the implant count. PMMA acrylic is lighter and less
                expensive but typically lasts 5&ndash;7 years; acrylic on a titanium bar is stronger
                (7&ndash;10 years); monolithic zirconia costs more upfront but commonly lasts 15&ndash;20+
                years. Because zirconia rarely needs early replacement, its lifetime cost is often lower.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How to Compare Quotes
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Confirm 3D imaging is part of the consultation.</li>
                <li>&mdash; Get the quote in writing with every line item.</li>
                <li>&mdash; Verify what is included vs. extra (extractions, grafting, sedation, final prosthesis).</li>
                <li>&mdash; Ask about the implant brand and the prosthetic material for both temporary and final.</li>
                <li>&mdash; Ask about the surgeon&rsquo;s credentials &mdash; a board-certified oral surgeon vs. a general dentist.</li>
                <li>&mdash; Confirm warranty terms and post-op support. Cheapest is rarely best value.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is All-on-4 strong enough for normal eating?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. All-on-4 supports roughly 95% of natural bite force, and most patients eat what they
                    want, including hard and chewy foods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Why choose All-on-6 over All-on-4?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Better load distribution on longer arches, extra support for heavy biters, eliminating the
                    distal cantilever, and redundancy if an implant ever fails. For the right case the added
                    cost is worthwhile.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is the cost the same for top and bottom?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The upper arch is often slightly higher because the bone is typically softer and closer to
                    the sinus, sometimes requiring a sinus lift or zygomatic implants.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What if I can only afford one arch now?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Many patients treat the more pressing arch first and stage the second over time. Financing
                    can also spread the cost into manageable monthly payments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What should a real All-on-X quote include?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A complete quote accounts for 3D imaging, any needed extractions, sedation, the temporary
                    teeth, and the final prosthesis &mdash; not just the implants themselves. Comparing quotes
                    that leave out these steps can make one option look cheaper than it really is.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">How is the right number of implants decided?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The number is determined by 3D imaging and your bite &mdash; not by price alone. Bone volume
                    and density, arch length, and how hard you bite all influence whether four, six, or more
                    implants are recommended for a predictable long-term result.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery Procedure</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M — All-on-4 immediate-function concept</a></li>
                <li><a href="https://medlineplus.gov/ency/article/007645.htm" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — National Institute of Dental and Craniofacial Research: Dental Implants</a></li>
              </ul>
            </section>

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

            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Want a Precise Cost for Your Case?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation for a 3D scan, a bone evaluation, and a detailed treatment plan with
                  transparent, itemized pricing &mdash; no guesswork.
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
