"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

/* ------------------------------------------------------------------ */
/*  Data & Types                                                       */
/* ------------------------------------------------------------------ */

type Step = 0 | 1 | 2 | 3 | 4;

interface Treatment {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  baseLow: number;
  baseHigh: number;
  perArch: boolean; // multiplied by arch count
  showArch: boolean;
  showBone: boolean;
  category: "implant" | "surgery" | "cosmetic";
  monthly: number;
}

const treatments: Treatment[] = [
  {
    id: "single",
    label: "Single Tooth Implant",
    description: "Replace one missing tooth with a titanium implant, abutment, and zirconia crown",
    icon: <ToothIcon />,
    baseLow: 2100,
    baseHigh: 5500,
    perArch: false,
    showArch: false,
    showBone: true,
    category: "implant",
    monthly: 73,
  },
  {
    id: "multiple",
    label: "Multiple Teeth Implants",
    description: "Replace 2-5 missing teeth with implant-supported bridge — no removable denture",
    icon: <BridgeIcon />,
    baseLow: 4200,
    baseHigh: 12000,
    perArch: false,
    showArch: false,
    showBone: true,
    category: "implant",
    monthly: 146,
  },
  {
    id: "allon4",
    label: "All-on-4 Dental Implants",
    description: "Full arch of fixed teeth on 4 implants — new smile in one day with immediate loading",
    icon: <FullArchIcon />,
    baseLow: 21000,
    baseHigh: 28000,
    perArch: true,
    showArch: true,
    showBone: true,
    category: "implant",
    monthly: 349,
  },
  {
    id: "allon6",
    label: "All-on-6 Dental Implants",
    description: "Full arch on 6 implants for maximum stability — ideal for patients with adequate bone",
    icon: <FullArchIcon />,
    baseLow: 25000,
    baseHigh: 35000,
    perArch: true,
    showArch: true,
    showBone: true,
    category: "implant",
    monthly: 399,
  },
  {
    id: "zygomatic",
    label: "Zygomatic Implants",
    description: "No bone grafting needed — implants anchor in cheekbone for patients with severe bone loss",
    icon: <ZygomaticIcon />,
    baseLow: 28000,
    baseHigh: 40000,
    perArch: true,
    showArch: true,
    showBone: false,
    category: "implant",
    monthly: 449,
  },
  {
    id: "snapon",
    label: "Snap-On Dentures",
    description: "Removable overdenture that snaps onto 2-4 implants — affordable full arch solution",
    icon: <DentureIcon />,
    baseLow: 12000,
    baseHigh: 18000,
    perArch: true,
    showArch: true,
    showBone: true,
    category: "implant",
    monthly: 199,
  },
  {
    id: "jawsurgery",
    label: "Corrective Jaw Surgery",
    description: "Orthognathic surgery to fix bite, jaw alignment, or sleep apnea — often covered by insurance",
    icon: <JawIcon />,
    baseLow: 20000,
    baseHigh: 50000,
    perArch: false,
    showArch: false,
    showBone: false,
    category: "surgery",
    monthly: 349,
  },
  {
    id: "bonegraft",
    label: "Bone Grafting & Sinus Lift",
    description: "Organic bone grafting or sinus augmentation to rebuild bone before implant placement",
    icon: <BoneIcon />,
    baseLow: 800,
    baseHigh: 3000,
    perArch: false,
    showArch: false,
    showBone: false,
    category: "surgery",
    monthly: 99,
  },
  {
    id: "rhinoplasty",
    label: "Rhinoplasty",
    description: "Nose reshaping surgery — cosmetic or functional correction by board-certified surgeon",
    icon: <CosmeticIcon />,
    baseLow: 8000,
    baseHigh: 18000,
    perArch: false,
    showArch: false,
    showBone: false,
    category: "cosmetic",
    monthly: 199,
  },
  {
    id: "facelift",
    label: "Facelift & Facial Cosmetics",
    description: "Face lift, eyelid surgery, fillers, or facial feminization — full facial rejuvenation",
    icon: <CosmeticIcon />,
    baseLow: 5000,
    baseHigh: 25000,
    perArch: false,
    showArch: false,
    showBone: false,
    category: "cosmetic",
    monthly: 149,
  },
];

const archOptions = [
  { id: "upper", label: "Upper Arch", description: "Top jaw only", multiplier: 1 },
  { id: "lower", label: "Lower Arch", description: "Bottom jaw only", multiplier: 1 },
  { id: "both", label: "Both Arches", description: "Full mouth — best value", multiplier: 1.85, badge: "Save 7.5%" },
];

const boneOptions = [
  { id: "good", label: "Good Bone", description: "No prior bone loss — teeth recently lost or extracted", modifier: 0 },
  { id: "moderate", label: "Moderate Loss", description: "Some bone resorption — missing teeth for 1-5 years", modifier: 0.1 },
  { id: "severe", label: "Severe Loss", description: "Significant bone loss — long-term denture wear or periodontal disease", modifier: 0.2 },
  { id: "unsure", label: "Not Sure", description: "We'll assess bone density with a free 3D CT scan at consultation", modifier: 0.1 },
];

const addonOptions = [
  { id: "sedation", label: "IV Sedation", description: "Sleep comfortably through your procedure", price: 600 },
  { id: "bonegraft", label: "Bone Grafting", description: "Socket preservation or ridge augmentation", price: 1500 },
  { id: "sinus", label: "Sinus Lift", description: "Create space for upper jaw implants", price: 2500 },
  { id: "extractions", label: "Tooth Extractions", description: "Remove remaining damaged teeth", price: 1200 },
  { id: "temp", label: "Temporary Teeth", description: "Immediate provisional teeth during healing", price: 1500 },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ToothIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 4 7 7c0 2 .5 4 1 6 .5 2 1 4 1.5 5.5.3.9 1 1.5 2 1.5h1c1 0 1.7-.6 2-1.5C15 17 15.5 15 16 13c.5-2 1-4 1-6 0-3-2.5-5-5-5z" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 8v8m16-8v8M8 8v8m4-8v8m4-8v8" />
    </svg>
  );
}

function FullArchIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0115 0M6 12v4m4-4v4m4-4v4m4-4v4" />
    </svg>
  );
}

function ZygomaticIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-3 0-5.5 2-6.5 5L4 12l1 4c.5 2 2.5 4 5 5h4c2.5-1 4.5-3 5-5l1-4-1.5-4C17.5 5 15 3 12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14v3m6-3v3" />
    </svg>
  );
}

function DentureIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12a7 7 0 0114 0M5 12c0 3 2 6 7 6s7-3 7-6" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function JawIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 4 6 4 10c0 3 1 5 3 7l2 2c1 1 2 2 3 2s2-1 3-2l2-2c2-2 3-4 3-7 0-4-3.5-7-8-7z" />
    </svg>
  );
}

function BoneIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
    </svg>
  );
}

function CosmeticIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Calculator Component                                               */
/* ------------------------------------------------------------------ */

export default function PriceCalculator() {
  const [step, setStep] = useState<Step>(0);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [selectedArch, setSelectedArch] = useState<string | null>(null);
  const [selectedBone, setSelectedBone] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "implant" | "surgery" | "cosmetic">("all");

  const treatment = treatments.find((t) => t.id === selectedTreatment);
  const arch = archOptions.find((a) => a.id === selectedArch);
  const bone = boneOptions.find((b) => b.id === selectedBone);

  const filteredTreatments = categoryFilter === "all" ? treatments : treatments.filter((t) => t.category === categoryFilter);

  // Calculate price
  const calculatePrice = () => {
    if (!treatment) return { low: 0, high: 0 };

    let low = treatment.baseLow;
    let high = treatment.baseHigh;

    // Arch multiplier
    if (treatment.perArch && arch) {
      low = Math.round(low * arch.multiplier);
      high = Math.round(high * arch.multiplier);
    }

    // Bone condition modifier
    if (treatment.showBone && bone) {
      low = Math.round(low * (1 + bone.modifier));
      high = Math.round(high * (1 + bone.modifier));
    }

    // Addons
    const addonTotal = selectedAddons.reduce((sum, id) => {
      const addon = addonOptions.find((a) => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);

    low += addonTotal;
    high += addonTotal;

    return { low, high };
  };

  const { low, high } = calculatePrice();
  const monthlyLow = Math.round(low / 84);
  const monthlyHigh = Math.round(high / 84);
  const avgPrice = Math.round((low + high) / 2);

  // Navigation
  const getSteps = (): { label: string; num: Step }[] => {
    const steps: { label: string; num: Step }[] = [{ label: "Treatment", num: 0 }];
    if (treatment?.showArch) steps.push({ label: "Arch", num: 1 });
    if (treatment?.showBone) steps.push({ label: "Bone Health", num: 2 });
    steps.push({ label: "Options", num: 3 });
    steps.push({ label: "Your Estimate", num: 4 });
    return steps;
  };

  const visibleSteps = getSteps();

  const canProceed = () => {
    if (step === 0) return !!selectedTreatment;
    if (step === 1) return !!selectedArch || !treatment?.showArch;
    if (step === 2) return !!selectedBone || !treatment?.showBone;
    return true;
  };

  const goNext = () => {
    if (step === 0) {
      if (treatment?.showArch) setStep(1);
      else if (treatment?.showBone) setStep(2);
      else setStep(3);
    } else if (step === 1) {
      if (treatment?.showBone) setStep(2);
      else setStep(3);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const goBack = () => {
    if (step === 4) setStep(3);
    else if (step === 3) {
      if (treatment?.showBone) setStep(2);
      else if (treatment?.showArch) setStep(1);
      else setStep(0);
    } else if (step === 2) {
      if (treatment?.showArch) setStep(1);
      else setStep(0);
    } else if (step === 1) setStep(0);
  };

  const reset = () => {
    setStep(0);
    setSelectedTreatment(null);
    setSelectedArch(null);
    setSelectedBone(null);
    setSelectedAddons([]);
    setCategoryFilter("all");
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const currentStepIndex = visibleSteps.findIndex((s) => s.num === step);

  return (
    <section id="price-calculator" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Treatment <span className="gradient-text">Cost Estimator</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Get a personalized price estimate in 60 seconds. All-inclusive pricing with no hidden fees. 0% APR financing available up to 84 months. <strong className="text-dark">Price-match guarantee</strong> — your final cost is confirmed at your free consultation with a complimentary 3D CT scan.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {visibleSteps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentStepIndex > i
                      ? "bg-primary text-white"
                      : currentStepIndex === i
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : "bg-dark/10 text-muted"
                  }`}
                >
                  {currentStepIndex > i ? <CheckIcon /> : i + 1}
                </div>
                {i < visibleSteps.length - 1 && (
                  <div className="hidden sm:block w-16 md:w-24 lg:w-32 h-1 mx-2 rounded-full bg-dark/10 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: currentStepIndex > i ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {visibleSteps.map((s) => (
              <span key={s.num} className="text-xs text-muted font-medium hidden sm:block">
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            {/* STEP 0: Treatment Selection */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-dark mb-2">What treatment are you considering?</h3>
                <p className="text-muted text-sm mb-6">Select the procedure you&apos;re interested in. Not sure? Choose the closest match — we&apos;ll refine at your free consultation.</p>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(["all", "implant", "surgery", "cosmetic"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        categoryFilter === cat
                          ? "bg-primary text-white"
                          : "bg-dark/5 text-muted hover:bg-dark/10"
                      }`}
                    >
                      {cat === "all" ? "All Treatments" : cat === "implant" ? "Dental Implants" : cat === "surgery" ? "Oral Surgery" : "Facial Cosmetic"}
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {filteredTreatments.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setSelectedTreatment(t.id);
                        // Reset dependent selections when treatment changes
                        if (!t.showArch) setSelectedArch(null);
                        if (!t.showBone) setSelectedBone(null);
                      }}
                      className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 group ${
                        selectedTreatment === t.id
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                          : "border-dark/10 hover:border-primary/30 hover:bg-primary/[0.02]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            selectedTreatment === t.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                          }`}
                        >
                          {t.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-dark text-sm">{t.label}</div>
                          <div className="text-muted text-xs mt-1 leading-relaxed">{t.description}</div>
                          <div className="text-primary font-bold text-xs mt-2">
                            From ${t.baseLow.toLocaleString()}{t.perArch ? "/arch" : ""} <span className="text-muted font-normal">| ${t.monthly}/mo</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 1: Arch Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-dark mb-2">Which arch needs treatment?</h3>
                <p className="text-muted text-sm mb-6">
                  Select the jaw that needs {treatment?.label || "treatment"}. Treating both arches together saves up to 7.5% compared to separate procedures.
                </p>

                <div className="space-y-3">
                  {archOptions.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedArch(a.id)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                        selectedArch === a.id
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                          : "border-dark/10 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-dark flex items-center gap-2">
                            {a.label}
                            {a.badge && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                                {a.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-muted text-sm mt-1">{a.description}</div>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <div className="text-primary font-bold">
                            ${Math.round((treatment?.baseLow || 0) * a.multiplier).toLocaleString()} — ${Math.round((treatment?.baseHigh || 0) * a.multiplier).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Bone Condition */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-dark mb-2">How is your jawbone health?</h3>
                <p className="text-muted text-sm mb-6">
                  Bone density affects implant planning. Don&apos;t worry if you&apos;re not sure — Dr. Antipov will assess your bone with a complimentary 3D CT scan at your consultation.
                </p>

                <div className="space-y-3">
                  {boneOptions.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBone(b.id)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                        selectedBone === b.id
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                          : "border-dark/10 hover:border-primary/30"
                      }`}
                    >
                      <div className="font-bold text-dark">{b.label}</div>
                      <div className="text-muted text-sm mt-1">{b.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Additional Options */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-dark mb-2">Additional options (optional)</h3>
                <p className="text-muted text-sm mb-6">
                  These common add-on services may apply to your case. Select any that you think you may need, or skip this step — Dr. Antipov will recommend only what&apos;s necessary.
                </p>

                <div className="space-y-3">
                  {addonOptions.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                        selectedAddons.includes(a.id)
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                          : "border-dark/10 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                              selectedAddons.includes(a.id)
                                ? "bg-primary border-primary text-white"
                                : "border-dark/20"
                            }`}
                          >
                            {selectedAddons.includes(a.id) && <CheckIcon />}
                          </div>
                          <div>
                            <div className="font-bold text-dark text-sm">{a.label}</div>
                            <div className="text-muted text-xs mt-0.5">{a.description}</div>
                          </div>
                        </div>
                        <div className="text-primary font-bold text-sm shrink-0 ml-4">
                          +${a.price.toLocaleString()}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-xs text-muted mt-4 text-center">
                  All add-on pricing is approximate. Exact costs confirmed at your free consultation.
                </p>
              </motion.div>
            )}

            {/* STEP 4: Results */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Estimate Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark to-secondary p-8 sm:p-10 text-white mb-8">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,187,156,0.2),transparent_60%)]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-white/60 text-sm font-medium">Your Personalized Estimate</span>
                    </div>

                    <div className="mb-6">
                      <div className="text-white/60 text-sm mb-1">Estimated Treatment Cost</div>
                      <div className="text-5xl sm:text-6xl font-bold tracking-tight">
                        ${low.toLocaleString()} <span className="text-2xl text-white/40">—</span> ${high.toLocaleString()}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white/50 text-xs mb-1">Treatment</div>
                        <div className="font-bold text-sm">{treatment?.label}</div>
                      </div>
                      {selectedArch && (
                        <div className="bg-white/10 rounded-2xl p-4">
                          <div className="text-white/50 text-xs mb-1">Arch</div>
                          <div className="font-bold text-sm">{arch?.label}</div>
                        </div>
                      )}
                      {selectedBone && (
                        <div className="bg-white/10 rounded-2xl p-4">
                          <div className="text-white/50 text-xs mb-1">Bone Health</div>
                          <div className="font-bold text-sm">{bone?.label}</div>
                        </div>
                      )}
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="bg-white/10 rounded-2xl p-4 mb-6">
                        <div className="text-white/50 text-xs mb-2">Additional Services</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedAddons.map((id) => {
                            const addon = addonOptions.find((a) => a.id === id);
                            return (
                              <span key={id} className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">
                                {addon?.label} (+${addon?.price.toLocaleString()})
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Financing */}
                    <div className="bg-primary/20 border border-primary/30 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-sm">Flexible Financing Available</span>
                      </div>
                      <div className="text-white/80 text-sm">
                        As low as <span className="text-primary font-bold text-lg">${treatment?.monthly || monthlyLow}</span>/month with 0% APR financing for qualified patients (up to 84 months). CareCredit, LendingClub, and in-house payment plans accepted. HSA/FSA welcome.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison */}
                <div className="bg-light rounded-3xl p-6 sm:p-8 mb-8">
                  <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    How We Compare
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white">
                      <span className="text-sm font-medium text-dark">Dr. Antipov (Roseville)</span>
                      <span className="text-primary font-bold text-sm">${low.toLocaleString()} — ${high.toLocaleString()}</span>
                    </div>
                    {treatment?.category === "implant" && (
                      <>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white">
                          <span className="text-sm font-medium text-muted">National Chain (ClearChoice)</span>
                          <span className="text-muted font-bold text-sm">${Math.round(avgPrice * 1.3).toLocaleString()} — ${Math.round(avgPrice * 1.8).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white">
                          <span className="text-sm font-medium text-muted">Corporate Center (Nuvia)</span>
                          <span className="text-muted font-bold text-sm">${Math.round(avgPrice * 1.2).toLocaleString()} — ${Math.round(avgPrice * 1.6).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white">
                          <span className="text-sm font-medium text-muted">University / Teaching Hospital</span>
                          <span className="text-muted font-bold text-sm">${Math.round(avgPrice * 0.7).toLocaleString()} — ${Math.round(avgPrice * 1.0).toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted mt-3">
                    *Comparison based on 2026 national averages. Dr. Antipov offers board-certified expertise at competitive private-practice pricing with no corporate overhead.
                  </p>
                </div>

                {/* What's Included */}
                <div className="bg-light rounded-3xl p-6 sm:p-8 mb-8">
                  <h4 className="font-bold text-dark mb-4">All-Inclusive — What&apos;s Included</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Free 3D CT Scan & Consultation",
                      "Digital Treatment Planning",
                      "Implant Fixtures & Abutments",
                      "All Surgical Procedures",
                      "IV Sedation (if selected)",
                      "Temporary Prosthetic Teeth",
                      "Final Zirconia Restoration",
                      "All Follow-Up Visits",
                      "Comprehensive Lifetime Warranty",
                      "Price-Match Guarantee",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="text-primary shrink-0"><CheckIcon /></div>
                        <span className="text-sm text-dark">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center space-y-4">
                  <ConsultationModal>
                    <button
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 pulse-glow cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      Book Free Consultation — Confirm Your Price
                    </button>
                  </ConsultationModal>
                  <div className="flex items-center justify-center gap-4">
                    <a href="tel:9167832110" className="text-primary font-semibold text-sm hover:underline">
                      Or call (916) 783-2110
                    </a>
                    <span className="text-muted">|</span>
                    <button onClick={reset} className="text-muted text-sm hover:text-dark transition-colors">
                      Start Over
                    </button>
                  </div>
                  <p className="text-xs text-muted max-w-lg mx-auto">
                    This estimate is for informational purposes only and does not constitute a treatment plan or guarantee of pricing. Your actual cost will be determined after a clinical examination and complimentary 3D CT scan with Dr. Antipov. Most PPO dental insurance accepted — typical coverage $1,000–$3,000/year toward implants. 0% APR financing for qualified patients up to 84 months. HSA &amp; FSA accepted.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark/10">
            <button
              onClick={goBack}
              disabled={step === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                step === 0
                  ? "text-muted/40 cursor-not-allowed"
                  : "text-dark hover:bg-dark/5"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back
            </button>

            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                canProceed()
                  ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                  : "bg-dark/10 text-muted cursor-not-allowed"
              }`}
            >
              {step === 3 ? "See My Estimate" : "Next"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
