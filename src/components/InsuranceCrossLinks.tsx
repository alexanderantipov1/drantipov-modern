"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface InsurancePlan {
  slug: string
  name: string
  blurb: string
}

const INSURANCE_PLANS: InsurancePlan[] = [
  {
    slug: "aetna",
    name: "Aetna",
    blurb: "How Aetna PPO benefits apply to dental implants and oral surgery.",
  },
  {
    slug: "anthem-blue-cross",
    name: "Anthem Blue Cross",
    blurb: "Anthem Blue Cross coverage for implants, extractions, and jaw surgery.",
  },
  {
    slug: "delta-dental",
    name: "Delta Dental",
    blurb: "Delta Dental implant and surgical coverage explained.",
  },
]

interface InsuranceCrossLinksProps {
  /** Slug of the current insurance page, excluded from the list. */
  currentSlug: string
  locale?: "en" | "ru"
}

export default function InsuranceCrossLinks({ currentSlug, locale = "en" }: InsuranceCrossLinksProps) {
  const pathname = usePathname()
  // The shared card is used directly by RU insurance routes without an explicit locale.
  const isRu = locale === "ru" || pathname === "/ru" || pathname?.startsWith("/ru/")
  const others = INSURANCE_PLANS.filter((plan) => plan.slug !== currentSlug)
  if (others.length === 0) return null

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
        {isRu ? "Другие страховые планы, с которыми мы работаем" : "Other insurance plans we work with"}
      </h2>
      <p className="text-neutral-600 mb-8">
        {isRu ? "Другая страховая компания? Мы проверяем покрытие и подаём заявки по большинству крупных планов PPO." : "Have a different carrier? We verify benefits and submit claims for most major PPO plans."}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {others.map((plan) => (
          <Link
            key={plan.slug}
            href={`${isRu ? "/ru" : ""}/insurance/${plan.slug}`}
            className="group flex flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
              {plan.name}
            </h3>
            <p className="mt-2 text-neutral-600 leading-7">{isRu ? ({
              aetna: "Как полис Aetna PPO покрывает имплантацию и челюстно-лицевые операции.",
              "anthem-blue-cross": "Покрытие Anthem Blue Cross для имплантации, удаления зубов и операций на челюстях.",
              "delta-dental": "Покрытие имплантации и хирургического лечения по полису Delta Dental.",
            } as Record<string, string>)[plan.slug] : plan.blurb}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
              {isRu ? `Узнать о покрытии ${plan.name}` : `View ${plan.name} coverage`}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
