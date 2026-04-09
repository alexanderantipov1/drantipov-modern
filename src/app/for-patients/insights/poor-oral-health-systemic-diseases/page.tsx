import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Poor Oral Health Can Lead to Cancer and Systemic Diseases | Dr. Antipov",
  description:
    "Discover the hidden connection between oral health and systemic diseases including cancer, cardiovascular disease, and diabetes. Learn prevention strategies.",
  keywords: [
    "oral health systemic disease",
    "oral bacteria cancer",
    "oral health cardiovascular",
    "oral health diabetes",
    "preventive dental care",
    "oral systemic connection",
  ],
}

export default function PoorOralHealthSystemicDiseasesPost() {
  return (
    <>
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Oral Health</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>August 8, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              The Hidden Link: How Poor Oral Health Can Lead to Cancer and Systemic Diseases
            </h1>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg"
                alt="Connection between oral health and systemic diseases"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-amber-50 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Important Health Connection</h3>
                    <p className="text-neutral-700">
                      Oral health is often overlooked in the grand scheme of overall wellness, but emerging research
                      reveals a profound connection between the health of your mouth and the health of your entire
                      body.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Understanding the Oral-Systemic Connection
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Your mouth is home to billions of bacteria, most of which are harmless. However, when oral hygiene is
                neglected, harmful bacteria can multiply and cause inflammation in the gums. This inflammation can allow
                bacteria to enter the bloodstream, potentially affecting other parts of your body.
              </p>

              <blockquote className="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-neutral-700">
                "Both dentists and physicians can benefit from being more familiar with the oral manifestations of
                systemic disease and the oral diseases that influence systemic health." - Dr. Jennifer Webster-Cyriaque
              </blockquote>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Cancer Connection
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Recent studies have uncovered alarming links between poor oral health and various types of cancer:
              </p>

              <div className="space-y-6 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Colorectal Cancer</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Research has identified a specific oral bacterium, Fusobacterium nucleatum, that has been found in
                    colorectal tumors. This bacterium, commonly associated with gum disease, may play a role in tumor
                    development and progression.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Pancreatic Cancer</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Studies have shown that individuals with periodontal disease have a higher risk of developing
                    pancreatic cancer. The chronic inflammation associated with gum disease may contribute to this
                    increased risk.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Head and Neck Cancer</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Poor oral hygiene and chronic inflammation in the mouth create an environment that may increase
                    susceptibility to cancers of the mouth, throat, and neck.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Other Systemic Diseases Linked to Oral Health
              </h2>

              <div className="space-y-8 my-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Cardiovascular Disease</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    The connection between gum disease and heart disease is well-established. Bacteria from infected
                    gums can enter the bloodstream and contribute to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-700">• Atherosclerosis (hardening of arteries)</li>
                    <li className="text-neutral-700">• Increased risk of heart attack</li>
                    <li className="text-neutral-700">• Higher likelihood of stroke</li>
                    <li className="text-neutral-700">• Endocarditis (infection of heart's inner lining)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Diabetes</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The relationship between diabetes and oral health is bidirectional. Diabetes makes individuals more
                    susceptible to gum disease, while severe gum disease can make it harder to control blood sugar
                    levels, creating a dangerous cycle.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Respiratory Infections</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Bacteria from periodontal disease can be aspirated into the lungs, potentially causing respiratory
                    infections, pneumonia, and exacerbating chronic conditions like COPD.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Pregnancy Complications</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Pregnant women with gum disease face increased risks of premature birth, low birth weight babies,
                    and preeclampsia.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Role of Chronic Inflammation
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The common thread linking oral health to systemic diseases is chronic inflammation. When gums are
                inflamed due to bacterial infection, inflammatory markers increase throughout the body. This systemic
                inflammation can trigger or worsen various health conditions.
              </p>

              <blockquote className="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-neutral-700">
                "Cancer treatment can cause or exacerbate problems in the mouth, and oral health problems can make
                cancer treatment more difficult." - Dr. Xi Chen
              </blockquote>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Startling Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">3.5B</div>
                  <p className="text-neutral-700">People globally affected by oral diseases</p>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
                  <p className="text-neutral-700">Of oral health conditions are preventable</p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Prevention is Key</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The good news is that most oral health problems are preventable. Here's how to protect both your oral
                and overall health:
              </p>

              <div className="space-y-4 my-8">
                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Maintain Excellent Oral Hygiene</h4>
                  <p className="text-neutral-700">
                    Brush twice daily, floss daily, and use an antimicrobial mouthwash to reduce harmful bacteria.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Regular Dental Check-ups</h4>
                  <p className="text-neutral-700">
                    Schedule professional cleanings and examinations at least twice a year to catch problems early.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Don't Ignore Warning Signs</h4>
                  <p className="text-neutral-700">
                    Bleeding gums, persistent bad breath, and loose teeth are red flags that require immediate
                    attention.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Manage Chronic Conditions</h4>
                  <p className="text-neutral-700">
                    If you have diabetes or other chronic diseases, work closely with both your physician and dentist.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Healthy Lifestyle Choices</h4>
                  <p className="text-neutral-700">
                    Avoid tobacco, limit alcohol, eat a balanced diet, and manage stress to support overall health.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Conclusion</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Your oral health is a window into your overall health. By maintaining good oral hygiene and seeking
                regular dental care, you're not just protecting your smile—you're safeguarding your entire body against
                serious diseases. Don't wait until problems arise; take proactive steps today to ensure a healthier
                tomorrow.
              </p>
            </div>

            {/* Author Info */}
            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-primary-700">DA</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Dr. Alexander V. Antipov</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Board-certified oral and maxillofacial surgeon dedicated to comprehensive patient care and education
                    about the connection between oral and systemic health.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Protect Your Overall Health with Better Oral Care
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a comprehensive oral health evaluation today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Our Office</Link>
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
