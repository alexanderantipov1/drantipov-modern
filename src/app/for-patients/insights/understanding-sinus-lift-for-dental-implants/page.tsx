import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Understanding Sinus Lift for Dental Implants",
  description:
    "A sinus lift (sinus augmentation) builds bone in the upper jaw so implants can be placed securely. Learn when it is needed, how it works, recovery, and cost with Dr. Antipov in Roseville, CA.",
  alternates: {
    canonical: "/for-patients/insights/understanding-sinus-lift-for-dental-implants",
    languages: {
      "en": "/for-patients/insights/understanding-sinus-lift-for-dental-implants",
      "x-default": "/for-patients/insights/understanding-sinus-lift-for-dental-implants",
    },
  },
  keywords: [
    "sinus lift",
    "sinus augmentation",
    "dental implants upper jaw",
    "bone grafting for implants",
    "maxillary sinus implants",
    "sinus lift Roseville",
  ],
  openGraph: {
    title: "Understanding Sinus Lift for Dental Implants",
    description: "How a sinus lift builds upper-jaw bone for secure dental implant placement.",
    images: [
      {
        url: "/images/blog/2026-06-19/sinus-lift.png",
        width: 1200,
        height: 630,
        alt: "Understanding Sinus Lift for Dental Implants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Sinus Lift for Dental Implants",
    description: "How a sinus lift builds upper-jaw bone for secure dental implant placement.",
    images: ["/images/blog/2026-06-19/sinus-lift.png"],
  }
}

export default function SinusLiftPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/understanding-sinus-lift-for-dental-implants#article","headline":"Understanding Sinus Lift for Dental Implants","description":"A sinus lift (sinus augmentation) increases bone volume in the upper jaw so dental implants can be placed securely \\u2014 indications, procedure, recovery, and benefits.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/understanding-sinus-lift-for-dental-implants","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/sinus-lift.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/understanding-sinus-lift-for-dental-implants"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the recovery time after a sinus lift?","acceptedAnswer":{"@type":"Answer","text":"The recovery time after a sinus lift can vary, but it generally takes several months for the bone to heal properly before dental implants can be placed. Patients typically attend follow-up visits to monitor progress."}},{"@type":"Question","name":"Is a sinus lift painful?","acceptedAnswer":{"@type":"Answer","text":"Most patients report mild discomfort after the procedure, which can usually be managed with prescribed pain medications. Local anesthesia helps minimize pain during the surgery itself."}},{"@type":"Question","name":"How long does the sinus lift procedure take?","acceptedAnswer":{"@type":"Answer","text":"The sinus lift procedure usually takes about 1\\u20132 hours, depending on the complexity of the case. Patients can often return home the same day."}},{"@type":"Question","name":"Can anyone have a sinus lift?","acceptedAnswer":{"@type":"Answer","text":"Not everyone is a candidate for a sinus lift. Factors such as overall health, smoking habits, and bone quality are considered during the evaluation process."}},{"@type":"Question","name":"What materials are used for bone grafting in a sinus lift?","acceptedAnswer":{"@type":"Answer","text":"Bone grafting materials can include autografts (the patient\\u2019s own bone), allografts (donor bone), or synthetic materials. The choice depends on the individual case and surgeon preference."}},{"@type":"Question","name":"What happens if I don\\u2019t get a sinus lift?","acceptedAnswer":{"@type":"Answer","text":"If a sinus lift is needed but not performed, it may not be possible to place dental implants successfully. This could lead to further bone loss and potential complications."}}]}]` }}
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
                <span>6 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Understanding Sinus Lift for Dental Implants
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> - Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/sinus-lift.png"
                alt="Sinus lift procedure building bone in the upper jaw for dental implants"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                A sinus lift for dental implants is a surgical procedure that enhances bone volume in the
                upper jaw, enabling successful implant placement. When there is not enough bone height near
                the molars and premolars, a sinus lift creates a stronger foundation &mdash; improving
                predictability and long-term results.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; A sinus lift (sinus augmentation) increases bone volume in the upper jaw near the maxillary sinuses.</li>
                  <li>&bull; It is recommended when there is not enough bone height to support an implant safely.</li>
                  <li>&bull; The sinus membrane is gently elevated and bone graft material is placed beneath it.</li>
                  <li>&bull; The procedure usually takes 1&ndash;2 hours and is often done with local anesthesia.</li>
                  <li>&bull; Healing takes several months as the graft integrates before implants are placed.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is a Sinus Lift?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A sinus lift is a surgical procedure designed to increase bone in the upper jaw near the
                maxillary sinuses. Because the sinus cavity sits above the upper back teeth, there may be
                limited space for an implant when bone volume is low. During a sinus lift, the sinus
                membrane is gently elevated and bone graft material is placed beneath it to build adequate
                bone height for implant support.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Is a Sinus Lift Performed?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                While technique varies by case, a sinus lift often follows these general steps:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Assessment.</strong> Your surgeon evaluates bone and sinus anatomy with X-rays or
                  3D imaging (CBCT).
                </li>
                <li>
                  <strong>Anesthesia.</strong> Local anesthesia is used, and sedation may be offered
                  depending on the plan.
                </li>
                <li>
                  <strong>Accessing the sinus.</strong> A small opening is created in the bone to reach the
                  sinus membrane.
                </li>
                <li>
                  <strong>Adding bone material.</strong> Bone graft material is placed to increase bone
                  volume.
                </li>
                <li>
                  <strong>Healing.</strong> The area is closed and allowed to heal while the graft
                  integrates.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Is a Sinus Lift Necessary?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A sinus lift may be recommended when there is not enough upper jaw bone to support an
                implant. Common reasons include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Insufficient bone height.</strong> Upper jaw bone can shrink after tooth
                  loss, and the maxillary sinuses can expand over time, further reducing available bone
                  height.
                </li>
                <li>
                  &mdash; <strong>Gum disease.</strong> Chronic periodontal disease can lead to bone loss,
                  affecting implant stability and requiring bone augmentation.
                </li>
                <li>
                  &mdash; <strong>Previous extractions.</strong> If teeth were removed a long time ago, bone
                  may have resorbed significantly, making additional bone support necessary before implants.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Benefits of a Sinus Lift
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Increases bone volume.</strong> Builds the support needed for safe implant placement.</li>
                <li>&mdash; <strong>Improves implant success.</strong> More bone support increases stability and predictability.</li>
                <li>&mdash; <strong>Supports aesthetics and function.</strong> Proper implant placement can improve bite and facial support.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Risks and Considerations
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                As with any surgical procedure, there are potential risks, including infection, bleeding,
                sinus membrane perforation, or delayed healing. Careful planning, imaging, and experienced
                surgical technique help reduce these risks.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Recovery After a Sinus Lift
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Post-operative care focuses on protecting the graft while it heals:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Rest.</strong> Avoid strenuous activity for several days.</li>
                <li>&mdash; <strong>Swelling control.</strong> Ice packs can help in the first 24&ndash;48 hours.</li>
                <li>&mdash; <strong>Pain management.</strong> Use prescribed medications as directed.</li>
                <li>&mdash; <strong>Follow-ups.</strong> Attend scheduled check-ups to monitor healing.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Healing typically takes several months as the graft integrates with the existing bone. Your
                provider will confirm readiness with imaging before moving forward with implant placement.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Preparing for a Sinus Lift
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A consultation is essential. Your surgeon will review medical history, evaluate sinus and
                bone anatomy with imaging, and explain the procedure, risks, and expected timeline. If you
                are considering a more comprehensive fixed solution, you can also explore{" "}
                <Link href="/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">full-arch restoration options</Link>{" "}
                as part of your long-term plan.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What is the recovery time after a sinus lift?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The recovery time after a sinus lift can vary, but it generally takes several months for
                    the bone to heal properly before dental implants can be placed. Patients typically
                    attend follow-up visits to monitor progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is a sinus lift painful?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most patients report mild discomfort after the procedure, which can usually be managed
                    with prescribed pain medications. Local anesthesia helps minimize pain during the
                    surgery itself.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does the sinus lift procedure take?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The sinus lift procedure usually takes about 1&ndash;2 hours, depending on the complexity
                    of the case. Patients can often return home the same day.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can anyone have a sinus lift?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Not everyone is a candidate for a sinus lift. Factors such as overall health, smoking
                    habits, and bone quality are considered during the evaluation process.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What materials are used for bone grafting in a sinus lift?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Bone grafting materials can include autografts (the patient&rsquo;s own bone), allografts
                    (donor bone), or synthetic materials. The choice depends on the individual case and
                    surgeon preference.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What happens if I don&rsquo;t get a sinus lift?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    If a sinus lift is needed but not performed, it may not be possible to place dental
                    implants successfully. This could lead to further bone loss and potential complications.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Dental Implant Surgery</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy - Dental Implants Overview</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR - Gum (Periodontal) Disease</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/28160394/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Pjetursson BE, Lang NP - Sinus floor elevation: outcomes and complications</a></li>
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
                  Find Out If You Need a Sinus Lift
                </h3>
                <p className="text-neutral-700 mb-6">
                  An accurate recommendation is only possible after an in-person exam and 3D imaging. The
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
