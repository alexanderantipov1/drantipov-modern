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
    image: "/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg",
    eyebrow: "Meet Your Surgeons",
    title: "Two Experts. One Mission.",
    subtitle:
      "Dr. Antipov and Dr. Kahwach bring decades of combined surgical experience, advanced training, and a shared commitment to exceptional patient care.",
    overlay: "gradient",
  },
  "/results": {
    image: "/images/office-tour/1/gallery@2x-ecef5848.jpg",
    eyebrow: "Why Patients Choose Us",
    title: "Results That Speak for Themselves",
    subtitle:
      "Explore our state-of-the-art facility, see real patient transformations, and discover what sets our practice apart.",
    overlay: "navy",
  },
  "/locations": {
    image: "/images/locations/locations@2x-dc292d32.jpg",
    eyebrow: "Find Us",
    title: "Our Locations & Service Area",
    subtitle:
      "Convenient offices serving Roseville, Sacramento, and 46+ cities across Northern California and Nevada.",
    overlay: "navy",
  },
  "/contact": {
    image: "/images/invitations/schedule@2x-d30ac039.jpg",
    eyebrow: "Get in Touch",
    title: "Contact Our Practice",
    subtitle:
      "Reach out to schedule a consultation or ask any questions. We're here to help.",
    overlay: "gradient",
  },
  "/full-arch-dental-implants": {
    image: "/images/fullarch/08-final-result.jpeg",
    eyebrow: "Full Arch Specialists",
    title: "All-on-4 & All-on-6 Dental Implants",
    subtitle:
      "Same-day teeth, immediate-load protocols, and zygomatic implants for severe bone loss — performed by board-certified surgeons.",
    overlay: "navy",
  },

  // ===== Expertise hub =====
  "/expertise": {
    image: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
    eyebrow: "Comprehensive Oral Surgery",
    title: "Advanced Surgical Specialties & Procedures",
    subtitle:
      "From same-day dental implants to corrective jaw surgery and facial cosmetics — explore the full scope of our board-certified expertise.",
    overlay: "navy",
  },

  // ===== Surgical Cases =====
  "/surgical-cases": {
    image: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
    eyebrow: "Real Patient Transformations",
    title: "Before & After Gallery",
    subtitle:
      "Browse real cases from dental implant restorations, jaw surgery corrections, and facial cosmetic procedures.",
    overlay: "dark",
  },
  "/surgical-cases/dental-implants": {
    image: "/images/dental-implants/dental-implants@2x-0aad592f.jpg",
    eyebrow: "Implant Cases",
    title: "Dental Implant Transformations",
    subtitle:
      "Real before-and-after results from single-tooth implants, All-on-4, All-on-6, and full-arch reconstruction cases.",
    overlay: "dark",
  },
  "/surgical-cases/corrective-jaw-surgery": {
    image: "/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg",
    eyebrow: "Jaw Surgery Cases",
    title: "Corrective Jaw Surgery Results",
    subtitle:
      "Orthognathic surgery transformations including Le Fort osteotomies, BSSO, genioplasty, and facial asymmetry correction.",
    overlay: "dark",
  },
  "/surgical-cases/facial-cosmetic-surgery": {
    image: "/images/procedures/facial-cosmetic-surgery@2x-d3793d23.jpg",
    eyebrow: "Facial Cosmetic Cases",
    title: "Cosmetic Surgery Transformations",
    subtitle:
      "Rhinoplasty, face lift, eyelid surgery, and facial feminization results showcasing precision and artistry.",
    overlay: "dark",
  },

  // ===== For Patients =====
  "/for-patients": {
    image: "/images/landing-pages/dental-implants/art/office01-d1051d16.jpg",
    eyebrow: "Patient Resources",
    title: "Everything You Need to Know",
    subtitle:
      "From your first consultation to post-operative care — we're with you every step of the way.",
    overlay: "navy",
  },
  "/for-patients/testimonials": {
    image: "/images/testimonials/video-preview-1@2x-61d7adf2.jpg",
    eyebrow: "Patient Reviews",
    title: "Hear from Our Patients",
    subtitle:
      "Over 312 five-star reviews from patients who trusted us with their smile.",
    overlay: "navy",
  },
  "/for-patients/faqs": {
    image: "/images/invitations/information@2x-2c417502.jpg",
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    subtitle:
      "Answers about dental implants, jaw surgery, bone grafting, cosmetics, recovery, costs, and financing.",
    overlay: "navy",
  },
  "/for-patients/consultation": {
    image: "/images/invitations/schedule-a16fad8c.jpg",
    eyebrow: "Get Started Today",
    title: "Schedule Your Free Consultation",
    subtitle:
      "Includes a complimentary 3D CT scan, detailed treatment plan, and review of financing options — all at no cost.",
    overlay: "gradient",
  },
  "/for-patients/insights": {
    image: "/images/blog/2023-04-10/dental-implants-process-c1577863.jpg",
    eyebrow: "Education & Insights",
    title: "Patient Education Articles",
    subtitle:
      "Stay informed with the latest in dental implants, oral surgery, and patient care.",
    overlay: "navy",
  },
  "/for-patients/pre-op": {
    image: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
    eyebrow: "Pre-Operative Care",
    title: "Preparing for Your Surgery",
    subtitle:
      "Detailed pre-operative guidelines, what to expect, and how to prepare for a smooth surgical experience.",
    overlay: "navy",
  },
  "/for-patients/post-op": {
    image: "/images/blog/2015-12-30/patient-post-op-visit@2x-6de2a75d.jpg",
    eyebrow: "Recovery Care",
    title: "Post-Operative Instructions",
    subtitle:
      "Essential recovery guidelines, pain management, diet recommendations, and what to expect during healing.",
    overlay: "navy",
  },

  // ===== For Dentists =====
  "/for-dentists": {
    image: "/images/blog/2015-06-22/surgery-team-411cef8b.jpg",
    eyebrow: "For Dental Professionals",
    title: "Partner with Us",
    subtitle:
      "Trusted by 100+ Northern California dentists. Streamlined referrals, same-day consultations, and exceptional outcomes for your patients.",
    overlay: "gradient",
  },
  "/for-dentists/refer-patients": {
    image: "/images/online-consultation/online-consult@2x-6555264c.jpg",
    eyebrow: "Referral Process",
    title: "Refer a Patient",
    subtitle:
      "Simple referral process with 24–48 hour scheduling, detailed operative reports, and seamless coordination for your practice.",
    overlay: "navy",
  },
  "/for-dentists/referral-partners": {
    image: "/images/blog/2015-06-22/baltic-sea-group-photo-1e17f44d.jpg",
    eyebrow: "Partnership",
    title: "Become a Referral Partner",
    subtitle:
      "Join our network of 100+ Northern California dentists. Excellent communication, collaborative care, and exceptional outcomes.",
    overlay: "navy",
  },
  "/for-dentists/education/courses": {
    image: "/images/blog/2017-06-12/2017-bscoso-summer-course@2x-da40cb05.jpg",
    eyebrow: "Continuing Education",
    title: "CE Courses & Workshops",
    subtitle:
      "Expand your knowledge with Dr. Antipov's evidence-based courses on implant dentistry, bone grafting, and surgical techniques.",
    overlay: "navy",
  },

  // ===== Media =====
  "/media/videos": {
    image: "/images/testimonials/video-preview-3@2x-adae89ec.jpg",
    eyebrow: "Media & Videos",
    title: "Watch Our Procedures",
    subtitle:
      "Educational videos showcasing our surgical techniques and patient outcomes.",
    overlay: "dark",
  },
  "/media/speaking": {
    image: "/images/blog/2014-12-05/speaker-dr-antipov-8af6f91c.jpg",
    eyebrow: "Speaking & Education",
    title: "Conference Presentations",
    subtitle:
      "Dr. Antipov shares expertise at national and international dental conferences.",
    overlay: "navy",
  },

  // ===== Legal =====
  "/legal/privacy-policy": {
    image: "/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your information.",
    overlay: "navy",
  },
  "/legal/terms-of-service": {
    image: "/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg",
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: "The terms and conditions for using our website and services.",
    overlay: "navy",
  },
  "/legal/hipaa-notice": {
    image: "/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg",
    eyebrow: "Legal",
    title: "HIPAA Notice of Privacy Practices",
    subtitle: "Your rights and our responsibilities regarding your protected health information.",
    overlay: "navy",
  },
  "/legal/medical-disclaimer": {
    image: "/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg",
    eyebrow: "Legal",
    title: "Medical Disclaimer",
    subtitle: "Important information about the medical content on this website.",
    overlay: "navy",
  },
};

export default heroContent;
