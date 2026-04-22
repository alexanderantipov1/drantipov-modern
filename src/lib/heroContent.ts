export interface HeroContent {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overlay?: "dark" | "navy" | "gradient";
}

const heroContent: Record<string, HeroContent> = {
  "/about": {
    image: "/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg",
    eyebrow: "Meet Your Surgeons",
    title: "Two Experts. One Mission.",
    subtitle:
      "Dr. Antipov and Dr. Kahwach bring decades of combined surgical experience, advanced training, and a shared commitment to exceptional patient care.",
    overlay: "gradient",
  },
  "/expertise": {
    image: "/images/landing-pages/dental-implants/art/product01-bdc8ea68.jpg",
    eyebrow: "Comprehensive Oral Surgery",
    title: "Advanced Surgical Specialties & Procedures",
    subtitle:
      "From same-day dental implants to corrective jaw surgery and facial cosmetics — explore the full scope of our board-certified expertise.",
    overlay: "navy",
  },
  "/surgical-cases": {
    image: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
    eyebrow: "Real Patient Transformations",
    title: "Before & After Gallery",
    subtitle:
      "Browse real cases from dental implant restorations, jaw surgery corrections, and facial cosmetic procedures.",
    overlay: "dark",
  },
  "/for-patients": {
    image: "/images/landing-pages/dental-implants/art/office01-d1051d16.jpg",
    eyebrow: "Patient Resources",
    title: "Everything You Need to Know",
    subtitle:
      "From your first consultation to post-operative care — we're with you every step of the way.",
    overlay: "navy",
  },
  "/for-patients/testimonials": {
    image: "/images/landing-pages/dental-implants/art/humans01-b16de30b.jpg",
    eyebrow: "Patient Reviews",
    title: "Hear from Our Patients",
    subtitle:
      "Over 312 five-star reviews from patients who trusted us with their smile.",
    overlay: "navy",
  },
  "/for-patients/faqs": {
    image: "/images/landing-pages/dental-implants/art/image-background01-40e6c20c.jpg",
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    subtitle:
      "Answers about dental implants, jaw surgery, bone grafting, cosmetics, recovery, costs, and financing.",
    overlay: "navy",
  },
  "/for-patients/consultation": {
    image: "/images/landing-pages/dental-implants/art/slider03-00325586.jpg",
    eyebrow: "Get Started Today",
    title: "Schedule Your Free Consultation",
    subtitle:
      "Includes a complimentary 3D CT scan, detailed treatment plan, and review of financing options — all at no cost.",
    overlay: "gradient",
  },
  "/for-patients/insights": {
    image: "/images/landing-pages/dental-implants/art/photograph01-lg-d1051d16.jpg",
    eyebrow: "Education & Insights",
    title: "Patient Education Articles",
    subtitle:
      "Stay informed with the latest in dental implants, oral surgery, and patient care.",
    overlay: "navy",
  },
  "/for-dentists": {
    image: "/images/landing-pages/dental-implants/art/service01-ff510575.jpg",
    eyebrow: "For Dental Professionals",
    title: "Partner with Us",
    subtitle:
      "Trusted by 100+ Northern California dentists. Streamlined referrals, same-day consultations, and exceptional outcomes for your patients.",
    overlay: "gradient",
  },
  "/contact": {
    image: "/images/landing-pages/dental-implants/art/slider05-62bb1ddc.jpg",
    eyebrow: "Get in Touch",
    title: "Contact Our Practice",
    subtitle:
      "Reach out to schedule a consultation or ask any questions. We're here to help.",
    overlay: "gradient",
  },
  "/media/videos": {
    image: "/images/landing-pages/dental-implants/art/slider03-00325586.jpg",
    eyebrow: "Media & Videos",
    title: "Watch Our Procedures",
    subtitle:
      "Educational videos showcasing our surgical techniques and patient outcomes.",
    overlay: "dark",
  },
  "/media/speaking": {
    image: "/images/landing-pages/dental-implants/art/image-background01-40e6c20c.jpg",
    eyebrow: "Speaking & Education",
    title: "Conference Presentations",
    subtitle:
      "Dr. Antipov shares expertise at national and international dental conferences.",
    overlay: "navy",
  },
};

export default heroContent;
