"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"
import { Loader2, CheckCircle } from "lucide-react"

export function ContactForm() {
  const pathname = usePathname()
  const isRu = pathname === "/ru" || pathname?.startsWith("/ru/")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const validationText = (field: keyof ContactFormData, message?: string) => {
    if (!isRu) return message
    return ({
      name: "Укажите имя (не менее 2 символов, не более 100)",
      email: "Укажите действительный адрес электронной почты",
      phone: "Укажите действительный номер телефона",
      subject: "Укажите тему (от 5 до 200 символов)",
      message: "Введите сообщение (от 10 до 1000 символов)",
    } as Partial<Record<keyof ContactFormData, string>>)[field] ?? message
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(isRu ? "Не удалось отправить сообщение. Попробуйте ещё раз или позвоните нам." : "Failed to send message. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
          {isRu ? "Сообщение отправлено!" : "Message Sent Successfully!"}
        </h3>
        <p className="text-neutral-600">
          {isRu ? "Спасибо за обращение. Мы свяжемся с вами в течение 24 часов." : "Thank you for contacting us. We'll get back to you within 24 hours."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{isRu ? "Имя и фамилия *" : "Full Name *"}</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder={isRu ? "Ваше имя" : "John Doe"}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{validationText("name", errors.name.message)}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">{isRu ? "Электронная почта *" : "Email Address *"}</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{validationText("email", errors.email.message)}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">{isRu ? "Телефон (необязательно)" : "Phone Number (Optional)"}</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="(916) 783-2110"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-sm text-red-600">{validationText("phone", errors.phone.message)}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">{isRu ? "Тема *" : "Subject *"}</Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder={isRu ? "Запись на консультацию" : "Consultation Request"}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-sm text-red-600">{validationText("subject", errors.subject.message)}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{isRu ? "Сообщение *" : "Message *"}</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder={isRu ? "Опишите вашу ситуацию или задайте вопрос..." : "Please describe your needs or questions..."}
          rows={6}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{validationText("message", errors.message.message)}</p>
        )}
      </div>

      {/* Referring Dentist Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isReferringDentist"
          {...register("isReferringDentist")}
          className="rounded border-neutral-300"
        />
        <Label htmlFor="isReferringDentist" className="font-normal cursor-pointer">
          {isRu ? "Я направляющий стоматолог" : "I am a referring dentist"}
        </Label>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {isRu ? "Отправляем..." : "Sending..."}
          </>
        ) : (
          isRu ? "Отправить сообщение" : "Send Message"
        )}
      </Button>

      <p className="text-sm text-neutral-500 text-center">
        {isRu ? "* Обязательные поля" : "* Required fields"}
      </p>
    </form>
  )
}
