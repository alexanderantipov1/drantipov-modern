import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "All-on-4 vs All-on-6: Which Is Better?",
  description:
    "All-on-4 vs All-on-6 explained — implant count, bone needs, cost, recovery time, and stability to help you choose the best full-arch option, from Dr. Antipov in Roseville.",
  alternates: {
    canonical: "/for-patients/insights/all-on-4-vs-all-on-6",
    languages: {
      "en": "/for-patients/insights/all-on-4-vs-all-on-6",
      "x-default": "/for-patients/insights/all-on-4-vs-all-on-6",
    },
  },
  keywords: [
    "All-on-4 vs All-on-6",
    "All-on-4",
    "All-on-6",
    "full arch dental implants",
    "full-arch restoration",
    "dental implants Roseville",
  ],
  openGraph: {
    title: "All-on-4 vs All-on-6: Which Is Better?",
    description: "Implant count, bone needs, cost, recovery, and stability compared, so you can choose the right full-arch option.",
    images: [
      {
        url: "/images/blog/2026-06-19/all-on-4-vs-all-on-6.png",
        width: 1200,
        height: 630,
        alt: "All-on-4 vs All-on-6 full-arch implant configurations compared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-on-4 vs All-on-6: Which Is Better?",
    description: "Implant count, bone needs, cost, recovery, and stability compared, so you can choose the right full-arch option.",
    images: ["/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"],
  }
}

export default function AllOn4VsAllOn6Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/all-on-4-vs-all-on-6#article","headline":"All-on-4 vs All-on-6: Which Is Better?","description":"All-on-4 vs All-on-6 compared by implant count, bone density needs, cost, recovery time, and stability to help patients choose the best full-arch option.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/all-on-4-vs-all-on-6","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/all-on-4-vs-all-on-6"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the main difference between All-on-4 and All-on-6 implants?","acceptedAnswer":{"@type":"Answer","text":"The primary difference is the number of implants. All-on-4 uses four implants per arch and All-on-6 uses six, which can change stability and how bite forces are distributed across the prosthesis."}},{"@type":"Question","name":"Is All-on-4 cheaper than All-on-6?","acceptedAnswer":{"@type":"Answer","text":"Generally yes. All-on-4 uses fewer implants and is often less complex, so it usually costs less than All-on-6."}},{"@type":"Question","name":"Can I get All-on-4 with low bone density?","acceptedAnswer":{"@type":"Answer","text":"Many patients with limited bone are still candidates for All-on-4 because the posterior implants are angled to use available bone. When bone is significantly reduced, All-on-6 may be recommended to spread forces across more anchors."}},{"@type":"Question","name":"Which option offers better long-term success?","acceptedAnswer":{"@type":"Answer","text":"Both can succeed long term. All-on-6 can add stability for longer arches, heavy biters, or limited bone density, while All-on-4 is well documented and biomechanically sufficient for most patients."}},{"@type":"Question","name":"Do both options require bone grafting?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. All-on-4 is designed to minimize grafting by using the bone you already have. All-on-6 may also avoid grafting, though additional sites can sometimes require bone work."}}]}]` }}
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
                <span>7 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              All-on-4 vs All-on-6: Which Is Better?
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Written and medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"
                alt="All-on-4 vs All-on-6 full-arch implant configurations compared"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                If you are researching full-arch dental implants, you will quickly run into two names:
                <strong> All-on-4</strong> and <strong> All-on-6</strong>. Both rebuild a complete arch of
                teeth on a fixed, implant-supported bridge, and both dramatically outperform traditional
                dentures. The real question is not which is &ldquo;better&rdquo; in the abstract &mdash; it is
                which is better <em>for your anatomy and your goals</em>.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Key Takeaways</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; <strong>Implant count:</strong> All-on-4 uses four implants; All-on-6 uses six.</li>
                  <li>&bull; <strong>Stability:</strong> All-on-6 can add support, especially when bone density is limited.</li>
                  <li>&bull; <strong>Cost:</strong> All-on-4 is usually less expensive.</li>
                  <li>&bull; <strong>Planning matters:</strong> your bone, bite forces, and goals decide the right choice.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Each Approach Is
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>All-on-4</strong> uses four strategically positioned implants &mdash; typically two
                upright in the front and two angled toward the back &mdash; to support a full fixed bridge.
                The angled placement is designed to make the most of existing bone and often reduces the need
                for grafting.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>All-on-6</strong> adds two more implants. Those extra anchor points can improve
                stability and distribute chewing forces more evenly &mdash; particularly valuable for patients
                with reduced bone density or higher functional demands.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Key Differences
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Support:</strong> two additional implants give All-on-6 more anchoring points for the prosthesis.</li>
                <li>&mdash; <strong>Bone density:</strong> patients with adequate bone are often good All-on-4 candidates; when bone is lower or stresses are higher, All-on-6 can spread the load.</li>
                <li>&mdash; <strong>Cost:</strong> All-on-6 is typically more expensive because it uses more implants and may involve additional surgical and restorative steps.</li>
                <li>&mdash; <strong>Recovery:</strong> both return you to function far faster than removable dentures; some patients adapt slightly quicker to All-on-4, while All-on-6 can mean a little more initial healing.</li>
              </ul>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/all-on-x-cost.png"
                  alt="Full-arch implant planning on a 3D jaw model"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Benefits of All-on-4
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Less invasive:</strong> fewer implants can mean less surgical manipulation.</li>
                <li>&mdash; <strong>Efficient treatment:</strong> often shorter surgical time with fewer implant sites.</li>
                <li>&mdash; <strong>May reduce grafting:</strong> angled posterior implants make good use of available bone.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Benefits of All-on-6
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Enhanced stability:</strong> two extra implants provide a more secure foundation for some patients.</li>
                <li>&mdash; <strong>Better force distribution:</strong> more support points spread the chewing load more evenly.</li>
                <li>&mdash; <strong>Strong long-term support:</strong> especially helpful in complex cases or for heavy biters.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Which Option Is Right for You?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The honest answer is that it depends on your bone quality, anatomy, bite forces, medical
                history, and budget. A clinical exam with 3D imaging confirms what is realistic and safest for
                your specific case &mdash; not a one-size-fits-all recommendation. Be cautious of any practice
                that names a number before they have scanned and examined you.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What is the main difference between All-on-4 and All-on-6?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The number of implants. All-on-4 uses four per arch and All-on-6 uses six, which affects
                    stability and how bite forces are distributed across the prosthesis.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is All-on-4 cheaper than All-on-6?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Generally yes &mdash; fewer implants and a less complex procedure usually make All-on-4 the
                    more affordable option.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Can I get All-on-4 with low bone density?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Often, yes. The angled posterior implants use available bone well. When bone is
                    significantly reduced, All-on-6 may be recommended to spread forces across more anchors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Which offers better long-term success?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Both can succeed long term. All-on-6 can add stability for longer arches, heavy biters, or
                    limited bone, while All-on-4 is well documented and biomechanically sufficient for most
                    patients.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M — All-on-4 immediate-function concept with Brånemark System implants</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery Procedure</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — National Institute of Dental and Craniofacial Research: Dental Implants</a></li>
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
                  Not Sure Which Approach Fits Your Case?
                </h3>
                <p className="text-neutral-700 mb-6">
                  A 3D scan and exam reveal exactly what your jaw can support &mdash; and let us build a
                  personalized plan with transparent pricing.
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
