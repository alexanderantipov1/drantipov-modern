import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sedation Options for Dental Implant Surgery",
  description:
    "Compare sedation options for dental implants - local anesthesia, oral sedation, IV sedation, and general anesthesia. Choose the right comfort level with Dr. Antipov in Roseville, CA.",
  alternates: {
    canonical: "/for-patients/insights/sedation-options-dental-implant-surgery",
    languages: {
      "en": "/for-patients/insights/sedation-options-dental-implant-surgery",
      "x-default": "/for-patients/insights/sedation-options-dental-implant-surgery",
    },
  },
  keywords: [
    "dental implant sedation",
    "IV sedation dental implants",
    "oral sedation dentistry",
    "general anesthesia oral surgery",
    "local anesthesia implants",
    "sedation dentistry Roseville",
  ],
  openGraph: {
    title: "Sedation Options for Dental Implant Surgery",
    description: "Local anesthesia, oral sedation, IV sedation, and general anesthesia - choose the right comfort level for implant surgery.",
    images: [
      {
        url: "/images/blog/2026-06-19/sedation-options.png",
        width: 1200,
        height: 630,
        alt: "Sedation Options for Dental Implant Surgery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedation Options for Dental Implant Surgery",
    description: "Local anesthesia, oral sedation, IV sedation, and general anesthesia - choose the right comfort level for implant surgery.",
    images: ["/images/blog/2026-06-19/sedation-options.png"],
  }
}

export default function SedationOptionsDentalImplantSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/sedation-options-dental-implant-surgery#article","headline":"Sedation Options for Dental Implant Surgery Explained","description":"Compare sedation options for dental implant surgery \\u2014 local anesthesia, oral sedation, IV sedation, and general anesthesia \\u2014 and how to choose the right comfort level.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/sedation-options-dental-implant-surgery","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/sedation-options.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/sedation-options-dental-implant-surgery"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between sedation and pain control?","acceptedAnswer":{"@type":"Answer","text":"They are not the same thing. Sedation reduces awareness and anxiety, while local anesthesia controls pain by numbing the surgical area. Even under deep sedation, local anesthetic is still used so the surgical site stays completely numb. Confusing the two leads to unrealistic expectations."}},{"@type":"Question","name":"Will I be awake during implant surgery with local anesthesia?","acceptedAnswer":{"@type":"Answer","text":"Yes. With local anesthesia alone you remain fully conscious. The surgical area is numbed, you feel no pain, and there are no systemic sedation effects, which means a short recovery time. It is appropriate for simple procedures and patients with low anxiety."}},{"@type":"Question","name":"How is IV sedation different from oral sedation?","acceptedAnswer":{"@type":"Answer","text":"Oral sedation reduces anxiety but has variable absorption, unpredictable depth, and limited control once the pill is taken. IV sedation is delivered directly into the bloodstream for rapid onset, adjustable depth, and reduced procedural awareness. IV sedation requires advanced monitoring and trained personnel."}},{"@type":"Question","name":"When is general anesthesia recommended for implant surgery?","acceptedAnswer":{"@type":"Answer","text":"General anesthesia is reserved for select cases such as extensive surgery, severe anxiety, or medical necessity. It carries higher systemic risk and requires strict protocols and monitoring, so it is not used routinely for straightforward implant procedures."}},{"@type":"Question","name":"How do I choose the right sedation option?","acceptedAnswer":{"@type":"Answer","text":"The right choice depends on your anxiety level, the complexity of the procedure, your medical history, and personal preference. At your consultation we review all of these factors and recommend the safest, most comfortable approach for your situation."}}]}]` }}
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
                Oral Surgery
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>June 19, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Sedation Options for Dental Implant Surgery Explained
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> - Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/sedation-options.png"
                alt="Sedation options matched to each patient's comfort level for dental implant surgery"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Sedation improves patient comfort, but it does not replace surgical precision. Choosing the
                correct sedation method depends on your medical history, anxiety level, and the complexity
                of the procedure. Understanding your options helps you walk into surgery confident and
                relaxed.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Local anesthesia keeps you fully conscious and numbs the surgical area &mdash; ideal for simple cases.</li>
                  <li>&bull; Oral sedation reduces anxiety but has variable absorption and limited control.</li>
                  <li>&bull; IV sedation offers rapid onset, adjustable depth, and reduced awareness with advanced monitoring.</li>
                  <li>&bull; General anesthesia is reserved for extensive surgery, severe anxiety, or medical necessity.</li>
                  <li>&bull; Sedation reduces awareness; local anesthesia controls pain &mdash; they are not the same thing.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Local Anesthesia
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Local anesthesia numbs the surgical area so you feel no pain during the procedure. Its key
                characteristics are:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; The patient remains fully conscious.</li>
                <li>&mdash; There are no systemic sedation effects.</li>
                <li>&mdash; Recovery time is short.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                It is appropriate for simple procedures and patients with low anxiety.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Oral Sedation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Oral sedatives reduce anxiety but do not induce deep sedation. Their limitations include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Variable absorption.</li>
                <li>&mdash; Unpredictable depth.</li>
                <li>&mdash; Limited control once the medication is administered.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Oral sedation is often combined with local anesthesia for added comfort.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                IV Sedation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                IV sedation provides controlled, deeper relaxation by delivering medication directly into
                the bloodstream. Its advantages are:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Rapid onset.</li>
                <li>&mdash; Adjustable depth.</li>
                <li>&mdash; Reduced procedural awareness.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                IV sedation requires advanced monitoring and trained personnel.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                General Anesthesia
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                General anesthesia is used in select cases, including:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Extensive surgery.</li>
                <li>&mdash; Severe anxiety.</li>
                <li>&mdash; Medical necessity.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                It carries higher systemic risk and requires strict protocols and monitoring.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Sedation Is Not Pain Control
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                It is important to understand the distinction: <strong>sedation reduces awareness</strong>,
                while <strong>local anesthesia controls pain</strong>. Confusing the two leads to
                unrealistic expectations. Even patients under deep sedation still receive local anesthetic
                so the surgical site remains completely numb.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Choosing Your Comfort Level
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The right sedation depends on several factors:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Your anxiety level.</li>
                <li>&mdash; The complexity of the procedure.</li>
                <li>&mdash; Your medical history.</li>
                <li>&mdash; Your personal preference.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                At <Link href="/about" className="text-primary-700 hover:text-primary-800 font-semibold">Dr. Antipov&rsquo;s practice</Link>,
                we discuss all options and recommend the best approach for your situation. We offer multiple
                sedation options to ensure you are comfortable throughout your procedure.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What is the difference between sedation and pain control?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    They are not the same thing. Sedation reduces awareness and anxiety, while local
                    anesthesia controls pain by numbing the surgical area. Even under deep sedation, local
                    anesthetic is still used so the surgical site stays completely numb. Confusing the two
                    leads to unrealistic expectations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Will I be awake during implant surgery with local anesthesia?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. With local anesthesia alone you remain fully conscious. The surgical area is numbed,
                    you feel no pain, and there are no systemic sedation effects, which means a short recovery
                    time. It is appropriate for simple procedures and patients with low anxiety.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How is IV sedation different from oral sedation?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Oral sedation reduces anxiety but has variable absorption, unpredictable depth, and
                    limited control once the pill is taken. IV sedation is delivered directly into the
                    bloodstream for rapid onset, adjustable depth, and reduced procedural awareness. IV
                    sedation requires advanced monitoring and trained personnel.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    When is general anesthesia recommended for implant surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    General anesthesia is reserved for select cases such as extensive surgery, severe
                    anxiety, or medical necessity. It carries higher systemic risk and requires strict
                    protocols and monitoring, so it is not used routinely for straightforward implant
                    procedures.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How do I choose the right sedation option?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The right choice depends on your anxiety level, the complexity of the procedure, your
                    medical history, and personal preference. At your consultation we review all of these
                    factors and recommend the safest, most comfortable approach for your situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/anesthesia" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Anesthesia in Oral &amp; Maxillofacial Surgery</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Dental Implant Surgery</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/anesthesia-and-sedation" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy - Anesthesia and Sedation</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR - Dental Implants</a></li>
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
                  Comfortable, Personalized Implant Care
                </h3>
                <p className="text-neutral-700 mb-6">
                  The best sedation plan starts with a conversation about your health, comfort, and goals.
                  The consultation is complimentary. A patient coordinator will call back within 24 hours and
                  explain what to prepare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
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
