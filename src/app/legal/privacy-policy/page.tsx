import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata = {
  title: "Privacy Policy | Dr. Antipov",
  description: "Privacy policy for Dr. Alexander Antipov's website. Learn how we collect, use, and protect your information.",
  robots: "noindex, nofollow",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 12, 2025"

  return (
    <>
      <PageHero {...heroContent["/legal/privacy-policy"]!} />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Table of Contents */}
              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Table of Contents</h2>
                <ol className="space-y-2 list-decimal list-inside text-neutral-700">
                  <li>
                    <a href="#information-we-collect" className="text-primary-600 hover:underline">
                      Information We Collect
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-use-information" className="text-primary-600 hover:underline">
                      How We Use Your Information
                    </a>
                  </li>
                  <li>
                    <a href="#data-security" className="text-primary-600 hover:underline">
                      Data Security Measures
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-primary-600 hover:underline">
                      Cookies and Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#third-party" className="text-primary-600 hover:underline">
                      Third-Party Services
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="text-primary-600 hover:underline">
                      Your Privacy Rights
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ol>
              </div>

              {/* Introduction */}
              <p className="text-neutral-700 leading-relaxed mb-8">
                Dr. Alexander Antipov ("we," "our," or "us") respects your privacy and is committed to
                protecting your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website{" "}
                <a href={siteConfig.url} className="text-primary-600 hover:underline">
                  {siteConfig.url}
                </a>
                .
              </p>

              {/* Information We Collect */}
              <div id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  1.1 Information You Provide
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We collect information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Submit a consultation request form</li>
                  <li>Contact us via email or phone</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                  <li>Fill out any other forms on our website</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  This information may include your name, email address, phone number, and any message or
                  inquiry you provide.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-neutral-800 font-medium">
                    <strong>Important:</strong> This website does NOT collect Protected Health Information
                    (PHI) as defined by HIPAA. Do not submit sensitive medical information, diagnosis
                    details, or treatment records through our website forms.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  1.2 Automatically Collected Information
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device
                  and browsing behavior:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Date and time of visit</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div id="how-we-use-information" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>To respond to your consultation requests and inquiries</li>
                  <li>To communicate with you about our services</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To comply with legal obligations</li>
                  <li>To prevent fraud and ensure website security</li>
                </ul>
              </div>

              {/* Data Security */}
              <div id="data-security" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Data Security Measures
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  However, no method of transmission over the internet is 100% secure. While we strive to
                  protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Cookies */}
              <div id="cookies" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience and
                  analyze website performance. Cookies are small text files stored on your device.
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                    (Google Analytics)
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Track visitors across websites for advertising
                    purposes (Facebook Pixel, if applicable)
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  You can control cookies through your browser settings. Disabling cookies may affect website
                  functionality.
                </p>
              </div>

              {/* Third-Party Services */}
              <div id="third-party" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Third-Party Services
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use the following third-party services that may collect information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Google Analytics:</strong> Website traffic analysis
                  </li>
                  <li>
                    <strong>Google Tag Manager:</strong> Tag management
                  </li>
                  <li>
                    <strong>Hotjar:</strong> User behavior analytics and heatmaps
                  </li>
                  <li>
                    <strong>Facebook Pixel:</strong> Advertising and analytics (if applicable)
                  </li>
                  <li>
                    <strong>Resend:</strong> Email delivery service
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  These services have their own privacy policies. We recommend reviewing them:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotjar.com/legal/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Hotjar Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Facebook Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Your Privacy Rights
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  6.1 GDPR (European Union Residents)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you are located in the European Union, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  6.2 CCPA (California Residents)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you are a California resident, you have the following rights under the California
                  Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or disclosed</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to deletion of personal information</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  <strong>Note:</strong> We do not sell your personal information.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  How to Exercise Your Rights
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  To exercise any of these rights, please contact us at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-600 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">7. Contact Us</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact
                  us:
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

              {/* Updates */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Changes to This Policy</h3>
                <p className="text-sm text-neutral-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last Updated" date. We
                  encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
