import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"

export const metadata = {
  title: "Terms of Service | Dr. Antipov",
  description:
    "Terms of service for Dr. Alexander Antipov's website. Please read these terms carefully before using our website.",
  robots: "noindex, nofollow",
}

export default function TermsOfServicePage() {
  const lastUpdated = "October 12, 2025"

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-32">
        <Container size="lg">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">
              Terms of Service
            </h1>
            <p className="text-lg text-neutral-600">Last Updated: {lastUpdated}</p>
          </div>
        </Container>
      </Section>

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
                    <a href="#acceptance" className="text-primary-600 hover:underline">
                      Acceptance of Terms
                    </a>
                  </li>
                  <li>
                    <a href="#use-of-website" className="text-primary-600 hover:underline">
                      Use of Website
                    </a>
                  </li>
                  <li>
                    <a href="#intellectual-property" className="text-primary-600 hover:underline">
                      Intellectual Property Rights
                    </a>
                  </li>
                  <li>
                    <a href="#user-content" className="text-primary-600 hover:underline">
                      User-Submitted Content
                    </a>
                  </li>
                  <li>
                    <a href="#disclaimers" className="text-primary-600 hover:underline">
                      Disclaimer of Warranties
                    </a>
                  </li>
                  <li>
                    <a href="#limitation" className="text-primary-600 hover:underline">
                      Limitation of Liability
                    </a>
                  </li>
                  <li>
                    <a href="#governing-law" className="text-primary-600 hover:underline">
                      Governing Law
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Contact Information
                    </a>
                  </li>
                </ol>
              </div>

              {/* Introduction */}
              <p className="text-neutral-700 leading-relaxed mb-8">
                Welcome to the website of Dr. Alexander Antipov. These Terms of Service ("Terms") govern
                your access to and use of our website{" "}
                <a href={siteConfig.url} className="text-primary-600 hover:underline">
                  {siteConfig.url}
                </a>
                . By accessing or using this website, you agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use this website.
              </p>

              {/* Acceptance of Terms */}
              <div id="acceptance" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  By accessing this website, you confirm that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into binding agreements</li>
                  <li>
                    You agree to comply with all applicable local, state, national, and international laws
                    and regulations
                  </li>
                  <li>You accept these Terms in their entirety</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Your continued use of the website
                  after changes are posted constitutes your acceptance of the modified Terms.
                </p>
              </div>

              {/* Use of Website */}
              <div id="use-of-website" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. Use of Website
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.1 Permitted Use</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You may use this website for lawful purposes only, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Viewing information about our services</li>
                  <li>Requesting consultation appointments</li>
                  <li>Contacting our office</li>
                  <li>Accessing educational content</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.2 Prohibited Use</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">You agree NOT to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    Use the website for any unlawful purpose or to solicit unlawful activity
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems, networks, or data
                  </li>
                  <li>
                    Interfere with or disrupt the website or servers
                  </li>
                  <li>
                    Transmit viruses, malware, or other malicious code
                  </li>
                  <li>
                    Scrape, crawl, or harvest data from the website without permission
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your affiliation
                  </li>
                  <li>
                    Use automated systems (bots, scrapers) to access the website
                  </li>
                  <li>
                    Reproduce, distribute, or modify website content without authorization
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Intellectual Property Rights
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images,
                  videos, audio clips, and software, is the property of Dr. Alexander Antipov or its content
                  suppliers and is protected by United States and international copyright laws.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The compilation of all content on this website is the exclusive property of Dr. Alexander
                  Antipov and is protected by U.S. and international copyright laws.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  You may not use, reproduce, distribute, transmit, broadcast, display, sell, license, or
                  otherwise exploit any content for commercial purposes without our prior written consent.
                </p>
              </div>

              {/* User Content */}
              <div id="user-content" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. User-Submitted Content
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you submit any content through our website (such as consultation requests, contact
                  forms, or comments), you grant us a non-exclusive, royalty-free, perpetual, and worldwide
                  license to use, reproduce, modify, and distribute such content for the purpose of providing
                  our services and improving our website.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">You represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>You own or have the necessary rights to the content you submit</li>
                  <li>Your content does not violate any third-party rights</li>
                  <li>Your content does not contain unlawful, harmful, or offensive material</li>
                  <li>Your content is accurate and not misleading</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-neutral-800 font-medium">
                    <strong>Important:</strong> Do not submit Protected Health Information (PHI) or sensitive
                    medical records through our website. Our forms are for general inquiries and consultation
                    requests only.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Disclaimer of Warranties
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Implied warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Accuracy, completeness, or reliability of content</li>
                  <li>Availability, timeliness, or security of the website</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>The website will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>The website is free of viruses or other harmful components</li>
                  <li>Results obtained from using the website will be accurate or reliable</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Your use of the website is at your sole risk. You are responsible for implementing
                  safeguards to protect your data and systems.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div id="limitation" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DR. ALEXANDER ANTIPOV, HIS EMPLOYEES, AGENTS,
                  AFFILIATES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Your use or inability to use the website</li>
                  <li>Any errors, omissions, or inaccuracies in website content</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Statements or conduct of any third party on the website</li>
                  <li>Any other matter relating to the website</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  This limitation applies whether the alleged liability is based on contract, tort,
                  negligence, strict liability, or any other basis, even if we have been advised of the
                  possibility of such damage.
                </p>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Governing Law and Dispute Resolution
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of
                  California, without regard to its conflict of law provisions.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Any disputes arising out of or relating to these Terms or your use of the website shall be
                  resolved in the state or federal courts located in Placer County, California. You consent
                  to the exclusive jurisdiction and venue of such courts.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Severability</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining
                  provisions shall remain in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Entire Agreement</h3>
                <p className="text-neutral-700 leading-relaxed">
                  These Terms, together with our Privacy Policy and Medical Disclaimer, constitute the entire
                  agreement between you and Dr. Alexander Antipov regarding your use of this website.
                </p>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  8. Contact Information
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Changes to These Terms</h3>
                <p className="text-sm text-neutral-700">
                  We reserve the right to update or modify these Terms at any time without prior notice. Your
                  continued use of the website after any such changes constitutes your acceptance of the new
                  Terms. We encourage you to review these Terms periodically.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
