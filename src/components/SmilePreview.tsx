"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SmileWidget from "@/components/SmileWidget";
import { smileGalleryPhotos } from "@/lib/smileGalleryPhotos";
import type { SmileLocale } from "@/lib/smileWidget";

const HERO_IMAGE = "/images/smile-gallery/patient-15.jpeg";

const COPY = {
  en: {
    eyebrow: "AI Smile Preview",
    title: "See your new smile in seconds",
    intro:
      "Upload a selfie and our AI shows you a realistic preview of your future smile – before you ever pick up the phone. Free, private, and takes less than a minute.",
    cta: "Try it now",
    stepsHeading: "How it works",
    steps: [
      { icon: "📸", title: "Upload a photo", text: "Take a selfie or upload a photo showing your teeth – on any device." },
      { icon: "🤖", title: "We'll do our part", text: "Our AI generates a realistic preview of your transformed smile in about 15 seconds." },
      { icon: "📧", title: "Get your result", text: "Compare your before-and-after and get the finished result by email." },
      { icon: "📅", title: "Book a consult", text: "Love what you see? Book a consultation with Dr. Antipov to make it real." },
    ],
    widgetHeading: "Try your smile transformation",
    resultsHeading: "Real patient results",
    resultsText:
      "These are real smile transformations from Dr. Antipov's practice.",
    galleryCta: "View the full smile gallery",
    galleryHref: "",
    finalHeading: "Ready to see your future smile?",
    finalText:
      "Preview it now, then book a consultation with a board-certified oral surgeon.",
    finalCta: "Book a consultation",
    finalHref: "/for-patients/consultation",
    privacy:
      "Your photo is processed securely and not stored. By using the tool you agree to our",
    privacyLink: "Privacy Policy",
    privacyHref: "/legal/privacy-policy",
  },
  ru: {
    eyebrow: "AI-превью улыбки",
    title: "Примерьте свою новую улыбку за секунды",
    intro:
      "Загрузите селфи – и наш ИИ покажет реалистичное превью вашей будущей улыбки ещё до звонка в клинику. Бесплатно, конфиденциально и меньше чем за минуту.",
    cta: "Попробовать",
    stepsHeading: "Как это работает",
    steps: [
      { icon: "📸", title: "Загрузите фото", text: "Сделайте селфи или загрузите фото, где видно зубы – с любого устройства." },
      { icon: "🤖", title: "Мы сделаем своё дело", text: "Искусственный интеллект создаёт реалистичное превью новой улыбки примерно за 15 секунд." },
      { icon: "📧", title: "Получите результат", text: "Сравните «до и после» и получите готовый результат на email." },
      { icon: "📅", title: "Запишитесь на приём", text: "Понравился результат? Запишитесь на консультацию к доктору Антипову." },
    ],
    widgetHeading: "Примерьте свою новую улыбку",
    resultsHeading: "Реальные результаты пациентов",
    resultsText:
      "Это реальные преображения улыбок из практики доктора Антипова.",
    galleryCta: "Смотреть всю галерею улыбок",
    galleryHref: "",
    finalHeading: "Готовы увидеть свою будущую улыбку?",
    finalText:
      "Посмотрите превью сейчас, а затем запишитесь на консультацию к сертифицированному челюстно-лицевому хирургу.",
    finalCta: "Записаться на консультацию",
    finalHref: "/ru/for-patients/consultation",
    privacy:
      "Ваше фото обрабатывается безопасно и не сохраняется. Используя инструмент, вы соглашаетесь с нашей",
    privacyLink: "Политикой конфиденциальности",
    privacyHref: "/ru/legal/privacy-policy",
  },
} as const;

export default function SmilePreview({ locale }: { locale: SmileLocale }) {
  const t = COPY[locale];
  // Курируемый набор чистых фронтальных портретов (без серых полос,
  // без перевёрнутых кадров и макро). patient-03 исключён - у него вшиты полосы.
  const RESULT_SRCS = new Set([
    "/images/smile-gallery/patient-01.jpeg",
    "/images/smile-gallery/patient-02.jpeg",
    "/images/smile-gallery/patient-04.jpeg",
    "/images/smile-gallery/patient-05.jpeg",
    "/images/smile-gallery/patient-07.jpeg",
    "/images/smile-gallery/patient-09.jpeg",
    "/images/smile-gallery/patient-13.jpeg",
    "/images/smile-gallery/patient-14.jpeg",
  ]);
  const gallery = smileGalleryPhotos.filter((p) => RESULT_SRCS.has(p.src));

  return (
    <div className="bg-white">
      {/* Hero – shared site header with background photo */}
      <PageHero
        image={HERO_IMAGE}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.intro}
        overlay="navy"
        imageClassName="scale-[1.25] translate-x-[12%]"
      />

      {/* Widget – directly under the hero */}
      <section id="smile-widget" className="scroll-mt-24 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-navy sm:text-4xl">
            {t.widgetHeading}
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
            <SmileWidget locale={locale} height="1175px" />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            {t.privacy}{" "}
            <Link href={t.privacyHref} className="underline hover:text-gray-700">
              {t.privacyLink}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-navy sm:text-4xl">
          {t.stepsHeading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center"
            >
              <div className="text-4xl" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-gray-600">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real results */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
            {t.resultsHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t.resultsText}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {gallery.map((p) => (
            <div
              key={p.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {t.galleryHref ? (
          <div className="mt-10 text-center">
            <Link
              href={t.galleryHref}
              className="text-lg font-semibold text-primary underline underline-offset-4 hover:opacity-80"
            >
              {t.galleryCta} →
            </Link>
          </div>
        ) : null}
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center text-white">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t.finalHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            {t.finalText}
          </p>
          <Link
            href={t.finalHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition hover:bg-gray-100"
          >
            {t.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
