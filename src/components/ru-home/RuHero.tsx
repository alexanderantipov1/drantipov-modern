import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { getVideoSchema, structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

export default function RuHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" lang="ru">
      {/* VideoObject schema for hero.mp4 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(
          getVideoSchema({
            name: "Имплантация полного зубного ряда — рабочий процесс с доктором Александром Антиповым, DDS",
            description:
              "Имплантация All-on-4 / All-on-6 за один день: цифровое планирование, 3D-сканирование и установка с немедленной нагрузкой. Выполняет доктор Антипов в Roseville, CA.",
            thumbnailUrl: `${siteConfig.url}/videos/hero-poster.jpg`,
            uploadDate: "2026-06-14",
            duration: "PT25S",
            contentUrl: `${siteConfig.url}/videos/hero.mp4`,
          })
        )}
      />
      {/* Background: video on desktop, poster on mobile + navy overlay */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/Antipov_white.jpg"
          alt="Доктор Александр Антипов, DDS — сертифицированный челюстно-лицевой хирург в Roseville, Калифорния"
          fill
          className="object-cover object-top lg:hidden"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/30 pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Сертифицированный челюстно-лицевой хирург &mdash; Roseville, CA
            </div>

            <h1
              className="hero-fade-up font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Доверьте свою улыбку
              <br />
              <span className="gradient-text">лучшим</span> в этом деле
            </h1>

            <p
              className="hero-fade-up mt-6 text-lg text-white/80 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Доктор Александр Антипов — <strong className="text-white">один из ведущих имплантологов в мире</strong>, выполняет <strong className="text-white">больше случаев полной имплантации, чем почти любой хирург в этой области</strong>. От <strong className="text-white">All-on-4 и All-on-6 — полная реконструкция челюсти</strong> до <strong className="text-white">ортогнатики</strong> и <strong className="text-white">эстетики лица</strong>. За плечами 25+ лет работы и сертификация ABOMS.
            </p>

            {/* Signature */}
            <div
              className="hero-fade mt-6 flex items-center gap-3"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="h-px w-12 bg-primary/60" />
              <span
                className="text-3xl text-primary tracking-wide"
                style={{ fontFamily: "var(--font-signature-cyrillic)" }}
              >
                Доктор Антипов
              </span>
            </div>

            <div
              className="hero-fade-up mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <ConsultationModal>
                <button
                  className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="relative z-10">Записаться на бесплатную консультацию</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </ConsultationModal>
              <a
                href="tel:9167832110"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Позвонить: (916) 783-2110
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="hero-fade mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/60 text-sm"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                "10 000+ возвращённых улыбок",
                "Бесплатный КТ и консультация",
                "Зубы в день операции",
                "Рассрочка от $99 в месяц",
                "Сертифицированный хирург",
                "Опыт 25+ лет",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-tight">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dr. Antipov Portrait */}
          <div
            className="hero-zoom-in hidden lg:block lg:absolute lg:right-0 lg:bottom-0 lg:w-[660px] lg:translate-y-[-2%] lg:z-10"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <Image
                src="/images/drantipov-hero-cutout-clean.png"
                alt="Доктор Александр Антипов, DDS — сертифицированный челюстно-лицевой хирург в Roseville, Калифорния"
                width={2679}
                height={3755}
                quality={92}
                priority
                sizes="(min-width: 1024px) 50vw, 0vw"
                className="w-full h-auto drop-shadow-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 text-center bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <a
                  href="https://www.aboms.org"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-primary text-xs font-bold tracking-widest uppercase hover:text-primary-light transition-colors"
                >
                  Diplomate · ABOMS
                </a>
                <h3 className="font-serif text-white text-xl font-bold mt-1">
                  Доктор Александр Антипов, DDS
                </h3>
                <p className="text-white/70 text-sm mt-0.5">
                  Челюстно-лицевой хирург
                </p>
                <p className="text-white/70 text-sm mt-3">
                  Лично оперирует с&nbsp;2008&nbsp;года
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1s" }}
      >
        <div className="hero-scroll-bounce w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
