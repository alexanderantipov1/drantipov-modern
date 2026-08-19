import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import DualCTA from "@/components/DualCTA";
import InsuranceCrossLinks from "@/components/InsuranceCrossLinks";

export const metadata: Metadata = {
  title: "Delta Dental - покрытие имплантов и хирургии",
  description:
    "Как стоматологическая страховка Delta Dental применяется к зубным имплантам, челюстно-лицевой и ортогнатической хирургии у доктора Антипова. Внесетевое покрытие, предварительное согласование и помощь с возмещением.",
  alternates: {
    canonical: "/ru/insurance/delta-dental",
    languages: {
      ru: "/ru/insurance/delta-dental",
      en: "/insurance/delta-dental",
      "x-default": "/insurance/delta-dental",
    },
  },
  openGraph: {
    title: "Покрытие Delta Dental",
    description: "Страховка Delta Dental для зубных имплантов, челюстно-лицевой и ортогнатической хирургии.",
    locale: "ru_RU",
    images: [
      {
        url: "/images/financial/insurance-coverage.jpg",
        width: 1200,
        height: 630,
        alt: "Покрытие Delta Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Покрытие Delta Dental",
    description: "Страховка Delta Dental для зубных имплантов, челюстно-лицевой и ортогнатической хирургии.",
    images: ["/images/financial/insurance-coverage.jpg"],
  }
};

export default function DeltaDentalPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg" alt="Покрытие Delta Dental" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Хлебные крошки" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/ru/insurance" className="hover:text-primary-light">Страховка</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Delta Dental</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Delta Dental of California</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Delta Dental и доктор Антипов
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Доктор Антипов - внесетевой (out-of-network) провайдер для Delta Dental. Пациенты с планами PPO обычно получают частичное возмещение. Наш координатор по страховке берёт на себя предварительное согласование и подачу заявлений - бесплатно для вас.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Что Delta Dental обычно покрывает</h2>
            <ul className="space-y-3 text-neutral-700 leading-7">
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span>Базовые удаления зубов и челюстно-лицевая хирургия (частичное покрытие, в пределах годового максимума)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span>Костная пластика по медицинским показаниям (зависит от плана)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">~</span>Установка зубных имплантов (зависит - некоторые планы покрывают, большинство нет)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">~</span>Ортогнатическая хирургия (медицинская, не стоматологическая - покрывается по медицинским показаниям)</li>
              <li className="flex gap-3"><span className="text-primary-600 font-bold">✗</span>Косметические процедуры (удаление родинок, подтяжки, филлеры - не покрываются)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Чем мы помогаем</h2>
            <ul className="space-y-3 text-neutral-700 leading-7">
              <li><strong>Проверка покрытия:</strong> Мы сами звоним в Delta Dental, чтобы уточнить ваши конкретные бенефиты и остаток годового максимума.</li>
              <li><strong>Предварительное согласование:</strong> Для крупных случаев мы подаём предварительные расчёты, чтобы заранее подтвердить покрытие.</li>
              <li><strong>Подача заявлений:</strong> Мы подаём все заявления в электронном виде. Вам не нужно заполнять бланки.</li>
              <li><strong>Внесетевое возмещение:</strong> Большинство PPO-планов выплачивают вам напрямую 50–80% от разрешённых сумм.</li>
              <li><strong>Дополнительное финансирование:</strong> CareCredit и Lending Club покрывают ту часть, которую не берёт на себя страховка.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-primary-600/20 bg-light p-8">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">Возьмите страховую карту на консультацию</h3>
            <p className="text-neutral-700 leading-7">
              Нам понадобятся: member ID, номер группы, название работодателя и дата рождения, чтобы проверить ваши бенефиты. Проверка обычно занимает 24–48 часов.
            </p>
          </div>
        </div>
      </section>

      <InsuranceCrossLinks currentSlug="delta-dental" />

      <DualCTA />
    </>
  );
}
