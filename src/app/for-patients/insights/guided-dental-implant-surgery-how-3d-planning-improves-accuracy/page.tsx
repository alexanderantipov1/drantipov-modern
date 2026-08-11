import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Guided Dental Implant Surgery: How 3D Planning Works" },
  description:
    "Understand exactly how guided dental implant surgery uses 3D CBCT scans and custom surgical guides for precise placement with Roseville surgeon Dr. Antipov.",
  alternates: {
    canonical: "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    languages: {
      "en": "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
      "x-default": "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    },
  },
  keywords: [
    "guided dental implant surgery",
    "3D implant planning",
    "CBCT implant scan",
    "surgical guide implants",
    "prosthetically driven planning",
    "full-arch implant accuracy",
  ],
  openGraph: {
    title: "Guided Dental Implant Surgery: How 3D Planning Works",
    description: "How 3D imaging, digital planning, and custom surgical guides improve dental implant accuracy.",
    images: [
      {
        url: "/images/blog/2026-06-19/guided-implant-surgery.png",
        width: 1200,
        height: 630,
        alt: "Guided Dental Implant Surgery: How 3D Planning Improves Accuracy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Dental Implant Surgery: How 3D Planning Works",
    description: "How 3D imaging, digital planning, and custom surgical guides improve dental implant accuracy.",
    images: ["/images/blog/2026-06-19/guided-implant-surgery.png"],
  }
}

export default function GuidedDentalImplantSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy#article","headline":"Guided Dental Implant Surgery: How 3D Planning Improves Accuracy","description":"Guided dental implant surgery explained with 3D CBCT scans, custom surgical guides, and precision benefits, plus what patients can expect on surgery day.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/guided-implant-surgery.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What imaging is used in guided dental implant surgery?","acceptedAnswer":{"@type":"Answer","text":"Most guided cases use CBCT imaging for 3D planning. Digital scans of the teeth and gums are also commonly used so the surgical plan matches the final tooth design."}},{"@type":"Question","name":"How long does guided dental implant surgery take?","acceptedAnswer":{"@type":"Answer","text":"The surgical portion can vary widely. Some single-implant cases may be completed quickly, while full-arch cases take longer due to multiple implants and additional steps. The planning phase happens before surgery, and that is a big part of what improves accuracy and predictability."}},{"@type":"Question","name":"Is guided dental implant surgery painful?","acceptedAnswer":{"@type":"Answer","text":"The procedure is typically done under local anesthesia, and sedation options may be available depending on your comfort needs. Most patients describe pressure during treatment and mild to moderate soreness afterward, which is usually manageable with recommended medications and aftercare."}},{"@type":"Question","name":"Can guided surgery support same-day teeth for full-arch cases?","acceptedAnswer":{"@type":"Answer","text":"In many full-arch cases, guided planning can help support a same-day temporary fixed bridge when clinical conditions allow. Eligibility depends on implant stability, bite forces, and your overall plan. Your dentist should explain whether immediate loading is appropriate and what restrictions you will follow during healing."}},{"@type":"Question","name":"Is guided dental implant surgery safer than freehand placement?","acceptedAnswer":{"@type":"Answer","text":"Guided planning can improve safety in many cases because it helps the clinician avoid nerves and sinuses and place implants where they best support the final teeth. Freehand placement can also be very successful, especially with experienced clinicians. The best approach depends on your anatomy, complexity, and treatment goals."}},{"@type":"Question","name":"Does guided surgery reduce recovery time?","acceptedAnswer":{"@type":"Answer","text":"It can, especially when guided placement allows smaller incisions or more efficient surgery. Recovery still depends on the number of implants, extractions, grafting, and individual healing factors."}},{"@type":"Question","name":"Does guided dental implant surgery cost more?","acceptedAnswer":{"@type":"Answer","text":"Sometimes guided cases have additional planning and guide fabrication costs. Many patients find the added precision and predictability worth it, especially for full-arch treatment where accurate positioning affects the long-term fit and performance of the prosthesis."}},{"@type":"Question","name":"What if I need bone grafting or extractions?","acceptedAnswer":{"@type":"Answer","text":"Guided planning can still be used alongside extractions or grafting, depending on timing and case design. Your dentist may recommend staged steps to improve stability, especially if infection or bone loss is present."}}]}]` }}
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
              Guided Dental Implant Surgery: How 3D Planning Improves Accuracy
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/guided-implant-surgery.png"
                alt="Guided dental implant surgery using 3D planning and a custom surgical guide"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Guided dental implant surgery uses 3D imaging and a custom surgical guide to place implants in
                a precise, pre-planned position, explains Dr. Alexander Antipov, a board-certified oral &amp;
                maxillofacial surgeon in Roseville, CA. Instead of relying only on freehand placement, this
                approach maps the safest, most accurate implant position before your procedure even starts,
                one of the biggest upgrades in modern implant dentistry over the last decade.
              </p>
              <p className="italic text-neutral-600 mb-8">
                This article is for general education &mdash; consult a qualified oral surgeon for a
                recommendation tailored to your case.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is Guided Dental Implant Surgery?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Guided dental implant surgery is a technique where implant placement is planned digitally
                using 3D imaging, then transferred to the mouth using a custom surgical guide. The guide
                acts like a precise template, helping the clinician place implants in the exact position,
                depth, and angle that were planned on the computer.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Traditional implant placement can be done freehand, and many experienced clinicians achieve
                excellent outcomes that way. Guided surgery adds another layer of precision by connecting
                the treatment plan to a physical guide, so the surgical execution closely matches the
                digital plan.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Role of 3D Imaging and Digital Planning
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Guided planning typically combines:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Planning input</th>
                      <th className="py-3 font-semibold text-neutral-900">What it captures</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">CBCT scan (3D X-ray)</td><td className="py-3">Bone volume, density patterns, nerve pathways, and sinus anatomy</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Intraoral scans / digital impressions</td><td className="py-3">The exact shape of your teeth and gums</td></tr>
                    <tr><td className="py-3 pr-4">Virtual planning software</td><td className="py-3">Aligns scan data so placement follows bone anatomy and final tooth design</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                This matters because implant success is not just about &ldquo;putting a post in bone.&rdquo;
                It&rsquo;s about placing implants where they can support the final teeth comfortably, look
                natural, and handle chewing forces long term.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Makes Guided Surgery More Accurate?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Guided surgery helps improve accuracy in three key ways:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Prosthetically driven planning.</strong> Implants are planned based on where the
                  final teeth need to be, not only where bone is easiest. This is critical for full-arch
                  cases because the bite, smile line, and strength of the bridge all depend on implant
                  positioning.
                </li>
                <li>
                  <strong>Safer navigation around anatomy.</strong> 3D planning helps avoid sensitive areas
                  like the inferior alveolar nerve in the lower jaw, the sinuses in the upper jaw, and thin
                  bone zones where stability may be harder to achieve.
                </li>
                <li>
                  <strong>Controlled depth and angulation.</strong> A surgical guide limits drift. That
                  means the drill path and implant angle are more consistent with the plan, especially when
                  multiple implants must work together for a single prosthesis.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Guided vs Partially Guided: What&rsquo;s the Difference?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Not every &ldquo;guided&rdquo; case is guided the same way. Your surgeon may explain one of
                these approaches:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Fully guided:</strong> The guide controls the drilling sequence and implant placement depth and angle.</li>
                <li>&mdash; <strong>Pilot-guided:</strong> The guide helps start the position accurately, then the rest is completed with careful clinical control.</li>
                <li>&mdash; <strong>Hybrid approach:</strong> Used when a case needs both guided precision and flexibility, for example when bone reduction or soft tissue adjustments are needed.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The right choice depends on your anatomy, bone conditions, and whether you are restoring a
                single tooth or a full arch.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Guided Surgery Can Be Ideal for Full-Arch Restoration
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Full-arch restoration often involves placing multiple implants in positions that allow a
                strong, stable, natural-looking bridge. Guided planning can help because:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; implants must be aligned for even bite force distribution</li>
                <li>&mdash; the final teeth must sit in a natural position for speech and aesthetics</li>
                <li>&mdash; prosthesis fit depends heavily on accurate implant placement</li>
                <li>&mdash; same-day temporary teeth, when appropriate, benefit from precise positioning</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                If you are exploring full-arch solutions in Roseville, you can review your{" "}
                <Link href="/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">full-arch restoration options</Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step-by-Step: How Guided Surgery Works
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Consultation and clinical evaluation.</strong> Your surgeon evaluates your gum
                  health, bite, medical history, and goals. This is also when you discuss whether you want
                  a single implant, multiple implants, or a full-arch solution.
                </li>
                <li>
                  <strong>CBCT scan and digital impressions.</strong> A CBCT scan captures a 3D view of
                  your jawbone and surrounding anatomy. Digital impressions or intraoral scans capture the
                  surface shape of your gums and existing teeth.
                </li>
                <li>
                  <strong>Virtual treatment planning.</strong> The dental team plans implant number and
                  positions, angles and depths, prosthesis design and bite relationship, and spacing for
                  cleaning and long-term maintenance.
                </li>
                <li>
                  <strong>Surgical guide design and fabrication.</strong> A custom guide is created based on
                  your plan. Depending on the case, guides can be tooth-supported, gum-supported, or
                  bone-supported.
                </li>
                <li>
                  <strong>Implant placement procedure.</strong> During surgery, the guide is secured in
                  place and used to direct the drilling sequence and implant placement. Many guided cases
                  can be less invasive because the plan is precise and the access can be more controlled.
                </li>
                <li>
                  <strong>Temporary teeth and follow-up.</strong> In some cases, especially full-arch
                  treatment, a temporary fixed bridge may be placed the same day or shortly after. Your
                  surgeon then monitors healing and confirms that the implants integrate well before placing
                  the final restoration.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What to Expect During Recovery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Recovery varies by case complexity, number of implants, and whether extra steps are
                involved (extractions, grafting, bone reduction). Many patients experience:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; mild to moderate soreness for a few days</li>
                <li>&mdash; swelling that peaks early and then improves</li>
                <li>&mdash; a short-term soft food period</li>
                <li>&mdash; follow-up visits to monitor healing and hygiene</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A key advantage of guided planning is that it can reduce surgical surprises, which often
                means a smoother overall experience.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Are There Risks With Guided Surgery?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Guided surgery can reduce certain risks by improving accuracy, but it does not eliminate
                risk completely. Potential risks still include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; infection</li>
                <li>&mdash; bleeding or swelling</li>
                <li>&mdash; implant integration failure</li>
                <li>&mdash; nerve or sinus complications, especially in challenging anatomy</li>
                <li>&mdash; mechanical issues later, such as screw loosening or wear of restorations</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The goal of guided planning is to lower the likelihood of placement-related complications
                and improve predictability, especially when multiple implants must support one prosthesis.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Who Is a Good Candidate?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Many people are candidates for guided dental implant surgery, including those needing
                single-tooth implants and those considering full-arch restoration. A clinician will
                evaluate:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; bone volume and bone quality</li>
                <li>&mdash; gum health and inflammation</li>
                <li>&mdash; bite forces and grinding habits</li>
                <li>&mdash; medical factors that impact healing</li>
                <li>&mdash; whether the case benefits from guided precision, especially for multi-implant work</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                If bone support is limited, your plan may include grafting or staged treatment, and guided
                planning still helps map the safest approach.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What imaging is used in guided dental implant surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most guided cases use CBCT imaging for 3D planning. Digital scans of the teeth and gums
                    are also commonly used so the surgical plan matches the final tooth design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does guided dental implant surgery take?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The surgical portion can vary widely. Some single-implant cases may be completed
                    quickly, while full-arch cases take longer due to multiple implants and additional
                    steps. The planning phase happens before surgery, and that is a big part of what
                    improves accuracy and predictability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is guided dental implant surgery painful?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The procedure is typically done under local anesthesia, and sedation options may be
                    available depending on your comfort needs. Most patients describe pressure during
                    treatment and mild to moderate soreness afterward, which is usually manageable with
                    recommended medications and aftercare.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can guided surgery support same-day teeth for full-arch cases?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    In many full-arch cases, guided planning can help support a same-day temporary fixed
                    bridge when clinical conditions allow. Eligibility depends on implant stability, bite
                    forces, and your overall plan. Your surgeon should explain whether immediate loading is
                    appropriate and what restrictions you&rsquo;ll follow during healing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is guided dental implant surgery safer than freehand placement?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Guided planning can improve safety in many cases because it helps the clinician avoid
                    nerves and sinuses and place implants where they best support the final teeth. Freehand
                    placement can also be very successful, especially with experienced clinicians. The best
                    approach depends on your anatomy, complexity, and treatment goals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Does guided surgery reduce recovery time?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    It can, especially when guided placement allows smaller incisions or more efficient
                    surgery. Recovery still depends on the number of implants, extractions, grafting, and
                    individual healing factors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Does guided dental implant surgery cost more?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Sometimes guided cases have additional planning and guide fabrication costs. Many
                    patients find the added precision and predictability worth it, especially for full-arch
                    treatment where accurate positioning affects the long-term fit and performance of the
                    prosthesis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What if I need bone grafting or extractions?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Guided planning can still be used alongside extractions or grafting, depending on timing
                    and case design. Your surgeon may recommend staged steps to improve stability,
                    especially if infection or bone loss is present.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy — Dental Implants Overview</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/29575324/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Tahmaseb A, Wu V, Wismeijer D et al. — Accuracy of static computer-aided implant surgery: a systematic review</a></li>
                <li><a href="https://medlineplus.gov/ency/article/007645.htm" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Dental Implants</a></li>
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
                  Ready to Plan Your Implant Treatment?
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
