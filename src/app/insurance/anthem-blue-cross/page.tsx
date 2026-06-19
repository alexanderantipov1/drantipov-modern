import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import DualCTA from "@/components/DualCTA";
import InsuranceCrossLinks from "@/components/InsuranceCrossLinks";

export const metadata: Metadata = {
  title: "Anthem Blue Cross — Dental Implants Coverage",
  description:
    "How Anthem Blue Cross dental insurance applies to dental implants, oral surgery, and orthognathic procedures with Dr. Antipov. Out-of-network coverage, pre-authorization, and reimbursement help.",
  alternates: { canonical: "/insurance/anthem-blue-cross" },
  openGraph: {
    title: "Anthem Blue Cross Coverage",
    description: "Anthem Blue Cross dental coverage for dental implants and oral surgery — out-of-network, pre-authorization.",
    images: [
      {
        url: "/images/financial/insurance-coverage.jpg",
        width: 1200,
        height: 630,
        alt: "Anthem Blue Cross Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthem Blue Cross Coverage",
    description: "Anthem Blue Cross dental coverage for dental implants and oral surgery — out-of-network, pre-authorization.",
    images: ["/images/financial/insurance-coverage.jpg"],
  }
};

export default function AnthemBlueCrossPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg" alt="Anthem Blue Cross coverage" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/insurance" className="hover:text-primary-light">Insurance</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Anthem Blue Cross</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Anthem Blue Cross Dental</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Using Anthem Blue Cross with Dr. Antipov
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Dr. Antipov is an out-of-network provider for Anthem Blue Cross. Patients with PPO plans typically receive partial reimbursement. Our insurance coordinator handles pre-authorization and claim submission at no cost to you.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">What Anthem Blue Cross typically covers</h2>
            <ul className="space-y-3 text-neutral-700 leading-7">
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span>Basic extractions and oral surgery (partial coverage, subject to annual maximum)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span>Bone grafting when medically necessary (varies by plan)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">~</span>Dental implant placement (varies — some plans cover, most do not)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">~</span>Orthognathic surgery (medical, not dental — covered when medically necessary)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✗</span>Cosmetic procedures (mole removal, facelifts, fillers — not covered)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">How we help</h2>
            <ul className="space-y-3 text-neutral-700 leading-7">
              <li><strong>Verification:</strong> We call Anthem Blue Cross on your behalf to confirm your specific benefits and remaining annual maximum.</li>
              <li><strong>Pre-authorization:</strong> For larger cases, we submit pre-treatment estimates to confirm coverage in advance.</li>
              <li><strong>Claim submission:</strong> We submit all claims electronically. You don't fill out forms.</li>
              <li><strong>Out-of-network reimbursement:</strong> Most PPO plans pay 50-80% of allowed amounts directly to you.</li>
              <li><strong>Financing supplement:</strong> CareCredit and Lending Club cover the portion insurance doesn't.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-primary-600/20 bg-light p-8">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">Bring your insurance card to consultation</h3>
            <p className="text-neutral-700 leading-7">
              We need: member ID, group number, employer name, and date of birth to verify your benefits. Verification typically takes 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      <InsuranceCrossLinks currentSlug="anthem-blue-cross" />

      <DualCTA />
    </>
  );
}
