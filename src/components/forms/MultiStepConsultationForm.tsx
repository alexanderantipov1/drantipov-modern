"use client"

import { useState } from "react"
import { Loader2, CheckCircle, ArrowRight, ArrowLeft, Calendar, Clock, Phone, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTracking } from "@/components/TrackingProvider"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const RECAPTCHA_SITE_KEY = "6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg"

const US_STATES = [
  { value: "AL", label: "Alabama" }, { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" }, { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" }, { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" }, { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" }, { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" }, { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" }, { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" }, { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" }, { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" }, { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" }, { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" }, { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" }, { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" }, { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" }, { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" }, { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" }, { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" }, { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" }, { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" }, { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" }, { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" }, { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" }, { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" }, { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" }, { value: "WY", label: "Wyoming" },
]

const TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
]

interface FormData {
  currentSituation: string[]
  currentTreatments: string[]
  firstName: string
  lastName: string
  dob: string
  email: string
  phone: string
  street: string
  aptSuite: string
  city: string
  state: string
  zipCode: string
  paymentPlan: string
  ficoScore: string
  consultationReadiness: string
  assignedCenter: string
  appointmentDate: string
  appointmentTime: string
}

interface MultiStepConsultationFormProps {
  onClose?: () => void
  variant?: "modal" | "inline"
}

export function MultiStepConsultationForm({ onClose, variant = "modal" }: MultiStepConsultationFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitErrorMessage, setSubmitErrorMessage] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { getTrackingData } = useTracking()

  const [formData, setFormData] = useState<FormData>({
    currentSituation: [],
    currentTreatments: [],
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    street: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    paymentPlan: "",
    ficoScore: "",
    consultationReadiness: "",
    assignedCenter: "",
    appointmentDate: "",
    appointmentTime: "",
  })

  const totalSteps = 4

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const toggleCheckbox = (field: "currentSituation" | "currentTreatments", value: string) => {
    setFormData(prev => {
      const current = prev[field]
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      return { ...prev, [field]: updated }
    })
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const formatDobInput = (value: string) => {
    const digits = value.replace(/\D/g, "").substring(0, 8)
    if (digits.length <= 2) return digits
    if (digits.length <= 4) return `${digits.substring(0, 2)}/${digits.substring(2)}`
    return `${digits.substring(0, 2)}/${digits.substring(2, 4)}/${digits.substring(4)}`
  }

  const formatPhoneInput = (value: string) => {
    const digits = value.replace(/\D/g, "").substring(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.substring(0, 3)}) ${digits.substring(3)}`
    return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    switch (step) {
      case 1:
        if (formData.currentSituation.length === 0) newErrors.currentSituation = "Please select at least one option"
        if (formData.currentTreatments.length === 0) newErrors.currentTreatments = "Please select at least one option"
        break
      case 2:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.dob.trim()) {
          newErrors.dob = "Date of birth is required"
        } else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(formData.dob)) {
          newErrors.dob = "Please enter a valid date (MM/DD/YYYY)"
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email"
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required"
        } else {
          const phoneDigits = formData.phone.replace(/\D/g, "")
          if (phoneDigits.length < 10) newErrors.phone = "Please enter a valid 10-digit phone number"
        }
        break
      case 3:
        if (!formData.street.trim()) newErrors.street = "Street address is required"
        if (!formData.city.trim()) newErrors.city = "City is required"
        if (!formData.state) newErrors.state = "State is required"
        if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"
        if (!formData.paymentPlan) newErrors.paymentPlan = "Please select a payment option"
        if (formData.paymentPlan === "yes" && !formData.ficoScore) newErrors.ficoScore = "Please select your FICO score range"
        break
      case 4:
        if (!formData.consultationReadiness) newErrors.consultationReadiness = "Please select an option"
        if (formData.consultationReadiness === "yes") {
          if (!formData.assignedCenter) newErrors.assignedCenter = "Please select a location"
          if (!formData.appointmentDate) newErrors.appointmentDate = "Please select a date"
          if (!formData.appointmentTime) newErrors.appointmentTime = "Please select a time"
        }
        break
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateStep(currentStep)) return
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const getUrlParams = () => {
    if (typeof window === "undefined") return {}
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params: Record<string, string> = {}
    const trackingKeys = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term",
      "utm_content", "utm_id", "utm_location", "utm_adgroup",
      "utm_creative", "gclid", "fbclid",
    ]
    trackingKeys.forEach((key) => {
      const value = urlSearchParams.get(key)
      if (value) params[key] = value
    })
    return params
  }

  const formatDateForBackend = (dateString: string) => {
    if (!dateString) return ""
    const parts = dateString.split("/")
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      return `${parts[2]}-${parts[0].padStart(2, "0")}-${parts[1].padStart(2, "0")}`
    }
    return dateString
  }

  const generateRecaptchaToken = (): Promise<string> => {
    return new Promise((resolve) => {
      if (typeof window.grecaptcha === "undefined") { resolve(""); return }
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "form_submit" }).then(resolve).catch(() => resolve(""))
      })
    })
  }

  const submitForm = async () => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitErrorMessage("")
    try {
      const recaptchaToken = await generateRecaptchaToken()
      const urlParams = getUrlParams()
      const trackingData = getTrackingData()
      const backendData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dob: formatDateForBackend(formData.dob),
        email: formData.email,
        phone: formData.phone,
        streetAddress: formData.street,
        addressLine2: formData.aptSuite,
        city: formData.city,
        state: formData.state,
        zip: formData.zipCode,
        paymentOptions: String(formData.paymentPlan === "yes"),
        ficoScore: formData.ficoScore,
        damagedTeeth: String(formData.currentSituation.includes("damagedTeeth")),
        missingTeeth: String(formData.currentSituation.includes("missingTeeth")),
        gumDisease: String(formData.currentSituation.includes("gumDisease")),
        currentSmileNone: String(formData.currentSituation.includes("noneApply")),
        currentSolutionsNone: String(formData.currentTreatments.includes("none")),
        currentSolutionsImplants: String(formData.currentTreatments.includes("implants")),
        currentSolutionsBridgesCrowns: String(formData.currentTreatments.includes("bridgesCrowns")),
        currentSolutionsDentures: String(formData.currentTreatments.includes("dentures")),
        businessUnit: "Fusion Dental Implants",
        recaptchaToken,
        ...(formData.appointmentDate && formData.appointmentTime ? {
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime,
          assignedCenter: formData.assignedCenter,
        } : {}),
        ...trackingData,
        ...urlParams,
      }
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      })
      const responseData = await response.json().catch(() => null)
      if (response.ok && responseData?.success !== false) {
        setSubmitStatus("success")
        setCurrentStep(5)
      } else {
        const msg = responseData?.message || "Submission failed"
        setSubmitErrorMessage(msg)
        throw new Error(msg)
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = () => {
    if (!validateStep(4)) return
    submitForm()
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  const isInline = variant === "inline"

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all",
    isInline
      ? "border border-dark/10 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
      : "border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-primary"
  )

  const inputErrorClass = isInline ? "border-red-400" : "border-red-400"

  const CheckboxCard = ({ field, value, label }: { field: "currentSituation" | "currentTreatments"; value: string; label: string }) => {
    const isSelected = formData[field].includes(value)
    return (
      <button
        type="button"
        onClick={() => toggleCheckbox(field, value)}
        className={cn(
          "w-full flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200",
          isSelected
            ? "border-primary bg-primary/5"
            : isInline ? "border-dark/10 hover:border-dark/20 bg-white" : "border-gray-200 hover:border-gray-300 bg-white"
        )}
      >
        <div className={cn(
          "w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all",
          isSelected ? "border-primary bg-primary" : "border-gray-300"
        )}>
          {isSelected && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className={cn("text-sm font-medium", isSelected ? "text-dark" : "text-muted")}>{label}</span>
      </button>
    )
  }

  const RadioCard = ({ field, value, label, description }: { field: keyof FormData; value: string; label: string; description?: string }) => {
    const isSelected = formData[field] === value
    return (
      <button
        type="button"
        onClick={() => updateField(field, value)}
        className={cn(
          "w-full flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-200",
          isSelected
            ? "border-primary bg-primary/5"
            : isInline ? "border-dark/10 hover:border-dark/20 bg-white" : "border-gray-200 hover:border-gray-300 bg-white"
        )}
      >
        <div className={cn(
          "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all",
          isSelected ? "border-primary" : "border-gray-300"
        )}>
          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>
        <div>
          <span className={cn("text-sm font-medium", isSelected ? "text-dark" : "text-muted")}>{label}</span>
          {description && <p className="text-xs text-muted/70 mt-0.5">{description}</p>}
        </div>
      </button>
    )
  }

  if (currentStep === 5) {
    const hasAppointment = formData.appointmentDate && formData.appointmentTime
    return (
      <div className={cn("text-center", isInline ? "py-10" : "py-6")}>
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-9 h-9 text-primary" />
        </div>
        <h2 className={cn("font-bold text-dark mb-2", isInline ? "text-3xl" : "text-2xl")}>
          {hasAppointment ? "Booking Confirmed!" : "We'll Be In Touch!"}
        </h2>
        <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto mb-6">
          {hasAppointment
            ? "Your consultation has been scheduled. An appointment coordinator will contact you to confirm the details."
            : "Thank you for your interest! An appointment coordinator will contact you within 1 hour to discuss your options and provide personalized information."}
        </p>
        {hasAppointment && (
          <div className={cn("rounded-2xl p-5 mb-6 text-left max-w-sm mx-auto", isInline ? "bg-white border border-dark/5" : "bg-light")}>
            <h3 className="font-semibold text-dark flex items-center gap-2 text-sm mb-3">
              <Calendar className="h-4 w-4 text-primary" /> Appointment Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">Location</span><span className="font-medium text-dark">{formData.assignedCenter}</span></div>
              <div className="flex justify-between"><span className="text-muted">Date</span><span className="font-medium text-dark">{formData.appointmentDate}</span></div>
              <div className="flex justify-between"><span className="text-muted">Time</span><span className="font-medium text-dark">{formData.appointmentTime}</span></div>
            </div>
          </div>
        )}
        <div className={cn("rounded-2xl p-4 max-w-sm mx-auto mb-6", isInline ? "bg-white border border-dark/5" : "bg-light")}>
          <div className="flex items-center justify-center gap-2 text-sm text-muted">
            <Phone className="h-4 w-4 text-primary" />
            <span>Questions? Call</span>
            <a href="tel:+19167832110" className="text-primary font-semibold hover:underline">(916) 783-2110</a>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="px-8 py-3 bg-primary text-white rounded-2xl font-semibold text-sm hover:bg-primary-dark transition-colors">
            Done
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={cn(isInline ? "" : "max-h-[80vh] flex flex-col")}>
      <div className={cn(
        "mb-4 pb-4 border-b border-dark/5",
        isInline ? "" : "-mx-6 -mt-2 px-6 pt-5"
      )}>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-dark text-lg font-bold">Free Consultation Assessment</h3>
          <div className="flex items-center gap-1 bg-primary/5 rounded-lg px-2.5 py-1.5">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-dark text-xs font-bold">4.9</span>
            <span className="text-muted text-xs">(247)</span>
          </div>
        </div>
        <p className="text-muted text-xs">No pressure · No cost · Includes 3D CT Scan</p>
      </div>

      <div className="pb-3">
        <div className="flex items-center justify-between mb-2">
          {["Assessment", "Contact", "Address", "Schedule"].map((label, i) => (
            <span key={label} className={cn(
              "text-[10px] font-semibold uppercase tracking-wider transition-colors",
              currentStep === i + 1 ? "text-primary" : currentStep > i + 1 ? "text-primary/50" : "text-muted/30"
            )}>
              {label}
            </span>
          ))}
        </div>
        <div className="h-1.5 bg-dark/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        <p className="text-[11px] text-muted/60 mt-1.5 text-right font-medium">Step {currentStep} of {totalSteps}</p>
      </div>

      <div className={cn(isInline ? "" : "flex-1 overflow-y-auto pb-2")}>
        {currentStep === 1 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">Do any of these apply to you?</h3>
              <p className="text-xs text-muted mb-3">Select all that apply</p>
              <div className="space-y-2">
                <CheckboxCard field="currentSituation" value="missingTeeth" label="I have missing teeth" />
                <CheckboxCard field="currentSituation" value="damagedTeeth" label="My teeth are cracked, loose or failing" />
                <CheckboxCard field="currentSituation" value="gumDisease" label="I have gum or infection problems" />
                <CheckboxCard field="currentSituation" value="noneApply" label="None of the above" />
              </div>
              {errors.currentSituation && <p className="text-xs text-red-500 mt-2">{errors.currentSituation}</p>}
            </div>
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">Do you currently have any of the following?</h3>
              <p className="text-xs text-muted mb-3">Select all that apply</p>
              <div className="space-y-2">
                <CheckboxCard field="currentTreatments" value="dentures" label="Dentures or Partials" />
                <CheckboxCard field="currentTreatments" value="bridgesCrowns" label="Bridges or crowns" />
                <CheckboxCard field="currentTreatments" value="implants" label="Dental Implants already in place" />
                <CheckboxCard field="currentTreatments" value="none" label="None of the above" />
              </div>
              {errors.currentTreatments && <p className="text-xs text-red-500 mt-2">{errors.currentTreatments}</p>}
            </div>
            <p className="text-[10px] text-muted/60 leading-relaxed">
              By clicking &quot;Next,&quot; you consent to receive calls, texts, and emails from Dr. Antipov&apos;s practice regarding your inquiry and related promotions. Message and data rates may apply. You can opt out anytime by replying STOP or following the unsubscribe link. By proceeding, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">How can we reach you?</h3>
              <p className="text-xs text-muted mb-4">Your info is private and never shared.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5">First Name *</label>
                <input type="text" value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="Jane" className={cn(inputClass, errors.firstName && inputErrorClass)} />
                {errors.firstName && <p className="text-[11px] text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5">Last Name *</label>
                <input type="text" value={formData.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Smith" className={cn(inputClass, errors.lastName && inputErrorClass)} />
                {errors.lastName && <p className="text-[11px] text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Date of Birth *</label>
              <input type="text" placeholder="MM/DD/YYYY" value={formData.dob} onChange={(e) => updateField("dob", formatDobInput(e.target.value))} className={cn(inputClass, errors.dob && inputErrorClass)} />
              {errors.dob && <p className="text-[11px] text-red-500 mt-1">{errors.dob}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Phone Number *</label>
              <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", formatPhoneInput(e.target.value))} placeholder="(916) 555-0100" className={cn(inputClass, errors.phone && inputErrorClass)} />
              {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Email Address *</label>
              <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@email.com" className={cn(inputClass, errors.email && inputErrorClass)} />
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">Your Address</h3>
              <p className="text-xs text-muted mb-4">We use this to find the nearest office location.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Street Address *</label>
              <input type="text" value={formData.street} onChange={(e) => updateField("street", e.target.value)} placeholder="123 Main St" className={cn(inputClass, errors.street && inputErrorClass)} />
              {errors.street && <p className="text-[11px] text-red-500 mt-1">{errors.street}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Unit / Suite</label>
              <input type="text" value={formData.aptSuite} onChange={(e) => updateField("aptSuite", e.target.value)} placeholder="Apt 4B" className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5">City *</label>
                <input type="text" value={formData.city} onChange={(e) => updateField("city", e.target.value)} placeholder="Roseville" className={cn(inputClass, errors.city && inputErrorClass)} />
                {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark mb-1.5">State *</label>
                <select value={formData.state} onChange={(e) => updateField("state", e.target.value)} className={cn(inputClass, "appearance-none", errors.state && inputErrorClass, !formData.state && "text-muted")}>
                  <option value="">Select</option>
                  {US_STATES.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
                </select>
                {errors.state && <p className="text-[11px] text-red-500 mt-1">{errors.state}</p>}
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-dark mb-1.5">ZIP Code *</label>
              <input type="text" value={formData.zipCode} onChange={(e) => updateField("zipCode", e.target.value.replace(/\D/g, "").substring(0, 5))} placeholder="95678" className={cn(inputClass, errors.zipCode && inputErrorClass)} />
              {errors.zipCode && <p className="text-[11px] text-red-500 mt-1">{errors.zipCode}</p>}
            </div>
            <div className="pt-3 border-t border-dark/5">
              <h3 className="text-sm font-bold text-dark mb-1">Payment Options</h3>
              <p className="text-xs text-muted mb-3">Would you like to explore affordable payment options?</p>
              <div className="space-y-2">
                <RadioCard field="paymentPlan" value="no" label="I can pay for treatment upfront" />
                <RadioCard field="paymentPlan" value="yes" label="Yes, I'd like flexible payment options" />
              </div>
              {errors.paymentPlan && <p className="text-xs text-red-500 mt-2">{errors.paymentPlan}</p>}
              {formData.paymentPlan === "yes" && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-dark mb-2">Approximate FICO score? *</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["740+", "700-739", "660-699", "Below 660"].map((score) => (
                      <RadioCard key={score} field="ficoScore" value={score} label={score} />
                    ))}
                  </div>
                  {errors.ficoScore && <p className="text-xs text-red-500 mt-2">{errors.ficoScore}</p>}
                </div>
              )}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">Ready to Schedule?</h3>
              <p className="text-xs text-muted mb-4">Would you like to book a free consultation now?</p>
              <div className="space-y-2">
                <RadioCard field="consultationReadiness" value="yes" label="Yes, I'm ready to book" description="Choose a date, time, and location" />
                <RadioCard field="consultationReadiness" value="no" label="Not yet — contact me with more info" description="A coordinator will reach out within 1 hour" />
              </div>
              {errors.consultationReadiness && <p className="text-xs text-red-500 mt-2">{errors.consultationReadiness}</p>}
            </div>
            {formData.consultationReadiness === "yes" && (
              <div className="space-y-4 pt-3 border-t border-dark/5">
                <div>
                  <p className="text-xs font-semibold text-dark mb-2">Select Location *</p>
                  <div className="space-y-2">
                    <RadioCard field="assignedCenter" value="Roseville" label="Roseville, CA" />
                    <RadioCard field="assignedCenter" value="El Dorado Hills" label="El Dorado Hills, CA" />
                  </div>
                  {errors.assignedCenter && <p className="text-xs text-red-500 mt-2">{errors.assignedCenter}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1.5">Select Date *</label>
                  <input type="date" min={getMinDate()} value={formData.appointmentDate} onChange={(e) => updateField("appointmentDate", e.target.value)} className={cn(inputClass, errors.appointmentDate && inputErrorClass)} />
                  {errors.appointmentDate && <p className="text-[11px] text-red-500 mt-1">{errors.appointmentDate}</p>}
                </div>
                <div>
                  <p className="text-xs font-semibold text-dark mb-2">Select Time *</p>
                  {!formData.appointmentDate ? (
                    <div className={cn("rounded-xl p-4 text-center", isInline ? "bg-white border border-dark/5" : "bg-light")}>
                      <Clock className="h-6 w-6 mx-auto mb-1 text-muted/30" />
                      <p className="text-xs text-muted/50">Please select a date first</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-1.5">
                      {TIME_SLOTS.map((time) => (
                        <button key={time} type="button" onClick={() => updateField("appointmentTime", time)}
                          className={cn(
                            "py-2 px-2 text-xs rounded-lg border-2 transition-all font-medium",
                            formData.appointmentTime === time
                              ? "border-primary bg-primary/5 text-primary"
                              : isInline ? "border-dark/10 hover:border-dark/20 text-muted" : "border-gray-200 hover:border-gray-300 text-muted"
                          )}>
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                  {errors.appointmentTime && <p className="text-xs text-red-500 mt-2">{errors.appointmentTime}</p>}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-3">
          <p className="text-red-600 text-xs">
            {submitErrorMessage || "Something went wrong."} Please try again or call{" "}
            <a href="tel:+19167832110" className="font-semibold underline">(916) 783-2110</a>.
          </p>
        </div>
      )}

      <div className={cn("flex items-center gap-3 pt-4 border-t border-dark/5", isInline ? "mt-2" : "")}>
        {currentStep > 1 && (
          <button onClick={prevStep} className="flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold text-muted bg-light hover:bg-dark/5 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
        <button
          onClick={currentStep === 4 ? handleSubmit : nextStep}
          disabled={isSubmitting}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white transition-all",
            isSubmitting
              ? "bg-muted cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
          )}
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
          ) : currentStep === 4 ? (
            <>{formData.consultationReadiness === "yes" ? "Book Consultation" : "Submit"} <CheckCircle className="w-4 h-4" /></>
          ) : (
            <>Next <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </div>
      {currentStep === 4 && (
        <p className="text-center text-muted/50 text-[10px] mt-3">
          100% free consultation · No obligation · Includes complimentary CT scan
        </p>
      )}
    </div>
  )
}
