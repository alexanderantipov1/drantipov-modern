import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import DualCTA from "@/components/DualCTA"

// Paste the YouTube video ID here (the part after "v=" or "youtu.be/").
// Example: for https://www.youtube.com/watch?v=oH9rF2-DUQo the ID is "oH9rF2-DUQo".
// While this is empty the video section is hidden; set it to show the embed.
const YOUTUBE_ID = "y-mAGcATgKg"

export const metadata: Metadata = {
  title: "All-on-4® Dental Implants Explained: A New Smile in One Day",
  description:
    "How All-on-4® and full-arch dental implants can restore a complete smile with same-day fixed teeth — candidacy, the procedure, immediate loading, and realistic results, from Dr. Antipov in Roseville.",
  alternates: {
    canonical: "/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day",
    languages: {
      "en": "/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day",
      "x-default": "/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day",
    },
  },
  keywords: [
    "All-on-4 dental implants",
    "same-day dental implants",
    "teeth in a day",
    "immediate loading dental implants",
    "full arch dental implants",
    "full-arch restoration",
    "All-on-6 dental implants",
    "dental implants Roseville",
  ],
  openGraph: {
    title: "All-on-4® Dental Implants Explained: A New Smile in One Day",
    description: "Same-day full-arch dental implants explained — candidacy, the procedure, immediate loading, and what results to expect.",
    images: [
      {
        url: "/images/blog/2026-04-28/same-day-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Patient smiling after same-day All-on-4 full-arch dental implant restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-on-4® Dental Implants Explained: A New Smile in One Day",
    description: "Same-day full-arch dental implants explained — candidacy, the procedure, immediate loading, and what results to expect.",
    images: ["/images/blog/2026-04-28/same-day-implants.jpg"],
  }
}

export default function AllOn4ExplainedPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day#article","headline":"All-on-4® Dental Implants Explained: A New Smile in One Day","description":"How All-on-4 and full-arch dental implants restore a complete smile with same-day fixed teeth — candidacy, immediate extraction, immediate placement, immediate loading, and realistic long-term results.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day","datePublished":"2026-06-29","dateModified":"2026-06-29","image":["https://www.drantipov.com/images/blog/2026-04-28/same-day-implants.jpg"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/all-on-4-dental-implants-explained-new-smile-in-one-day"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I really get teeth in one day with All-on-4?","acceptedAnswer":{"@type":"Answer","text":"Many qualified patients can. When the implants achieve enough stability at surgery, a fixed temporary bridge can be attached the same day — immediate loading. Healing continues underneath, and a final restoration is delivered after the implants integrate."}},{"@type":"Question","name":"Who is a candidate for same-day dental implants?","acceptedAnswer":{"@type":"Answer","text":"Candidacy depends on bone density and volume, oral health, implant stability at placement, medical history, and bite forces. A 3D CT scan and exam determine whether immediate loading is appropriate for your case."}},{"@type":"Question","name":"What is the difference between immediate extraction, immediate placement, and immediate loading?","acceptedAnswer":{"@type":"Answer","text":"Immediate extraction removes failing teeth during implant surgery. Immediate placement sets implants into the jaw right after extraction when conditions allow. Immediate loading attaches a fixed temporary bridge to those implants the same day, so you leave with teeth rather than removable dentures."}},{"@type":"Question","name":"What is a hybrid bridge?","acceptedAnswer":{"@type":"Answer","text":"A fixed full-arch restoration combining a titanium framework, custom replacement teeth, and gum-colored material. It stays attached to the implants and is only removed by your dental team during maintenance."}},{"@type":"Question","name":"Are All-on-4 dental implants permanent?","acceptedAnswer":{"@type":"Answer","text":"The implants are designed to become a permanent part of the jawbone. The same-day temporary bridge is later replaced with a stronger final restoration, and with good care full-arch implants can last for decades."}},{"@type":"Question","name":"Does All-on-4 restore more than just teeth?","acceptedAnswer":{"@type":"Answer","text":"Yes. A properly designed full-arch restoration rebuilds bite height and facial support that are lost after long-term tooth or denture wear, which can improve lip support and give a fuller, more youthful facial profile — not just replace missing teeth."}},{"@type":"Question","name":"How is candidacy for same-day teeth determined?","acceptedAnswer":{"@type":"Answer","text":"During your consultation, advanced 3D CT imaging and an exam let the surgical team assess bone density and volume, oral health, and expected implant stability. Careful patient selection is one of the most important steps in achieving predictable long-term success."}}]}]` }}
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
                <time>June 29, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              All-on-4&reg; Dental Implants Explained: How You Can Leave with a New Smile in Just One Day
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-04-28/same-day-implants.jpg"
                alt="Patient smiling after same-day All-on-4 full-arch dental implant restoration"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {YOUTUBE_ID && (
              <div className="relative aspect-video w-full mb-12 rounded-[40px] overflow-hidden shadow-lg ring-1 ring-black/5">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                  title="All-on-4 Dental Implants Explained — Dr. Alexander V. Antipov"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Yes &mdash; many patients can leave with a full arch of fixed teeth the same day their
                implants are placed, a technique commonly called All-on-4&reg; or &ldquo;teeth in a
                day,&rdquo; explains Dr. Alexander Antipov, a board-certified oral &amp; maxillofacial
                surgeon in Roseville, CA. Not every patient is a candidate, though &mdash; success
                depends on your bone, bite, and overall health. Modern implant dentistry makes same-day
                smile restoration possible for many people through advanced All-on-4&reg; and full-arch
                dental implant techniques, and understanding how the procedure works can help you decide
                whether it may be the right solution for you.
              </p>
              <p className="italic text-neutral-600 mb-8">
                This article is for general education &mdash; consult a qualified oral surgeon for a
                personalized recommendation.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Key Takeaways</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; <strong>All-on-4&reg;</strong> replaces a full arch of teeth on four strategically placed implants.</li>
                  <li>&bull; <strong>Many patients leave with fixed teeth the same day</strong> &mdash; immediate loading, not removable dentures.</li>
                  <li>&bull; <strong>Candidacy is decided by a 3D CT scan and exam</strong>, not a one-size-fits-all promise.</li>
                  <li>&bull; <strong>Full-arch implants rebuild facial support</strong>, not just teeth, for a more youthful profile.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Are All-on-4&reg; Dental Implants?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                All-on-4&reg; is a full-mouth dental implant solution designed for patients who have lost
                most or all of their teeth, or whose remaining teeth can no longer be saved. Instead of
                replacing every tooth with an individual implant, four strategically positioned implants
                are placed into the jawbone to support an entire fixed arch of replacement teeth.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Depending on your anatomy and bone quality, some patients receive additional implants &mdash;
                such as All-on-5&reg; or All-on-6&reg; &mdash; for even greater support and long-term
                stability. The goal stays the same: restore a complete smile with permanent,
                non-removable teeth.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Configuration</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Implants per Arch</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">All-on-4&reg;</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4 implants</td>
                      <td className="border-b border-neutral-200 py-3 px-4">The most common full-arch design; supports a complete fixed bridge.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">All-on-5&reg; / All-on-6&reg;</td>
                      <td className="border-b border-neutral-200 py-3 px-4">5&ndash;6 implants</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Added support and long-term stability for some anatomy and bone quality.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Is It Really Possible to Get Teeth in One Day?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                One of the biggest misconceptions about dental implants is that patients must wait months
                before receiving teeth. While healing is still required, many qualified patients can
                receive a fixed temporary bridge on the very same day their implants are placed. This
                treatment is commonly known as <strong>Teeth in a Day</strong>, <strong>Same-Day Dental
                Implants</strong>, <strong>Immediate Teeth</strong>, or <strong>Immediate Loading</strong>.
                Instead of leaving surgery with removable dentures, patients leave with a functional,
                natural-looking smile attached directly to their implants.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Who Is a Candidate for Same-Day Dental Implants?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Not every patient qualifies for immediate loading. Successful treatment depends on several
                important factors:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Bone density</strong> and <strong>bone volume</strong></li>
                <li>&mdash; <strong>Overall oral health</strong></li>
                <li>&mdash; <strong>Implant stability</strong> achieved at placement</li>
                <li>&mdash; <strong>Medical history</strong></li>
                <li>&mdash; <strong>Bite forces</strong></li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Careful patient selection is one of the most important steps in achieving predictable
                long-term success. During your consultation, advanced 3D CT imaging allows the surgical
                team to determine whether same-day teeth are an appropriate option for you.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Immediate Extraction, Placement, and Loading
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                These three terms are often confused, but each describes a different stage of treatment.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Immediate Extraction:</strong> if damaged or failing teeth cannot be saved, they are removed during the same appointment as implant surgery.</li>
                <li>&mdash; <strong>Immediate Implant Placement:</strong> right after the teeth are removed, implants are placed into the jawbone whenever conditions allow &mdash; reducing the number of surgical procedures and preserving existing bone.</li>
                <li>&mdash; <strong>Immediate Loading:</strong> once the implants achieve sufficient stability, a fixed temporary bridge is attached the very same day, so you leave with teeth instead of waiting months in removable dentures.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                More Than Replacing Teeth &mdash; Restoring Your Whole Smile
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                One of the greatest advantages of full-arch dental implants is that treatment restores far
                more than missing teeth. Patients who have worn dentures for years often experience bone
                loss, a collapsed facial appearance, loss of lip support, reduced facial height, wrinkles
                around the mouth, difficulty chewing, and reduced confidence.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                As teeth are lost, the upper and lower jaws gradually move closer together. This loss of
                vertical dimension creates the sunken facial appearance commonly associated with long-term
                denture wear. A properly designed full-arch restoration rebuilds the support that has been
                lost over time &mdash; and by restoring proper bite height, many patients notice a fuller
                facial profile, improved lip support, and a more youthful appearance.
              </p>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"
                  alt="Full-arch implant planning on a 3D jaw model"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is a Hybrid Bridge?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Many patients hear the term &ldquo;hybrid bridge&rdquo; without knowing what it means. A
                hybrid bridge is a fixed full-arch restoration that combines multiple materials into one
                strong prosthesis: a <strong>titanium framework</strong> for strength,
                <strong> custom-designed replacement teeth</strong>, and
                <strong> gum-colored material</strong> that replaces missing tissue. Unlike traditional
                dentures, the bridge stays securely attached to the implants &mdash; only your dental team
                removes it during maintenance appointments.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Benefits of Fixed Dental Implants
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Non-removable teeth:</strong> no slipping, shifting, adhesives, or taking them out at night.</li>
                <li>&mdash; <strong>Better chewing function:</strong> anchored into the jawbone, implants restore a much stronger bite and a wider variety of foods.</li>
                <li>&mdash; <strong>Bone preservation:</strong> chewing stimulates the jawbone, helping reduce the bone loss that follows tooth loss &mdash; a major long-term advantage over dentures.</li>
                <li>&mdash; <strong>Improved facial appearance:</strong> restoring lost bone and facial support reduces the collapsed look caused by missing teeth.</li>
                <li>&mdash; <strong>Increased confidence:</strong> patients smile more, speak with assurance, and stop worrying about loose dentures.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Happens During the Procedure?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Every patient receives a customized treatment plan, but the general process includes:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Comprehensive consultation and CT scan</li>
                <li>&mdash; Digital treatment planning</li>
                <li>&mdash; Removal of failing teeth (if necessary)</li>
                <li>&mdash; Placement of four or more dental implants</li>
                <li>&mdash; Attachment of a fixed temporary bridge</li>
                <li>&mdash; Healing period while implants integrate with the jawbone</li>
                <li>&mdash; Delivery of the final custom restoration</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                For many patients, the transformation begins the very same day.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Are All-on-4&reg; Dental Implants Permanent?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The implants themselves are designed to become a permanent part of the jawbone. The
                temporary bridge worn immediately after surgery is later replaced with a stronger,
                long-term final restoration once healing is complete. With proper home care, routine
                maintenance, and regular professional cleanings, dental implants can provide decades of
                reliable function.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Can I really get teeth in one day with All-on-4?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Many qualified patients can. When the implants achieve enough stability at surgery, a
                    fixed temporary bridge can be attached the same day &mdash; immediate loading. Healing
                    continues underneath, and a final restoration is delivered after the implants integrate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Who is a candidate for same-day dental implants?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Candidacy depends on bone density and volume, oral health, implant stability at
                    placement, medical history, and bite forces. A 3D CT scan and exam determine whether
                    immediate loading is appropriate for your case.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What is the difference between immediate extraction, immediate placement, and immediate loading?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Immediate extraction removes failing teeth during implant surgery. Immediate placement
                    sets implants into the jaw right after extraction when conditions allow. Immediate loading
                    attaches a fixed temporary bridge to those implants the same day, so you leave with teeth
                    rather than removable dentures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What is a hybrid bridge?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A fixed full-arch restoration combining a titanium framework, custom replacement teeth,
                    and gum-colored material. It stays attached to the implants and is only removed by your
                    dental team during maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Are All-on-4 dental implants permanent?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The implants are designed to become a permanent part of the jawbone. The same-day
                    temporary bridge is later replaced with a stronger final restoration, and with good care
                    full-arch implants can last for decades.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Does All-on-4 restore more than just teeth?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. A properly designed full-arch restoration rebuilds bite height and facial support
                    that are lost after long-term tooth or denture wear, which can improve lip support and
                    give a fuller, more youthful facial profile &mdash; not just replace missing teeth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">How is candidacy for same-day teeth determined?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    During your consultation, advanced 3D CT imaging and an exam let the surgical team assess
                    bone density and volume, oral health, and expected implant stability. Careful patient
                    selection is one of the most important steps in achieving predictable long-term success.
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
                    implants, All-on-4 and full-arch restoration, and corrective jaw surgery. Serving the
                    greater Sacramento region.
                  </p>
                </div>
              </div>
            </GlassCard>
          </article>
        </Container>
      </Section>

      <DualCTA variant="implants" />
    </>
  )
}
