import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "Travel Guide - Patients Coming to Roseville",
  description:
    "Complete travel guide for out-of-state and international patients: Sacramento airport, recommended hotels, recovery accommodations, and what to plan for multi-day treatment with Dr. Antipov.",
  alternates: { canonical: "/for-patients/travel" },
  openGraph: {
    title: "Patient Travel Guide - Roseville, California",
    description: "Logistics for patients traveling from out of state.",
    url: `${siteConfig.url}/for-patients/travel`,
    type: "website",
    images: [{ url: "/images/landing-pages/dental-implants/art/office01-d1051d16.jpg", width: 1920, height: 1080, alt: "Roseville travel guide" }],
  },
};

const flightInfo = [
  { airport: "SMF - Sacramento International", drive: "30 min", note: "Closest major airport. United, Southwest, Delta, American, Alaska all fly direct from most US cities." },
  { airport: "OAK - Oakland International", drive: "1 hr 45 min", note: "Often lower fares. Southwest hub. Easy I-80 East to Roseville." },
  { airport: "SFO - San Francisco International", drive: "2 hr 15 min", note: "Most international flights. Hertz/Avis rentals available." },
  { airport: "RNO - Reno-Tahoe International", drive: "2 hr 15 min", note: "Alternative for patients from Nevada or coming over from Reno-Tahoe area." },
];

const hotels = [
  { name: "Hyatt Place Roseville", distance: "5 minutes", price: "$160-200/night", note: "Walking distance to office. Recommended for short post-op stays." },
  { name: "Hilton Garden Inn Roseville", distance: "8 minutes", price: "$170-220/night", note: "Quiet, suites available, full breakfast included." },
  { name: "Residence Inn by Marriott", distance: "10 minutes", price: "$200-280/night", note: "Kitchenette - ideal for multi-day or multi-week stays. Full kitchen for soft-food prep." },
  { name: "Holiday Inn Express Roseville-Galleria", distance: "10 minutes", price: "$130-180/night", note: "Budget-friendly. Free breakfast, easy parking." },
];

const itineraryDays = [
  { day: "Day 1 - Arrive & rest", description: "Fly in, check into hotel, light dinner. Avoid alcohol the night before surgery. Hydrate." },
  { day: "Day 2 - Surgery day", description: "Pre-surgery consultation (if not done earlier). All-on-4 or implants take 3-5 hours under IV sedation. Companion drives you back to hotel. Rest, ice, soft foods." },
  { day: "Day 3 - Post-op check", description: "Brief follow-up visit (~20 min) to inspect surgical sites and address pain or swelling. Most patients return to hotel afterward." },
  { day: "Days 4-5 - Recovery", description: "Stay close, soft diet, gentle activity. Most patients can fly home on Day 5 or 6 with cleared surgeon approval." },
  { day: "Optional Day 6-7", description: "If treatment plan requires staged surgery (e.g., bone graft + implants), staying additional days simplifies logistics." },
];

const checklist = [
  "Government-issued photo ID and insurance cards",
  "List of current medications with dosages",
  "Comfortable, loose-fitting clothes with short sleeves",
  "Soft pillow for support during travel back",
  "Pre-stocked soft foods at hotel (yogurt, protein shakes, soup)",
  "Designated companion for surgery day (required for IV sedation)",
  "Rental car or rideshare account for transit",
  "Headphones for relaxation during recovery",
];

export default function TravelPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg" alt="Travel guide" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/for-patients" className="hover:text-primary-light">For Patients</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Travel Guide</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Out-of-state patients</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Traveling to Roseville for surgery
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            A complete logistics guide for patients flying in from other states or countries. Airports, hotels, recovery timelines, and what to expect during your stay.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Getting here</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {flightInfo.map((f) => (
              <div key={f.airport} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{f.airport}</h3>
                  <span className="text-sm font-bold text-primary-600">{f.drive} drive</span>
                </div>
                <p className="text-neutral-700 leading-7 text-sm">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Where to stay</h2>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
            All recommended hotels are within 10 minutes of the office. Choose based on your length of stay and preferences for amenities.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {hotels.map((h) => (
              <div key={h.name} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{h.name}</h3>
                  <span className="text-xs font-bold text-primary-600 whitespace-nowrap">{h.distance}</span>
                </div>
                <p className="text-sm font-bold text-neutral-900 mb-2">{h.price}</p>
                <p className="text-neutral-700 leading-7 text-sm">{h.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-600">
            Rates are typical for standard rooms. Suites and extended-stay rooms are available at most. We can help you choose if you mention your treatment timeline.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Typical 5-day treatment itinerary</h2>
          <ol className="relative space-y-8 border-l-2 border-primary-600/30 pl-8">
            {itineraryDays.map((d, i) => (
              <li key={d.day} className="relative">
                <span className="absolute -left-[42px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-xs font-bold text-primary-600">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{d.day}</h3>
                <p className="mt-2 leading-7 text-neutral-700">{d.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Travel checklist</h2>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-neutral-700 leading-7">
                  <svg className="h-5 w-5 shrink-0 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
