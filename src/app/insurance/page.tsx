import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, Container } from "@/components/sections";
import DualCTA from "@/components/DualCTA";
import {
  getFAQSchema,
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

const SITE_URL = siteConfig.url;
const OFFICE_PHONE = "(916) 783-2110";
const OFFICE_PHONE_HREF = "tel:+19167832110";
const OFFICE_ADDRESS = "911 Reserve Dr, Suite 100, Roseville, CA 95678";

export const metadata: Metadata = {
  title: {
    absolute: "Insurance & Financing | Dr. Antipov, Roseville CA",
  },
  description:
    "We accept major PPO plans like Delta Dental & Cigna, partner with CareCredit and Cherry for payment plans, and offer free dental implant consultations.",
  alternates: {
    canonical: `${SITE_URL}/insurance`,
    languages: {
      en: `${SITE_URL}/insurance`,
      "x-default": `${SITE_URL}/insurance`,
    },
  },
  openGraph: {
    title: "Insurance & Financing â Dr. Antipov",
    description:
      "PPO insurance plans, CareCredit, Cherry, HSA/FSA. Transparent pricing with no hidden fees.",
    url: `${SITE_URL}/insurance`,
    locale: "en_US",
    type: "website",
  },
};

const insurancePlans = [
  "Delta Dental (PPO)",
  "Cigna PPO",
  "Aetna",
  "MetLife",
  "Guardian",
  "United Concordia",
  "Anthem Blue Cross PPO",
  "Blue Shield of California",
  "Principal",
  "Ameritas",
  "Humana",
  "Most other PPO plans",
];

const financingOptions = [
  {
    name: "CareCredit",
    tagline: "Healthcare credit card",
    bullets: [
      "0% promotional APR on qualifying purchases",
      "6, 12, 18, or 24-month payment plans",
      "Decision in minutes — apply online or in-office",
    ],
    cta: "Apply with CareCredit",
    href: "https://www.carecredit.com/apply/",
  },
  {
    name: "Cherry",
    tagline: "Buy-now-pay-later financing",
    bullets: [
      "Up to $10,000 with no hard credit check for pre-approval",
      "3, 6, 12, 18, and 24-month plans",
      "Soft credit check — will not affect your credit score",
    ],
    cta: "Get pre-approved",
    href: "https://withcherry.com/",
  },
  {
    name: "HSA / FSA",
    tagline: "Tax-advantaged savings accounts",
    bullets: [
      "Most surgical procedures are HSA / FSA eligible",
      "Pay with pre-tax dollars",
      "We provide detailed receipts for reimbursement",
    ],
    cta: null,
    href: null,
  },
  {
    name: "In-office payment",
    tagline: "Pay directly at our office",
    bullets: [
      "All major credit cards accepted",
      "Cash, checks, and electronic transfers",
      "Discounts for prepayment on select procedures",
    ],
    cta: null,
    href: null,
  },
];

const valueProps = [
  {
    title: "Free dental implant consultation",
    body:
      "Your first visit — including a 3D CBCT scan when clinically indicated and a full treatment plan — is on us. You leave with a written estimate BEFORE making any decisions.",
  },
  {
    title: "Pre-treatment estimates",
    body:
      "Before any work begins, we file a pre-authorization with your insurer and give you a clear, line-by-line estimate of your out-of-pocket costs.",
  },
  {
    title: "We file your insurance claims",
    body:
      "We submit all the paperwork to your PPO carrier on your behalf. You only pay your portion on the day of the procedure.",
  },
  {
    title: "Transparent, honest pricing",
    body:
      "No surprises. Every charge is explained in plain language before treatment starts, and we will walk through alternatives together if a procedure is outside your budget.",
  },
];

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer:
      "We are in-network with most major PPO plans — Delta Dental, Cigna, Aetna, MetLife, Guardian, Anthem Blue Cross, Blue Shield of California, and many others. We also accept most out-of-network PPO plans and file the claims on your behalf. Call us at (916) 783-2110 with your insurance information, and we will verify your coverage within one business day.",
  },
  {
    question: "I don’t have dental insurance. What are my options?",
    answer:
      "Many of our patients pay out-of-pocket, and we have a clear path for them. Transparent pricing, a free dental implant consultation, and partnerships with CareCredit and Cherry for flexible monthly plans (some at 0% promotional APR). HSA and FSA accounts are also accepted for most procedures.",
  },
  {
    question: "How much will my treatment cost?",
    answer:
      "It depends on the procedure, your anatomy, and your insurance coverage. After your free dental implant consultation, you receive an itemized written estimate — including the expected insurance benefit and your out-of-pocket portion. No surprise bills, ever.",
  },
  {
    question: "Does insurance cover full-arch (All-on-4) implants?",
    answer:
      "Most PPO plans cover part of the surgical components (implants, extractions, bone grafting), but rarely the full final prosthesis. Typical coverage ranges from $1,500 to $4,000 per arch depending on the plan. We verify your specific benefits and walk you through financing options to bridge the gap.",
  },
  {
    question: "Is orthognathic (jaw) surgery covered by insurance?",
    answer:
      "Yes — when the surgery is performed for functional reasons such as severe malocclusion, sleep apnea, TMJ dysfunction, or difficulty chewing, orthognathic surgery is typically covered under medical insurance (not dental). We obtain pre-authorization before any surgical planning so you know your coverage up front.",
  },
  {
    question: "I live in another state. How does insurance work for me?",
    answer:
      "We routinely treat patients who travel to Roseville from across the country for All-on-4, zygomatic implants, and complex reconstruction. If you have a PPO plan, it works nationwide (unlike HMO plans). We verify your coverage before you arrive so you know the final cost and can plan your trip with confidence. We can also help find a hotel near the office.",
  },
  {
    question: "Can I spread payments across multiple visits?",
    answer:
      "Absolutely. For multi-phase treatments (such as All-on-4 spanning several months), payments are typically split by phase — surgical placement, healing period, final prosthesis. Both CareCredit and Cherry offer plans that match your treatment timeline.",
  },
  {
    question: "Are there discounts for cash payments or prepayment?",
    answer:
      "Yes — select procedures offer a discount when paid in full at the start of treatment. Ask about current offers during your consultation.",
  },
];

export default function InsurancePage() {
  const structuredData = [
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Insurance & Financing", url: `${SITE_URL}/insurance` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      {/* Hero — matches PageHero style with navy overlay, same as other sections */}
      <PageHero
        image="/images/forpatients-hero.jpg"
        eyebrow="Insurance & Financing"
        title="Care That Fits Your Budget"
        subtitle="We accept most PPO plans, offer transparent pricing, and partner with CareCredit and Cherry so you can spread payments across months."
        overlay="navy"
        breadcrumbs={[{ name: "Insurance" }]}
      />

      {/* Trust intro */}
      <Section background="default" padding="md">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Transparent pricing, no surprises
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Quality oral surgery, made affordable
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              We believe cost should never stand between you and the care you need. That is why every
              patient leaves our consultation with a written estimate and a clear path forward that fits
              their budget. Below is exactly how we work with insurance, third-party financing, and
              patients paying directly.
            </p>
          </div>
        </Container>
      </Section>

      {/* Insurance plans */}
      <Section background="gradient" padding="md">
        <Container size="lg">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
              Insurance Carriers
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Plans We Work With
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
              We are in-network with most major PPO carriers. We also accept most out-of-network
              PPO plans and handle the paperwork for you.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12 max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              {insurancePlans.map((plan) => (
                <li key={plan} className="flex items-start gap-2 text-neutral-900">
                  <svg
                    className="h-5 w-5 shrink-0 text-primary-600 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-7 text-neutral-600">
              Don’t see your plan? Call{" "}
              <a href={OFFICE_PHONE_HREF} className="font-semibold text-primary-600 hover:underline">
                {OFFICE_PHONE}
              </a>{" "}
              — most PPO plans allow out-of-network benefits, and we handle all the paperwork
              for you.
            </p>
          </div>

          {/* Featured carrier landing pages */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
            {[
              { name: "Aetna", href: "/insurance/aetna" },
              { name: "Anthem Blue Cross", href: "/insurance/anthem-blue-cross" },
              { name: "Delta Dental", href: "/insurance/delta-dental" },
            ].map((carrier) => (
              <Link
                key={carrier.href}
                href={carrier.href}
                className="group rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 transition-all"
              >
                <p className="text-xs uppercase tracking-widest text-primary-600 font-bold">Coverage details</p>
                <p className="mt-2 font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {carrier.name}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Financing options */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
              Financing
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Flexible Payment Options
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
              Spread your treatment cost across months with trusted healthcare lenders — many
              offer 0% promotional APR.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {financingOptions.map((opt) => (
              <div
                key={opt.name}
                className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5">
                  <h3 className="text-2xl font-bold leading-tight text-neutral-900">{opt.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{opt.tagline}</p>
                </div>
                <ul className="mb-6 flex-grow space-y-2 text-sm leading-6 text-neutral-600">
                  {opt.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 shrink-0 text-primary-600 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {opt.cta && opt.href && (
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-dark"
                  >
                    {opt.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Value props */}
      <Section background="gradient" padding="md">
        <Container size="lg">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
              Our Promises
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              How We Make It Easy
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
              Four commitments you can count on from your very first call.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 shrink-0 text-primary-600 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-neutral-900">{v.title}</h3>
                </div>
                <p className="mt-3 pl-9 leading-7 text-neutral-600">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="default" padding="md">
        <Container size="md">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Insurance & Payment FAQ
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto">
              Answers to the questions we hear most about cost, coverage, and financing.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm"
              >
                <summary className="cursor-pointer text-left font-bold text-neutral-900 transition group-open:mb-3">
                  {faq.question}
                </summary>
                <p className="leading-7 text-neutral-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <DualCTA
        variant="dual"
        heading="Ready to talk about your insurance?"
        subheading="Call or message us — we will verify your coverage within one business day. Free dental implant consultation available; restrictions apply."
      />
    </>
  );
}
