import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import FullArchLeadForm from "@/components/FullArchLeadForm";
import { siteConfig } from "@/constants/siteConfig";
import { fullArchPhoneHref, type FullArchLandingContent } from "@/data/fullArchLanding";

interface FullArchAdLandingProps {
  content: FullArchLandingContent;
}

const officeAddress = `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`;

const caseImages = [
  {
    src: "/images/fullarch/01-before-damaged.jpeg",
    alt: "Full-arch implant case before treatment",
  },
  {
    src: "/images/fullarch/07-implants-abutments.jpeg",
    alt: "Full-arch implant abutments during treatment",
  },
  {
    src: "/images/fullarch/08-final-result.jpeg",
    alt: "Full-arch implant final result",
  },
];

export default function FullArchAdLanding({ content }: FullArchAdLandingProps) {
  const isRu = content.locale === "ru";
  const alternateLabel = isRu ? "EN" : "RU";
  const phoneText = isRu ? `Позвонить ${siteConfig.contact.phone}` : `Call ${siteConfig.contact.phone}`;
  const compareFixedLabel = isRu ? "Fixed implants" : "Fixed implants";
  const compareDentureLabel = isRu ? "Dentures" : "Dentures";
  const primaryCredential = content.proof[0] ?? (isRu ? "Сертифицированный хирург" : "Board-certified surgeon");
  const caseEyebrow = isRu ? "Клинический кейс" : "Clinical case";
  const caseTitle = isRu ? "Сложные случаи требуют 3D-плана" : "Complex cases need a 3D plan";
  const caseBody = isRu
    ? "Full-arch treatment может включать удаление зубов, grafting, implants, abutments, temporary teeth и final bridge. На консультации Dr. Antipov объясняет, какие этапы нужны именно вам."
    : "Full-arch treatment may include extractions, grafting, implants, abutments, temporary teeth, and a final bridge. During consultation, Dr. Antipov explains which steps your case actually needs.";

  return (
    <div className="min-h-screen bg-white text-dark" lang={content.locale}>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={isRu ? "/ru" : "/"} className="flex items-center gap-3">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS"
              width={176}
              height={58}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={content.alternatePath}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              {alternateLabel}
            </Link>
            <a
              href={fullArchPhoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-dark transition hover:bg-primary hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen overflow-hidden bg-navy text-white">
          <Image
            src="/images/dr-antipov-work.png"
            alt="Dr. Alexander Antipov performing implant surgery"
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.96)_0%,rgba(11,31,58,0.88)_46%,rgba(11,31,58,0.42)_100%)]" />
          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:px-8 lg:pb-16 lg:pt-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-primary-light" />
                {content.hero.eyebrow}
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {content.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">{content.hero.subheadline}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white transition hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/25"
                >
                  {content.hero.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={fullArchPhoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  {content.hero.secondaryCta}
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.proof.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur">
                    <Check className="h-4 w-4 shrink-0 text-primary-light" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div id="consultation" className="scroll-mt-24">
              <FullArchLeadForm content={content} />
            </div>
          </div>
        </section>

        <section className="border-y border-dark/5 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              { icon: BadgeCheck, label: primaryCredential },
              { icon: CalendarCheck, label: isRu ? "Бесплатная 3D CT консультация" : "Complimentary 3D CT consultation" },
              { icon: HeartPulse, label: isRu ? "IV sedation / general anesthesia" : "IV sedation / general anesthesia" },
              { icon: MapPin, label: officeAddress },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-dark">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.offer.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">{content.offer.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{content.offer.body}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.offer.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
                  <ClipboardCheck className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.outcomes.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">{content.outcomes.title}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{content.outcomes.body}</p>
              </div>
              <div className="rounded-2xl border border-dark/10 bg-bone p-5">
                <p className="text-sm font-bold text-dark">{content.comparison.title}</p>
                <div className="mt-4 overflow-hidden rounded-xl border border-dark/10 bg-white">
                  <div className="grid grid-cols-[0.72fr_1fr_1fr] bg-dark text-xs font-bold uppercase tracking-[0.12em] text-white">
                    <div className="p-3" />
                    <div className="p-3">{compareFixedLabel}</div>
                    <div className="p-3">{compareDentureLabel}</div>
                  </div>
                  {content.comparison.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[0.72fr_1fr_1fr] border-t border-dark/10 text-sm">
                      <div className="bg-light p-3 font-bold text-dark">{row.label}</div>
                      <div className="p-3 text-muted">{row.fixed}</div>
                      <div className="p-3 text-muted">{row.dentures}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {content.outcomes.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
                  <Sparkles className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-light">{caseEyebrow}</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{caseTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/78">{caseBody}</p>
              <a
                href="#consultation"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-primary-dark"
              >
                {content.finalCta.button}
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {caseImages.map((image, index) => (
                <div key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18vw, 33vw"
                    />
                  </div>
                  <div className="p-4 text-sm font-bold text-white/80">
                    {isRu ? "Этап" : "Step"} {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.process.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">{content.process.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{content.process.body}</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {content.process.steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-light">
              <Image
                src="/images/meetdrantipov.png"
                alt={content.hero.imageAlt}
                width={608}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.surgeon.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">{content.surgeon.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{content.surgeon.body}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.surgeon.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-xl border border-dark/10 bg-white p-4 shadow-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-semibold leading-6 text-dark">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                {isRu ? "Частые вопросы" : "Questions patients ask before booking"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                {isRu
                  ? "Ответы помогают понять, подходит ли вам full-arch консультация, и какие вопросы стоит подготовить."
                  : "These answers help you decide whether a full-arch consultation is the right next step."}
              </p>
            </div>
            <div className="grid gap-4">
              {content.faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-bold text-dark">
                    <span>{item.question}</span>
                    <span className="text-2xl leading-none text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 leading-8 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 text-left sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Clock3 className="h-8 w-8 text-primary-light" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{content.finalCta.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/78">{content.finalCta.body}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <a
                href="#consultation"
                className="inline-flex justify-center rounded-xl bg-primary px-6 py-4 font-bold text-white transition hover:bg-primary-dark"
              >
                {content.finalCta.button}
              </a>
              <a
                href={fullArchPhoneHref}
                className="inline-flex justify-center rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                {phoneText}
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-dark/10 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a href="#consultation" className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-white">
            {content.hero.primaryCta}
          </a>
          <a href={fullArchPhoneHref} className="rounded-xl border border-dark/10 px-4 py-3 text-center text-sm font-bold text-dark">
            <Phone className="mx-auto h-5 w-5" />
          </a>
        </div>
      </div>

      <footer className="border-t border-dark/10 bg-white px-4 py-8 pb-24 text-sm text-muted sm:px-6 md:pb-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© Dr. Alexander Antipov, DDS — Roseville, California.</p>
          <div className="flex gap-4">
            <Link href={isRu ? "/ru" : "/"} className="font-semibold text-primary hover:text-primary-dark">
              {isRu ? "Главная" : "Main site"}
            </Link>
            <a href={fullArchPhoneHref} className="font-semibold text-primary hover:text-primary-dark">
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
