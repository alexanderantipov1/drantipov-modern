import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Same-Day Dental Implants — Myth or Reality?",
  description:
    "Same-day dental implants and immediate loading — who qualifies, what you get on surgery day, how the temporary differs from the final prosthesis, and the real risks.",
  alternates: {
    canonical: "/for-patients/insights/same-day-implants",
    languages: {
      "en": "/for-patients/insights/same-day-implants",
      "x-default": "/for-patients/insights/same-day-implants",
    },
  },
  keywords: [
    "same-day dental implants",
    "immediate load implants",
    "teeth in a day",
    "All-on-4 same day",
    "All-on-6 immediate load",
    "same day teeth Roseville",
  ],
  openGraph: {
    title: "Same-Day Dental Implants — Myth or Reality?",
    description: "Immediate-load dental implants explained — who qualifies, what you get on surgery day, and the real risks.",
    images: [
      {
        url: "/images/blog/2026-04-28/same-day-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Same-Day Dental Implants — Myth or Reality?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day Dental Implants — Myth or Reality?",
    description: "Immediate-load dental implants explained — who qualifies, what you get on surgery day, and the real risks.",
    images: ["/images/blog/2026-04-28/same-day-implants.jpg"],
  }
}

export default function SameDayImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/same-day-implants#article","headline":"Same-Day Dental Implants (Immediate Load) \\u2014 Myth or Reality?","description":"Immediate-load dental implants \\u2014 who qualifies, what you get on surgery day, how the temporary differs from the final prosthesis, and the risks honestly discussed.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/same-day-implants","datePublished":"2026-04-28","dateModified":"2026-04-28","image":["https://www.drantipov.com/images/blog/2026-04-28/same-day-implants.jpg"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/same-day-implants"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is it really teeth in one day?","acceptedAnswer":{"@type":"Answer","text":"Yes \\u2014 with a qualification. The day of surgery, you leave the office with fixed temporary teeth on your implants. The final prosthesis is made 4\\u20136 months later, after full osseointegration and soft-tissue stabilization."}},{"@type":"Question","name":"Who is not a candidate for immediate loading?","acceptedAnswer":{"@type":"Answer","text":"If primary stability is below ~35 Ncm, immediate loading is not worth the risk. Also: patients with severe osteoporosis, uncontrolled diabetes, active smoking of more than 10 cigarettes a day, or significant bone loss in the implant zone."}},{"@type":"Question","name":"How does the temporary differ from the permanent prosthesis?","acceptedAnswer":{"@type":"Answer","text":"The temporary is typically acrylic or composite \\u2014 lighter, less durable, and not a perfect match to the final smile design. The permanent is zirconia or PMMA on a titanium base, designed for years of service."}},{"@type":"Question","name":"Can I eat the day of surgery?","acceptedAnswer":{"@type":"Answer","text":"On surgery day, soft liquids only \\u2014 no chewing load on the implants. For the first 2\\u20134 weeks, a soft diet (purees, fish, eggs, yogurt). Firmer foods are reintroduced gradually as healing progresses."}},{"@type":"Question","name":"How long does the surgery itself take?","acceptedAnswer":{"@type":"Answer","text":"Extractions + implant placement + temporary prosthesis \\u2014 typically 4\\u20136 hours depending on the case. Under IV sedation, you will have no memory of the procedure. After 30\\u201360 minutes of observation, you go home (a chaperone is required)."}},{"@type":"Question","name":"Does smoking affect same-day implants?","acceptedAnswer":{"@type":"Answer","text":"Yes. Smoking significantly worsens the prognosis for immediate loading. Quitting, or at minimum sharply reducing, for 4 weeks before and 8 weeks after surgery is strongly recommended to protect healing and implant stability."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.drantipov.com"},{"@type":"ListItem","position":2,"name":"For Patients","item":"https://www.drantipov.com/for-patients"},{"@type":"ListItem","position":3,"name":"Insights","item":"https://www.drantipov.com/for-patients/insights"},{"@type":"ListItem","position":4,"name":"Same-Day Dental Implants (Immediate Load) \\u2014 Myth or Reality?","item":"https://www.drantipov.com/for-patients/insights/same-day-implants"}]}]` }}
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
                <time>April 28, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Same-Day Dental Implants (Immediate Load) &mdash; Myth or Reality?
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-04-28/same-day-implants.jpg"
                alt="Same-day dental implants — All-on-4 final result"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Yes, same-day dental implants are real &mdash; you leave surgery with fixed temporary teeth
                secured to your implants the same day, though the final prosthesis comes a few months later,
                explains Dr. Alexander Antipov, a board-certified oral &amp; maxillofacial surgeon in Roseville,
                CA. &ldquo;Same-day implants&rdquo; and &ldquo;teeth in a day&rdquo; are advertising lines every
                patient will see, so here is what you actually receive the day of surgery &mdash; and why the
                final result comes a few months later, not in six hours.
              </p>
              <p className="italic text-neutral-600 mb-8">
                This article is for general education &mdash; consult a qualified oral surgeon for a
                recommendation tailored to your case.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; You leave the office the day of surgery with fixed temporary teeth on your implants.</li>
                  <li>&bull; The final prosthesis is delivered 4&ndash;6 months later, after full osseointegration.</li>
                  <li>&bull; Candidacy requires sufficient bone density and primary implant stability (&ge;35&nbsp;Ncm).</li>
                  <li>&bull; Most often used for All-on-4 and All-on-6 (full-arch) cases.</li>
                  <li>&bull; Smoking, severe osteoporosis, and uncontrolled diabetes are relative contraindications.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Immediate Loading Actually Means
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The classic implant protocol is &ldquo;two-stage&rdquo;: the implant is placed, allowed to
                heal and fuse to the bone (osseointegration) over 3&ndash;6 months, and only then is a crown
                or prosthesis attached. During that interval, the patient wears a removable temporary or
                goes without a tooth in the implant area.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Immediate load</strong> is a protocol in which a temporary prosthesis is secured to
                the implants the same day they are placed. The implant begins bearing functional load right
                away. Two factors make this possible: high primary stability of the implant (achieved
                through thread design and placement angle) and load distribution across multiple implants
                tied into one rigid prosthesis.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Aspect</th>
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Immediate load (same day)</th>
                      <th className="py-3 font-semibold text-neutral-900">Delayed / two-stage</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">When teeth are attached</td><td className="py-3 pr-4">Same day as implant placement</td><td className="py-3">After 3&ndash;6 months of healing</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Requires</td><td className="py-3 pr-4">High primary stability (&ge;35&nbsp;Ncm), multiple implants</td><td className="py-3">Standard stability</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Common use</td><td className="py-3 pr-4">All-on-4 / All-on-6 full-arch cases</td><td className="py-3">Single-tooth or lower-stability cases</td></tr>
                    <tr><td className="py-3 pr-4">During healing</td><td className="py-3 pr-4">Fixed temporary in place</td><td className="py-3">Removable temporary or gap</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When It Works
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Immediate loading is the standard for <strong>All-on-4</strong> and <strong>All-on-6</strong>
                {" "}protocols: 4 or 6 implants in a single arch supporting a fixed temporary prosthesis on
                day one. The shared load across multiple anchors compensates for the fact that each
                individual implant has not yet fully integrated.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For a <strong>single-tooth implant</strong>, immediate loading is possible less often
                &mdash; it requires ideal anatomy and dense bone. More commonly, a non-functional &ldquo;dummy&rdquo;
                temporary crown is placed without any chewing load for the first several weeks.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What &ldquo;One Day&rdquo; Actually Includes
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Before surgery day:</strong> 3D CT, in-person exam, virtual planning, fabrication
                  of the navigation guide and the temporary prosthesis in the lab.
                </li>
                <li>
                  <strong>Surgery day &mdash; morning:</strong> anesthesia (IV sedation), removal of any
                  remaining problem teeth, and placement of implants using the navigation guide.
                </li>
                <li>
                  <strong>Surgery day &mdash; after placement:</strong> the surgeon verifies primary
                  stability of each implant. If all read &ge;35&nbsp;Ncm, the temporary prosthesis is
                  secured. If any read less, delayed loading is chosen instead (uncommon, but it happens).
                </li>
                <li>
                  <strong>Evening of the same day:</strong> you go home with fixed teeth in place. You can
                  speak and drink. Chewing begins the next day, once the anesthesia has cleared.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What to Expect Afterwards
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>First 2 weeks:</strong> soft diet, gradual reduction of swelling, follow-up
                  visit on day 7.
                </li>
                <li>
                  &mdash; <strong>2&ndash;8 weeks:</strong> gradual return to firmer foods. Meticulous oral
                  hygiene; a water flosser is essential.
                </li>
                <li>
                  &mdash; <strong>3&ndash;6 months:</strong> full osseointegration. At this point, final
                  scans are taken and the permanent prosthesis is fabricated.
                </li>
                <li>
                  &mdash; <strong>The final prosthesis</strong> is typically zirconia or a PMMA composite on
                  a titanium frame, designed to last 15&ndash;25 years with proper care.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What an Honest Surgeon Will Tell You
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Immediate loading is a safe, decades-proven protocol when the indications are right. But an
                honest surgeon will say:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>The temporary really is temporary.</strong> It looks good and functions
                  well, but it is not the final esthetic result, and it is less durable than the permanent
                  prosthesis.
                </li>
                <li>
                  &mdash; <strong>Not every case is a candidate.</strong> If your anatomy does not allow it,
                  delayed loading is the safer path &mdash; not risking the loss of an implant.
                </li>
                <li>
                  &mdash; <strong>Smoking significantly worsens the prognosis.</strong> Quitting, or at
                  minimum sharply reducing, for 4 weeks before and 8 weeks after surgery is strongly
                  recommended.
                </li>
                <li>
                  &mdash; <strong>Hygiene is critical.</strong> Implants cannot decay, but the surrounding
                  soft tissue can become inflamed (mucositis, peri-implantitis). Professional cleanings
                  every 4&ndash;6 months are non-negotiable.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is it really &ldquo;teeth in one day&rdquo;?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes &mdash; with a qualification. The day of surgery, you leave the office with fixed
                    temporary teeth on your implants. The final prosthesis is made 4&ndash;6 months later,
                    after full osseointegration and soft-tissue stabilization. The temporary looks and
                    functions well enough for normal life and work, but it is not the final restoration.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Who is <em>not</em> a candidate for immediate loading?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    If primary stability is below ~35&nbsp;Ncm, immediate loading is not worth the risk.
                    Also: patients with severe osteoporosis, uncontrolled diabetes, active smoking of more
                    than 10 cigarettes a day, or significant bone loss in the implant zone. The decision is
                    made after CT and clinical exam.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How does the temporary differ from the permanent prosthesis?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The temporary is typically acrylic or composite &mdash; lighter, less durable, and not a
                    perfect match to the final smile design. The permanent is zirconia or PMMA on a titanium
                    base, designed for years of service, and custom-fabricated in a dental lab for that
                    specific patient.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I eat the day of surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    On surgery day, soft liquids only &mdash; no chewing load on the implants. For the first
                    2&ndash;4 weeks, a soft diet (purees, fish, eggs, yogurt). Firmer foods are reintroduced
                    gradually as healing progresses. Tough meat, nuts, and hard crusts wait until the
                    permanent prosthesis is in place.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does the surgery itself take?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Extractions + implant placement + temporary prosthesis &mdash; typically 4&ndash;6 hours
                    depending on the case. Under IV sedation, you will have no memory of the procedure.
                    After 30&ndash;60 minutes of observation, you go home (a chaperone is required).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Does smoking affect same-day implants?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. Smoking significantly worsens the prognosis for immediate loading. Quitting, or at
                    minimum sharply reducing, for 4 weeks before and 8 weeks after surgery is strongly
                    recommended to protect healing and implant stability.
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
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/23543541/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Esposito M, Grusovin MG et al. — Cochrane Review: Interventions for replacing missing teeth — different times for loading dental implants</a></li>
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
                    Board-certified oral and maxillofacial surgeon specializing in dental implants, All-on-4
                    and All-on-6 full-arch restoration, same-day implant protocols, and corrective jaw
                    surgery. Serving patients throughout Northern California.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Are You a Candidate for Same-Day Implants?
                </h3>
                <p className="text-neutral-700 mb-6">
                  A complimentary 3D CT and in-person exam are the only way to know for certain whether
                  immediate loading is right for your case &mdash; or whether a delayed protocol will deliver
                  a better long-term result.
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

      <RelatedArticles currentSlug="same-day-implants" />
    </>
  )
}
