import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Patient Insights & Education | Dr. Antipov Oral Surgery",
  description:
    "Stay informed with expert insights on dental implants, oral surgery, and oral health from Dr. Alexander Antipov. Educational articles to help you make informed decisions.",
  keywords: [
    "dental implants",
    "oral surgery education",
    "dental health",
    "patient education",
    "oral health insights",
    "dental implant care",
  ],
}

const blogPosts = [
  {
    slug: "implants-vs-dentures",
    title: "Say Goodbye to Dentures: Discover the Cutting-Edge Dental Implants of 2024",
    excerpt: "Dental implants have come a long way since their introduction in the 1960s. Explore the latest innovations in dental implant technology including 3D printing, nanotechnology, smart implants, and more.",
    date: "August 13, 2024",
    image: "/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg",
    category: "Dental Implants",
  },
  {
    slug: "tooth-lost-emotional-toll",
    title: "The Hidden Emotional Toll of Tooth Loss: Understanding Patient Struggles",
    excerpt: "Losing a tooth is more than just a physical change. Discover how tooth loss affects self-esteem, social interactions, and mental health, and learn about coping strategies and treatment options.",
    date: "August 9, 2024",
    image: "/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg",
    category: "Patient Care",
  },
  {
    slug: "poor-oral-health-systemic-diseases",
    title: "The Hidden Link: How Poor Oral Health Can Lead to Cancer and Systemic Diseases",
    excerpt: "Oral health is often overlooked in the grand scheme of overall wellness. Learn about the connection between oral bacteria and systemic diseases including cancer, cardiovascular disease, and diabetes.",
    date: "August 8, 2024",
    image: "/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg",
    category: "Oral Health",
  },
  {
    slug: "dental-implant-complications",
    title: "Dental Implant Complications: Understanding Risks and How to Manage Them",
    excerpt: "While dental implants are generally safe, it's important to understand potential complications. Learn about infection, implant failure, nerve damage, and how to prevent these issues.",
    date: "April 14, 2023",
    image: "/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg",
    category: "Dental Implants",
  },
  {
    slug: "dental-implant-aftercare",
    title: "Dental Implant Aftercare: Tips for a Successful Recovery",
    excerpt: "Proper aftercare is essential for successful dental implant healing. Discover expert tips for post-operative care, oral hygiene, diet recommendations, and what to expect during recovery.",
    date: "April 13, 2023",
    image: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
    category: "Patient Care",
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
