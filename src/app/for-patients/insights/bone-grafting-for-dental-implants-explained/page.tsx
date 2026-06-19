import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bone Grafting for Dental Implants Explained",
  description:
    "Bone grafting for dental implants explained: who needs it, types of grafts, the procedure, healing timeline, risks, and how it supports long-term implant success.",
  alternates: {
    canonical: "/for-patients/insights/bone-grafting-for-dental-implants-explained",
    languages: {
      "en": "/for-patients/insights/bone-grafting-for-dental-implants-explained",
      "x-default": "/for-patients/insights/bone-grafting-for-dental-implants-explained",
    },
  },
  keywords: [
    "bone grafting for dental implants",
    "dental bone graft types",
    "jawbone loss implants",
    "sinus lift bone graft",
    "bone graft healing timeline",
    "bone grafting Roseville",
  ],
  openGraph: {
    title: "Bone Grafting for Dental Implants Explained",
    description: "Who needs a bone graft, the types of grafts, healing timeline, and how it supports implant success.",
    images: [
      {
        url: "/images/blog/2026-06-19/bone-grafting.png",
        width: 1200,
        height: 630,
        alt: "Bone Grafting for Dental Implants Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bone Grafting for Dental Implants Explained",
    description: "Who needs a bone graft, the types of grafts, healing timeline, and how it supports implant success.",
    images: ["/images/blog/2026-06-19/bone-grafting.png"],
  }
}

export default function BoneGraftingForDentalImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/bone-grafting-for-dental-implants-explained#article","headline":"Bone Grafting for Dental Implants Explained","description":"Comprehensive guide to bone grafting for dental implants \\u2014 who needs it, types of grafts, the procedure, healing timeline, risks, and alternatives.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/bone-grafting-for-dental-implants-explained","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/bone-grafting.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/bone-grafting-for-dental-implants-explained"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does the bone grafting procedure take?","acceptedAnswer":{"@type":"Answer","text":"The surgical procedure typically takes about one to two hours, depending on the complexity of the case. The overall timeline for recovery may vary based on individual healing rates."}},{"@type":"Question","name":"Is bone grafting painful?","acceptedAnswer":{"@type":"Answer","text":"Most patients report mild discomfort after the procedure, which can be managed with pain medication. Your surgeon will provide specific aftercare guidelines to minimize discomfort."}},{"@type":"Question","name":"How long does it take for the bone graft to heal?","acceptedAnswer":{"@type":"Answer","text":"Healing time usually ranges from three to six months, depending on the type of graft and the individual\\u2019s health. Regular follow-ups will help track your progress."}},{"@type":"Question","name":"Can I get dental implants immediately after bone grafting?","acceptedAnswer":{"@type":"Answer","text":"In most cases, dental implants are placed after the graft has healed. However, some advanced techniques allow for simultaneous placement, which your surgeon can discuss with you."}},{"@type":"Question","name":"What happens if my bone graft fails?","acceptedAnswer":{"@type":"Answer","text":"If a bone graft fails, your surgeon will assess the situation and may recommend additional grafting or alternative treatments based on your needs."}},{"@type":"Question","name":"Will insurance cover bone grafting for dental implants?","acceptedAnswer":{"@type":"Answer","text":"Coverage for bone grafting varies by insurance plan. It is advisable to check with your insurance provider to understand your benefits and coverage options."}}]}]` }}
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
              Bone Grafting for Dental Implants Explained
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/bone-grafting.png"
                alt="Bone grafting to rebuild jawbone volume for dental implants"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Dental implants provide an effective solution for replacing missing teeth, but successful
                placement depends heavily on the jawbone&rsquo;s density and quality. This is where bone
                grafting becomes essential &mdash; offering the support needed for optimal implant integration.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Bone grafting rebuilds jawbone volume where bone has deteriorated after tooth loss.</li>
                  <li>&bull; Common graft types include autografts, allografts, xenografts, and synthetic materials.</li>
                  <li>&bull; A graft typically heals over 3&ndash;6&nbsp;months before implant placement.</li>
                  <li>&bull; It improves anchorage, aesthetics, and long-term implant success.</li>
                  <li>&bull; A 3D CT scan confirms whether grafting is needed and which approach fits best.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is Bone Grafting?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Bone grafting is a surgical procedure designed to augment or reconstruct bone structure in
                areas where bone density is lacking. This deficiency can arise from tooth loss, trauma, or
                periodontal disease. The grafting process involves placing bone material in the jawbone to
                stimulate new bone growth, providing a stable foundation for <Link href="/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">dental implants</Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Types of Bone Grafts
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Several types of bone grafts are used in dental procedures:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Autografts:</strong> Bone is harvested from another part of the patient&rsquo;s body
                  (such as the hip or chin). This method often offers strong integration since the body
                  recognizes its own bone.
                </li>
                <li>
                  &mdash; <strong>Allografts:</strong> Bone is sourced from a donor and processed for safety and
                  compatibility. This is commonly used due to convenience and effectiveness.
                </li>
                <li>
                  &mdash; <strong>Xenografts:</strong> Bone material is obtained from another species (often bovine)
                  and treated to ensure it is safe for human use.
                </li>
                <li>
                  &mdash; <strong>Synthetic grafts:</strong> Man-made materials designed to mimic bone, often chosen
                  for availability and reduced risk of disease transmission.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Is Bone Grafting Necessary for Dental Implants?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                When a tooth is lost, the supporting bone can begin to deteriorate, which may complicate
                implant placement. Bone grafting supports implant treatment by:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Restoring bone volume:</strong> Helps rebuild the jawbone for secure implant
                  anchorage.
                </li>
                <li>
                  &mdash; <strong>Improving aesthetic outcomes:</strong> Adequate bone structure supports better
                  implant positioning and final smile appearance.
                </li>
                <li>
                  &mdash; <strong>Enhancing functional stability:</strong> A stronger foundation supports implant
                  longevity and chewing function.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Bone Grafting Procedure
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Pre-procedure consultation.</strong> Before bone grafting, you&rsquo;ll consult with your
                oral surgeon. Imaging such as X-rays or a CT/CBCT scan may be used to evaluate bone volume
                and determine the most appropriate grafting method.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Anesthesia and preparation.</strong> The procedure typically begins with local
                anesthesia or sedation to ensure comfort. The area is cleaned and prepared for surgery.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>The grafting process</strong> follows these steps:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Incision.</strong> The surgeon makes an incision in the gum tissue to access the
                  bone.
                </li>
                <li>
                  <strong>Placement of bone material.</strong> The chosen grafting material is placed in the
                  deficient area.
                </li>
                <li>
                  <strong>Securing the graft.</strong> The graft may be stabilized with membranes and/or small
                  fixation components depending on the case.
                </li>
                <li>
                  <strong>Closure.</strong> The gum tissue is stitched back into place to support healing.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Healing and Integration
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                After surgery, swelling or discomfort is common and is usually manageable with prescribed or
                recommended medication. The bone graft typically requires several months to heal, during
                which the graft material gradually integrates with the existing bone. Regular follow-up
                appointments help monitor healing and confirm when you&rsquo;re ready for implant placement.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Several factors affect how well a graft heals:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Overall health:</strong> Certain conditions and habits (such as smoking) can slow healing.</li>
                <li>&mdash; <strong>Graft type/material:</strong> Different materials may integrate at different rates.</li>
                <li>&mdash; <strong>Post-operative care:</strong> Hygiene, diet, and follow-up visits all influence outcomes.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Risks and Complications
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Like any surgical procedure, bone grafting carries potential risks. While complications are
                uncommon, they can include infection, graft failure, nerve irritation, or delayed healing.
                Your surgeon will explain how risks apply to your case and how they&rsquo;re managed.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Alternatives to Bone Grafting
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Depending on your anatomy and goals, alternatives may include:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Mini dental implants:</strong> Smaller implants that may require less bone in some situations.</li>
                <li>&mdash; <strong>Bone regeneration techniques:</strong> Approaches that stimulate bone growth without traditional grafting (case-dependent).</li>
                <li>&mdash; <strong>Zygomatic implants:</strong> Anchored in the cheekbone for severe upper-jaw bone loss.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Modern planning tools &mdash; such as 3D imaging and guided surgery &mdash; can improve precision,
                support safer placement, and enhance predictability. Your surgeon can recommend the most
                predictable path based on imaging and a full evaluation.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does the bone grafting procedure take?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The surgical procedure typically takes about one to two hours, depending on the
                    complexity of the case. The overall timeline for recovery may vary based on individual
                    healing rates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Is bone grafting painful?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most patients report mild discomfort after the procedure, which can be managed with pain
                    medication. Your surgeon will provide specific aftercare guidelines to minimize
                    discomfort.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    How long does it take for the bone graft to heal?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Healing time usually ranges from three to six months, depending on the type of graft and
                    the individual&rsquo;s health. Regular follow-ups will help track your progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Can I get dental implants immediately after bone grafting?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    In most cases, dental implants are placed after the graft has healed. However, some
                    advanced techniques allow for simultaneous placement, which your surgeon can discuss with
                    you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    What happens if my bone graft fails?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    If a bone graft fails, your surgeon will assess the situation and may recommend
                    additional grafting or alternative treatments based on your needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Will insurance cover bone grafting for dental implants?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Coverage for bone grafting varies by insurance plan. It is advisable to check with your
                    insurance provider to understand your benefits and coverage options.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; Dental Implant Surgery</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy &mdash; Dental Implants Overview</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR &mdash; Periodontal (Gum) Disease and Bone Loss</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/28727892/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Bone augmentation techniques for dental implant placement &mdash; PubMed review</a></li>
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
                  Find Out If You Need a Bone Graft
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
