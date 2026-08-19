import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Heart, Star, FileText, Phone, Quote } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { YouTubeShortsSection } from "@/components/home/YouTubeShortsSection"

export const metadata: Metadata = {
  title: { absolute: "For Patients - Resources & Reviews | Dr. Antipov" },
  description: "Everything you need as a patient - quick resources, what to expect, real reviews, and 24/7 emergency contact. Roseville, CA.",
  alternates: {
    canonical: "/for-patients",
    languages: {
      "en": "/for-patients",
      "x-default": "/for-patients",
    },
  },
  keywords: [
    "patient resources",
    "patient testimonials",
    "patient reviews",
    "what to expect oral surgery",
    "post-operative emergency",
    "Dr. Antipov reviews",
  ],
  openGraph: {
    title: "Resources for Our Patients",
    description: "Schedule, prepare for, and recover from oral surgery with Dr. Antipov - all patient resources in one place.",
    images: [
      {
        url: "/images/forpatients-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Resources for Our Patients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources for Our Patients",
    description: "Schedule, prepare for, and recover from oral surgery with Dr. Antipov - all patient resources in one place.",
    images: ["/images/forpatients-hero.jpg"],
  }
}

const resources = [
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book your complimentary consultation with Dr. Antipov to discuss your treatment options.",
    href: "/for-patients/consultation",
    cta: "Book Now",
  },
  {
    icon: Star,
    title: "Patient Testimonials",
    description: "Read real stories from patients who have transformed their smiles and lives with Dr. Antipov.",
    href: "#patient-reviews",
    cta: "Read Stories",
  },
  {
    icon: FileText,
    title: "Pre-Op Instructions",
    description: "Prepare for your surgery with detailed pre-operative guidelines and what to bring.",
    href: "/for-patients/pre-op",
    cta: "View Instructions",
  },
  {
    icon: Heart,
    title: "Post-Op Care",
    description: "Essential recovery instructions, pain management, and what to expect after surgery.",
    href: "/for-patients/post-op",
    cta: "View Care Guide",
  },
]

const whatToExpect = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Comprehensive evaluation including 3D imaging, treatment planning, and discussion of your goals. This visit typically takes 60-90 minutes.",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description:
      "We\u2019ll create a customized treatment plan, review costs and financing options, and answer all your questions before moving forward.",
  },
  {
    step: 3,
    title: "Surgical Procedure",
    description:
      "Advanced surgical techniques with sedation options for your comfort. Most procedures are completed in a single appointment.",
  },
  {
    step: 4,
    title: "Recovery & Follow-Up",
    description:
      "Detailed post-operative care instructions and scheduled follow-up visits to monitor your healing and ensure optimal results.",
  },
]

const writtenTestimonials = [
  {
    name: "Robert T.",
    procedure: "Dental Implants",
    rating: 5,
    date: "October 2025",
    review:
      "Dr. Antipov is simply the best. I was nervous about getting implants, but he took the time to explain everything in detail and made sure I was comfortable. The surgery was painless, and the results exceeded my expectations. I can eat anything now without worry. Highly recommend!",
  },
  {
    name: "Jennifer S.",
    procedure: "Bone Grafting & Implants",
    rating: 5,
    date: "September 2025",
    review:
      "After being told by another dentist that I didn\u2019t have enough bone for implants, Dr. Antipov performed bone grafting and successfully placed my implants 6 months later. His expertise and patience throughout the process were remarkable. I\u2019m so grateful for his skill.",
  },
  {
    name: "David W.",
    procedure: "Full-Arch Restoration",
    rating: 5,
    date: "August 2025",
    review:
      "I lived with dentures for 10 years and hated every minute. Dr. Antipov gave me fixed teeth in one day with the All-on-4 procedure. The difference in my quality of life is incredible. I can eat steak again! His staff is wonderful, and he\u2019s a true professional.",
  },
  {
    name: "Lisa M.",
    procedure: "Wisdom Teeth Removal",
    rating: 5,
    date: "July 2025",
    review:
      "My daughter needed her wisdom teeth removed, and we were referred to Dr. Antipov. He made her feel so comfortable, and the recovery was much easier than we expected. Great with young patients. Would absolutely recommend to other parents.",
  },
  {
    name: "Michael P.",
    procedure: "Sleep Apnea Surgery",
    rating: 5,
    date: "June 2025",
    review:
      "I struggled with CPAP for years before Dr. Antipov performed jaw advancement surgery. It completely resolved my sleep apnea. I sleep through the night now, and my energy levels are amazing. This surgery changed my life, and I\u2019m so thankful I found Dr. Antipov.",
  },
  {
    name: "Patricia R.",
    procedure: "Corrective Jaw Surgery",
    rating: 5,
    date: "May 2025",
    review:
      "Dr. Antipov corrected my severe underbite with orthognathic surgery. Not only can I chew properly now, but my face looks so much more balanced. He\u2019s an artist as well as a surgeon. The care I received from him and his team was outstanding.",
  },
]

export default function ForPatientsPage() {
  return (
    <>
      <PageHero {...heroContent["/for-patients"]!} />

{/* Join Our Family of Happy Patients */}
      <Section background="gradient" padding="md">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="h-10 w-10 text-primary-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Join Our Family of Happy Patients
            </h2>
            <p className="text-lg text-neutral-600">
              Experience the same exceptional care and life-changing results our patients rave about
            </p>

            <GlassCard className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <p className="text-neutral-700 italic text-lg leading-relaxed">
                  &ldquo;Every patient is special to me, and I take the time to understand their unique needs and concerns.
                  My goal is not just to perform excellent surgery, but to create an experience where patients feel
                  heard, cared for, and confident in their treatment.&rdquo;
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Dr. Alexander Antipov</p>
                  <p className="text-sm text-neutral-600">Board-Certified Oral &amp; Maxillofacial Surgeon</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

            {/* Quick Access Resources */}
      <Section background="default" padding="md">
        <Container size="xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-3">
              Quick Access Resources
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to prepare for and recover from your oral surgery procedure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <GlassCard key={resource.href} className="text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={resource.href}>{resource.cta}</Link>
                  </Button>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="accent" padding="md">
        <Container size="lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-3">
              What to Expect
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your journey from consultation to recovery, step by step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatToExpect.map((item) => (
              <GlassCard key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

{/* Ready to Start Your Journey? */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-neutral-600">
              Schedule a consultation and experience the exceptional care our patients describe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-team">Learn About Dr. Antipov</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

            {/* Patient Reviews */}
      <Section background="default" padding="md" id="patient-reviews">
        <Container size="lg">
          <div className="text-center space-y-3 mb-10">
            <Quote className="h-10 w-10 text-primary-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Patient Reviews
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Read what patients have to say about their treatment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {writtenTestimonials.map((testimonial, index) => (
              <GlassCard key={index}>
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-accent-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{testimonial.review}</p>
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.procedure}</p>
                    <p className="text-xs text-neutral-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-neutral-600">
              Read more reviews on{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Google</a>,{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Yelp</a>, and{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Healthgrades</a>
            </p>
          </div>
        </Container>
      </Section>

      {/* Life-Changing Smiles (YouTube Shorts) */}
      <YouTubeShortsSection />

      {/* Have Questions? */}
      <Section background="default" padding="sm">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-3">
              Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              Find answers to common questions about procedures, recovery, insurance, and more
            </p>
            <Button size="lg" asChild variant="outline">
              <Link href="/for-patients/faqs">Browse FAQs</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Post-Operative Emergency? */}
      <Section background="gradient" padding="sm">
        <Container size="md">
          <GlassCard className="p-6 md:p-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-red-100 mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
              Post-Operative Emergency?
            </h2>
            <p className="text-neutral-700 mb-6">
              If you&rsquo;re experiencing a post-operative emergency outside of office hours, please call our
              24/7 emergency line.
            </p>
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              Emergency: (916) 783-2110
            </a>
            <p className="text-sm text-neutral-500 mt-4">
              For life-threatening emergencies, call 911 or go to the nearest emergency room
            </p>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
