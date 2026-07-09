export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://www.drantipov.com/#organization",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    alternateName: [
      "Alexander V. Antipov, DDS, Inc.",
      "Dr. Antipov Oral Surgery",
      "Antipov Oral & Maxillofacial Surgery",
    ],
    description:
      "Board-certified oral and maxillofacial surgeon providing same-day dental implants (All-on-4, All-on-6, zygomatic implants), full arch dental implant restoration, corrective jaw surgery (orthognathic surgery), organic and holistic bone grafting, facial cosmetic surgery (rhinoplasty, face lift, eyelid surgery), and wisdom teeth removal in Roseville, CA. Serving Sacramento, San Francisco, Reno, and all of Northern California. Free dental implant consultation with complimentary 3D CT scan.",
    url: "https://www.drantipov.com",
    telephone: "+1-916-783-2110",
    email: "info@galleriaoms.com",
    image: "https://www.drantipov.com/images/slides/1/1844-99036b3b.jpg",
    logo: "https://www.drantipov.com/images/logo-b97aa5c8.png",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Financing, CareCredit, HSA, FSA, Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: "911 Reserve Dr, Suite 100",
      addressLocality: "Roseville",
      addressRegion: "CA",
      postalCode: "95678",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7521,
      longitude: -121.288,
    },
    areaServed: [
      { "@type": "City", name: "Roseville", containedInPlace: { "@type": "State", name: "California" } },
      { "@type": "City", name: "Sacramento" },
      { "@type": "City", name: "San Francisco" },
      { "@type": "City", name: "Oakland" },
      { "@type": "City", name: "San Jose" },
      { "@type": "City", name: "Fresno" },
      { "@type": "City", name: "Stockton" },
      { "@type": "City", name: "Modesto" },
      { "@type": "City", name: "Reno" },
      { "@type": "City", name: "Redding" },
      { "@type": "City", name: "Chico" },
      { "@type": "City", name: "Napa" },
      { "@type": "City", name: "Santa Rosa" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Elk Grove" },
      { "@type": "City", name: "Rocklin" },
      { "@type": "City", name: "Lincoln" },
      { "@type": "City", name: "Auburn" },
      { "@type": "City", name: "Granite Bay" },
      { "@type": "City", name: "Loomis" },
      { "@type": "City", name: "Walnut Creek" },
      { "@type": "City", name: "Concord" },
      { "@type": "City", name: "Fremont" },
      { "@type": "City", name: "Hayward" },
      { "@type": "City", name: "Berkeley" },
      { "@type": "City", name: "Vallejo" },
      { "@type": "City", name: "Vacaville" },
      { "@type": "City", name: "Davis" },
      { "@type": "City", name: "Yuba City" },
      { "@type": "City", name: "Marysville" },
      { "@type": "City", name: "South Lake Tahoe" },
      { "@type": "City", name: "Truckee" },
      { "@type": "City", name: "Carson City" },
      { "@type": "City", name: "Sparks" },
      { "@type": "City", name: "El Dorado Hills" },
      { "@type": "City", name: "Rancho Cordova" },
      { "@type": "City", name: "Citrus Heights" },
      { "@type": "City", name: "Carmichael" },
      { "@type": "City", name: "Fair Oaks" },
      { "@type": "City", name: "Orangevale" },
      { "@type": "City", name: "Woodland" },
      { "@type": "City", name: "West Sacramento" },
      { "@type": "City", name: "Placerville" },
      { "@type": "City", name: "Grass Valley" },
      { "@type": "City", name: "Nevada City" },
      { "@type": "State", name: "California" },
      { "@type": "State", name: "Nevada" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oral & Maxillofacial Surgery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "All-on-4 Dental Implants",
            alternateName: "Teeth in a Day",
            description:
              "Full-arch dental implant restoration using four strategically placed titanium implants with same-day temporary teeth. Walk in with missing teeth, walk out with a complete smile in one visit.",
            procedureType: "Surgical",
            bodyLocation: "Upper jaw (maxilla) and lower jaw (mandible)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "All-on-6 Dental Implants",
            description:
              "Full-arch dental implant restoration with six implants per arch for enhanced stability, ideal for patients with moderate bone loss.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Zygomatic Dental Implants",
            description:
              "Cheekbone-anchored dental implants for patients with severe upper jaw bone loss who have been told they are not candidates for traditional implants.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Single Tooth Dental Implant",
            description:
              "Individual tooth replacement with a titanium implant and custom ceramic crown, often placed immediately after extraction.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Implant-Supported Bridge",
            description:
              "Multiple adjacent teeth replaced with implant-supported fixed bridge prosthetics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Snap-On Dentures (Overdentures)",
            description:
              "Removable implant-retained dentures that snap onto 2-4 implants for improved stability and comfort over traditional dentures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Corrective Jaw Surgery (Orthognathic Surgery)",
            alternateName: "Jaw Surgery",
            description:
              "Computer-guided corrective jaw surgery including Le Fort I osteotomy, BSSO, genioplasty, and maxillomandibular advancement to correct jaw misalignment, facial asymmetry, and obstructive sleep apnea.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Bone Grafting for Dental Implants",
            alternateName: "Organic Bone Grafting",
            description:
              "Bone regeneration using organic, holistic, autogenous, allograft, and xenograft materials to rebuild jawbone for dental implant placement.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Sinus Lift Surgery",
            alternateName: "Sinus Augmentation",
            description:
              "Sinus floor elevation with bone grafting to create sufficient bone height for dental implant placement in the upper jaw.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Rhinoplasty",
            alternateName: "Nose Job",
            description:
              "Cosmetic and functional nose reshaping surgery performed by a board-certified oral and maxillofacial surgeon.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Face Lift Surgery (Rhytidectomy)",
            description:
              "Comprehensive facial rejuvenation surgery to tighten skin, reduce wrinkles, and restore a youthful appearance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Eyelid Surgery (Blepharoplasty)",
            description:
              "Upper and lower eyelid surgery including Asian double eyelid surgery (epicanthoplasty) to refresh and rejuvenate the eye area.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Facial Feminization Surgery",
            description:
              "Surgical facial feminization procedures to create softer, more feminine facial features.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Scarless Mole Removal",
            description:
              "Mole removal using advanced radio wave surgical technique that leaves no visible scarring.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Juvederm Dermal Fillers",
            description:
              "Non-surgical facial rejuvenation using Juvederm hyaluronic acid fillers for lip augmentation, wrinkle reduction, and facial volume restoration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Wisdom Teeth Removal",
            description:
              "Safe extraction of impacted and erupted wisdom teeth with IV sedation for maximum patient comfort.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "TMJ Treatment & Surgery",
            alternateName: "Temporomandibular Joint Treatment",
            description:
              "Comprehensive diagnosis and treatment of temporomandibular joint (TMJ) disorders including arthroscopy, arthrocentesis, and open joint surgery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Sleep Apnea Surgery",
            description:
              "Surgical treatment for obstructive sleep apnea including maxillomandibular advancement (MMA) surgery.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Sarah M." },
        datePublished: "2024-06-15",
        reviewBody:
          "I had a single tooth extraction and implant placement. Everything was done in one day. The whole process was quick and painless. I'm very grateful to Dr. Antipov for his great work.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Michael R." },
        datePublished: "2024-05-22",
        reviewBody:
          "I had large bone grafting with sinus lifts on both sides of the upper jaw with multiple implants and I got teeth in a day. Everything went very smoothly without any complications. Now look at my new smile!",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Linda K." },
        datePublished: "2024-04-10",
        reviewBody:
          "Dr. Antipov and his team made me feel comfortable from the very first consultation. The results exceeded my expectations. I can finally eat my favorite foods and smile with confidence again.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Val M." },
        datePublished: "2024-03-18",
        reviewBody:
          "I flew from Honolulu to see Dr. Antipov because of his reputation for corrective jaw surgery. The results were life-changing. The entire team was incredible from start to finish.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Vadim S." },
        datePublished: "2024-02-28",
        reviewBody:
          "Best oral surgeon in Northern California. My All-on-4 procedure was completed in one day and the results are amazing. I can eat, talk, and smile with complete confidence now.",
      },
    ],
    founder: { "@id": "https://www.drantipov.com/#physician" },
    employee: [
      { "@id": "https://www.drantipov.com/#physician" },
      { "@id": "https://www.drantipov.com/#physician-kahwach" },
    ],
    sameAs: [
      "https://www.facebook.com/drantipov",
      "https://www.instagram.com/drantipov",
      "https://www.linkedin.com/in/drantipov",
    ],
  };

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    url: "https://www.drantipov.com",
    about: {
      "@type": "MedicalSpecialty",
      name: "Oral and Maxillofacial Surgery",
    },
    specialty: [
      { "@type": "MedicalSpecialty", name: "Oral Surgery" },
      { "@type": "MedicalSpecialty", name: "Maxillofacial Surgery" },
      { "@type": "MedicalSpecialty", name: "Implant Dentistry" },
      { "@type": "MedicalSpecialty", name: "Orthognathic Surgery" },
      { "@type": "MedicalSpecialty", name: "Facial Cosmetic Surgery" },
    ],
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#main-content",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };

  const physicianAntipov = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.drantipov.com/#physician",
    name: "Dr. Alexander V. Antipov, DDS",
    givenName: "Alexander",
    familyName: "Antipov",
    jobTitle: "Founder · Oral & Maxillofacial Surgeon",
    description:
      "Board-certified Diplomate of the American Board of Oral and Maxillofacial Surgery, in private practice in Roseville, California since 2008. Educated at Moscow State Medical Stomatology University (1995–2000), Loma Linda University School of Dentistry (DDS, 2001–2003), and Albert Einstein College of Medicine Department of Dentistry (Oral & Maxillofacial Surgery Residency, 2007–2008). Founder of Smile Again Foundation (2025).",
    url: "https://www.drantipov.com/our-team",
    image: "https://www.drantipov.com/images/drantipov@2x-b80a5ccf.jpg",
    worksFor: { "@id": "https://www.drantipov.com/#organization" },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Albert Einstein College of Medicine, Yeshiva University, Department of Dentistry", sameAs: "https://www.einsteinmed.edu" },
      { "@type": "EducationalOrganization", name: "Loma Linda University School of Dentistry", sameAs: "https://dentistry.llu.edu" },
      { "@type": "EducationalOrganization", name: "Moscow State Medical Stomatology University", sameAs: "https://www.msmsu.ru" },
    ],
    memberOf: [
      { "@type": "Organization", name: "American Board of Oral and Maxillofacial Surgery", alternateName: "ABOMS", sameAs: "https://www.aboms.org" },
      { "@type": "Organization", name: "American Association of Oral and Maxillofacial Surgeons", alternateName: "AAOMS", sameAs: "https://www.aaoms.org" },
      { "@type": "Organization", name: "California Association of Oral and Maxillofacial Surgeons", alternateName: "CALAOMS", sameAs: "https://www.calaoms.org" },
      { "@type": "Organization", name: "Sacramento District Dental Society", alternateName: "SDDS" },
      { "@type": "Organization", name: "American Dental Association", alternateName: "ADA", sameAs: "https://www.ada.org" },
      { "@type": "Organization", name: "California Dental Association", alternateName: "CDA", sameAs: "https://www.cda.org" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Diplomate, American Board of Oral and Maxillofacial Surgery (ABOMS)" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "California Dental License", identifier: "50724" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "DEA Certificate", identifier: "FA 0689717" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "General Anesthesia Permit (in-office IV sedation)", identifier: "GA 1446" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Elective Facial Cosmetic Surgery Permit" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "registration", name: "Continuing Education Registered Provider", identifier: "00948675" },
    ],
    affiliation: [
      { "@type": "MedicalOrganization", name: "Sutter Roseville Medical Center", sameAs: "https://www.sutterhealth.org/srmc" },
      { "@type": "MedicalOrganization", name: "Sutter General Hospital", sameAs: "https://www.sutterhealth.org" },
      { "@type": "MedicalOrganization", name: "Mercy General Hospital", sameAs: "https://www.dignityhealth.org/sacramento/locations/mercygeneral" },
      { "@type": "MedicalOrganization", name: "Mercy San Juan Medical Center", sameAs: "https://www.dignityhealth.org/sacramento/locations/mercysanjuan" },
    ],
  };

  const physicianKahwach = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.drantipov.com/#physician-kahwach",
    name: "Dr. André-David Kahwach, DDS, MD",
    jobTitle: "Oral & Maxillofacial Surgeon",
    url: "https://www.drantipov.com/our-team",
    image: "https://www.drantipov.com/images/dr-kahwach-v4.jpg",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "University of California, San Francisco, School of Dentistry", sameAs: "https://dentistry.ucsf.edu" },
      { "@type": "EducationalOrganization", name: "Loma Linda University School of Medicine", sameAs: "https://medicine.llu.edu" },
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Galleria Oral & Facial Surgery",
      url: "https://www.galleriaoms.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianAntipov) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianKahwach) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPage) }}
      />
    </>
  );
}
