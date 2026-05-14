export interface HeroContent {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overlay?: "dark" | "navy" | "gradient";
}

const heroContent: Record<string, HeroContent> = {
  // ===== Top-level pages =====
  "/about": {
    image: "/heroes/about.jpg",
    eyebrow: "Meet Your Surgeons",
    title: "Two Experts. One Mission.",
    subtitle:
      "Dr. Antipov and Dr. Kahwach bring decades of combined surgical experience, advanced training, and a shared commitment to exceptional patient care.",
    overlay: "gradient",
  },
  "/results": {
    image: "/heroes/results.jpg",
    eyebrow: "Why Patients Choose Us",
    title: "Results That Speak for Themselves",
    subtitle:
      "Explore our state-of-the-art facility, see real patient transformations, and discover what sets our practice apart.",
    overlay: "navy",
  },
  "/locations": {
    image: "/heroes/locations.jpg",
    eyebrow: "Find Us",
    title: "Our Locations & Service Area",
    subtitle:
      "Convenient offices serving Roseville, Sacramento, and 46+ cities across Northern California and Nevada.",
    overlay: "navy",
  },
  "/contact": {
    image: "/heroes/contact.jpg",
    eyebrow: "Get in Touch",
    title: "Contact Our Practice",
    subtitle:
      "Reach out to schedule a consultation or ask any questions. We're here to help.",
    overlay: "gradient",
  },
  "/full-arch-dental-implants": {
    image: "/heroes/full-arch.jpg",
    eyebrow: "Full Arch Specialists",
    title: "All-on-4 & All-on-6 Dental Implants",
    subtitle:
      "Same-day teeth, immediate-load protocols, and zygomatic implants for severe bone loss — performed by board-certified surgeons.",
    overlay: "navy",
  },

  // ===== Expertise hub =====
  "/expertise": {
    image: "/heroes/expertise.jpg",
    eyebrow: "Comprehensive Oral Surgery",
    title: "Advanced Surgical Specialties & Procedures",
    subtitle:
      "From same-day dental implants to corrective jaw surgery and facial cosmetics — explore the full scope of our board-certified expertise.",
    overlay: "navy",
  },

  // ===== Surgical Cases =====
  "/surgical-cases": {
    image: "/heroes/surgical-cases.jpg",
    eyebrow: "Real Patient Transformations",
    title: "Before & After Gallery",
    subtitle:
      "Browse real cases from dental implant restorations, jaw surgery corrections, and facial cosmetic procedures.",
    overlay: "dark",
  },
  "/surgical-cases/dental-implants": {
    image: "/heroes/dental-implants.jpg",
    eyebrow: "Implant Cases",
    title: "Dental Implant Transformations",
    subtitle:
      "Real before-and-after results from single-tooth implants, All-on-4, All-on-6, and full-arch reconstruction cases.",
    overlay: "dark",
  },
  "/surgical-cases/corrective-jaw-surgery": {
    image: "/heroes/jaw-surgery.jpg",
    eyebrow: "Jaw Surgery Cases",
    title: "Corrective Jaw Surgery Results",
    subtitle:
      "Orthognathic surgery transformations including Le Fort osteotomies, BSSO, genioplasty, and facial asymmetry correction.",
    overlay: "dark",
  },
  "/surgical-cases/facial-cosmetic-surgery": {
    image: "/heroes/facial-cosmetic.jpg",
    eyebrow: "Facial Cosmetic Cases",
    title: "Cosmetic Surgery Transformations",
    subtitle:
      "Rhinoplasty, face lift, eyelid surgery, and facial feminization results showcasing precision and artistry.",
    overlay: "dark",
  },

  // ===== For Patients =====
  "/for-patients": {
    image: "/heroes/for-patients.jpg",
    eyebrow: "Patient Resources",
    title: "Everything You Need to Know",
    subtitle:
      "From your first consultation to post-operative care — we're with you every step of the way.",
    overlay: "navy",
  },
  "/for-patients/testimonials": {
    image: "/heroes/testimonials.jpg",
    eyebrow: "Patient Reviews",
    title: "Hear from Our Patients",
    subtitle:
      "Over 312 five-star reviews from patients who trusted us with their smile.",
    overlay: "navy",
  },
  "/for-patients/faqs": {
    image: "/heroes/faqs.jpg",
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    subtitle:
      "Answers about dental implants, jaw surgery, bone grafting, cosmetics, recovery, costs, and financing.",
    overlay: "navy",
  },
  "/for-patients/consultation": {
    image: "/heroes/consultation.jpg",
    eyebrow: "Get Started Today",
    title: "Schedule Your Free Consultation",
    subtitle:
      "Includes a complimentary 3D CT scan, detailed treatment plan, and review of financing options — all at no cost.",
    overlay: "gradient",
  },
  "/for-patients/insights": {
    image: "/heroes/insights.jpg",
    eyebrow: "Education & Insights",
    title: "Patient Education Articles",
    subtitle:
      "Stay informed with the latest in dental implants, oral surgery, and patient care.",
    overlay: "navy",
  },
  "/for-patients/pre-op": {
    image: "/heroes/pre-op.jpg",
    eyebrow: "Pre-Operative Care",
    title: "Preparing for Your Surgery",
    subtitle:
      "Detailed pre-operative guidelines, what to expect, and how to prepare for a smooth surgical experience.",
    overlay: "navy",
  },
  "/for-patients/post-op": {
    image: "/heroes/post-op.jpg",
    eyebrow: "Recovery Care",
    title: "Post-Operative Instructions",
    subtitle:
      "Essential recovery guidelines, pain management, diet recommendations, and what to expect during healing.",
    overlay: "navy",
  },

  // ===== For Dentists =====
  "/for-dentists": {
    image: "/heroes/for-dentists.jpg",
    eyebrow: "For Dental Professionals",
    title: "Partner with Us",
    subtitle:
      "Trusted by 100+ Northern California dentists. Streamlined referrals, same-day consultations, and exceptional outcomes for your patients.",
    overlay: "gradient",
  },
  "/for-dentists/refer-patients": {
    image: "/heroes/refer-patients.jpg",
    eyebrow: "Referral Process",
    title: "Refer a Patient",
    subtitle:
      "Simple referral process with 24–48 hour scheduling, detailed operative reports, and seamless coordination for your practice.",
    overlay: "navy",
  },
  "/for-dentists/referral-partners": {
    image: "/heroes/referral-partners.jpg",
    eyebrow: "Partnership",
    title: "Become a Referral Partner",
    subtitle:
      "Join our network of 100+ Northern California dentists. Excellent communication, collaborative care, and exceptional outcomes.",
    overlay: "navy",
  },
  "/for-dentists/education/courses": {
    image: "/heroes/education-courses.jpg",
    eyebrow: "Continuing Education",
    title: "CE Courses & Workshops",
    subtitle:
      "Expand your knowledge with Dr. Antipov's evidence-based courses on implant dentistry, bone grafting, and surgical techniques.",
    overlay: "navy",
  },

  // ===== Media =====
  "/media/videos": {
    image: "/heroes/media-videos.jpg",
    eyebrow: "Media & Videos",
    title: "Watch Our Procedures",
    subtitle:
      "Educational videos showcasing our surgical techniques and patient outcomes.",
    overlay: "dark",
  },
  "/media/speaking": {
    image: "/heroes/media-speaking.jpg",
    eyebrow: "Speaking & Education",
    title: "Conference Presentations",
    subtitle:
      "Dr. Antipov shares expertise at national and international dental conferences.",
    overlay: "navy",
  },

  // ===== Legal =====
  "/legal/privacy-policy": {
    image: "/heroes/legal.jpg",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your information.",
    overlay: "navy",
  },
  "/legal/terms-of-service": {
    image: "/heroes/legal.jpg",
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: "The terms and conditions for using our website and services.",
    overlay: "navy",
  },
  "/legal/hipaa-notice": {
    image: "/heroes/legal.jpg",
    eyebrow: "Legal",
    title: "HIPAA Notice of Privacy Practices",
    subtitle: "Your rights and our responsibilities regarding your protected health information.",
    overlay: "navy",
  },
  "/legal/medical-disclaimer": {
    image: "/heroes/legal.jpg",
    eyebrow: "Legal",
    title: "Medical Disclaimer",
    subtitle: "Important information about the medical content on this website.",
    overlay: "navy",
  },
};

export default heroContent;
