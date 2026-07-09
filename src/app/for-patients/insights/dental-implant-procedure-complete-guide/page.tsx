import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Implant Procedure: Step-by-Step Guide",
  description:
    "A complete step-by-step guide to the dental implant procedure — from consultation and 3D scan through implant placement, osseointegration, and the final crown, with timeline and cost.",
  alternates: {
    canonical: "/for-patients/insights/dental-implant-procedure-complete-guide",
    languages: {
      "en": "/for-patients/insights/dental-implant-procedure-complete-guide",
      "x-default": "/for-patients/insights/dental-implant-procedure-complete-guide",
    },
  },
  keywords: [
    "dental implant procedure",
    "dental implant steps",
    "osseointegration",
    "implant placement surgery",
    "dental implant timeline",
    "dental implant cost",
  ],
  openGraph: {
    title: "Dental Implant Procedure: Step-by-Step Guide",
    description: "Everything that happens during a dental implant procedure — from consultation through final crown.",
    images: [
      {
        url: "/images/blog/2026-06-19/dental-implant-procedure.png",
        width: 1200,
        height: 630,
        alt: "Dental Implant Procedure: Step-by-Step Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implant Procedure: Step-by-Step Guide",
    description: "Everything that happens during a dental implant procedure — from consultation through final crown.",
    images: ["/images/blog/2026-06-19/dental-implant-procedure.png"],
  }
}

export default function DentalImplantProcedureGuidePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/dental-implant-procedure-complete-guide#article","headline":"Dental Implant Procedure: Complete Step-by-Step Guide","description":"Everything that happens during a dental implant procedure \\u2014 from consultation and 3D scan through implant placement, osseointegration, abutment, and the final crown, with timeline and cost.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/dental-implant-procedure-complete-guide","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/dental-implant-procedure.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/dental-implant-procedure-complete-guide"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does the entire dental implant procedure take from start to finish?","acceptedAnswer":{"@type":"Answer","text":"Traditional implants take 4\\u20139 months from consultation to final crown. With same-day implants, a temporary tooth is placed in one visit, and the final crown follows 3\\u20136 months later."}},{"@type":"Question","name":"How painful is the dental implant procedure?","acceptedAnswer":{"@type":"Answer","text":"Most patients describe day 1\\u20132 discomfort as similar to a tooth extraction \\u2014 manageable with ibuprofen. Significant pain is uncommon."}},{"@type":"Question","name":"Can I get all my implants done in one day?","acceptedAnswer":{"@type":"Answer","text":"Yes. Full-arch treatments like All-on-4 place all implants in one visit, often with a temporary set of teeth attached the same day."}},{"@type":"Question","name":"How successful is the dental implant procedure?","acceptedAnswer":{"@type":"Answer","text":"Modern dental implants have 95\\u201398% success rates at 10 years in healthy patients with proper post-operative care."}},{"@type":"Question","name":"Can anyone get dental implants?","acceptedAnswer":{"@type":"Answer","text":"Most adults are candidates. Patients with uncontrolled diabetes, active periodontal disease, heavy smokers, or those with insufficient bone density may need preparatory work or alternative options."}},{"@type":"Question","name":"Do dental implants look natural?","acceptedAnswer":{"@type":"Answer","text":"Modern crowns are virtually indistinguishable from natural teeth. The implant itself is hidden under the gum line."}}]}]` }}
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
                <span>10 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Dental Implant Procedure: Complete Step-by-Step Guide
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/dental-implant-procedure.png"
                alt="Step-by-step dental implant procedure from consultation to final crown"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                A dental implant procedure replaces a missing tooth with a titanium or zirconia post that
                fuses with your jawbone, then supports a permanent crown, bridge, or full arch of teeth,
                explains Dr. Alexander Antipov, a board-certified oral &amp; maxillofacial surgeon in
                Roseville, CA. It&rsquo;s the modern standard for tooth replacement &mdash; designed to look,
                feel, and function like your natural tooth. Most patients find the procedure far less involved
                than they expected. Here&rsquo;s exactly what happens, step by step.
              </p>
              <p className="italic text-neutral-600 mb-8">
                This article is for general education &mdash; consult a qualified oral surgeon for a
                personalized recommendation.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; The procedure has six phases: consultation, preparation, placement, osseointegration, abutment, and crown.</li>
                  <li>&bull; Traditional implants take 4&ndash;9 months; same-day protocols deliver a temporary tooth in one visit.</li>
                  <li>&bull; Day 1&ndash;2 discomfort is similar to a tooth extraction and manageable with ibuprofen.</li>
                  <li>&bull; Modern implants have 95&ndash;98% success rates at 10 years and can last 20+ years.</li>
                  <li>&bull; Costs range from $4,000 for a single implant to full-arch options from $16,999 per arch.</li>
                  <li>&bull; Choosing an experienced <Link href="/about" className="text-primary-700 hover:text-primary-800 font-semibold">oral &amp; maxillofacial surgeon</Link> dramatically reduces risk.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Full Timeline at a Glance
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Total time is typically 4&ndash;9 months for traditional implants. With our same-day implant
                protocol, patients can leave with a temporary tooth on the same day as placement.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Phase</th>
                      <th className="border-b border-neutral-200 py-3 px-4">What Happens</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">1. Consultation</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Exam, 3D scan, treatment plan</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 visit (1 hour)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">2. Preparation</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Extractions or bone grafting if needed</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 visit + healing</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">3. Implant placement</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Surgical placement of titanium post</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 visit (1&ndash;2 hours)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">4. Osseointegration</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Bone fuses to implant</td>
                      <td className="border-b border-neutral-200 py-3 px-4">3&ndash;6 months</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">5. Abutment placement</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Connector piece added</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Often combined with placement</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">6. Crown placement</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Permanent tooth attached</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 visit (30&ndash;60 min)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 1: The Consultation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Before any surgery, you&rsquo;ll have a comprehensive evaluation:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Medical and dental history review.</li>
                <li>&mdash; Clinical exam of teeth, gums, bone, and bite.</li>
                <li>&mdash; 3D cone-beam CT scan to map bone volume and locate nerves.</li>
                <li>&mdash; Digital impressions or molds.</li>
                <li>&mdash; Photographs of your smile.</li>
                <li>&mdash; Treatment plan presentation with clear pricing.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We&rsquo;ll review your candidacy, options (single implant, bridge, full arch), and timeline.
                If you have questions about cost, financing, or recovery, we answer them here. There&rsquo;s no
                obligation &mdash; many patients use the consultation to compare options.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 2: Preparation (If Needed)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Not every patient needs preparatory work. Some do.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Tooth extraction.</strong> If the failing tooth is still in place, it&rsquo;s
                  removed first. We can often place the implant the same day (immediate placement) &mdash;
                  sealing the socket and reducing dry socket risk.
                </li>
                <li>
                  &mdash; <strong>Bone grafting.</strong> If you&rsquo;ve been missing the tooth for a while or
                  have lost bone density, bone grafting may be needed. Modern grafting techniques heal in
                  3&ndash;4 months and dramatically expand who can receive implants.
                </li>
                <li>
                  &mdash; <strong>Sinus lift.</strong> For upper back teeth where the sinus has expanded into
                  the bone space, a sinus lift creates room for implant placement.
                </li>
                <li>
                  &mdash; <strong>Treatment of gum disease.</strong> Active gum disease must be controlled
                  before implant placement. Our team handles this in-house.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 3: Implant Placement Surgery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                This is the day of the procedure most patients ask about. You have anesthesia options:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Local anesthesia alone</strong> (you&rsquo;re awake but the area is numb) &mdash;
                  appropriate for single implants in calm patients.
                </li>
                <li>
                  &mdash; <strong>IV sedation</strong> &mdash; you&rsquo;re deeply relaxed, conscious sedation,
                  with no memory of the procedure.
                </li>
                <li>
                  &mdash; <strong>General anesthesia</strong> &mdash; full sleep, used for complex full-arch
                  cases.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                During the surgery itself: the gum is opened to expose the bone (or guided through a small
                punch); a precise channel is created using a series of drills, often with computer-guided
                navigation; the titanium implant is placed into the channel; the gum is closed with
                dissolving sutures; and a healing cap or temporary tooth may be placed. For a single implant,
                this typically takes 45&ndash;90 minutes. Full-arch All-on-4 procedures take 2&ndash;4 hours
                per arch.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                What you&rsquo;ll feel: nothing during surgery if you&rsquo;re sedated, or pressure but no pain
                if you&rsquo;re awake. Right after, mild numbness from anesthesia gives way to manageable
                soreness. Day 1&ndash;2 brings discomfort similar to a tooth extraction, with rapid improvement
                from day 3. Most patients return to office work within 1&ndash;2 days.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 4: Osseointegration
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                This is the magic of dental implants. Over 3&ndash;6 months, your jawbone biologically fuses
                with the titanium implant in a process called osseointegration. The implant becomes part of
                your jaw, providing the same kind of stability as a natural tooth root. During this phase a
                temporary tooth or removable appliance fills the gap, most patients feel completely normal
                within a week or two of surgery, routine cleanings and checkups continue, and we may take a
                follow-up X-ray at 3 months. This step is what makes implants last decades &mdash; without
                proper osseointegration, the implant won&rsquo;t have the foundation to support biting forces.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 5: Abutment Placement
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The abutment is the small connector piece that links the implant (in the bone) to the crown
                (visible tooth). Depending on your case, it may be placed at the time of implant surgery
                (one-stage) or in a brief second visit after osseointegration (two-stage). If a second visit
                is needed, it takes 15&ndash;30 minutes under local anesthesia, and healing takes about
                1&ndash;2 weeks.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Step 6: Crown (or Final Prosthesis) Placement
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The visible tooth is custom-made in our in-house lab to match your existing teeth in shape,
                color, and texture.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Single implant crown.</strong> A digital scan or impression is taken of the
                  abutment. The lab fabricates the crown over 1&ndash;2 weeks. At your final visit, the crown
                  is attached &mdash; either screw-retained (removable for service) or cement-retained.
                </li>
                <li>
                  &mdash; <strong>Implant bridge.</strong> For multiple missing teeth, a bridge spanning
                  2&ndash;4 implants is fabricated and attached.
                </li>
                <li>
                  &mdash; <strong>Full arch (All-on-4 / All-on-X).</strong> A full prosthetic arch &mdash;
                  typically zirconia or acrylic &mdash; is attached to 4&ndash;6 implants. Many patients
                  receive a temporary same-day prosthesis and a final zirconia arch a few months later.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                After the Procedure
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Same day:</strong> eat soft foods, avoid the surgical site, take prescribed pain
                medication, apply a cold compress for swelling, and rest with your head elevated.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>First week:</strong> soft diet, gentle salt-water rinses starting day 2, no smoking or
                straws, sleep with your head elevated, and take antibiotics if prescribed.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>First month:</strong> gradually return to a normal diet, avoid hard or sticky foods on
                the surgical site, maintain excellent hygiene, and follow up as scheduled.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Long term:</strong> brush and floss like natural teeth, use a water flosser around
                implants, and keep professional cleanings every 3&ndash;6 months. Implants can last 20+ years
                with proper care.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Pain &mdash; What&rsquo;s Realistic
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most patients report no pain during surgery (anesthesia handles it), discomfort on day
                1&ndash;2 that is manageable with ibuprofen and similar to a tooth extraction, mild soreness
                from day 3 that no longer needs medication, and a return to essentially normal by week 2.
                Patients are consistently surprised at how comfortable the experience is.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Long Do Dental Implants Last?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                With proper care, dental implants last 20+ years &mdash; often a lifetime. Studies show
                95&ndash;98% success rates at 10 years for properly placed implants in healthy patients.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Could Go Wrong?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Implant procedures are highly predictable, but no surgery is risk-free. Possible
                complications include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Implant failure to integrate (~2&ndash;5% of cases).</li>
                <li>&mdash; Infection (rare with proper post-op care).</li>
                <li>&mdash; Nerve injury (rare with 3D-guided placement).</li>
                <li>&mdash; Sinus complications (rare with proper planning).</li>
                <li>&mdash; Peri-implantitis later (preventable with good hygiene).</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Choosing an experienced surgeon and following post-op instructions dramatically reduces these
                risks.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Cost of the Dental Implant Procedure
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Costs vary based on case complexity:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Single implant + crown:</strong> typically $4,000&ndash;$6,000.</li>
                <li>&mdash; <strong>Implant bridge</strong> (3 teeth on 2 implants): $7,000&ndash;$12,000.</li>
                <li>&mdash; <strong>Full arch (All-on-4):</strong> from $16,999 per arch.</li>
                <li>&mdash; <strong>Bone grafting:</strong> $300&ndash;$3,000 depending on complexity.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most patients use a combination of insurance, HSA/FSA, and financing. We offer in-house
                payment plans starting at $60/month for single implants and $250/month for full-mouth
                restoration.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does the entire dental implant procedure take from start to finish?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Traditional implants take 4&ndash;9 months from consultation to final crown. With same-day
                    implants, a temporary tooth is placed in one visit, and the final crown follows
                    3&ndash;6 months later.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How painful is the dental implant procedure?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most patients describe day 1&ndash;2 discomfort as similar to a tooth extraction &mdash;
                    manageable with ibuprofen. Significant pain is uncommon.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I get all my implants done in one day?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes &mdash; full-arch treatments like All-on-4 place all implants in one visit, often with
                    a temporary set of teeth attached the same day.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How successful is the dental implant procedure?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Modern dental implants have 95&ndash;98% success rates at 10 years in healthy patients with
                    proper post-operative care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can anyone get dental implants?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most adults are candidates. Patients with uncontrolled diabetes, active periodontal
                    disease, heavy smokers, or those with insufficient bone density may need preparatory work
                    or alternative options.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Do dental implants look natural?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Modern crowns are virtually indistinguishable from natural teeth. The implant itself is
                    hidden under the gum line.
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
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy — Implants Overview</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Periodontal (Gum) Disease</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/29086438/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Howe MS et al. — Long-term (10-year) dental implant survival: A systematic review</a></li>
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
                  Ready to Start Your Dental Implant Journey?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation to find out if dental implants are right for you. Most consultations
                  include a 3D scan and a clear treatment plan, and a patient coordinator will explain what to
                  prepare.
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
