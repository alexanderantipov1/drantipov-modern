import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock, ShieldAlert } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Implant Complications: Understanding Risks and Management | Dr. Antipov",
  description:
    "Learn about potential dental implant complications including infection, implant failure, and nerve damage. Understand risks and prevention strategies.",
  keywords: [
    "dental implant complications",
    "implant failure",
    "dental implant infection",
    "implant risks",
    "dental implant safety",
    "implant success rate",
  ],
}

export default function DentalImplantComplicationsPost() {
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Dental Implants</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>April 14, 2023</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Dental Implant Complications: Understanding Risks and How to Manage Them
            </h1>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg"
                alt="Understanding dental implant complications and risks"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Important Information</h3>
                    <p className="text-neutral-700">
                      Dental implants have an excellent success rate of over 95%, but like any surgical procedure, they
                      carry some risks. Understanding potential complications helps you make informed decisions and
                      recognize warning signs early.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                9 Possible Dental Implant Complications
              </h2>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">1. Infection</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Infections can occur at the implant site if bacteria enter during or after surgery. Signs include:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Persistent pain or swelling</li>
                    <li className="text-neutral-700">• Fever or chills</li>
                    <li className="text-neutral-700">• Pus or unusual discharge</li>
                    <li className="text-neutral-700">• Red or inflamed gums</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Prevention:</strong> Maintain excellent oral hygiene, follow post-operative instructions
                    carefully, and take prescribed antibiotics as directed.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">2. Implant Failure</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    While rare, implants can fail to integrate with the bone (osseointegration failure). This can happen
                    due to:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Insufficient bone density</li>
                    <li className="text-neutral-700">• Smoking or tobacco use</li>
                    <li className="text-neutral-700">• Uncontrolled diabetes</li>
                    <li className="text-neutral-700">• Autoimmune disorders</li>
                    <li className="text-neutral-700">• Poor oral hygiene</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Management:</strong> If an implant fails, it can typically be removed and replaced after the
                    site heals, often with bone grafting to improve success.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">3. Nerve Damage</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    In rare cases, an implant may be placed too close to a nerve, causing:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Numbness or tingling in lips, tongue, or chin</li>
                    <li className="text-neutral-700">• Pain or altered sensation</li>
                    <li className="text-neutral-700">• Temporary or permanent nerve injury</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Prevention:</strong> Advanced 3D imaging and careful surgical planning minimize this risk.
                    An experienced surgeon uses precise techniques to avoid nerve pathways.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">4. Sinus Complications</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    When implants are placed in the upper jaw, there's a risk of them protruding into the sinus cavity,
                    potentially causing:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Sinus infections</li>
                    <li className="text-neutral-700">• Sinus pain or pressure</li>
                    <li className="text-neutral-700">• Chronic sinusitis</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Prevention:</strong> Sinus lift procedures can be performed to create adequate space before
                    implant placement. Proper planning with CT scans ensures safe placement.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">5. Gum Recession</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    The gum tissue around an implant may recede over time, potentially exposing the metal implant post.
                    This can be caused by:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Poor oral hygiene</li>
                    <li className="text-neutral-700">• Periodontal disease</li>
                    <li className="text-neutral-700">• Insufficient attached gingiva</li>
                    <li className="text-neutral-700">• Trauma or excessive force</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Management:</strong> Soft tissue grafting can restore gum coverage and improve aesthetics.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">6. Bite Alignment Issues</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    If an implant crown isn't properly aligned with your bite, it can cause:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Jaw pain or TMJ problems</li>
                    <li className="text-neutral-700">• Difficulty chewing</li>
                    <li className="text-neutral-700">• Excessive wear on opposing teeth</li>
                    <li className="text-neutral-700">• Loosening of the crown or implant</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Prevention:</strong> Careful planning and proper crown fabrication ensure correct bite
                    alignment. Regular follow-ups allow for adjustments if needed.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">7. Allergic Reactions</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    While extremely rare, some patients may have allergic reactions to titanium or other implant
                    materials. Symptoms can include:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Chronic inflammation</li>
                    <li className="text-neutral-700">• Rash or hives</li>
                    <li className="text-neutral-700">• Implant failure</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Solution:</strong> Alternative materials like zirconia implants are available for patients
                    with metal sensitivities.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">8. Systemic Health Complications</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Certain medical conditions can affect implant success:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Uncontrolled diabetes</li>
                    <li className="text-neutral-700">• Osteoporosis or bone disorders</li>
                    <li className="text-neutral-700">• Autoimmune diseases</li>
                    <li className="text-neutral-700">• Cancer or radiation therapy</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Important:</strong> Discuss all medical conditions and medications with your surgeon during
                    consultation. Many conditions can be managed to allow successful implant treatment.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">9. Psychological Considerations</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Some patients experience anxiety or stress related to:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Fear of complications</li>
                    <li className="text-neutral-700">• Concerns about appearance during healing</li>
                    <li className="text-neutral-700">• Financial stress</li>
                    <li className="text-neutral-700">• Recovery time expectations</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Support:</strong> Open communication with your dental team is essential. We're here to
                    address your concerns and provide emotional support throughout your journey.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Minimizing Your Risk
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                While complications can occur, most are preventable or manageable with proper care:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Choose an Experienced Surgeon</h4>
                    <p className="text-neutral-700">
                      Board-certified oral surgeons have extensive training in implant placement and complication
                      management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Follow Pre-Op Instructions</h4>
                    <p className="text-neutral-700">
                      Proper preparation, including any necessary medical clearances, sets the stage for success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Maintain Excellent Oral Hygiene</h4>
                    <p className="text-neutral-700">
                      Good oral care before and after surgery reduces infection risk and promotes healing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Avoid Smoking</h4>
                    <p className="text-neutral-700">
                      Smoking significantly increases complication rates. Quitting before surgery greatly improves
                      outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Attend All Follow-Up Appointments</h4>
                    <p className="text-neutral-700">
                      Regular monitoring allows early detection and treatment of any issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Communicate Openly</h4>
                    <p className="text-neutral-700">
                      Report any unusual symptoms immediately. Early intervention can prevent minor issues from becoming
                      major problems.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">The Bottom Line</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Dental implants remain one of the most successful and predictable procedures in dentistry, with success
                rates exceeding 95%. While it's important to be aware of potential complications, understanding risks
                shouldn't deter you from pursuing this life-changing treatment. With an experienced surgeon, proper
                planning, and diligent aftercare, most patients enjoy successful outcomes and improved quality of life
                for decades to come.
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
                    Board-certified oral and maxillofacial surgeon with extensive experience in dental implant
                    placement. Located in Roseville, CA, serving the Greater Sacramento area.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Have Questions About Dental Implants?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation to discuss your specific situation and learn about minimizing risks
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/expertise/full-arch-implants">Learn About Our Implant Solutions</Link>
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
