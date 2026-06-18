import { NextResponse } from "next/server";
import { siteConfig } from "@/constants/siteConfig";
import { cities } from "@/constants/cities";

/**
 * Machine-readable data feed for AI / LLM crawlers (GEO).
 *
 * Returns a single clean JSON payload describing the practice, providers,
 * services offered, locations served, rating summary, and key knowledge pages —
 * so agents can ingest structured facts instead of scraping HTML.
 *
 * NOTE: intentionally NO pricing — this is a personal-brand / education hub.
 * Content is grounded in docs/dr-antipov-basic-info.md and the live site.
 */

export const dynamic = "force-static";

const base = siteConfig.url;

const providers = [
  {
    name: "Alexander V. Antipov, DDS",
    role: "Founder · Oral & Maxillofacial Surgeon",
    url: `${base}/our-team`,
    boardCertification: "Diplomate, American Board of Oral and Maxillofacial Surgery (ABOMS)",
    inPracticeSince: 2008,
    education: [
      "Oral & Maxillofacial Surgery — Albert Einstein College of Medicine, Yeshiva University (2007–2008)",
      "Doctor of Dental Surgery (DDS) — Loma Linda University School of Dentistry (2001–2003)",
      "Master of Dental Surgery — Moscow State Medical Stomatology University (1995–2000)",
    ],
    credentials: [
      "California Dental License #50724",
      "General Anesthesia Permit #GA 1446 (in-office IV sedation)",
      "Elective Facial Cosmetic Surgery Permit",
    ],
    hospitalPrivileges: [
      "Sutter Roseville Medical Center",
      "Sutter General Hospital",
      "Mercy General Hospital",
      "Mercy San Juan Medical Center",
    ],
  },
  {
    name: "André-David Kahwach, DDS, MD",
    role: "Oral & Maxillofacial Surgeon",
    url: `${base}/our-team`,
    boardCertification: "Oral & Maxillofacial Surgery",
  },
];

const services = [
  {
    name: "Full-Arch Dental Implants (All-on-X)",
    url: `${base}/expertise/full-arch-implants`,
    summary:
      "Permanent, same-day full-arch restoration using as few as four implants per arch, including All-on-4, All-on-6, immediate-load and computer-guided protocols.",
  },
  {
    name: "Single Tooth & Bridge Implants",
    url: `${base}/expertise/single-tooth`,
    summary:
      "Single-tooth implants and implant-supported bridges with immediate placement and socket preservation where indicated.",
  },
  {
    name: "Bone Grafting & Augmentation",
    url: `${base}/expertise/bone-grafting`,
    summary:
      "Sinus lifts, ridge augmentation, block grafts and guided bone regeneration to rebuild bone volume for implant placement.",
  },
  {
    name: "Corrective Jaw Surgery (Orthognathic)",
    url: `${base}/expertise/jaw-surgery`,
    summary:
      "Le Fort I, bilateral sagittal split osteotomy, genioplasty and two-jaw surgery with virtual surgical planning to correct skeletal malocclusion and asymmetry.",
  },
  {
    name: "Sleep Apnea Surgery (MMA)",
    url: `${base}/expertise/sleep-apnea`,
    summary:
      "Maxillomandibular advancement and related airway procedures for obstructive sleep apnea when CPAP is not tolerated.",
  },
  {
    name: "Wisdom Teeth Removal",
    url: `${base}/expertise/wisdom-teeth`,
    summary:
      "Removal of impacted and erupted third molars under local, oral, nitrous or IV sedation.",
  },
  {
    name: "TMJ Treatment",
    url: `${base}/expertise/tmj`,
    summary: "Evaluation and surgical management of temporomandibular joint disorders.",
  },
  {
    name: "Scarless Mole Removal & Facial Cosmetic Procedures",
    url: `${base}/expertise/mole-removal`,
    summary:
      "Radiowave scarless mole removal and elective facial cosmetic procedures performed under a facial cosmetic surgery permit.",
  },
  {
    name: "Tooth Extractions",
    url: `${base}/expertise/tooth-extractions`,
    summary:
      "Simple and surgical tooth extractions, including impacted molars and canines and exposed-canine surgery for orthodontics, with sedation options.",
  },
  {
    name: "Sedation & Anesthesia",
    url: `${base}/expertise/sedation-anesthesia`,
    summary:
      "Oral sedation, nitrous oxide, IV sedation and general anesthesia provided in-office under a California General Anesthesia Permit.",
  },
  {
    name: "Zygomatic & Pterygoid Implants",
    url: `${base}/expertise/zygomatic-implants`,
    summary:
      "Zygomatic and pterygoid implants anchor a full upper arch in strong bone for patients with severe bone loss, often avoiding extensive grafting.",
  },
  {
    name: "Failed Dental Implant Rescue & Redo",
    url: `${base}/expertise/implant-rescue`,
    summary:
      "Correction of failed dental implants, including cases done overseas, with jawbone reconstruction and replacement of implants and teeth.",
  },
  {
    name: "Snap-On Dentures",
    url: `${base}/expertise/snap-on-dentures`,
    summary:
      "Implant-supported overdentures that snap securely onto two to four implants for stable, removable full-arch tooth replacement.",
  },
  {
    name: "Facial Cosmetic Treatments",
    url: `${base}/expertise/facial-cosmetic`,
    summary:
      "Botox, injectable dermal fillers and lip augmentation performed by an oral and maxillofacial surgeon.",
  },
  {
    name: "Oral Pathology & Biopsy",
    url: `${base}/expertise/oral-pathology`,
    summary:
      "Biopsies and diagnosis of lesions of the mouth and jaws to provide timely, accurate answers.",
  },
];

const knowledgePages = [
  { title: "Zygomatic Implants", url: `${base}/for-patients/insights/zygomatic-implants` },
  { title: "Same-Day Dental Implants", url: `${base}/for-patients/insights/same-day-implants` },
  { title: "Dental Implant Aftercare", url: `${base}/for-patients/insights/dental-implant-aftercare` },
  { title: "Dental Implant Complications", url: `${base}/for-patients/insights/dental-implant-complications` },
  { title: "Implants vs. Dentures", url: `${base}/for-patients/insights/implants-vs-dentures` },
  { title: "Poor Oral Health & Systemic Disease", url: `${base}/for-patients/insights/poor-oral-health-systemic-diseases` },
  { title: "The Emotional Toll of Tooth Loss", url: `${base}/for-patients/insights/tooth-lost-emotional-toll` },
];

export async function GET() {
  const data = {
    "@context": "https://www.drantipov.com/api/llms",
    generated: "static",
    organization: {
      name: siteConfig.name,
      alternateName: ["Galleria Oral & Facial Surgery", "Fusion Dental Implants"],
      description:
        "Educational and personal-brand hub for Dr. Alexander Antipov, DDS, a board-certified oral & maxillofacial surgeon in Roseville, California. Surgical and implant care is delivered through two affiliated practices.",
      url: base,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        street: `${siteConfig.contact.address.street} ${siteConfig.contact.address.suite}`,
        city: siteConfig.contact.address.city,
        state: siteConfig.contact.address.state,
        zip: siteConfig.contact.address.zip,
        country: "US",
      },
      hours: {
        weekday: siteConfig.hours.weekday,
        weekend: siteConfig.hours.weekend,
        emergency: siteConfig.hours.emergency,
      },
    },
    providers,
    services,
    rating: {
      ratingValue: 4.9,
      reviewCount: 312,
      bestRating: 5,
    },
    locationsServed: cities.map((c) => ({
      city: c.city,
      state: c.state,
      region: c.region,
      url: `${base}/locations/${c.state.toLowerCase()}/${c.slug}`,
    })),
    knowledgePages,
    contactCta: {
      phone: siteConfig.contact.phone,
      consultation: `${base}/for-patients/consultation`,
      note: "Complimentary 3D CT consultation available to new patients.",
    },
  };

  return NextResponse.json(data, {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
