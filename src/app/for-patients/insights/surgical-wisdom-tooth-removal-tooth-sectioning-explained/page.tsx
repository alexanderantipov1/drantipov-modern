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
const YOUTUBE_ID = "HV2QlQDIElA"

export const metadata: Metadata = {
  title: { absolute: "Surgical Wisdom Tooth Removal: Tooth Sectioning Guide" },
  description:
    "How impacted wisdom teeth are removed using tooth sectioning: why teeth are divided, the step-by-step procedure, recovery tips, and when surgery is needed.",
  alternates: {
    canonical: "/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained",
    languages: {
      "en": "/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained",
      "x-default": "/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained",
    },
  },
  keywords: [
    "surgical wisdom tooth removal",
    "impacted wisdom teeth",
    "tooth sectioning",
    "wisdom tooth extraction",
    "impacted wisdom tooth surgery",
    "oral surgery Roseville",
    "wisdom teeth removal Roseville",
  ],
  openGraph: {
    title: "Surgical Wisdom Tooth Removal: Tooth Sectioning Guide",
    description: "Why oral surgeons divide impacted wisdom teeth into sections — the technique, the steps, and what recovery looks like.",
    images: [
      {
        url: "/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg",
        width: 1200,
        height: 630,
        alt: "Surgical removal of an impacted wisdom tooth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surgical Wisdom Tooth Removal: Tooth Sectioning Guide",
    description: "Why oral surgeons divide impacted wisdom teeth into sections — the technique, the steps, and what recovery looks like.",
    images: ["/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg"],
  }
}

export default function SurgicalWisdomToothRemovalPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained#article","headline":"Surgical Wisdom Tooth Removal: Tooth Sectioning Guide","description":"How impacted wisdom teeth are removed using tooth sectioning — why the tooth is divided, the step-by-step surgical procedure, recovery, and when extraction is recommended.","inLanguage":"en","url":"https://www.drantipov.com/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained","datePublished":"2026-06-29","dateModified":"2026-06-29","image":["https://www.drantipov.com/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/for-patients/insights/surgical-wisdom-tooth-removal-tooth-sectioning-explained"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an impacted wisdom tooth?","acceptedAnswer":{"@type":"Answer","text":"An impacted wisdom tooth is one that cannot fully emerge because there isn't enough room in the jaw, so it stays partially or completely trapped beneath the gums or bone. Impaction can cause pain, swelling, gum infections, decay, damage to neighboring teeth, and cysts."}},{"@type":"Question","name":"Why isn't the wisdom tooth removed in one piece?","acceptedAnswer":{"@type":"Answer","text":"Because an impacted tooth is firmly surrounded by bone and tissue, removing it whole could require taking out excess bone or applying unnecessary force. Surgeons instead use tooth sectioning — dividing the tooth into smaller pieces that come out through a smaller opening with less trauma."}},{"@type":"Question","name":"Is tooth sectioning safe?","acceptedAnswer":{"@type":"Answer","text":"Yes. Tooth sectioning is a well-established oral surgery technique used every day worldwide. Dividing the tooth allows smaller surgical openings, less bone removal, more controlled extraction, and greater precision, making it one of the safest and least traumatic ways to remove impacted wisdom teeth."}},{"@type":"Question","name":"What is recovery like after surgical wisdom tooth removal?","acceptedAnswer":{"@type":"Answer","text":"Most patients have some swelling, mild discomfort, and limited jaw stiffness for the first few days. Pain medication, ice packs in the first 24 hours, soft foods, plenty of fluids, gentle oral hygiene, and sometimes antibiotics support healing. Following post-op instructions is key to a smooth recovery."}},{"@type":"Question","name":"When should impacted wisdom teeth be removed?","acceptedAnswer":{"@type":"Answer","text":"Not every wisdom tooth needs removal, but extraction is often recommended when impacted teeth cause pain, infection, damage to neighboring teeth, or other oral health concerns. A comprehensive exam with digital X-rays or 3D imaging determines whether surgery is the best option."}},{"@type":"Question","name":"How is a wisdom tooth divided during sectioning?","acceptedAnswer":{"@type":"Answer","text":"A specialized surgical handpiece divides the tooth into sections, and the number of pieces depends on the tooth's position, root shape, bone density, and degree of impaction. The larger portions are elevated and removed first, followed by the remaining sections one at a time to keep the extraction controlled."}}]}]` }}
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
                Oral Surgery
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>June 29, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Surgical Wisdom Tooth Removal: Tooth Sectioning Guide
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <Link href="/about" className="not-italic font-bold text-neutral-900 underline decoration-primary-300 hover:decoration-primary-600">Dr. Alexander V. Antipov, DDS</Link> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg"
                alt="Surgical removal of an impacted wisdom tooth"
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
                  title="Surgical Wisdom Tooth Removal Explained — Dr. Alexander V. Antipov"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Surgical wisdom tooth removal is the procedure oral surgeons use to extract impacted wisdom
                teeth that cannot erupt on their own, often by dividing (sectioning) the tooth so each piece
                comes out through a smaller opening. At the practice of Dr. Alexander Antipov, a
                board-certified oral &amp; maxillofacial surgeon in Roseville, CA, this technique makes
                impacted wisdom tooth removal safe, predictable, and far less traumatic than many people
                expect &mdash; minimizing pressure on the jawbone and surrounding tissue while allowing
                greater precision.
              </p>
              <p className="text-neutral-500 italic mb-8">
                This article is for general education and is not a substitute for a personalized evaluation by
                a qualified oral surgeon.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Key Takeaways</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; <strong>Impacted</strong> means the tooth is trapped beneath gum or bone with no room to erupt.</li>
                  <li>&bull; <strong>Tooth sectioning</strong> divides the tooth so each piece comes out through a smaller opening.</li>
                  <li>&bull; The approach means <strong>less bone removal and less trauma</strong> than removing it whole.</li>
                  <li>&bull; <strong>3D imaging</strong> guides the plan and protects nearby nerves and teeth.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Is an Impacted Wisdom Tooth?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Wisdom teeth are the last permanent teeth to develop and typically erupt between the ages of
                17 and 25. In many cases, there isn&rsquo;t enough room in the jaw for them to fully emerge,
                so they remain partially or completely trapped beneath the gums or bone. This is known as an
                impacted wisdom tooth.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Impacted wisdom teeth can lead to several problems, including:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Pain and swelling</li>
                <li>&mdash; Gum infections</li>
                <li>&mdash; Damage to neighboring teeth</li>
                <li>&mdash; Tooth decay</li>
                <li>&mdash; Cysts or other complications</li>
                <li>&mdash; Difficulty cleaning the area</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                When these problems occur &mdash; or are likely to develop &mdash; surgical extraction is
                often recommended.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Factor</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Removing the Tooth Whole</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Tooth Sectioning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Surgical opening</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">Larger</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Smaller</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Bone removal</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">Can require taking out excess bone</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Less bone removal</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Force on the jaw</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">May apply unnecessary force</td>
                      <td className="border-b border-neutral-200 py-3 px-4">More controlled extraction</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Trauma &amp; precision</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">More stress on surrounding structures</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Reduced trauma and greater precision</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why Isn&rsquo;t the Tooth Removed in One Piece?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Many patients assume a wisdom tooth is simply pulled out. For impacted teeth, however, that is
                often neither possible nor ideal. Because the tooth is firmly surrounded by bone and soft
                tissue, removing it in one piece could require taking out excessive bone or applying
                unnecessary force to the jaw. Instead, oral surgeons frequently use tooth sectioning &mdash;
                dividing the tooth into smaller pieces so each section can be removed individually through a
                smaller opening, reducing trauma to the surrounding structures.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Procedure, Step by Step
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Every case is planned individually, but a surgical wisdom tooth removal generally follows
                these stages:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>1. Accessing the tooth:</strong> after the area is fully numbed (with sedation if appropriate), a small incision exposes the tooth, and a minimal amount of bone is removed only if needed for safe access.</li>
                <li>&mdash; <strong>2. Sectioning the tooth:</strong> a specialized surgical handpiece divides the tooth into sections; the number depends on tooth position, root shape, bone density, and degree of impaction.</li>
                <li>&mdash; <strong>3. Removing each section:</strong> the larger portions are elevated and removed first, then the remaining sections one at a time &mdash; giving the surgeon control and minimizing stress on the jaw.</li>
                <li>&mdash; <strong>4. Root tip removal:</strong> any remaining root tips are carefully located and extracted, protecting healthy bone and nearby anatomy.</li>
                <li>&mdash; <strong>5. Cleaning the site:</strong> the socket is irrigated to remove debris and prepare the area for healing.</li>
                <li>&mdash; <strong>6. Suturing:</strong> the gum tissue is repositioned and secured with sutures to protect the site, control bleeding, and support healing. Sutures may dissolve on their own or be removed at a follow-up.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                What Happens After Surgery?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Most patients experience some swelling, mild discomfort, and limited jaw stiffness during the
                first few days. Your oral surgeon may recommend prescription or over-the-counter pain
                medication, ice packs during the first 24 hours, soft foods, plenty of fluids, and gentle oral
                hygiene around the surgical site. If appropriate, antibiotics may be prescribed to reduce
                infection risk. Following your post-operative instructions carefully is one of the most
                important factors in a smooth recovery.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Is Tooth Sectioning Safe?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Yes. Tooth sectioning is a well-established oral surgery technique used every day by
                experienced surgeons around the world. Although dividing the tooth into smaller pieces may
                sound more complicated, it is often the safest and least traumatic method for removing
                impacted wisdom teeth, because it allows:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Smaller surgical openings</li>
                <li>&mdash; Less bone removal</li>
                <li>&mdash; More controlled extraction</li>
                <li>&mdash; Reduced stress on surrounding teeth</li>
                <li>&mdash; Greater surgical precision</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                When Should Impacted Wisdom Teeth Be Removed?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Not every wisdom tooth needs to be extracted. However, removal is often recommended when
                impacted teeth are causing pain, infection, damage to neighboring teeth, or other oral health
                concerns. A comprehensive examination &mdash; including digital X-rays or 3D imaging &mdash;
                allows your oral surgeon to determine whether surgical removal is the best option for your
                situation.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What is an impacted wisdom tooth?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    An impacted wisdom tooth is one that cannot fully emerge because there isn&rsquo;t enough
                    room in the jaw, so it stays partially or completely trapped beneath the gums or bone.
                    Impaction can cause pain, swelling, gum infections, decay, damage to neighboring teeth, and
                    cysts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Why isn&rsquo;t the wisdom tooth removed in one piece?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Because an impacted tooth is firmly surrounded by bone and tissue, removing it whole could
                    require taking out excess bone or applying unnecessary force. Surgeons instead use tooth
                    sectioning &mdash; dividing the tooth into smaller pieces that come out through a smaller
                    opening with less trauma.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is tooth sectioning safe?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. Tooth sectioning is a well-established oral surgery technique used every day worldwide.
                    Dividing the tooth allows smaller surgical openings, less bone removal, more controlled
                    extraction, and greater precision, making it one of the safest and least traumatic ways to
                    remove impacted wisdom teeth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">What is recovery like after surgical wisdom tooth removal?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Most patients have some swelling, mild discomfort, and limited jaw stiffness for the first
                    few days. Pain medication, ice packs in the first 24 hours, soft foods, plenty of fluids,
                    gentle oral hygiene, and sometimes antibiotics support healing. Following post-op
                    instructions is key to a smooth recovery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">When should impacted wisdom teeth be removed?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Not every wisdom tooth needs removal, but extraction is often recommended when impacted
                    teeth cause pain, infection, damage to neighboring teeth, or other oral health concerns. A
                    comprehensive exam with digital X-rays or 3D imaging determines whether surgery is the best
                    option.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">How is a wisdom tooth divided during sectioning?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A specialized surgical handpiece divides the tooth into sections, and the number of pieces
                    depends on the tooth&rsquo;s position, root shape, bone density, and degree of impaction.
                    The larger portions are elevated and removed first, followed by the remaining sections one
                    at a time to keep the extraction controlled.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Sources &amp; References</h2>
              <p className="text-sm text-neutral-600 mb-3">Peer-reviewed and authoritative references supporting the information in this article.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/wisdom-teeth-management" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Wisdom Teeth Management</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/wisdom-teeth" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — National Institute of Dental and Craniofacial Research: Wisdom Teeth</a></li>
                <li><a href="https://medlineplus.gov/ency/article/003015.htm" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">MedlinePlus — Tooth Extraction</a></li>
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
                    Board-certified oral and maxillofacial surgeon in Roseville, CA, performing full-scope oral
                    surgery including wisdom tooth removal, dental implants, and corrective jaw surgery. Serving
                    the greater Sacramento region.
                  </p>
                </div>
              </div>
            </GlassCard>
          </article>
        </Container>
      </Section>

      <DualCTA variant="surgical" />
    </>
  )
}
