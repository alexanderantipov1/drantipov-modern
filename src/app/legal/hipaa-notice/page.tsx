import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import { Shield, Info } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata = {
  title: "HIPAA Notice of Privacy Practices | Dr. Antipov",
  description:
    "HIPAA Notice of Privacy Practices for Dr. Alexander Antipov's practice. Learn how we protect your health information.",
  robots: "noindex, nofollow",
}

export default function HIPAANoticePage() {
  const effectiveDate = "October 12, 2025"

  return (
    <>
      <PageHero {...heroContent["/legal/hipaa-notice"]!} />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Important Website Notice */}
              <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="h-6 w-6" />
                  Important: This Website Does NOT Collect Protected Health Information
                </h2>
                <p className="text-blue-900 font-medium leading-relaxed mb-3">
                  This website is for informational and consultation request purposes only. We do NOT collect
                  Protected Health Information (PHI) through this website.
                </p>
                <p className="text-blue-900 leading-relaxed">
                  <strong>Do not submit:</strong> Medical records, diagnosis information, treatment history,
                  insurance details, or other sensitive health information through our website forms. These
                  forms are only for scheduling consultations and general inquiries.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Table of Contents</h2>
                <ol className="space-y-2 list-decimal list-inside text-neutral-700">
                  <li>
                    <a href="#overview" className="text-primary-600 hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#uses-disclosures" className="text-primary-600 hover:underline">
                      How We Use and Disclose PHI
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="text-primary-600 hover:underline">
                      Your Rights Regarding Your Health Information
                    </a>
                  </li>
                  <li>
                    <a href="#our-responsibilities" className="text-primary-600 hover:underline">
                      Our Legal Duties and Responsibilities
                    </a>
                  </li>
                  <li>
                    <a href="#changes" className="text-primary-600 hover:underline">
                      Changes to This Notice
                    </a>
                  </li>
                  <li>
                    <a href="#complaints" className="text-primary-600 hover:underline">
                      Complaints
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Contact Information
                    </a>
                  </li>
                </ol>
              </div>

              {/* Overview */}
              <div id="overview" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Overview</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This Notice of Privacy Practices describes how medical information about you may be used and
                  disclosed by our practice and how you can get access to this information.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>Please review this notice carefully.</strong> We are required by law to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Maintain the privacy of Protected Health Information (PHI)</li>
                  <li>Provide you with this notice of our legal duties and privacy practices</li>
                  <li>Follow the terms of the notice currently in effect</li>
                  <li>Notify you following a breach of unsecured PHI</li>
                </ul>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    What is Protected Health Information (PHI)?
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    PHI includes information in your medical record that could identify you, such as your
                    name, address, medical history, treatment records, diagnoses, test results, and billing
                    information. This notice applies to all records of your care created by our practice.
                  </p>
                </div>
              </div>

              {/* Uses and Disclosures */}
              <div id="uses-disclosures" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. How We May Use and Disclose Your Health Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We will use and disclose your PHI only as permitted by law. The following categories
                  describe the ways we may use and disclose your information.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.1 Treatment</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We will use and disclose your PHI to provide, coordinate, and manage your healthcare and
                  related services. For example:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    Sharing information with your referring dentist about your surgery and post-operative care
                  </li>
                  <li>Consulting with specialists about your treatment plan</li>
                  <li>Coordinating lab work, imaging, or pathology services</li>
                  <li>Providing information to anesthesiologists for sedation procedures</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.2 Payment</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may use and disclose your PHI to obtain payment for services. For example:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Submitting claims to your insurance company</li>
                  <li>Verifying insurance coverage and benefits</li>
                  <li>Obtaining pre-authorization for procedures</li>
                  <li>Responding to insurance audits or requests for documentation</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.3 Healthcare Operations</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may use and disclose your PHI for healthcare operations, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Quality improvement and patient safety activities</li>
                  <li>Staff training and education</li>
                  <li>Business planning and management</li>
                  <li>Compliance and accreditation programs</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  2.4 Other Permitted Uses and Disclosures (Without Your Authorization)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may use or disclose your PHI without your written authorization in the following
                  situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>As required by law:</strong> When required by federal, state, or local law
                  </li>
                  <li>
                    <strong>Public health activities:</strong> To prevent or control disease, injury, or
                    disability
                  </li>
                  <li>
                    <strong>Health oversight activities:</strong> For audits, investigations, inspections, or
                    licensure
                  </li>
                  <li>
                    <strong>Judicial and administrative proceedings:</strong> In response to court orders or
                    subpoenas
                  </li>
                  <li>
                    <strong>Law enforcement:</strong> When required by law enforcement officials
                  </li>
                  <li>
                    <strong>Serious threats:</strong> To avert a serious threat to health or safety
                  </li>
                  <li>
                    <strong>Workers' compensation:</strong> As authorized by workers' compensation laws
                  </li>
                  <li>
                    <strong>Coroners and medical examiners:</strong> For identification or cause of death
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  2.5 Uses and Disclosures Requiring Your Authorization
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We will obtain your written authorization for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Marketing purposes:</strong> Any marketing communications (we do not currently
                    engage in marketing)
                  </li>
                  <li>
                    <strong>Sale of PHI:</strong> Disclosure for remuneration (we do not sell PHI)
                  </li>
                  <li>
                    <strong>Psychotherapy notes:</strong> If applicable
                  </li>
                  <li>
                    <strong>Other uses:</strong> Any use or disclosure not described in this notice
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  You may revoke any authorization in writing at any time. However, we cannot take back
                  disclosures already made with your authorization.
                </p>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Your Rights Regarding Your Health Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You have the following rights regarding your PHI:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.1 Right to Access</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You have the right to inspect and obtain a copy of your health records. Requests must be
                  made in writing. We may charge a reasonable fee for copying and mailing costs.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.2 Right to Amend</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you believe your health information is incorrect or incomplete, you may request an
                  amendment. We may deny your request in certain situations, but we will provide you with a
                  written explanation.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.3 Right to an Accounting</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You have the right to request an "accounting of disclosures" - a list of certain disclosures
                  we have made of your PHI. This does not include disclosures for treatment, payment, or
                  healthcare operations.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.4 Right to Request Restrictions
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You may request restrictions on how we use or disclose your PHI. We are not required to
                  agree to your request except in specific situations involving payment to health plans.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.5 Right to Confidential Communications
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You have the right to request that we communicate with you about your health information in
                  a specific way or at a specific location. We will accommodate reasonable requests.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.6 Right to a Paper Copy of This Notice
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  You have the right to obtain a paper copy of this notice at any time, even if you have
                  agreed to receive it electronically. Contact our office to request a copy.
                </p>
              </div>

              {/* Our Responsibilities */}
              <div id="our-responsibilities" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Our Legal Duties and Responsibilities
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">We are required by law to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Maintain the privacy and security of your PHI</li>
                  <li>Provide this notice of our privacy practices</li>
                  <li>Follow the terms of the notice currently in effect</li>
                  <li>
                    Notify you promptly if a breach occurs that may have compromised the privacy or security
                    of your information
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">We will not:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Use or disclose your information without authorization except as described in this notice</li>
                  <li>Sell your PHI</li>
                  <li>Use or disclose PHI for marketing purposes without your authorization</li>
                  <li>Share your information with unauthorized parties</li>
                </ul>
              </div>

              {/* Changes */}
              <div id="changes" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Changes to This Notice
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We reserve the right to change this notice at any time and to make the revised notice
                  effective for all PHI we maintain. If we make material changes, we will:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Post the revised notice in our office</li>
                  <li>Make copies available upon request</li>
                  <li>Post the current notice on our website</li>
                </ul>
              </div>

              {/* Complaints */}
              <div id="complaints" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">6. Complaints</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you believe your privacy rights have been violated, you may file a complaint with:
                </p>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Our Practice</h3>
                  <p className="text-neutral-700 mb-2">{siteConfig.name}</p>
                  <p className="text-neutral-700 mb-1">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  <p className="text-neutral-700 mb-2">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                  <p className="text-neutral-700">
                    Email:{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    U.S. Department of Health and Human Services
                  </h3>
                  <p className="text-neutral-700 mb-2">Office for Civil Rights</p>
                  <p className="text-neutral-700 mb-2">
                    Website:{" "}
                    <a
                      href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      www.hhs.gov/ocr/privacy/hipaa/complaints/
                    </a>
                  </p>
                  <p className="text-neutral-700">Phone: 1-877-696-6775</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-sm text-green-900 font-medium">
                    <strong>No Retaliation:</strong> You will not be penalized or retaliated against for
                    filing a complaint.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Contact Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  For questions about this notice, to exercise your rights, or to file a complaint, please
                  contact:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <p className="text-neutral-900 font-semibold mb-2">Privacy Officer</p>
                  <p className="text-neutral-700 mb-2">{siteConfig.name}</p>
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

              {/* Acknowledgment */}
              <div className="bg-primary-50 border-2 border-primary-500 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Acknowledgment</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  You will be asked to sign an acknowledgment that you received this Notice of Privacy
                  Practices at your first appointment. This acknowledgment will be retained in your medical
                  record.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
