import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import { AlertTriangle } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata = {
  title: "Medical Disclaimer | Dr. Antipov",
  description:
    "Medical disclaimer for Dr. Alexander Antipov's website. Important information about the content provided on this website.",
  robots: "noindex, nofollow",
}

export default function MedicalDisclaimerPage() {
  const lastUpdated = "October 12, 2025"

  return (
    <>
      <PageHero {...heroContent["/legal/medical-disclaimer"]!} />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Important Notice */}
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Important Notice
                </h2>
                <p className="text-amber-900 font-medium leading-relaxed">
                  The information provided on this website is for general informational and educational
                  purposes only. It is NOT intended to be a substitute for professional medical advice,
                  diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare
                  provider with any questions regarding a medical condition.
                </p>
              </div>

              {/* Not Medical Advice */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Not Medical Advice
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The content on this website, including text, graphics, images, videos, and other materials
                  ("Content"), is provided for informational purposes only and does not constitute medical
                  advice, diagnosis, or treatment recommendations.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The Content is not intended to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Replace a one-on-one relationship with a qualified healthcare professional</li>
                  <li>Serve as medical advice, diagnosis, or treatment</li>
                  <li>Address individual medical conditions or circumstances</li>
                  <li>Recommend specific treatment protocols without proper examination</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>
                    Never disregard professional medical advice or delay seeking it because of something you
                    have read on this website.
                  </strong>
                </p>
              </div>

              {/* No Doctor-Patient Relationship */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. No Doctor-Patient Relationship
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Use of this website, including submitting a consultation request form or contacting us via
                  email, does NOT create a doctor-patient relationship between you and Dr. Alexander Antipov.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  A doctor-patient relationship is established only when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>You schedule and attend an in-person consultation</li>
                  <li>Dr. Antipov performs a clinical examination</li>
                  <li>A formal treatment plan is discussed and agreed upon</li>
                  <li>You sign appropriate consent forms</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Communication through this website is NOT confidential and should not be considered as
                  establishing a privileged doctor-patient relationship.
                </p>
              </div>

              {/* Consult Qualified Provider */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Consult a Qualified Healthcare Provider
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Before making any decisions about your health or treatment:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Consult with a qualified oral surgeon or healthcare provider</strong> who can
                    evaluate your individual medical history and current condition
                  </li>
                  <li>
                    <strong>Obtain a comprehensive examination</strong> including appropriate diagnostic
                    imaging (x-rays, CBCT scans, etc.)
                  </li>
                  <li>
                    <strong>Discuss all treatment options, risks, and benefits</strong> specific to your
                    situation
                  </li>
                  <li>
                    <strong>Ask questions</strong> until you fully understand your condition and proposed
                    treatment
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-sm text-red-900 font-medium">
                    <strong>Medical Emergency:</strong> If you are experiencing a medical emergency, call 911
                    immediately. Do not rely on information from this website in emergency situations.
                  </p>
                </div>
              </div>

              {/* Accuracy of Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Accuracy and Currency of Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  While we strive to provide accurate, up-to-date information, we make no representations or
                  warranties regarding:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>The accuracy, completeness, or timeliness of the Content</li>
                  <li>The suitability of procedures or treatments for any individual</li>
                  <li>The results or outcomes of any procedure</li>
                  <li>The availability of specific treatments or technologies</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Medical knowledge and best practices evolve constantly. Information that was accurate at the
                  time of publication may become outdated. We reserve the right to update or remove Content
                  without notice.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>
                    Always verify information with your healthcare provider and consult current medical
                    literature.
                  </strong>
                </p>
              </div>

              {/* Individual Results Vary */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Individual Results May Vary
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Every patient is unique. Factors that may affect treatment outcomes include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Age, overall health, and medical history</li>
                  <li>Bone density and jaw anatomy</li>
                  <li>Healing capacity and immune function</li>
                  <li>Oral hygiene and compliance with post-operative instructions</li>
                  <li>Lifestyle factors (smoking, diabetes, medications, etc.)</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Results discussed on this website are not guaranteed</strong> and do not constitute
                  a warranty or prediction of your individual outcome. Your results may differ significantly.
                </p>
              </div>

              {/* Testimonials Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Testimonials Disclaimer
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Patient testimonials and reviews on this website reflect individual experiences and
                  opinions. They should not be interpreted as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Guarantees or predictions of results for other patients</li>
                  <li>Medical advice or treatment recommendations</li>
                  <li>Claims about the efficacy of specific procedures</li>
                  <li>Typical or average outcomes</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Testimonials represent the subjective views of patients and may not reflect the experience
                  of all patients. Some testimonials may have been edited for clarity, grammar, or length, but
                  not for content.
                </p>
              </div>

              {/* Before/After Photos */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Before and After Photos Disclaimer
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Before and after photos (if presented) are provided for illustrative purposes only. These
                  photos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Represent specific patient cases and may not be typical results</li>
                  <li>Do not constitute a guarantee or warranty of similar outcomes</li>
                  <li>May not reflect the full range of possible results or complications</li>
                  <li>Should not be used to make treatment decisions without consultation</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Photos are the property of Dr. Alexander Antipov and patients have consented to their use.
                  Unauthorized reproduction is prohibited.
                </p>
              </div>

              {/* External Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  8. External Links and Third-Party Content
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This website may contain links to external websites or third-party content. We do not
                  endorse, control, or assume responsibility for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>The accuracy or reliability of information on third-party sites</li>
                  <li>The privacy practices of external websites</li>
                  <li>Products, services, or treatments advertised elsewhere</li>
                  <li>Opinions or advice provided by third parties</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  External links are provided for convenience only. Use of third-party websites is at your own
                  risk.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  To the maximum extent permitted by law, Dr. Alexander Antipov and his practice shall not be
                  liable for any damages, losses, or adverse outcomes resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Reliance on information provided on this website</li>
                  <li>Decisions made based on website Content</li>
                  <li>Delays in seeking medical treatment due to website information</li>
                  <li>Errors, omissions, or inaccuracies in the Content</li>
                  <li>Use of or inability to use this website</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  10. Questions or Concerns
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you have questions about this Medical Disclaimer or the information on our website,
                  please contact us to schedule a consultation:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <p className="text-neutral-900 font-semibold mb-2">{siteConfig.name}</p>
                  <p className="text-neutral-700 mb-1">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  <p className="text-neutral-700 mb-3">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                  <p className="text-neutral-700 mb-1">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="text-neutral-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Final Notice */}
              <div className="bg-primary-50 border-2 border-primary-500 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  By Using This Website
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  By accessing and using this website, you acknowledge that you have read, understood, and
                  agree to be bound by this Medical Disclaimer. If you do not agree with any part of this
                  disclaimer, please do not use this website.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
