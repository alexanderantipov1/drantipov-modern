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

interface ConsultationFormProps {
  locale?: "en" | "ru"
  treatment?: string
  category?: "implant" | "cosmetic"
}

export function ConsultationForm({ locale = "en", treatment, category }: ConsultationFormProps = {}) {
  const isRu = locale === "ru"
  const tr = (en: string, ru: string) => isRu ? ru : en
  // Keep the existing API enum. The specific service is delivered in the
  // existing message field, which the notification route already persists.
  const treatmentPrefix = treatment ? `${isRu ? "Направление" : "Treatment"}: ${treatment}\n\n` : ""
  const validationText = (message?: string) => isRu
    ? "Проверьте поле: укажите корректные данные."
    : message
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
      ...(treatment ? { interest: category === "implant" ? "Dental Implants" as const : "Other" as const } : {}),
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
        body: JSON.stringify(treatment ? { ...data, message: `${treatmentPrefix}${data.message ?? ""}` } : data),
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
            {tr("First Name", "Имя")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{validationText(errors.firstName.message)}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">
            {tr("Last Name", "Фамилия")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{validationText(errors.lastName.message)}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            {tr("Email", "Электронная почта")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{validationText(errors.email.message)}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            {tr("Phone", "Телефон")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{validationText(errors.phone.message)}</p>
          )}
        </div>
      </div>

      {/* Interest Select */}
      {treatment ? (
        <div className="space-y-2">
          <Label htmlFor="service-treatment">{tr("Treatment", "Направление обращения")}</Label>
          <Input id="service-treatment" value={treatment} readOnly />
          <input type="hidden" {...register("interest")} />
        </div>
      ) : (
      <div className="space-y-2">
        <Label htmlFor="interest">
          {tr("I'm Interested In", "Что вас интересует")} <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("interest", value as ConsultationFormData["interest"])}>
          <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
            <SelectValue placeholder={tr("Select a procedure", "Выберите направление")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Dental Implants">{tr("Dental Implants", "Имплантация зубов")}</SelectItem>
            <SelectItem value="Full-Arch Restoration">{tr("Full-Arch Restoration (All-on-X)", "Восстановление зубного ряда (All-on-X)")}</SelectItem>
            <SelectItem value="Corrective Jaw Surgery">{tr("Corrective Jaw Surgery", "Коррекция челюстей")}</SelectItem>
            <SelectItem value="Bone Grafting">{tr("Bone Grafting", "Костная пластика")}</SelectItem>
            <SelectItem value="Sleep Apnea Surgery">{tr("Sleep Apnea Surgery", "Хирургическое лечение апноэ сна")}</SelectItem>
            <SelectItem value="Wisdom Teeth Removal">{tr("Wisdom Teeth Removal", "Удаление зубов мудрости")}</SelectItem>
            <SelectItem value="Other">{tr("Other", "Другое")}</SelectItem>
          </SelectContent>
        </Select>
        {errors.interest && (
          <p className="text-sm text-red-500">{validationText(errors.interest.message)}</p>
        )}
      </div>
      )}

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{tr("Tell Us About Your Situation (Optional)", "Ваш вопрос или пожелания (необязательно)")}</Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          maxLength={treatment ? 2000 - treatmentPrefix.length : undefined}
          placeholder={isRu ? "Что вы хотите обсудить на консультации? Не указывайте медицинские документы или конфиденциальные сведения." : "Share any details about your dental concerns, questions, or goals..."}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{validationText(errors.message.message)}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div className="space-y-2">
        <Label>{tr("Preferred Contact Method", "Предпочтительный способ связи")} <span className="text-red-500">*</span></Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              {...register("preferredContact")}
              className="w-4 h-4 text-primary-600"
            />
            <span className="text-sm text-neutral-700">{tr("Email", "Электронная почта")}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              {...register("preferredContact")}
              className="w-4 h-4 text-primary-600"
            />
            <span className="text-sm text-neutral-700">{tr("Phone", "Телефон")}</span>
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
            {tr("I agree to the", "Я принимаю")}{" "}
            <Link href={isRu ? "/ru/legal/privacy-policy" : "/legal/privacy-policy"} className="text-primary-600 hover:underline">
              {tr("Privacy Policy", "Политику конфиденциальности")}
            </Link>{" "}
            {tr("and consent to being contacted about my inquiry.", "и согласен(на) на связь со мной по моему обращению.")} <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-red-500">{isRu ? "Для отправки необходимо ваше согласие." : errors.consent.message}</p>
        )}
      </div>

      {/* Security Notice */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        <p className="text-xs text-neutral-600">
          {isRu ? <>Не отправляйте через форму медицинские документы или конфиденциальные сведения о здоровье. Контактные данные нужны для ответа на ваш запрос.</> : <>🔒 <strong>Your privacy is important to us.</strong> We follow best practices for data security.
          This form does NOT collect medical records or protected health information (PHI). We will only use
          your contact information to respond to your consultation request.</>}
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
            {tr("Submitting...", "Отправляем…")}
          </>
        ) : (
          tr("Schedule Consultation", "Отправить запрос на консультацию")
        )}
      </Button>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div role="status" className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-green-900">{tr("Thank you for your consultation request!", "Спасибо! Запрос отправлен.")}</p>
            <p className="text-sm text-green-700">
              {tr("We've received your information and will contact you within 24 hours to schedule your consultation.", "Клиника свяжется с вами для уточнения деталей. Дата консультации ещё не подтверждена.")}
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-red-900">{tr("Oops! Something went wrong.", "Не удалось отправить запрос.")}</p>
            <p className="text-sm text-red-700">
              {tr("Please try again or call us directly at (916) 783-2110.", "Попробуйте ещё раз или позвоните в клинику: (916) 783-2110.")}
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
