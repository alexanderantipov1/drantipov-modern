import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zygomatic Implants — When You Need Them",
  description:
    "Zygomatic implants for severe upper jaw bone loss. When conventional implants are not possible, how the procedure works, candidacy, timing, and cost with Dr. Antipov in Roseville, CA.",
  alternates: {
    canonical: "/for-patients/insights/zygomatic-implants",
    languages: {
      "en": "/for-patients/insights/zygomatic-implants",
      "x-default": "/for-patients/insights/zygomatic-implants",
    },
  },
  keywords: [
    "zygomatic implants",
    "severe bone loss implants",
    "upper jaw atrophy implants",
    "alternative to bone grafting",
    "zygoma implants Roseville",
    "full arch zygomatic implants",
  ],
  openGraph: {
    title: "Zygomatic Implants — When You Need Them",
    description: "Long zygomatic implants for severe upper-jaw bone loss — alternative to staged bone grafting.",
    images: [
      {
        url: "/images/blog/2026-04-28/zygomatic-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Zygomatic Implants — When You Need Them",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zygomatic Implants — When You Need Them",
    description: "Long zygomatic implants for severe upper-jaw bone loss — alternative to staged bone grafting.",
    images: ["/images/blog/2026-04-28/zygomatic-implants.jpg"],
  }
}

export default function ZygomaticImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/zygomatic-implants#article","headline":"Zygomatic Implants: When You Need Them and How They Work","description":"Comprehensive guide to zygomatic implants for severe upper-jaw bone loss \\u2014 indications, procedure, recovery, candidacy, and cost.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/zygomatic-implants","datePublished":"2026-04-28","dateModified":"2026-04-28","image":["https://www.drantipov.com/images/blog/2026-04-28/zygomatic-implants.jpg"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/zygomatic-implants"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between zygomatic implants and conventional implants?","acceptedAnswer":{"@type":"Answer","text":"Conventional dental implants are placed in the 8\\u201313 mm-tall alveolar ridge of the jaw. Zygomatic implants are long (30\\u201355 mm) implants anchored in the zygoma \\u2014 the cheekbone. They are used when the upper jaw is simply not there: too thin, or too resorbed. The cheekbone is much denser and does not atrophy, so it provides reliable support even in the most complex cases."}},{"@type":"Question","name":"Can I get temporary teeth the same day?","acceptedAnswer":{"@type":"Answer","text":"Yes, in most cases. Zygomatic implants are designed for immediate loading \\u2014 high primary stability allows a temporary prosthesis to be secured right away. The final restoration is fabricated after 4\\u20136 months of healing."}},{"@type":"Question","name":"Does it hurt? What anesthesia is used?","acceptedAnswer":{"@type":"Answer","text":"Surgery is performed under IV sedation or general anesthesia. You will have no memory of the procedure. Post-operative discomfort is typically moderate and well controlled with standard pain medication for 3\\u20135 days."}},{"@type":"Question","name":"Who is not a candidate for zygomatic implants?","acceptedAnswer":{"@type":"Answer","text":"Active sinusitis, severe systemic conditions, uncontrolled diabetes, and active high-dose bisphosphonate therapy are all contraindications. Smoking significantly increases the risk of failure. The full list of contraindications is discussed at consultation after a CT scan."}},{"@type":"Question","name":"How much does it cost?","acceptedAnswer":{"@type":"Answer","text":"Zygomatic implants are more expensive than conventional implants, but in most cases the total cost is lower \\u2014 and the timeline is much shorter \\u2014 than staged bone grafting + sinus lift + conventional implants. Exact pricing is determined after a CT scan, with most full-arch zygomatic cases falling in the \$35,000\\u2013\$60,000 range. Financing from \$99/month is available."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.drantipov.com"},{"@type":"ListItem","position":2,"name":"For Patients","item":"https://www.drantipov.com/for-patients"},{"@type":"ListItem","position":3,"name":"Insights","item":"https://www.drantipov.com/for-patients/insights"},{"@type":"ListItem","position":4,"name":"Zygomatic Implants: When You Need Them and How They Work","item":"https://www.drantipov.com/for-patients/insights/zygomatic-implants"}]}]` }}
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
                <span>9 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Zygomatic Implants: When You Need Them and How They Work
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-04-28/zygomatic-implants.jpg"
                alt="Zygomatic implants for severe upper jaw bone loss"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                If you have been told that conventional dental implants are not possible because there is
                not enough bone in your upper jaw, zygomatic implants may be the solution. This is not a
                &ldquo;better alternative&rdquo; &mdash; it is a distinct approach for complex cases where standard
                protocols and bone grafting fall short.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Zygomatic implants are long (30&ndash;55&nbsp;mm) implants anchored in the cheekbone, not the jaw.</li>
                  <li>&bull; Indicated for severe upper-jaw atrophy where conventional implants are not feasible.</li>
                  <li>&bull; Often eliminate the need for staged bone grafting and a year of waiting.</li>
                  <li>&bull; Same-day temporary teeth are possible with immediate loading.</li>
                  <li>&bull; Only experienced <Link href="/about" className="text-primary-700 hover:text-primary-800 font-semibold">oral &amp; maxillofacial surgeons</Link> perform this technique.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What They Are and Where They&rsquo;re Placed
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A conventional dental implant is a titanium screw 8&ndash;13&nbsp;millimeters long, placed into the
                alveolar ridge of the jaw. When teeth have been missing for years, that ridge atrophies. In
                the lower jaw, the loss is rarely critical. In the upper jaw, the combination of atrophy
                plus the maxillary sinus above often leaves too little bone for conventional implant
                placement.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Zygomatic implants</strong> solve this differently. They are long (30&ndash;55&nbsp;mm)
                implants that anchor not in the upper jaw, but in the <strong>zygomatic bone (the cheekbone)</strong>
                &mdash; a dense, robust structure of the facial skeleton that does not undergo atrophy. One or two
                zygomatic implants combined with several conventional implants in the front of the jaw
                provide the foundation for a complete fixed prosthesis.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Zygomatic Implants Are the Right Choice
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Not every patient with bone loss needs them. Typical indications include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Severe upper-jaw atrophy</strong> (often after years of denture wear or 10+ years
                  since tooth loss).
                </li>
                <li>
                  &mdash; <strong>Failed prior bone grafting</strong> or unsuccessful sinus lift.
                </li>
                <li>
                  &mdash; <strong>A desire to avoid staged treatment</strong> (the conventional path: bone graft &rarr;
                  6&ndash;9 months &rarr; implants &rarr; 4&ndash;6 months &rarr; prosthesis).
                </li>
                <li>
                  &mdash; <strong>Post-oncology or post-traumatic anatomy</strong> in which normal jaw structure
                  is disrupted.
                </li>
                <li>
                  &mdash; <strong>Age or general health</strong> that makes multiple separate procedures
                  inadvisable.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How the Procedure Works
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>3D CT and virtual planning.</strong> The scan reveals the density of the zygoma,
                  the location of the sinus and nerves. The surgeon plots each implant&rsquo;s trajectory in
                  software before surgery.
                </li>
                <li>
                  <strong>Anesthesia.</strong> IV sedation or general anesthesia &mdash; the patient has no memory
                  of the procedure and no discomfort during surgery.
                </li>
                <li>
                  <strong>Implant placement.</strong> The surgeon enters through the gum, forms the channel
                  in the zygomatic bone using a navigation guide, and seats the implant at the precise
                  angle. The operation takes 2&ndash;4 hours depending on complexity.
                </li>
                <li>
                  <strong>Same-day temporary teeth.</strong> If primary stability is sufficient (&ge;35&nbsp;Ncm),
                  an immediate-load prosthesis is secured the same day.
                </li>
                <li>
                  <strong>Healing and the final prosthesis.</strong> 4&ndash;6 months of osseointegration, then
                  fabrication and placement of the definitive prosthesis.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Recovery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most patients return to work within 5&ndash;7 days. The first two weeks call for a soft diet,
                reduced physical activity, and meticulous oral hygiene. Follow-up visits are scheduled at
                day 7, day 30, day 90, and the 6-month mark. Full osseointegration takes 4&ndash;6 months, but
                temporary teeth make that interval comfortable in terms of eating and social life.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Who Performs It
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Zygomatic implants require a fellowship-trained oral &amp; maxillofacial surgeon. This is not a
                general-dentistry procedure. <Link href="/about" className="text-primary-700 hover:text-primary-800 font-semibold">Dr. Antipov</Link> is:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; A Diplomate of the American Board of Oral &amp; Maxillofacial Surgery (ABOMS).</li>
                <li>&mdash; Fellowship-trained in advanced implantology and upper-jaw reconstruction.</li>
                <li>&mdash; 25+ years of board-certified practice and 10,000+ smiles restored.</li>
                <li>
                  &mdash; Accepting patients from other states and countries for zygomatic cases (Roseville, CA
                  is 30 minutes from Sacramento International Airport).
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What is the difference between zygomatic implants and conventional implants?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Conventional dental implants are placed in the 8&ndash;13&nbsp;mm-tall alveolar ridge of the
                    jaw. Zygomatic implants are long (30&ndash;55&nbsp;mm) implants anchored in the zygoma &mdash; the
                    cheekbone. They are used when the upper jaw is simply not there: too thin, or too
                    resorbed. The cheekbone is much denser and does not atrophy, so it provides reliable
                    support even in the most complex cases.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I get temporary teeth the same day?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes, in most cases. Zygomatic implants are designed for immediate loading &mdash; high primary
                    stability allows a temporary prosthesis to be secured right away. The final restoration
                    is fabricated after 4&ndash;6 months of healing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Does it hurt? What anesthesia is used?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Surgery is performed under IV sedation or general anesthesia. You will have no memory of
                    the procedure. Post-operative discomfort is typically moderate and well controlled with
                    standard pain medication for 3&ndash;5 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Who is <em>not</em> a candidate for zygomatic implants?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Active sinusitis, severe systemic conditions, uncontrolled diabetes, and active
                    high-dose bisphosphonate therapy are all contraindications. Smoking significantly
                    increases the risk of failure. The full list of contraindications is discussed at
                    consultation after a CT scan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How much does it cost?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Zygomatic implants are more expensive than conventional implants, but in most cases the
                    total cost is lower &mdash; and the timeline is much shorter &mdash; than staged bone grafting +
                    sinus lift + conventional implants. Exact pricing is determined after a CT scan, with
                    most full-arch zygomatic cases falling in the $35,000&ndash;$60,000 range. Financing from
                    $99/month is available.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15074739/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Branemark PI, Gröndahl K, Ohrnell LO et al. — Zygoma fixture in the management of advanced atrophy of the maxilla</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/24533334/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Aparicio C, Manresa C et al. — Zygomatic implants: indications, techniques, outcomes</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA — Dental Implants Overview</a></li>
              </ul>
            </section>

            {/* Author Info */}
            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-primary-700">DA</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Dr. Alexander V. Antipov</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Board-certified oral and maxillofacial surgeon specializing in dental implants, full-arch
                    restoration, zygomatic implants, and corrective jaw surgery. Serving patients throughout
                    Northern California and beyond.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Find Out If Zygomatic Implants Are Right for You
                </h3>
                <p className="text-neutral-700 mb-6">
                  An accurate recommendation is only possible after an in-person exam and a 3D CT scan. The
                  consultation is complimentary. A patient coordinator will call back within 24 hours and
                  explain what to prepare.
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
