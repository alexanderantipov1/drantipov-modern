import { Section, Container, GlassCard } from "@/components/sections"
import {
  ExpertisePageHero,
  HeroStats,
  AnimatedCounter,
  DoctorQuote,
  IconBenefits,
  VerticalProcessTimeline,
} from "@/components/expertise"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Award, Users, Clock, Heart, Smile, Bone, HeartHandshake, ShieldCheck, Sparkles, TrendingUp, Hospital, Calendar, Stethoscope, DollarSign } from "lucide-react"
import FloatingArticleCTA from "@/components/FloatingArticleCTA"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  getFullArchImplantsSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"
import DualCTA from "@/components/DualCTA"

export const metadata = {
  title: { absolute: "Full-Arch Dental Implants — Same-Day Teeth | Roseville" },
  description: "All-on-X full-arch dental implants with same-day fixed teeth. Board-certified surgeon in Roseville, CA. Free CT scan & consultation.",
  alternates: {
    canonical: "/expertise/full-arch-implants",
    languages: {
      "en": "/expertise/full-arch-implants",
      "x-default": "/expertise/full-arch-implants",
    },
  },
  openGraph: {
    title: "Full-Arch Dental Implants — All-on-X",
    description: "Same-day full-arch dental implants by Dr. Antipov. 4–6 implants, immediate-load protocol, Roseville CA.",
    images: [
      {
        url: "/images/fullarch/08-final-result.jpeg",
        width: 1200,
        height: 630,
        alt: "Full-Arch Dental Implants — All-on-X",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Arch Dental Implants — All-on-X",
    description: "Same-day full-arch dental implants by Dr. Antipov. 4–6 implants, immediate-load protocol, Roseville CA.",
    images: ["/images/fullarch/08-final-result.jpeg"],
  }
}

const iconBenefits = [
  {
    icon: <Smile className="h-5 w-5" />,
    title: "Permanent, natural-feeling smile",
    description: "Fixed teeth that look, feel, and function like your own",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Same-day teeth option",
    description: "Walk in with failing teeth, leave with a new smile",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Restored chewing & speech",
    description: "Eat steak, laugh freely, speak with full confidence",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Prevents bone loss",
    description: "Implants stimulate the jaw and preserve facial structure",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "No adhesives or slippage",
    description: "Forget glue, soaking, or embarrassing moments",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Cost-effective long-term",
    description: "More predictable than replacing each tooth individually",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation & 3D Imaging",
    description:
      "Comprehensive evaluation including CBCT scans to assess bone quality and plan precise implant placement. We'll discuss your goals, timeline, and create a customized treatment plan.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Pre-Surgical Planning",
    description:
      "Using advanced digital planning software, we design your final smile and determine optimal implant positions. If needed, bone grafting is performed 3-6 months before implant placement.",
    duration: "Varies",
  },
  {
    step: 3,
    title: "Implant Placement & Temporary Teeth",
    description:
      "Four to six titanium implants are strategically placed in areas of strongest bone. In most cases, we attach a temporary fixed bridge the same day so you never go without teeth.",
    duration: "2-4 hours",
  },
  {
    step: 4,
    title: "Healing & Osseointegration",
    description:
      "Over 3-6 months, the implants fuse with your jawbone (osseointegration). You'll wear your temporary bridge during this time and follow up for progress checks.",
    duration: "3-6 months",
  },
  {
    step: 5,
    title: "Final Prosthesis",
    description:
      "After complete healing, we fabricate your permanent, custom-designed bridge made from high-strength zirconia or porcelain. This final restoration is designed for aesthetics, function, and longevity.",
    duration: "2-3 weeks",
  },
]

const faqs = [
  {
    question: "What is the difference between All-on-4 and All-on-6?",
    answer:
      "All-on-4 uses four implants per arch, while All-on-6 uses six. All-on-6 may be recommended for patients with better bone quality who want maximum support and longevity. Dr. Antipov will evaluate your specific case to determine the ideal approach for you.",
  },
  {
    question: "Can I really get teeth in one day?",
    answer:
      "Yes, in most cases. With our same-day teeth protocol, we place the implants and attach a fixed temporary bridge during the same appointment. You leave our office with a functional, aesthetic smile the same day. The permanent bridge is placed after 3-6 months of healing.",
  },
  {
    question: "How long do full-arch implants last?",
    answer:
      "With proper care and maintenance, full-arch dental implants can last 20+ years or even a lifetime. The titanium implants themselves can last indefinitely, while the prosthetic bridge may need replacement after 10-15 years due to normal wear.",
  },
  {
    question: "Am I a candidate if I have bone loss?",
    answer:
      "Many patients with bone loss are still candidates for full-arch implants. The All-on-X technique uses strategic implant placement and often avoids areas of bone loss. In some cases, bone grafting may be needed first. A 3D CBCT scan during your consultation will determine your best options.",
  },
  {
    question: "What is the recovery like?",
    answer:
      "Most patients experience swelling and mild discomfort for 3-5 days after implant placement. You'll be on a soft food diet for 2-3 months during initial healing. Most patients return to work within 3-5 days. We provide detailed post-operative instructions and pain management protocols.",
  },
  {
    question: "How much does full-arch restoration cost?",
    answer:
      "Full-arch implant restoration typically ranges from $20,000-$35,000 per arch, depending on the complexity of your case, number of implants, and materials used. While this is a significant investment, it's often more cost-effective than replacing many individual teeth. We offer financing options and will provide a detailed cost breakdown during your consultation.",
  },
]

export default function FullArchImplantsPage() {
  // Structured data for SEO
  const structuredData = [
    getFullArchImplantsSchema(),
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      { name: "Full-Arch Implants", url: `${siteConfig.url}/expertise/full-arch-implants` },
    ]),
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      <ExpertisePageHero
        badge="Advanced Implant Solutions"
        title="Full-Arch Implant Solutions"
        subtitle="Full-arch dental implants (All-on-4 / All-on-X) replace an entire upper or lower row of teeth using 4–6 titanium implants anchored in the jawbone — often with same-day fixed teeth."
        image="/images/procedures/dental-implants@2x-06d1b2ea.jpg"
      />

      {/* Animated stat cards overlapping hero bottom */}
      <HeroStats stats={[
          {
            icon: <Clock className="h-5 w-5" />,
            value: <>1 day</>,
            label: "From extractions to fixed teeth",
          },
          {
            icon: <Smile className="h-5 w-5" />,
            value: <><AnimatedCounter to={4} />–6</>,
            label: "Implants per arch",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            value: <><AnimatedCounter to={95} suffix="%+" /></>,
            label: "Long-term success rate",
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            value: <><AnimatedCounter to={25} suffix="+ yrs" /></>,
            label: "Typical implant lifespan",
          },
        ]} />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                What Are Full-Arch Dental Implants?
              </h2>
              <p className="text-xl text-neutral-600">
                A permanent, life-changing solution for missing or failing teeth
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                Full-arch dental implants (also called All-on-4 or All-on-6) replace an entire upper or lower arch of
                teeth using just 4-6 strategically placed dental implants. Unlike traditional dentures, these implants
                provide a <strong>fixed, non-removable solution</strong> that looks, feels, and functions like natural
                teeth.
              </p>

              <p>
                This innovative technique allows patients with extensive tooth loss, failing teeth, or ill-fitting
                dentures to restore their smile, confidence, and quality of life - often in just one day.
              </p>

              <p>
                Dr. Antipov has advanced training in complex implant reconstruction and uses state-of-the-art 3D
                planning technology to ensure precise implant placement and optimal aesthetic outcomes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Quote — personal touch */}
      <DoctorQuote
        quote="For a patient who has lived with failing teeth or ill-fitting dentures, walking out with a brand-new smile in a single day is one of the most rewarding things I do as a surgeon."
        author="Dr. Alexander Antipov, DDS"
        role="Board-Certified Oral & Maxillofacial Surgeon"
      />

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Life-Changing Benefits
              </h2>
              <p className="text-xl text-neutral-600">
                Experience the freedom and confidence that comes with a permanently restored smile
              </p>

              <IconBenefits items={iconBenefits} columns={2} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Dr. Antipov's Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Fellowship-trained in complex implant reconstruction at NYU Langone Medical Center, Dr. Antipov
                    brings advanced surgical skills and artistic precision to every full-arch case. He's placed
                    hundreds of successful full-arch restorations over his 15+ year career.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Users className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Trusted by Dentists
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Dentists throughout Northern California refer their most complex implant cases to Dr. Antipov.
                    They trust his surgical expertise, attention to detail, and commitment to exceptional patient
                    outcomes.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Process Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Your Journey to a New Smile
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From consultation to final restoration, we guide you through every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VerticalProcessTimeline steps={processSteps} />
          </div>
        </Container>
      </Section>

      {/* Ideal Candidates Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Is Full-Arch Restoration Right for You?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <GlassCard>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  You May Be a Great Candidate If:
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You're missing most or all teeth in one or both arches
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You have multiple failing teeth requiring extraction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    Your dentures are loose, uncomfortable, or affect your confidence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You want a permanent, non-removable solution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You're in good overall health and committed to oral hygiene
                  </li>
                </ul>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  What We'll Evaluate:
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Bone quality and quantity via 3D CBCT scan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Overall health and medical history
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Bite relationship and jaw alignment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Aesthetic goals and smile design preferences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Timeline expectations and budget considerations
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="default" padding="xl" className="scroll-mt-24">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Get answers to common questions about full-arch dental implants
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                  <GlassCard className="overflow-hidden">
                    <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:no-underline px-6 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </GlassCard>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

            {/* Related cluster */}
      <Section background="accent" padding="xl">
        <Container size="lg">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">Continue exploring</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="/all-on-4-cost" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Pricing</p>
              <h3 className="font-bold text-neutral-900 leading-snug">All-on-4 cost breakdown</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">Itemized pricing, financing options, what affects your quote.</p>
            </a>
            <a href="/all-on-4-clearchoice-alternative" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Comparison</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Independent surgeon vs corporate chains</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">What to compare before choosing your All-on-4 provider.</p>
            </a>
            <a href="/surgical-cases/dental-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Real cases</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Implant case gallery</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">Before-and-after transformations with clinical details.</p>
            </a>
            <a href="/for-patients/travel" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Logistics</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Traveling for surgery</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">Airports, hotels, recovery timeline for out-of-state patients.</p>
            </a>
          </div>
        </Container>
      </Section>

      <DualCTA variant="implants"
        heading="Restore Your Full Smile"
        subheading="Full-arch reconstruction (All-on-4 / All-on-X) — schedule a complimentary implant consultation with a 3D CT scan."
      />

      {/* Floating sticky CTA — appears after 25% scroll */}
      <FloatingArticleCTA
        href="/contact"
        label="Book free consultation"
        showAfterPct={25}
      />
    </>
  )
}
