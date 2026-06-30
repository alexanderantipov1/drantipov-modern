/**
 * Structured Data (Schema.org) for SEO
 *
 * This file contains JSON-LD structured data generators for different page types.
 * Following Schema.org standards for medical professionals and businesses.
 */

import { siteConfig } from "@/constants/siteConfig"

/**
 * Organization Schema - Used site-wide
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["Galleria Oral & Facial Surgery", "Dr. Antipov Oral & Maxillofacial Surgery"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/images/office.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street} ${siteConfig.contact.address.suite}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7521, // Roseville, CA approximate
      longitude: -121.2880,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$$",
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
    employee: [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#physician`,
        name: "Dr. Alexander V. Antipov, DDS",
        jobTitle: "Founder · Oral & Maxillofacial Surgeon",
        url: `${siteConfig.url}/our-team`,
        image: `${siteConfig.url}/images/drantipov@2x-b80a5ccf.jpg`,
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#physician-kahwach`,
        name: "Dr. André-David Kahwach, DDS, MD",
        jobTitle: "Oral & Maxillofacial Surgeon",
        url: `${siteConfig.url}/our-team`,
        image: `${siteConfig.url}/images/dr-kahwach-v4.jpg`,
      },
    ],
    hasMap: "https://maps.google.com/?q=911+Reserve+Dr+Suite+150+Roseville+CA+95678",
  }
}

/**
 * Physician Schema - Dr. Antipov
 */
export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#physician`,
    name: "Dr. Alexander Antipov",
    givenName: "Alexander",
    familyName: "Antipov",
    honorificPrefix: "Dr.",
    jobTitle: "Oral and Maxillofacial Surgeon",
    description:
      "Board-certified oral and maxillofacial surgeon practicing in Roseville, California since 2008. Diplomate of the American Board of Oral and Maxillofacial Surgery (ABOMS). Specializes in dental implants, full-arch restoration (All-on-4/All-on-X), corrective jaw surgery (orthognathic), sleep apnea surgery, facial cosmetic procedures, and bone grafting. Hospital privileges at Sutter Roseville, Sutter General, Mercy General, and Mercy San Juan. Founder of Smile Again Foundation.",
    nationality: {
      "@type": "Country",
      name: "United States",
    },
    url: `${siteConfig.url}/our-team`,
    image: `${siteConfig.url}/images/drantipov@2x-b80a5ccf.jpg`,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Albert Einstein College of Medicine, Yeshiva University, Department of Dentistry",
        sameAs: "https://www.einsteinmed.edu",
        description: "Oral & Maxillofacial Surgery Residency, 2007–2008",
      },
      {
        "@type": "EducationalOrganization",
        name: "Loma Linda University School of Dentistry",
        sameAs: "https://dentistry.llu.edu",
        description: "Doctor of Dental Surgery (DDS), 2001–2003",
      },
      {
        "@type": "EducationalOrganization",
        name: "Moscow State Medical Stomatology University",
        sameAs: "https://www.msmsu.ru",
        description: "Master of Dental Surgery, 1995–2000",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "American Board of Oral and Maxillofacial Surgery",
        alternateName: "ABOMS",
        sameAs: "https://www.aboms.org",
      },
      {
        "@type": "Organization",
        name: "American Association of Oral and Maxillofacial Surgeons",
        alternateName: "AAOMS",
        sameAs: "https://www.aaoms.org",
      },
      {
        "@type": "Organization",
        name: "California Association of Oral and Maxillofacial Surgeons",
        alternateName: "CALAOMS",
        sameAs: "https://www.calaoms.org",
      },
      {
        "@type": "Organization",
        name: "Sacramento District Dental Society",
        alternateName: "SDDS",
        sameAs: "https://www.sdds.org",
      },
      {
        "@type": "Organization",
        name: "American Dental Association",
        alternateName: "ADA",
        sameAs: "https://www.ada.org",
      },
      {
        "@type": "Organization",
        name: "California Dental Association",
        alternateName: "CDA",
        sameAs: "https://www.cda.org",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Dental License",
        identifier: "50724",
        recognizedBy: {
          "@type": "Organization",
          name: "Dental Board of California",
          sameAs: "https://www.dbc.ca.gov",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "DEA Certificate",
        identifier: "FA 0689717",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "General Anesthesia Permit",
        identifier: "GA 1446",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Elective Facial Cosmetic Surgery Permit",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Continuing Education Registered Provider",
        identifier: "00948675",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Diplomate, American Board of Oral and Maxillofacial Surgery",
      },
    ],
    affiliation: [
      {
        "@type": "MedicalOrganization",
        name: "Sutter Roseville Medical Center",
        sameAs: "https://www.sutterhealth.org/srmc",
      },
      {
        "@type": "MedicalOrganization",
        name: "Sutter General Hospital",
        sameAs: "https://www.sutterhealth.org",
      },
      {
        "@type": "MedicalOrganization",
        name: "Mercy General Hospital",
        sameAs: "https://www.dignityhealth.org/sacramento/locations/mercygeneral",
      },
      {
        "@type": "MedicalOrganization",
        name: "Mercy San Juan Medical Center",
        sameAs: "https://www.dignityhealth.org/sacramento/locations/mercysanjuan",
      },
      {
        "@type": "MedicalOrganization",
        name: "Galleria Oral & Facial Surgery",
        sameAs: "https://www.galleriaoms.com",
      },
    ],
    worksFor: [
      {
        "@type": "MedicalOrganization",
        name: "Galleria Oral & Facial Surgery",
        url: "https://www.galleriaoms.com",
        description: "Oral and maxillofacial surgical practice in Roseville, California — corrective jaw surgery, sleep apnea surgery, facial cosmetic surgery, scarless mole removal.",
      },
      {
        "@type": "MedicalOrganization",
        name: "Fusion Dental Implants",
        url: "https://www.fusiondentalimplants.com",
        description: "Dental implant practice — All-on-4, All-on-X, zygomatic implants, single tooth implants, bone grafting, same-day teeth.",
      },
      {
        "@type": "NGO",
        name: "Smile Again Foundation",
        description: "Founder and Director (2025–present). Mission-driven foundation expanding access to restorative dental care.",
      },
    ],
    knowsAbout: [
      "Dental Implants",
      "Full-Arch Restoration",
      "All-on-4",
      "All-on-X",
      "Zygomatic Implants",
      "Single Tooth Implants",
      "Immediate Load Implants",
      "Corrective Jaw Surgery",
      "Orthognathic Surgery",
      "Le Fort I Osteotomy",
      "Bilateral Sagittal Split Osteotomy",
      "Genioplasty",
      "Maxillomandibular Advancement",
      "Bone Grafting",
      "Ridge Augmentation",
      "Sinus Lift",
      "Sleep Apnea Surgery",
      "Obstructive Sleep Apnea",
      "Elective Facial Cosmetic Surgery",
      "Scarless Mole Removal",
      "IV Sedation",
      "General Anesthesia",
      "Facial Reconstruction",
      "Oral Surgery",
      "Maxillofacial Surgery",
    ],
  }
}

/**
 * Physician Schema - Dr. André-David Kahwach
 * Associate surgeon at Galleria Oral & Facial Surgery
 */
export function getKahwachPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#physician-kahwach`,
    name: "Dr. André-David Kahwach",
    givenName: "André-David",
    familyName: "Kahwach",
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS, MD",
    jobTitle: "Oral and Maxillofacial Surgeon",
    description:
      "Dual-degree (DDS, MD) oral and maxillofacial surgeon at Galleria Oral & Facial Surgery in Roseville, California. UCSF dental graduate (Honors). Completed OMS residency and earned MD at Loma Linda University, with advanced training in anesthesia. Full-scope oral and maxillofacial surgery — cosmetic procedures, dental implants, facial trauma, and orthognathic surgery. Background in painting and sculpture informs his precision-and-creativity approach. Active in international medical and dental mission work across Europe, Africa, the Caribbean, and the Middle East.",
    nationality: {
      "@type": "Country",
      name: "United States",
    },
    url: `${siteConfig.url}/our-team`,
    image: `${siteConfig.url}/images/dr-kahwach-v4.jpg`,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of California, San Francisco, School of Dentistry",
        sameAs: "https://dentistry.ucsf.edu",
        description: "Doctor of Dental Surgery (DDS), graduated with Honors",
      },
      {
        "@type": "EducationalOrganization",
        name: "Loma Linda University School of Medicine",
        sameAs: "https://medicine.llu.edu",
        description: "Doctor of Medicine (MD)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Loma Linda University Oral & Maxillofacial Surgery Residency",
        sameAs: "https://dentistry.llu.edu",
        description: "Oral and Maxillofacial Surgery Residency with advanced anesthesia training",
      },
    ],
    affiliation: [
      {
        "@type": "MedicalOrganization",
        name: "Galleria Oral & Facial Surgery",
        sameAs: "https://www.galleriaoms.com",
      },
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Galleria Oral & Facial Surgery",
      url: "https://www.galleriaoms.com",
      description: "Full-scope oral and maxillofacial surgical practice in Roseville, California.",
    },
    knowsAbout: [
      "Oral Surgery",
      "Maxillofacial Surgery",
      "Dental Implants",
      "Facial Trauma",
      "Orthognathic Surgery",
      "Facial Cosmetic Surgery",
      "IV Sedation",
      "General Anesthesia",
    ],
  }
}

/**
 * Medical Procedure Schema Generator
 */
export function getMedicalProcedureSchema(procedure: {
  name: string
  description: string
  url: string
  procedureType?: string
  followup?: string
  preparation?: string
  howPerformed?: string
  bodyLocation?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: procedure.name,
    description: procedure.description,
    url: procedure.url,
    procedureType: procedure.procedureType || "Surgical",
    followup: procedure.followup,
    preparation: procedure.preparation,
    howPerformed: procedure.howPerformed,
    bodyLocation: procedure.bodyLocation,
    medicineSystem: "WesternConventional",
    availableService: {
      "@type": "MedicalTherapy",
      name: procedure.name,
      provider: {
        "@id": `${siteConfig.url}/#physician`,
      },
    },
  }
}

/**
 * Full-Arch Implants Procedure Schema
 */
export function getFullArchImplantsSchema() {
  return getMedicalProcedureSchema({
    name: "Full-Arch Dental Implant Restoration (All-on-4)",
    description:
      "Complete tooth replacement using 4-6 dental implants to support a full arch of prosthetic teeth, providing same-day teeth with immediate loading.",
    url: `${siteConfig.url}/expertise/full-arch-implants`,
    procedureType: "Surgical",
    bodyLocation: "Jaw",
    howPerformed:
      "Strategically placed dental implants are inserted into the jawbone at specific angles to maximize bone contact. A temporary full-arch prosthesis is attached the same day, followed by a permanent restoration after healing.",
    preparation:
      "Comprehensive consultation, 3D CBCT imaging, digital treatment planning, medical history review, and pre-operative instructions.",
    followup:
      "Post-operative appointments at 1 week, 1 month, 3 months, and 6 months. Final restoration delivery at 3-6 months.",
  })
}

/**
 * Bone Grafting Procedure Schema
 */
export function getBoneGraftingSchema() {
  return getMedicalProcedureSchema({
    name: "Dental Bone Grafting",
    description:
      "Surgical procedure to rebuild or augment jawbone using bone graft material to provide adequate bone volume for dental implant placement.",
    url: `${siteConfig.url}/expertise/bone-grafting`,
    procedureType: "Surgical",
    bodyLocation: "Jaw",
    howPerformed:
      "Bone graft material (autograft, allograft, or xenograft) is placed in areas of bone deficiency. May include sinus lift procedures, ridge augmentation, or block grafts depending on the specific case.",
    preparation: "CBCT scan, medical history review, antibiotic prophylaxis if indicated.",
    followup: "Healing period of 3-6 months before implant placement. Regular monitoring appointments.",
  })
}

/**
 * Orthognathic Surgery Procedure Schema
 */
export function getOrthognathicSurgerySchema() {
  return getMedicalProcedureSchema({
    name: "Corrective Jaw Surgery (Orthognathic Surgery)",
    description:
      "Surgical correction of jaw alignment issues to improve bite function, facial aesthetics, and airway health. Treats severe malocclusions, TMJ disorders, and sleep apnea.",
    url: `${siteConfig.url}/expertise/jaw-surgery`,
    procedureType: "Surgical",
    bodyLocation: "Jaw, Face",
    howPerformed:
      "Performed under general anesthesia. Jaw bones are precisely repositioned using virtual surgical planning and 3D-printed surgical guides. May involve upper jaw (maxilla), lower jaw (mandible), or both (bimaxillary surgery).",
    preparation:
      "Orthodontic preparation (12-18 months), 3D imaging, virtual surgical planning, pre-surgical orthodontic alignment.",
    followup:
      "Hospital stay 1-2 nights. Post-operative orthodontics for 6-12 months. Regular follow-up for 12-24 months.",
  })
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * FAQ Schema Generator
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Review Schema Generator
 */
export function getReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Aggregate Rating Schema
 */
export function getAggregateRatingSchema(stats: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: stats.ratingValue,
    reviewCount: stats.reviewCount,
    bestRating: stats.bestRating || 5,
    worstRating: stats.worstRating || 1,
    itemReviewed: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Video Schema Generator
 */
export function getVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl?: string
  embedUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration, // ISO 8601 format (e.g., "PT1H30M")
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Course Schema Generator (for educational content)
 */
export function getCourseSchema(course: {
  name: string
  description: string
  provider: string
  url: string
  price?: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider,
    },
    url: course.url,
    offers: course.price
      ? {
          "@type": "Offer",
          price: course.price,
          priceCurrency: "USD",
        }
      : undefined,
    timeRequired: course.duration,
    courseMode: "online",
    educationalCredentialAwarded: "Continuing Education Credits",
  }
}

/**
 * Event Schema Generator (for speaking engagements)
 */
export function getEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address: string
  }
  performer?: string
  eventStatus?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: event.eventStatus || "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location.name,
      address: {
        "@type": "PostalAddress",
        name: event.location.address,
      },
    },
    performer: {
      "@type": "Person",
      name: event.performer || "Dr. Alexander Antipov",
    },
    organizer: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Surgical Case Schema — used on /surgical-cases/[category]/[caseId] pages.
 * Renders a MedicalProcedure with a reference to the performing physician.
 */
export function getCaseSchema(c: {
  id: string
  title: string
  description?: string
  category: "corrective-jaw-surgery" | "dental-implants" | "facial-cosmetic-surgery"
  imagePath: string
  surgeon?: string
  procedures?: string[]
  diagnosis?: string[]
}) {
  const url = `${siteConfig.url}/surgical-cases/${c.category}/${c.id}`
  const physicianId =
    c.surgeon && c.surgeon.includes("Kahwach")
      ? `${siteConfig.url}/#physician-kahwach`
      : `${siteConfig.url}/#physician`

  const procedureType =
    c.category === "corrective-jaw-surgery"
      ? "Orthognathic Surgery"
      : c.category === "dental-implants"
      ? "Dental Implant Surgery"
      : "Facial Cosmetic Surgery"

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${url}#procedure`,
    name: c.title,
    description: c.description || c.title,
    url,
    image: `${siteConfig.url}${c.imagePath}`,
    procedureType: "Surgical",
    medicineSystem: "WesternConventional",
    category: procedureType,
    howPerformed: c.procedures && c.procedures.length ? c.procedures.join("; ") : undefined,
    identifier: c.id,
    bodyLocation:
      c.category === "corrective-jaw-surgery"
        ? "Jaw"
        : c.category === "dental-implants"
        ? "Mouth"
        : "Face",
    availableService: {
      "@type": "MedicalTherapy",
      name: c.title,
      provider: {
        "@id": physicianId,
      },
    },
  }
}

/**
 * Person Schema — drantipov.com is positioned as Dr. Antipov's personal brand hub.
 * This Person entity complements the Physician entity, surfacing the human dimension:
 * education, founder role at Smile Again Foundation, languages, professional sameAs links.
 */
export function getAntipovPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#antipov-person`,
    name: "Dr. Alexander V. Antipov",
    alternateName: "Alexander Antipov",
    givenName: "Alexander",
    additionalName: "V.",
    familyName: "Antipov",
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS",
    jobTitle: "Oral and Maxillofacial Surgeon",
    description:
      "Board-certified oral and maxillofacial surgeon based in Roseville, California. Founder of the Smile Again Foundation. Practicing OMS since 2008.",
    nationality: { "@type": "Country", name: "United States" },
    knowsLanguage: ["en", "ru"],
    url: `${siteConfig.url}/our-team`,
    image: `${siteConfig.url}/images/drantipov@2x-b80a5ccf.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/drantipov",
      "https://www.facebook.com/drantipov",
      "https://www.instagram.com/drantipov",
    ],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Albert Einstein College of Medicine", sameAs: "https://www.einsteinmed.edu" },
      { "@type": "EducationalOrganization", name: "Loma Linda University School of Dentistry", sameAs: "https://dentistry.llu.edu" },
      { "@type": "EducationalOrganization", name: "Moscow State Medical Stomatology University", sameAs: "https://www.msmsu.ru" },
    ],
    worksFor: [
      { "@type": "MedicalOrganization", name: "Galleria Oral & Facial Surgery", url: "https://www.galleriaoms.com" },
      { "@type": "MedicalOrganization", name: "Fusion Dental Implants", url: "https://www.fusiondentalimplants.com" },
    ],
    founder: [
      {
        "@type": "NGO",
        name: "Smile Again Foundation",
        foundingDate: "2025",
        description: "Foundation expanding access to restorative dental care.",
      },
    ],
    knowsAbout: [
      "Dental Implants",
      "All-on-4",
      "All-on-X",
      "Zygomatic Implants",
      "Corrective Jaw Surgery",
      "Orthognathic Surgery",
      "Bone Grafting",
      "Sleep Apnea Surgery",
      "Facial Cosmetic Surgery",
      "IV Sedation",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Oral and Maxillofacial Surgeon",
      occupationLocation: {
        "@type": "City",
        name: "Roseville",
        containedInPlace: {
          "@type": "State",
          name: "California",
        },
      },
      qualifications: "Diplomate, American Board of Oral and Maxillofacial Surgery (ABOMS); California Dental License #50724; General Anesthesia Permit #GA 1446",
    },
  }
}

/**
 * Helper function to inject structured data into page
 */
export function structuredDataScript(data: object | object[]) {
  const jsonLd = Array.isArray(data) ? data : [data]

  const json = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd)
  // Escape characters that could break out of the <script> context (defense-in-depth).
  return {
    __html: json
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026"),
  }
}

/**
 * Local SEO schema for city-specific landing pages.
 * Emits a MedicalBusiness node anchored to the city, with areaServed pointing
 * to that City, plus geo coordinates and a reference to the Physician @id
 * so the city page is wired into the main graph.
 */
export function getCityLocalBusinessSchema(city: {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  lat: number;
  lng: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/locations/${city.state.toLowerCase()}/${city.slug}#business`,
    name: `${siteConfig.name} — Serving ${city.city}, ${city.state}`,
    description: `Oral & maxillofacial surgery practice serving patients in ${city.city}, ${city.stateName}. Led by Dr. Alexander V. Antipov, board-certified by ABOMS, practicing since 2008.`,
    url: `${siteConfig.url}/locations/${city.state.toLowerCase()}/${city.slug}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/images/drantipov.png`,
    priceRange: "$$-$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7521,
      longitude: -121.2880,
    },
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": "State",
        name: city.stateName,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  } as const;
}
