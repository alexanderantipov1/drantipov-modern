"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { consultationFormSchema, type ConsultationFormData } from "@/lib/validations/consultation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      preferredContact: "email",
    },
  })

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register("website")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Interest Select */}
      <div className="space-y-2">
        <Label htmlFor="interest">
          I'm Interested In <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("interest", value as any)}>
          <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
            <SelectValue placeholder="Select a procedure" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Dental Implants">Dental Implants</SelectItem>
            <SelectItem value="Full-Arch Restoration">Full-Arch Restoration (All-on-X)</SelectItem>
            <SelectItem value="Corrective Jaw Surgery">Corrective Jaw Surgery</SelectItem>
            <SelectItem value="Bone Grafting">Bone Grafting</SelectItem>
            <SelectItem value="Sleep Apnea Surgery">Sleep Apnea Surgery</SelectItem>
            <SelectItem value="Wisdom Teeth Removal">Wisdom Teeth Removal</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.interest && (
          <p className="text-sm text-red-500">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Situation (Optional)</Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Share any details about your dental concerns, questions, or goals..."
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div className="space-y-2">
        <Label>Preferred Contact Method <span className="text-red-500">*</span></Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              {...register("preferredContact")}
              className="w-4 h-4 text-primary-600"
            />
            <span className="text-sm text-neutral-700">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              {...register("preferredContact")}
              className="w-4 h-4 text-primary-600"
            />
            <span className="text-sm text-neutral-700">Phone</span>
          </label>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded"
          />
          <span className="text-sm text-neutral-700">
            I agree to the{" "}
            <Link href="/legal/privacy-policy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted about my inquiry. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-red-500">{errors.consent.message}</p>
        )}
      </div>

      {/* Security Notice */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        <p className="text-xs text-neutral-600">
          🔒 <strong>Your privacy is important to us.</strong> We follow best practices for data security.
          This form does NOT collect medical records or protected health information (PHI). We will only use
          your contact information to respond to your consultation request.
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Schedule Consultation"
        )}
      </Button>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-green-900">Thank you for your consultation request!</p>
            <p className="text-sm text-green-700">
              We've received your information and will contact you within 24 hours to schedule your consultation.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-red-900">Oops! Something went wrong.</p>
            <p className="text-sm text-red-700">
              Please try again or call us directly at (916) 783-2110.
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
