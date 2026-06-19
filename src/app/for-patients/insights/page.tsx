import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Calendar, ArrowRight, Clock, User } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Patient Insights & Education | Dr. Antipov Oral Surgery",
  description:
    "Stay informed with expert insights on dental implants, oral surgery, and oral health from Dr. Alexander Antipov. Educational articles to help you make informed decisions.",
  alternates: {
    canonical: "/for-patients/insights",
    languages: {
      "en": "/for-patients/insights",
      "x-default": "/for-patients/insights",
    },
  },
  keywords: [
    "dental implants",
    "oral surgery education",
    "dental health",
    "patient education",
    "oral health insights",
    "dental implant care",
  ],
  openGraph: {
    title: "Patient Education — Insights & Articles",
    description: "Expert insights on dental implants, oral surgery, recovery, and oral health from Dr. Antipov.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Patient Education — Insights & Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Education — Insights & Articles",
    description: "Expert insights on dental implants, oral surgery, recovery, and oral health from Dr. Antipov.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

const blogPosts = [
  {
    slug: "dental-implant-procedure-complete-guide",
    title: "Dental Implant Procedure: Complete Step-by-Step Guide",
    excerpt: "Everything that happens during a dental implant procedure — from consultation and 3D scan through osseointegration, abutment, and final crown — with realistic timelines, pain expectations, and cost ranges.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/dental-implant-procedure.png",
    category: "Dental Implants",
    readTime: "10 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "bone-grafting-for-dental-implants-explained",
    title: "Bone Grafting for Dental Implants Explained",
    excerpt: "Who needs bone grafting, the types of grafts (autograft, allograft, xenograft, synthetic), the healing timeline, risks, and how grafting rebuilds the foundation for a lasting implant.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/bone-grafting.png",
    category: "Dental Implants",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "understanding-sinus-lift-for-dental-implants",
    title: "Understanding Sinus Lift for Dental Implants",
    excerpt: "What a sinus lift is, when upper-jaw implant cases need one, how the procedure is performed, recovery expectations, and how it makes implants possible where bone height is limited.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/sinus-lift.png",
    category: "Dental Implants",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
    title: "Zygomatic Implants vs Bone Grafting for Severe Bone Loss",
    excerpt: "For severe upper-jaw bone loss, compare zygomatic implants and staged bone grafting on timeline, recovery, cost, and candidacy — so you understand which path fits your anatomy.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/zygomatic-vs-grafting.png",
    category: "Dental Implants",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-dental-implants-when-traditional-implants-not-possible",
    title: "Zygomatic Dental Implants: When Traditional Implants Are Not Possible",
    excerpt: "When there is too little upper-jaw bone for conventional implants, zygomatic implants anchor in the cheekbone instead. When this advanced technique is needed and what to expect.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/zygomatic-when-impossible.png",
    category: "Dental Implants",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implants-after-tooth-extraction-timing-healing-and-options",
    title: "Dental Implants After Tooth Extraction: Timing, Healing, and Options",
    excerpt: "Immediate, early, or delayed placement after an extraction — how timing affects bone preservation, the healing steps involved, and when same-day implants help prevent bone loss.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/implants-after-extraction.png",
    category: "Dental Implants",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    title: "Guided Dental Implant Surgery: How 3D Planning Improves Accuracy",
    excerpt: "How 3D CBCT scans and custom surgical guides translate digital planning into precise, predictable implant placement — and what that accuracy means for safety and outcomes.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/guided-implant-surgery.png",
    category: "Dental Implants",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "sedation-options-dental-implant-surgery",
    title: "Sedation Options for Dental Implant Surgery Explained",
    excerpt: "Local anesthesia, oral sedation, IV sedation, and general anesthesia compared — how each feels, what they are best suited for, and how to choose the right comfort level for your procedure.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/sedation-options.png",
    category: "Oral Surgery",
    readTime: "5 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "what-is-an-oral-surgeon-and-what-do-they-do",
    title: "What Is an Oral Surgeon and What Do They Do?",
    excerpt: "An oral & maxillofacial surgeon is a dental specialist with years of additional surgical training. What they treat, how they are trained, and when you should see one instead of a general dentist.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/what-is-oral-surgeon.png",
    category: "Oral Surgery",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "severe-overbite-when-jaw-surgery-is-needed",
    title: "Severe Overbite: When Jaw Surgery Is Needed",
    excerpt: "Most overbites are corrected with braces or aligners, but severe skeletal overbites need orthognathic (jaw) surgery. How to tell which applies to you and what the surgical path involves.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/severe-overbite-jaw-surgery.png",
    category: "Jaw Surgery",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "full-mouth-dental-implants-cost-process",
    title: "Full Mouth Dental Implants in Roseville & Sacramento: Cost, Process, and What to Expect",
    excerpt: "A complete guide to full mouth dental implants in the Sacramento region — All-on-4, the step-by-step process, honest cost ranges, candidacy, and what separates a lasting result from a failure.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/full-mouth-dental-implants.png",
    category: "Dental Implants",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "all-on-4-vs-all-on-6",
    title: "All-on-4 vs All-on-6: Which Is Better?",
    excerpt: "Implant count, bone density needs, cost, recovery time, and stability compared — so you can understand which full-arch approach actually fits your anatomy and goals.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/all-on-4-vs-all-on-6.png",
    category: "Dental Implants",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "all-on-x-dental-implants-cost",
    title: "All-on-X Dental Implants Cost Explained: 4, 6, or 8 Implants?",
    excerpt: "What All-on-X really means, how cost changes between 4, 6, and 8 implants per arch, what belongs in an honest quote, and how to decide what your case actually needs.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/all-on-x-cost.png",
    category: "Dental Implants",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zirconia-arches",
    title: "What Are Zirconia Arches? Benefits, Cost & Lifespan",
    excerpt: "Zirconia arches are the gold standard for full-arch dental implants. How they're made, why they last 15–20+ years, what they cost, and how they compare to acrylic and PFM.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/zirconia-arches.png",
    category: "Dental Implants",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "hybrid-dentures-vs-fixed-implant-bridges",
    title: "Hybrid Dentures vs Fixed Implant Bridges",
    excerpt: "Choosing a full-arch restoration? Compare implant-retained hybrid dentures and fixed implant bridges by feel, cost, maintenance, and longevity to find the right fit.",
    date: "June 19, 2026",
    image: "/images/blog/2026-06-19/hybrid-vs-fixed.png",
    category: "Dental Implants",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-implants",
    title: "Zygomatic Implants: When You Need Them and How They Work",
    excerpt: "If you have been told that conventional dental implants are not possible because there is not enough bone in your upper jaw, zygomatic implants may be the solution. Learn how the procedure works, who qualifies, what the timeline looks like, and how cost compares to staged bone grafting.",
    date: "April 28, 2026",
    image: "/images/blog/2026-04-28/zygomatic-implants.jpg",
    category: "Dental Implants",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "same-day-implants",
    title: "Same-Day Dental Implants (Immediate Load) — Myth or Reality?",
    excerpt: "“Same-day implants” and “teeth in a day” are advertising lines every patient sees. Here is what you actually get the day of surgery, why the final prosthesis comes 4–6 months later, who qualifies for immediate loading, and what an honest surgeon will tell you about the risks.",
    date: "April 28, 2026",
    image: "/images/blog/2026-04-28/same-day-implants.jpg",
    category: "Dental Implants",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "implants-vs-dentures",
    title: "Say Goodbye to Dentures: Discover the Cutting-Edge Dental Implants of 2026",
    excerpt: "Dental implants have come a long way since their introduction in the 1960s. Explore the latest innovations in dental implant technology including 3D printing, nanotechnology, smart implants, and more.",
    date: "August 13, 2024",
    image: "/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg",
    category: "Dental Implants",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "tooth-lost-emotional-toll",
    title: "The Hidden Emotional Toll of Tooth Loss: Understanding Patient Struggles",
    excerpt: "Losing a tooth is more than just a physical change. Discover how tooth loss affects self-esteem, social interactions, and mental health, and learn about coping strategies and treatment options.",
    date: "August 9, 2024",
    image: "/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg",
    category: "Patient Care",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "poor-oral-health-systemic-diseases",
    title: "The Hidden Link: How Poor Oral Health Can Lead to Cancer and Systemic Diseases",
    excerpt: "Oral health is often overlooked in the grand scheme of overall wellness. Learn about the connection between oral bacteria and systemic diseases including cancer, cardiovascular disease, and diabetes.",
    date: "August 8, 2024",
    image: "/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg",
    category: "Oral Health",
    readTime: "9 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implant-complications",
    title: "Dental Implant Complications: Understanding Risks and How to Manage Them",
    excerpt: "While dental implants are generally safe, it's important to understand potential complications. Learn about infection, implant failure, nerve damage, and how to prevent these issues.",
    date: "April 14, 2023",
    image: "/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg",
    category: "Dental Implants",
    readTime: "10 min read",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implant-aftercare",
    title: "Dental Implant Aftercare: Tips for a Successful Recovery",
    excerpt: "Proper aftercare is essential for successful dental implant healing. Discover expert tips for post-operative care, oral hygiene, diet recommendations, and what to expect during recovery.",
    date: "April 13, 2023",
    image: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
    category: "Patient Care",
    readTime: "8 min read",
    author: "Dr. Alexander V. Antipov",
  },
]

export default function InsightsPage() {
  return (
    <>
      <PageHero {...heroContent["/for-patients/insights"]!} />

      {/* Blog Posts Grid */}
      <Section background="default" padding="xl">
        <Container size="xl">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-full min-h-[250px] bg-neutral-200 rounded-[40px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <Badge variant="outline" className="text-primary-700 border-primary-300">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-neutral-700 leading-relaxed">{post.excerpt}</p>
                    </div>

                    <div className="mt-6">
                      <Button asChild variant="outline" className="group">
                        <Link href={`/for-patients/insights/${post.slug}`}>
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Have Questions About Your Oral Health?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation with Dr. Antipov to discuss your specific needs and treatment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
