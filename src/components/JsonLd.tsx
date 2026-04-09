export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://drantipov.com/#organization",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    alternateName: [
      "Alexander V. Antipov, DDS, Inc.",
      "Dr. Antipov Oral Surgery",
      "Antipov Oral & Maxillofacial Surgery",
    ],
    description:
      "Board-certified oral and maxillofacial surgeon providing same-day dental implants (All-on-4, All-on-6, zygomatic implants), full arch dental implant restoration, corrective jaw surgery (orthognathic surgery), organic and holistic bone grafting, facial cosmetic surgery (rhinoplasty, face lift, eyelid surgery), and wisdom teeth removal in Roseville, CA. Serving Sacramento, San Francisco, Reno, and all of Northern California. Free consultations with complimentary 3D CT scan.",
    url: "https://drantipov.com",
    telephone: "+1-916-790-9693",
    email: "info@drantipov.com",
    image: "https://drantipov.com/images/slides/1/1844-99036b3b.jpg",
    logo: "https://drantipov.com/images/logo-b97aa5c8.png",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Financing, CareCredit, HSA, FSA, Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: "911 Reserve Dr, Suite 150",
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
    founder: {
      "@type": "Person",
      name: "Dr. Alexander Antipov",
      jobTitle: "Oral & Maxillofacial Surgeon",
      description:
        "Board-certified Diplomate of the American Board of Oral & Maxillofacial Surgery with over 25 years of experience and more than 10,000 patients treated. Fellowship-trained in complex implant reconstruction.",
      alumniOf: [
        { "@type": "EducationalOrganization", name: "UCSF School of Dentistry" },
        { "@type": "EducationalOrganization", name: "University of the Pacific Arthur A. Dugoni School of Dentistry" },
      ],
      memberOf: [
        { "@type": "Organization", name: "American Association of Oral and Maxillofacial Surgeons (AAOMS)" },
        { "@type": "Organization", name: "American Dental Association (ADA)" },
        { "@type": "Organization", name: "Academy of Osseointegration" },
        { "@type": "Organization", name: "American Board of Oral and Maxillofacial Surgery" },
      ],
    },
    sameAs: [
      "https://www.facebook.com/drantipov",
      "https://www.instagram.com/drantipov",
      "https://www.linkedin.com/in/drantipov",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do All-on-4 dental implants cost in Roseville, CA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of All-on-4 dental implants varies based on your specific needs, the materials chosen (zirconia vs. PMMA acrylic), and whether bone grafting is required. Dr. Antipov offers free consultations with a complimentary 3D CT scan to provide an accurate treatment plan and cost estimate. Flexible financing options are available starting at $99/month through multiple lending partners including CareCredit.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get dental implants and teeth in one day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dr. Antipov specializes in same-day dental implant procedures using the immediate-load protocol. Using the All-on-4 or All-on-6 technique, implants are placed and temporary teeth are attached in a single visit, typically within 3-4 hours under IV sedation. You walk in with missing or failing teeth and leave the same day with a full set of functional, natural-looking teeth.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between All-on-4 and All-on-6 dental implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All-on-4 uses four strategically placed implants to support a full arch of teeth, with the posterior implants angled to maximize bone contact and avoid the need for bone grafting. All-on-6 uses six implants per arch for additional stability, which may be recommended for patients with heavier bite forces or who want enhanced long-term security. Both options provide same-day teeth and permanent results.",
        },
      },
      {
        "@type": "Question",
        name: "What are zygomatic implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zygomatic implants are specialized long implants that anchor into the cheekbone (zygoma) instead of the upper jawbone. They are designed for patients with severe upper jaw bone loss who have been told they are not candidates for traditional dental implants. Zygomatic implants eliminate the need for extensive bone grafting and can provide same-day teeth in a single procedure.",
        },
      },
      {
        "@type": "Question",
        name: "What is corrective jaw surgery (orthognathic surgery)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Corrective jaw surgery, also called orthognathic surgery, repositions the upper jaw (maxilla), lower jaw (mandible), or both to correct misalignment that cannot be fixed with braces alone. Common procedures include Le Fort I osteotomy, bilateral sagittal split osteotomy (BSSO), genioplasty, and maxillomandibular advancement. Reasons for surgery include underbite, overbite, open bite, facial asymmetry, difficulty chewing, chronic jaw pain, and obstructive sleep apnea. Dr. Antipov uses 3D computer-guided surgical planning for precise outcomes.",
        },
      },
      {
        "@type": "Question",
        name: "What is organic or holistic bone grafting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organic and holistic bone grafting uses minimally processed, naturally derived bone graft materials to rebuild jawbone lost to tooth extraction, periodontal disease, or trauma. Options include autogenous bone (from your own body), allograft (processed human donor bone), and xenograft (naturally derived bovine or porcine bone). These materials are biocompatible and support natural bone regeneration without synthetic chemicals, making them ideal for patients who prefer a holistic approach to dental implant preparation.",
        },
      },
      {
        "@type": "Question",
        name: "Does Dr. Antipov offer free consultations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every new patient receives a complimentary consultation that includes a 3D Cone Beam CT scan, a thorough examination, a personalized treatment plan, and a discussion of financial options — all at no cost and no obligation. Virtual consultations are also available for patients who live out of the area.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Dr. Antipov serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Antipov's main office is located in Roseville, California. The practice serves patients from across Northern California and Northern Nevada including Sacramento, Folsom, Rocklin, El Dorado Hills, Lincoln, Auburn, Granite Bay, Elk Grove, the San Francisco Bay Area, Napa, Sonoma, Reno, South Lake Tahoe, Truckee, Chico, Redding, Stockton, Modesto, and Fresno. Patients regularly travel from a 3.5-hour radius for specialized procedures. Virtual consultations are available worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What types of facial cosmetic surgery does Dr. Antipov perform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Antipov performs rhinoplasty (nose reshaping), rhytidectomy (face lift), upper and lower blepharoplasty (eyelid surgery), Asian double eyelid surgery, facial feminization surgery, scarless mole removal using radio wave technique, Juvederm dermal fillers, lip augmentation, and autologous fat transfer for facial volume restoration. As a board-certified oral and maxillofacial surgeon, he has an unmatched understanding of facial bone structure and soft tissue anatomy.",
        },
      },
      {
        "@type": "Question",
        name: "What is the recovery time for dental implant surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most patients return to normal activities within 2-3 days after dental implant surgery. You will have temporary teeth attached the same day, so you can eat soft foods and smile immediately. Full osseointegration (bone healing around the implants) typically takes 3-6 months, after which your permanent zirconia or porcelain prosthesis is placed. Dr. Antipov provides detailed recovery instructions and follow-up care throughout the healing process.",
        },
      },
      {
        "@type": "Question",
        name: "Does Dr. Antipov treat TMJ disorders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dr. Antipov diagnoses and treats temporomandibular joint (TMJ) disorders including jaw clicking, popping, locking, chronic jaw pain, and limited jaw movement. Treatment options range from conservative approaches (splint therapy, physical therapy) to surgical interventions (arthrocentesis, arthroscopy, open joint surgery) depending on the severity and cause of the disorder.",
        },
      },
      {
        "@type": "Question",
        name: "Can jaw surgery cure sleep apnea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Maxillomandibular advancement (MMA) surgery is one of the most effective surgical treatments for obstructive sleep apnea. By advancing both the upper and lower jaws forward, the airway is permanently enlarged, reducing or eliminating sleep apnea symptoms. Dr. Antipov uses 3D computer-guided planning for precise jaw positioning and predictable results.",
        },
      },
    ],
  };

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    url: "https://drantipov.com",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPage) }}
      />
    </>
  );
}
