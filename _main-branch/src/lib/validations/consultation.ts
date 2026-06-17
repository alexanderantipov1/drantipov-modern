import { z } from "zod";

export const consultationFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  interest: z.enum([
    "Dental Implants",
    "Full-Arch Restoration",
    "Corrective Jaw Surgery",
    "Bone Grafting",
    "Sleep Apnea Surgery",
    "Wisdom Teeth Removal",
    "Other",
  ]),
  message: z
    .string()
    .min(10, "Please provide more details (at least 10 characters)")
    .max(2000)
    .optional()
    .or(z.literal("")),
  preferredContact: z.enum(["phone", "email"]).optional(),
  consent: z.literal(true).refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
  // Honeypot field for spam prevention (allow any value, check server-side)
  website: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;
