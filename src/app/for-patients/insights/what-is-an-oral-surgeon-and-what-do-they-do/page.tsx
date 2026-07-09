import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is an Oral Surgeon and What Do They Do?",
  description:
    "An oral and maxillofacial surgeon is a dental specialist with surgical training. Learn what they treat, how they are trained, the procedures they perform, and when to see one.",
  alternates: {
    canonical: "/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
    languages: {
      "en": "/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
      "x-default": "/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
    },
  },
  keywords: [
    "oral surgeon",
    "oral and maxillofacial surgeon",
    "what does an oral surgeon do",
    "oral surgeon vs dentist",
    "oral surgery procedures",
    "when to see an oral surgeon",
  ],
  openGraph: {
    title: "What Is an Oral Surgeon and What Do They Do?",
    description: "What an oral and maxillofacial surgeon treats, how they are trained, and when to see one.",
    images: [
      {
        url: "/images/blog/2026-06-19/what-is-oral-surgeon.png",
        width: 1200,
        height: 630,
        alt: "What Is an Oral Surgeon and What Do They Do?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is an Oral Surgeon and What Do They Do?",
    description: "What an oral and maxillofacial surgeon treats, how they are trained, and when to see one.",
    images: ["/images/blog/2026-06-19/what-is-oral-surgeon.png"],
  }
}

export default function WhatIsAnOralSurgeonPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do#article","headline":"What Is an Oral Surgeon and What Do They Do?","description":"An oral and maxillofacial surgeon is a dental specialist with surgical training. Learn what they treat, how they are trained, the procedures they perform, and when to see one.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/what-is-oral-surgeon.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are oral surgeons real doctors?","acceptedAnswer":{"@type":"Answer","text":"Yes \\u2014 they hold a doctoral degree in dental surgery (DDS or DMD) and have completed 4\\u20136 years of additional surgical residency. Some also hold an MD."}},{"@type":"Question","name":"Do oral surgeons perform cosmetic surgery?","acceptedAnswer":{"@type":"Answer","text":"Some do \\u2014 particularly facial cosmetic procedures related to maxillofacial structures (chin implants, facial fracture repair, certain rhinoplasty work). Most focus on functional surgery."}},{"@type":"Question","name":"Can an oral surgeon replace my regular dentist?","acceptedAnswer":{"@type":"Answer","text":"No \\u2014 oral surgeons specialize in surgical care. You still need a general dentist for routine cleanings, fillings, and ongoing dental care."}},{"@type":"Question","name":"How much do oral surgeons cost?","acceptedAnswer":{"@type":"Answer","text":"Procedures cost more than general dentistry because of specialized training and equipment. However, complex cases done correctly the first time often cost less than fixing avoidable problems later."}},{"@type":"Question","name":"Is sedation safe with an oral surgeon?","acceptedAnswer":{"@type":"Answer","text":"Yes \\u2014 oral surgeons receive extensive anesthesia training during residency. In-office sedation by a board-certified oral surgeon has an excellent safety record."}},{"@type":"Question","name":"Does insurance cover oral surgery?","acceptedAnswer":{"@type":"Answer","text":"Many procedures are covered by medical insurance (not dental) when functional issues are present \\u2014 wisdom teeth, jaw surgery, trauma, certain extractions. Dental insurance typically covers extractions and partial implant costs."}}]}]` }}
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
                <span>9 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              What Is an Oral Surgeon and What Do They Do?
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/what-is-oral-surgeon.png"
                alt="An oral and maxillofacial surgeon reviewing a 3D scan during a consultation"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                An oral and maxillofacial surgeon (OMS or OMFS) is a dental specialist trained in surgical
                procedures of the mouth, jaw, face, and neck &mdash; treating conditions that go beyond what
                general dentists handle. Dr. Alexander Antipov is a board-certified oral &amp; maxillofacial
                surgeon in Roseville, CA, and this guide explains what oral surgeons do, how they are trained,
                and when to see one.
              </p>
              <p className="text-neutral-500 italic mb-8">
                This article is for general education and is not a substitute for a personalized evaluation by
                a qualified oral surgeon.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; An oral &amp; maxillofacial surgeon is a dental specialist with extensive surgical training.</li>
                  <li>&bull; Training runs 12&ndash;14 years after high school, including a 4&ndash;6 year hospital residency.</li>
                  <li>&bull; They perform implants, extractions, jaw surgery, trauma repair, and pathology work.</li>
                  <li>&bull; They can administer IV sedation and general anesthesia in-office.</li>
                  <li>&bull; See one for wisdom teeth, full-arch implants, jaw surgery, and complex cases.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is an Oral Surgeon?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                An oral and maxillofacial surgeon (OMS or OMFS) is a dental specialist trained in surgical
                procedures of the mouth, jaw, face, and neck. Oral surgeons combine dental and surgical
                expertise to treat conditions that go beyond what general dentists handle.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The full title &mdash; &ldquo;oral and maxillofacial surgeon&rdquo; &mdash; reflects the scope: oral
                (mouth) and maxillofacial (the bones of the face, including the upper and lower jaws).
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Training: How an Oral Surgeon Is Made
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The path is one of the longest in healthcare:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Stage</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>4 years undergraduate</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">Typically pre-med or biology.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>4 years dental school</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">DDS or DMD degree.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>4&ndash;6 years hospital-based residency</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">In oral and maxillofacial surgery &mdash; often combined with a medical degree (MD).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Total training: 12&ndash;14 years after high school</strong>, often longer than most medical
                specialties. Residency training includes:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; General surgery</li>
                <li>&mdash; Anesthesiology</li>
                <li>&mdash; Internal medicine</li>
                <li>&mdash; Plastic and reconstructive surgery</li>
                <li>&mdash; Otolaryngology (ENT)</li>
                <li>&mdash; Trauma surgery</li>
                <li>&mdash; Specific oral and maxillofacial procedures</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                This breadth of training is why oral surgeons can independently administer general
                anesthesia and IV sedation in their offices &mdash; a privilege very few dental specialists hold.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Procedures Do Oral Surgeons Perform?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The scope is extensive. Common categories include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Dental implants:</strong> single implants, implant bridges, full-arch implants
                  (All-on-4, All-on-6), zygomatic implants for severe bone loss, and same-day implant placement.
                </li>
                <li>
                  &mdash; <strong>Tooth extractions:</strong> routine extractions, surgical extractions of broken or
                  impacted teeth, and wisdom-teeth removal (the most common single procedure they perform).
                </li>
                <li>
                  &mdash; <strong>Bone and gum surgery:</strong> bone grafting for implant preparation, sinus lifts,
                  ridge augmentation, and periodontal surgery (sometimes co-managed with periodontists).
                </li>
                <li>
                  &mdash; <strong>Corrective jaw surgery (orthognathic surgery):</strong> jaw realignment for severe
                  overbite, underbite, or open bite, plus TMJ surgery and facial reconstruction.
                </li>
                <li>
                  &mdash; <strong>Trauma and pathology:</strong> facial fractures, repair of jaw injuries, removal of
                  cysts and tumors of the jaws and face, and biopsies for suspicious lesions.
                </li>
                <li>
                  &mdash; <strong>Sleep apnea surgery:</strong> maxillomandibular advancement and other airway-related
                  procedures.
                </li>
                <li>
                  &mdash; <strong>Cleft lip and palate repair:</strong> coordinated with plastic surgeons in pediatric
                  cases.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Oral Surgeon vs. General Dentist
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Aspect</th>
                      <th className="border-b border-neutral-200 py-3 px-4">General Dentist</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Oral Surgeon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Training after dental school</td>
                      <td className="border-b border-neutral-200 py-3 px-4">0 years (some do 1-year residency)</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4&ndash;6 year hospital residency</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Anesthesia privileges</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Local + light sedation</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Local, IV sedation, general anesthesia</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Scope</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Routine dentistry, simple extractions</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Complex surgery, jaw surgery, implants</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Hospital privileges</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Rare</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Common &mdash; admitting and OR access</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Imaging</td>
                      <td className="border-b border-neutral-200 py-3 px-4">2D X-rays, sometimes CBCT</td>
                      <td className="border-b border-neutral-200 py-3 px-4">3D CBCT routine</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Complex implant cases</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Some</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Specialty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A general dentist refers to an oral surgeon when a case requires surgical complexity,
                sedation beyond mild oral anxiolytics, extensive bone work, or multiple specialists
                coordinated.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Oral Surgeon vs. Periodontist
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Both place implants. The differences:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Oral surgeons:</strong> broader surgical training including hard tissue (bone, jaw),
                  trauma, jaw surgery, and full-arch cases.
                </li>
                <li>
                  &mdash; <strong>Periodontists:</strong> focus on gum disease, soft tissue grafting, and
                  single-implant cases.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For full-arch implant cases, severe bone deficiency, or sedation requirements, oral surgeons
                are typically the better fit.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Oral Surgeon vs. Prosthodontist
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                These specialties often work together:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Oral surgeons:</strong> place the implants surgically.</li>
                <li>&mdash; <strong>Prosthodontists:</strong> design and fit the crowns, bridges, and arches that go on top.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Many practices include both specialties. In our office, we coordinate surgical placement
                with prosthetic design under one roof.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Should You See an Oral Surgeon?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Definitely see one for:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Wisdom-teeth removal &mdash; especially impacted teeth.</li>
                <li>&mdash; Multiple or full-arch dental implants.</li>
                <li>&mdash; Bone grafting or sinus lifts.</li>
                <li>&mdash; Corrective jaw surgery for severe bite problems.</li>
                <li>&mdash; Facial trauma affecting the jaw or teeth.</li>
                <li>&mdash; Cysts or tumors of the jaw or face.</li>
                <li>&mdash; Sleep apnea that hasn&rsquo;t responded to CPAP.</li>
                <li>&mdash; TMJ problems requiring surgical evaluation.</li>
                <li>&mdash; Anxiety or medical conditions requiring deep sedation for any dental work.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Consider one for:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Failed prior dental work.</li>
                <li>&mdash; Complex single-tooth implants &mdash; particularly front teeth or the aesthetic zone.</li>
                <li>&mdash; Second opinions on extractions or implant cases.</li>
                <li>&mdash; Chronic facial pain of unclear origin.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>A general dentist is fine for:</strong> routine cleanings, fillings, crowns, simple
                tooth extractions, basic gum care, and routine dental checkups.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What to Expect at an Oral Surgery Consultation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A typical first visit takes about an hour:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li><strong>Medical and dental history</strong> &mdash; a full review including medications and conditions.</li>
                <li><strong>Clinical exam</strong> &mdash; teeth, gums, jaw, bite, and facial structures.</li>
                <li><strong>3D imaging (CBCT scan)</strong> &mdash; a comprehensive view of bone, nerves, and sinuses.</li>
                <li><strong>Discussion of findings</strong> in plain language.</li>
                <li><strong>Treatment options</strong> with a realistic timeline and cost.</li>
                <li><strong>Questions answered</strong> &mdash; bring a list.</li>
              </ol>
              <p className="text-neutral-700 leading-relaxed mb-6">
                You&rsquo;ll leave with a clear understanding of what&rsquo;s needed and what it costs. Most
                consultations are no-obligation.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Specialist Care Matters for Implants
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Studies consistently show that dental implants placed by specialists (oral surgeons or
                periodontists) have better long-term success rates than those placed by general dentists,
                particularly in:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Complex cases (full arch, severe bone loss).</li>
                <li>&mdash; Aesthetic zone cases.</li>
                <li>&mdash; Patients with medical complications.</li>
                <li>&mdash; Sedation cases.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Specialists handle complications more confidently because they encounter them more
                frequently and have the surgical training to address them.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Anesthesia Options Oral Surgeons Provide
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A major advantage of oral surgery offices is anesthesia flexibility:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Local anesthesia</strong> &mdash; the area is numbed and you&rsquo;re awake.</li>
                <li>&mdash; <strong>Nitrous oxide (&ldquo;laughing gas&rdquo;)</strong> &mdash; light relaxation.</li>
                <li>&mdash; <strong>Oral sedation</strong> &mdash; a pill before the procedure; drowsy but conscious.</li>
                <li>&mdash; <strong>IV sedation</strong> &mdash; deeper sleep, conscious sedation, no memory.</li>
                <li>&mdash; <strong>General anesthesia</strong> &mdash; full sleep for complex cases.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most general dentists can offer only the first three options. Oral surgeons routinely provide
                IV sedation and general anesthesia in-office, which is essential for complex or longer
                procedures.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How to Choose an Oral Surgeon
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Look for:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Board certification by the American Board of Oral &amp; Maxillofacial Surgery.</li>
                <li>&mdash; A hospital-based residency (vs. minimal post-grad training).</li>
                <li>&mdash; Years of experience &mdash; particularly with the specific procedure you need.</li>
                <li>&mdash; Use of modern technology &mdash; 3D imaging and computer-guided surgery.</li>
                <li>&mdash; In-office anesthesia capabilities.</li>
                <li>&mdash; Clear communication about diagnosis, options, and cost.</li>
                <li>&mdash; Reviews and patient outcomes.</li>
                <li>&mdash; Continuing education in current techniques.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Are oral surgeons real doctors?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes &mdash; they hold a doctoral degree in dental surgery (DDS or DMD) and have completed
                    4&ndash;6 years of additional surgical residency. Some also hold an MD.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Do oral surgeons perform cosmetic surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Some do &mdash; particularly facial cosmetic procedures related to maxillofacial structures
                    (chin implants, facial fracture repair, certain rhinoplasty work). Most focus on
                    functional surgery.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can an oral surgeon replace my regular dentist?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    No &mdash; oral surgeons specialize in surgical care. You still need a general dentist for
                    routine cleanings, fillings, and ongoing dental care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How much do oral surgeons cost?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Procedures cost more than general dentistry because of specialized training and
                    equipment. However, complex cases done correctly the first time often cost less than
                    fixing avoidable problems later.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is sedation safe with an oral surgeon?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes &mdash; oral surgeons receive extensive anesthesia training during residency. In-office
                    sedation by a board-certified oral surgeon has an excellent safety record.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Does insurance cover oral surgery?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Many procedures are covered by medical insurance (not dental) when functional issues are
                    present &mdash; wisdom teeth, jaw surgery, trauma, certain extractions. Dental insurance
                    typically covers extractions and partial implant costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/what-we-do/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; What Is an Oral &amp; Maxillofacial Surgeon?</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; Dental Implant Surgery</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/dental-specialties" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy &mdash; Dental Specialties</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR &mdash; Oral Health Information</a></li>
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
                  Need a Complex Procedure Done Right?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation with our oral surgery team &mdash; we&rsquo;ll evaluate your case and
                  explain every realistic option. A patient coordinator will follow up within 24 hours.
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
