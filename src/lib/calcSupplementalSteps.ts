/**
 * Supplemental (client-side only) funnel steps for DentalPrice packages that
 * currently ship with ZERO "choice" steps in the DentalPrice dashboard - as of
 * 2026-07 this is true for "Zirconia Teeth" and "Snap-in Denture", whose
 * steps-config only contains Insurance -> Payment -> Contact Form (no
 * procedure questions at all).
 *
 * These steps are NOT priced (all components are $0 / can_be_free) - we do
 * NOT know the practice's real zirconia/snap-in treatment pricing, and it
 * would be irresponsible to invent dollar figures that could end up in a
 * quote emailed to a real patient. Once real pricing exists for these two
 * packages (added via DentalPrice dashboard -> Packages -> [package] ->
 * Configure Components), a priced "Treatment Selection" step should be added
 * there the same way "Implant Selection" exists for All-on-4/6/8, and these
 * placeholder steps can be trimmed back or left as complementary questions.
 *
 * Until then, this closes the immediate gap the user flagged: these two
 * calculators jumped straight to Insurance with no procedure questions at
 * all. Content mirrors the free/no-cost steps already used on the All-on-4
 * funnel (Diagnostics & Planning, Sedation & Anesthesia, Your Timeline) plus
 * one step specific to each treatment.
 */

interface Comp {
  id: string;
  name: string;
  description?: string;
  price: number;
  can_be_free?: boolean;
  is_default?: boolean;
  auto_included?: boolean;
  is_available?: boolean;
  extra_data?: Record<string, unknown>;
}
interface Step {
  id: string;
  name: string;
  description?: string;
  is_required?: boolean;
  single_selection?: boolean;
  require_selection?: boolean;
  component_type: string;
  components: Comp[];
}

const diagnostics: Step = {
  id: "supp_diagnostics",
  name: "Diagnostics & Planning",
  description:
    "Your essential first step toward your new smile. Before we can confirm your exact treatment plan and final cost, we need to understand your unique situation.",
  is_required: false,
  single_selection: false,
  component_type: "choice",
  components: [
    {
      id: "supp_doctor_consult",
      name: "👨‍⚕️ Doctor Consultation",
      description: "One-on-one with your implant specialist to review your goals and oral health.",
      price: 0,
      can_be_free: true,
      is_available: true,
    },
    {
      id: "supp_ct_scan",
      name: "🩻 CT Scan",
      description: "3D view of your jaw to check bone volume and plan implant placement precisely.",
      price: 0,
      can_be_free: true,
      is_available: true,
    },
    {
      id: "supp_digital_scan",
      name: "🖥️ Digital Scan / Impression",
      description: "A quick, painless digital model of your mouth used to design your custom restoration.",
      price: 0,
      can_be_free: true,
      is_available: true,
    },
  ],
};

const archCoverage: Step = {
  id: "supp_arch",
  name: "Arch Coverage",
  description: "Which arch (or arches) do you need treated?",
  is_required: true,
  single_selection: true,
  require_selection: true,
  component_type: "choice",
  components: [
    { id: "supp_arch_upper", name: "Upper Arch Only", price: 0, can_be_free: true, is_available: true },
    { id: "supp_arch_lower", name: "Lower Arch Only", price: 0, can_be_free: true, is_available: true },
    { id: "supp_arch_both", name: "Both Arches (Upper + Lower)", price: 0, can_be_free: true, is_available: true },
  ],
};

const sedation: Step = {
  id: "supp_sedation",
  name: "Sedation & Anesthesia",
  description: "Comfort and anxiety control options to match your needs and procedure complexity.",
  is_required: false,
  single_selection: false,
  component_type: "choice",
  components: [
    {
      id: "supp_local_anesthesia",
      name: "Local Anesthesia",
      description: "Numbs the treatment area for pain-free placement.",
      price: 0,
      can_be_free: true,
      is_available: true,
    },
    {
      id: "supp_iv_sedation",
      name: "Intravenous Sedation",
      description: "Deep relaxation or full sleep during treatment - ideal for longer visits or higher anxiety.",
      price: 0,
      can_be_free: true,
      is_available: true,
    },
  ],
};

const timeline: Step = {
  id: "supp_timeline",
  name: "📆 Your Timeline",
  description: "When would you like to begin treatment? This helps us customize your plan.",
  is_required: false,
  single_selection: true,
  require_selection: true,
  component_type: "choice",
  components: [
    { id: "supp_timeline_today", name: "📆 Ready to schedule today", price: 0, is_available: true },
    { id: "supp_timeline_month", name: "🦷 Within next month", price: 0, is_available: true },
    { id: "supp_timeline_researching", name: "⁉️ Just researching options", price: 0, is_available: true },
    { id: "supp_timeline_pricing", name: "＄Depends on pricing", price: 0, is_available: true },
  ],
};

const zirconiaShade: Step = {
  id: "supp_shade",
  name: "Shade & Finish Preference",
  description: "Your final teeth can be shaded to match your natural teeth or brightened for a fuller smile makeover.",
  is_required: false,
  single_selection: true,
  require_selection: false,
  component_type: "choice",
  components: [
    { id: "supp_shade_natural", name: "Natural Shade Match", price: 0, can_be_free: true, is_available: true },
    { id: "supp_shade_bright", name: "Bright White", price: 0, can_be_free: true, is_available: true },
    { id: "supp_shade_doctor", name: "Let the Doctor Recommend", price: 0, can_be_free: true, is_available: true },
  ],
};

const dentureStatus: Step = {
  id: "supp_denture_status",
  name: "Current Denture Status",
  description: "This helps us understand where you are in the process.",
  is_required: false,
  single_selection: true,
  require_selection: false,
  component_type: "choice",
  components: [
    { id: "supp_denture_have", name: "I already wear a removable denture", price: 0, can_be_free: true, is_available: true },
    { id: "supp_denture_extract", name: "I need teeth extracted first", price: 0, can_be_free: true, is_available: true },
    { id: "supp_denture_none", name: "I don't have a denture yet", price: 0, can_be_free: true, is_available: true },
  ],
};

/**
 * Sentinel step marking where the real DentalPrice treatment step(s) - e.g.
 * "Final Teeth - Material" for zirconia-teeth - should be inserted among the
 * supplemental (client-side) steps below. ApiFunnel splits the supplemental
 * array on this marker's id and splices the live DentalPrice steps in at
 * that exact position; system steps (Insurance/Financing/Contact form)
 * always stay at the very end regardless of the marker. If a package's
 * array has no marker, the DentalPrice steps are simply appended after all
 * supplemental steps (previous/default behavior).
 */
export const DENTALPRICE_STEPS_MARKER = "__dentalprice_core_steps__";
const dentalPriceStepsHere: Step = {
  id: DENTALPRICE_STEPS_MARKER,
  name: "",
  component_type: "__marker__",
  components: [],
};

const SUPPLEMENTAL: Record<string, Step[]> = {
  // Diagnostics -> Arch -> Shade -> [Final Teeth - Material from DentalPrice] -> Sedation -> Timeline
  "zirconia-teeth": [diagnostics, archCoverage, zirconiaShade, dentalPriceStepsHere, sedation, timeline],
  // Diagnostics -> Arch -> Denture Status -> [Prosthesis Options from DentalPrice] -> Sedation -> Timeline
  "snap-in-denture": [diagnostics, archCoverage, dentureStatus, dentalPriceStepsHere, sedation, timeline],
};

export function getSupplementalSteps(slug: string): Step[] {
  return SUPPLEMENTAL[slug] || [];
}
