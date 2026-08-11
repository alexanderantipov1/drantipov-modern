import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Severe Overbite: A Guide When Jaw Surgery Is Needed" },
  description:
    "Most overbites are fixed with braces, but severe skeletal overbites need jaw surgery. Learn when it's required, plus recovery and cost, with Dr. Antipov.",
  alternates: {
    canonical: "/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
    languages: {
      "en": "/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
      "x-default": "/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
    },
  },
  keywords: [
    "severe overbite jaw surgery",
    "orthognathic surgery",
    "skeletal overbite correction",
    "BSSO mandibular advancement",
    "Le Fort I osteotomy",
    "jaw surgery cost insurance",
  ],
  openGraph: {
    title: "Severe Overbite: A Guide When Jaw Surgery Is Needed",
    description: "When braces are not enough — how orthognathic surgery corrects severe skeletal overbites.",
    images: [
      {
        url: "/images/blog/2026-06-19/severe-overbite-jaw-surgery.png",
        width: 1200,
        height: 630,
        alt: "Severe Overbite: A Guide When Jaw Surgery Is Needed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Severe Overbite: A Guide When Jaw Surgery Is Needed",
    description: "When braces are not enough — how orthognathic surgery corrects severe skeletal overbites.",
    images: ["/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"],
  }
}

export default function SevereOverbiteJawSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed#article","headline":"Severe Overbite: A Guide When Jaw Surgery Is Needed","description":"Most overbites are corrected with orthodontics, but severe skeletal overbites require orthognathic surgery. Learn when surgery is needed, the procedures, treatment sequence, recovery, and cost.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How painful is jaw surgery?","acceptedAnswer":{"@type":"Answer","text":"It is discomfort, not severe pain. Most patients describe it as significant swelling and numbness rather than acute pain. Pain medication manages discomfort effectively."}},{"@type":"Question","name":"Will my face look completely different?","acceptedAnswer":{"@type":"Answer","text":"For severe skeletal cases, yes \\u2014 significantly. Most patients report the change as positive and aligning with how they always wanted to look. Subtle to moderate changes are also common."}},{"@type":"Question","name":"How long until I look normal after surgery?","acceptedAnswer":{"@type":"Answer","text":"Major swelling resolves in 2\\u20134 weeks. Substantial improvement is seen by 6\\u20138 weeks. The final result is visible at 6\\u201312 months."}},{"@type":"Question","name":"Can I eat solid food after surgery?","acceptedAnswer":{"@type":"Answer","text":"Liquid only for the first 1\\u20132 weeks, then soft foods through week 6. A full diet is typically resumed by 8\\u201312 weeks."}},{"@type":"Question","name":"Will the hardware set off airport metal detectors?","acceptedAnswer":{"@type":"Answer","text":"Modern titanium plates rarely trigger detectors. Carrying a surgical card may help if you are questioned."}},{"@type":"Question","name":"Can I have jaw surgery if I am older?","acceptedAnswer":{"@type":"Answer","text":"Yes. Adults of any age with adequate health are candidates. Bone heals well at any age."}},{"@type":"Question","name":"Will I need braces forever afterward?","acceptedAnswer":{"@type":"Answer","text":"You will need retainers for life in some form, but braces themselves are typically removed 6\\u201312 months after surgery."}}]}]` }}
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
                Jaw Surgery
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
              Severe Overbite: A Guide When Jaw Surgery Is Needed
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"
                alt="Severe overbite correction with orthognathic jaw surgery"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Most overbites can be fixed with braces or aligners, but severe skeletal overbites &mdash; where
                the jaw bones themselves are misaligned &mdash; need jaw surgery, known as orthognathic surgery,
                explains Dr. Alexander Antipov, a board-certified oral &amp; maxillofacial surgeon in Roseville,
                CA. Here is how to know which applies to you.
              </p>
              <p className="italic text-neutral-600 mb-8">
                This article is for general education &mdash; consult a qualified oral surgeon or orthodontist
                for a recommendation tailored to your case.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Is Jaw Surgery the Right Answer?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most overbites can be corrected with orthodontics alone. Jaw surgery (orthognathic surgery)
                becomes the right answer when:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; The overbite is <strong>skeletal in origin</strong> (the jaw bones are misaligned, not just the teeth).</li>
                <li>&mdash; The overbite is <strong>severe</strong> (typically 9+&nbsp;mm overlap).</li>
                <li>&mdash; Functional problems are present &mdash; chewing, breathing, sleep apnea, TMJ pain.</li>
                <li>&mdash; Previous orthodontic treatment failed or relapsed.</li>
                <li>&mdash; The facial profile is significantly affected.</li>
                <li>&mdash; The patient wants a stable, permanent correction.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For these cases, orthodontics alone produces limited or unstable results. Surgery addresses
                the underlying bone positioning.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is Orthognathic Surgery?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orthognathic surgery repositions the upper jaw (maxilla), lower jaw (mandible), or both. The
                bones are surgically separated, moved into proper position, and secured with small titanium
                plates and screws. For overbite correction, the most common procedures are:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Maxillary impaction or setback (Le Fort I osteotomy).</strong> Used when the
                  upper jaw is positioned too far forward or downward. The maxilla is repositioned to a proper
                  position relative to the lower face.
                </li>
                <li>
                  &mdash; <strong>Mandibular advancement (BSSO &mdash; bilateral sagittal split osteotomy).</strong>
                  Used when the lower jaw is too far back. The mandible is moved forward to create proper bite
                  alignment and improve facial profile.
                </li>
                <li>
                  &mdash; <strong>Bimaxillary surgery.</strong> Combines upper and lower jaw repositioning for
                  severe cases or maximum aesthetic improvement.
                </li>
                <li>
                  &mdash; <strong>Genioplasty.</strong> Chin reshaping that may be combined with jaw surgery for
                  facial harmony.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Severe Is &ldquo;Severe&rdquo;?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Categories of overbite severity:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Severity</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Overlap</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Typical Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Normal</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1&ndash;3&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">None needed</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Mild</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4&ndash;6&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Clear aligners or braces</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Moderate</td>
                      <td className="border-b border-neutral-200 py-3 px-4">6&ndash;9&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Braces, sometimes with extractions</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Severe</td>
                      <td className="border-b border-neutral-200 py-3 px-4">9+&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Surgery often needed</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Deep bite (gum impingement)</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Upper teeth touch lower gum</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Surgery typically needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Severity alone does not determine surgery. The cause (dental vs. skeletal) matters more.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Signs Surgery Might Be Right for You
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                You are more likely to be a surgical candidate if you have:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; A significantly recessed chin or weak lower-jaw appearance.</li>
                <li>&mdash; A protruding upper jaw that cannot be camouflaged with orthodontics.</li>
                <li>&mdash; Persistent TMJ pain related to bite mechanics.</li>
                <li>&mdash; Sleep apnea with structural causes (maxillomandibular advancement is a treatment for severe sleep apnea).</li>
                <li>&mdash; Difficulty closing your lips at rest.</li>
                <li>&mdash; Speech difficulties related to jaw position.</li>
                <li>&mdash; Excessive gum show when smiling (a gummy smile from a skeletal cause).</li>
                <li>&mdash; An asymmetric face related to jaw misalignment.</li>
                <li>&mdash; Failed prior orthodontic treatment that relapsed.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A consultation with both an orthodontist and an oral/maxillofacial surgeon provides the
                clearest evaluation.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Treatment Sequence
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orthognathic surgery is rarely &ldquo;just surgery&rdquo; &mdash; it is a coordinated 1&ndash;3 year
                plan with three phases:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Pre-surgical orthodontics (6&ndash;18 months).</strong> Braces or aligners move teeth
                  into the position they will need to be in after surgery &mdash; not the position they should be
                  in given current jaw alignment. This can temporarily make the bite look worse.
                </li>
                <li>
                  <strong>Surgery.</strong> Performed under general anesthesia, typically requiring an overnight
                  hospital stay. Single-jaw surgery takes 2&ndash;3 hours; double-jaw surgery takes 4&ndash;6 hours.
                  The bones are repositioned and secured with rigid fixation (small plates and screws). Recovery
                  begins immediately.
                </li>
                <li>
                  <strong>Post-surgical orthodontics (6&ndash;12 months).</strong> Final tooth movement to
                  optimize the new bite. Retainers are then worn long-term.
                </li>
              </ol>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Total timeline:</strong> typically 18&ndash;36 months from start to finish.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What to Expect from Surgery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Day of surgery:</strong> general anesthesia is administered through an IV. Surgery is
                performed entirely from inside the mouth (no facial scars), the bones are repositioned and
                secured with hidden hardware, an overnight hospital stay is typical, and significant facial
                swelling is expected.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>First week:</strong> substantial swelling peaks at days 3&ndash;5, a liquid diet is
                required, pain is managed with prescribed medications, and jaw movement is limited. Most
                patients miss 1&ndash;2 weeks of work or school.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Weeks 2&ndash;6:</strong> swelling gradually subsides, a soft-food diet is introduced,
                and patients return to light activities. Numbness in the lips, cheeks, or chin is common and
                usually resolves over months.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Months 2&ndash;6:</strong> bone healing continues, patients return to all activities,
                final orthodontic adjustments begin, and sensation gradually returns.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Long term:</strong> bone fully heals over 6&ndash;12 months, the hardware (plates and
                screws) typically remains in place permanently, and retainers are worn for life.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Risks and Realistic Expectations
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orthognathic surgery is major surgery. Realistic risks include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Numbness</strong> in the lips, cheeks, or chin &mdash; common; usually improves over months but can persist.</li>
                <li>&mdash; <strong>Infection</strong> &mdash; rare with proper antibiotic prophylaxis.</li>
                <li>&mdash; <strong>Nerve injury</strong> &mdash; typically temporary; rarely permanent.</li>
                <li>&mdash; <strong>Bite changes from healing</strong> &mdash; sometimes require post-op orthodontic adjustment.</li>
                <li>&mdash; <strong>Need for revision surgery</strong> &mdash; rare but possible.</li>
                <li>&mdash; <strong>General anesthesia risks</strong> &mdash; standard for major surgery.</li>
                <li>&mdash; <strong>Hardware-related issues</strong> &mdash; rare; sometimes requiring removal years later.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The majority of properly evaluated and prepared patients have excellent outcomes with
                significant functional and aesthetic improvement.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Cost and Insurance
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Total cost typically breaks down as follows: the surgery itself runs $20,000&ndash;$45,000,
                orthodontics (before and after) add $5,000&ndash;$10,000, and hospital and anesthesia costs are
                included or additional depending on the setting. The complete plan generally falls in the
                $25,000&ndash;$60,000 range.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orthognathic surgery is often covered by <strong>medical insurance</strong> (not dental) when
                documented functional impairment exists (chewing, breathing, sleep apnea), conservative
                treatment has failed, and specific medical-necessity criteria are met. Many patients have
                60&ndash;90% of surgery costs covered by medical insurance, with orthodontics covered partially
                by dental insurance.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Choose Surgery Over Camouflage?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For skeletal overbites, surgery has clear advantages over orthodontic camouflage:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Stable, predictable results that do not relapse.</li>
                <li>&mdash; Functional improvements &mdash; chewing, breathing, sleep.</li>
                <li>&mdash; Significant facial profile improvement when desired.</li>
                <li>&mdash; Treatment of associated conditions like sleep apnea.</li>
                <li>&mdash; Once-and-done rather than lifelong management.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orthodontic camouflage in skeletal cases often produces compromised results, relapses over
                years, worsens TMJ symptoms, does not address the underlying problem, and may still require
                surgery later. For the right patient, surgery is the most efficient long-term solution.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Surgery Isn&rsquo;t Right
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Surgery is not appropriate for:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Mild to moderate overbites that respond to orthodontics.</li>
                <li>&mdash; Patients with significant medical contraindications to general anesthesia.</li>
                <li>&mdash; Patients unwilling to commit to the timeline.</li>
                <li>&mdash; Patients who have not tried orthodontic options first for borderline cases.</li>
                <li>&mdash; Anyone making the decision impulsively &mdash; this is major surgery.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How painful is jaw surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    It is discomfort, not severe pain. Most patients describe it as significant swelling and
                    numbness rather than acute pain. Pain medication manages discomfort effectively.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Will my face look completely different?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    For severe skeletal cases, yes &mdash; significantly. Most patients report the change as
                    positive and aligning with how they always wanted to look. Subtle to moderate changes are
                    also common.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long until I look &ldquo;normal&rdquo; after surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Major swelling resolves in 2&ndash;4 weeks. Substantial improvement is seen by 6&ndash;8 weeks.
                    The final result is visible at 6&ndash;12 months.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I eat solid food after surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Liquid only for the first 1&ndash;2 weeks, then soft foods through week 6. A full diet is
                    typically resumed by 8&ndash;12 weeks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Will the hardware set off airport metal detectors?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Modern titanium plates rarely trigger detectors. Carrying a surgical card may help if you
                    are questioned.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I have jaw surgery if I&rsquo;m older?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. Adults of any age with adequate health are candidates. Bone heals well at any age.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Will I need braces forever afterward?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    You will need retainers for life in some form, but braces themselves are typically removed
                    6&ndash;12 months after surgery.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/conditions-treatments/corrective-jaw-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Corrective Jaw (Orthognathic) Surgery</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/malocclusion" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Malocclusion and Jaw Alignment</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/27475511/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maxillomandibular Advancement for Obstructive Sleep Apnea — Systematic Review</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/braces" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA — Braces and Orthodontic Treatment Overview</a></li>
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
                  Wondering If Jaw Surgery Is Right for Your Overbite?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation with our oral and maxillofacial surgeons. We will evaluate your case
                  and explain every realistic option, including non-surgical alternatives. A patient
                  coordinator will follow up within 24 hours.
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
