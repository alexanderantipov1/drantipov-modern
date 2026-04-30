"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SpanishMultiStepForm from "@/components/SpanishMultiStepForm";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import RealReviews from "@/components/RealReviews";
import { officePhone, officePhoneHref, officeAddress } from "@/data/spanishImplantFunnel";

const implantSequence = [
  { src: "/images/hero/01-extraction-socket.jpeg", label: "Extracción", step: "Paso 1" },
  { src: "/images/hero/02-blood-clot.png", label: "Sanación natural", step: "Paso 2" },
  { src: "/images/hero/03-bone-graft-placed.jpeg", label: "Injerto óseo", step: "Paso 3" },
  { src: "/images/hero/04-bone-graft-healing.png", label: "Integración del injerto", step: "Paso 4" },
  { src: "/images/hero/05-healed-bone.jpeg", label: "Hueso sano", step: "Paso 5" },
  { src: "/images/hero/06-implant-placed.jpeg", label: "Colocación del implante", step: "Paso 6" },
  { src: "/images/hero/07-osseointegration.jpeg", label: "Osteointegración", step: "Paso 7" },
  { src: "/images/hero/08-abutment.jpeg", label: "Pilar (abutment)", step: "Paso 8" },
  { src: "/images/hero/09-final-crown.jpeg", label: "Corona definitiva", step: "Paso 9" },
];

const trustBadges = [
  "10,000+ sonrisas restauradas",
  "CT 3D y consulta gratis",
  "Implantes el mismo día",
  "Financiamiento desde $99/mes",
  "Cirujano certificado",
  "25+ años de experiencia",
];

const services = [
  {
    title: "Implantes de arco completo",
    subtitle: "All-on-4, All-on-6, zygomatic implants, dientes el mismo día",
    body:
      "Set completo de dientes fijos en una sola visita. Dr. Antipov usa CT 3D y cirugía guiada por computadora para colocación precisa — incluso cuando otros cirujanos rechazaron el caso por falta de hueso. Cuando hay pérdida ósea severa en el maxilar superior: zygomatic implants, sin necesidad de injertos óseos prolongados. En cada caso de All-on-4 / All-on-6 colocamos dientes provisionales el mismo día.",
    image: "/images/procedures/dental-implants-26292ad9.jpg",
    features: [
      "All-on-4 / All-on-6",
      "Zygomatic implants",
      "Dientes el mismo día",
      "Carga inmediata",
      "Cirugía guiada por CT",
      "Zirconia / Titanio",
    ],
  },
  {
    title: "Cirugía maxilofacial",
    subtitle: "Ortognática, Le Fort, BSSO, mentoplastía",
    body:
      "Planificación por computadora para corrección de mordida, función masticatoria y armonía facial. Mordida cruzada, mordida abierta, asimetría facial, apnea obstructiva del sueño. Le Fort I osteotomy, BSSO, genioplastía, avance maxilomandibular, cirugía bimaxilar — con precisión milimétrica gracias a la planificación 3D.",
    image: "/images/procedures/corrective-jaw-surgery-406b79a4.jpg",
    features: [
      "Cirugía ortognática",
      "Le Fort I osteotomy",
      "BSSO",
      "Genioplastía",
      "Cirugía bimaxilar",
      "Cirugía de apnea del sueño",
    ],
  },
  {
    title: "Cosmética facial",
    subtitle: "Rinoplastía, lifting, blefaroplastía, rellenos",
    body:
      "Procedimientos estéticos realizados por un cirujano oral y maxilofacial certificado que conoce la anatomía facial al nivel más profundo. Rinoplastía, lifting facial, blefaroplastía superior e inferior, doble párpado asiático, feminización facial, eliminación de lunares sin cicatriz, Juvederm, aumento de labios, transferencia de grasa autóloga.",
    image: "/images/procedures/facial-cosmetic-surgery-e97fd634.jpg",
    features: [
      "Rinoplastía",
      "Lifting facial",
      "Blefaroplastía",
      "Rellenos Juvederm",
      "Aumento de labios",
      "Transferencia de grasa",
    ],
  },
  {
    title: "Injerto óseo y sinus lift",
    subtitle: "Regeneración ósea orgánica, holística y autógena",
    body:
      "Reconstrucción del hueso perdido por extracciones, periodontitis o trauma. Sinus lift, aumento de cresta, preservación del alvéolo, injerto en bloque, regeneración ósea guiada. Materiales autógenos, allograft, xenograft y sintéticos — incluyendo opciones orgánicas naturales para preparación a la implantación.",
    image: "/images/procedures/extractions-1896b4c1.jpg",
    features: [
      "Sinus lift",
      "Aumento de cresta",
      "Preservación de alvéolo",
      "Injerto en bloque",
      "Regeneración ósea guiada",
      "Orgánico / autógeno",
    ],
  },
  {
    title: "Cirugía oral",
    subtitle: "Muelas del juicio, ATM, sedación IV",
    body:
      "Cirugía oral integral: extracción de muelas del juicio impactadas, extracciones complejas, exposición quirúrgica para ortodoncia, tratamiento de ATM, remoción de quistes y tumores, cirugía pre-protésica. Todos los procedimientos bajo sedación IV cómoda o anestesia general en nuestro centro quirúrgico de Roseville.",
    image: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
    features: [
      "Muelas del juicio",
      "Dientes impactados",
      "Tratamiento ATM",
      "Sedación IV",
      "Anestesia general",
      "Remoción de quistes",
    ],
  },
  {
    title: "Implantes individuales y múltiples",
    subtitle: "Single implants, puentes, snap-on dentures",
    body:
      "Reemplazo de uno o varios dientes — la opción más natural y duradera. Implantes individuales con coronas provisionales inmediatas, puentes sobre implantes para varios dientes adyacentes, snap-on dentures (sobredentaduras) para una opción removible. Todos los implantes colocados con guía CT 3D y titanio de grado médico.",
    image: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
    features: [
      "Implante individual",
      "Puente sobre implantes",
      "Snap-on dentures",
      "Sobredentaduras",
      "Implante inmediato",
      "Colocación guiada por CT",
    ],
  },
];

const stats = [
  { value: "10,000+", label: "sonrisas restauradas" },
  { value: "25+", label: "años de práctica certificada" },
  { value: "4.9★", label: "calificación promedio (300+ reseñas)" },
  { value: "$99/mes", label: "financiamiento — desde" },
];

const process = [
  { n: "1", title: "Solicitud", body: "Cuéntanos tu situación, ciudad, plazos y mejor forma de contacto. Sin formalidades." },
  { n: "2", title: "CT 3D y evaluación gratis", body: "En el consultorio de Roseville. Radiografía, evaluación, opciones — sin costo." },
  { n: "3", title: "Plan claro y costo", body: "Todas las opciones con números. Financiamiento desde $99/mes, hasta 84 meses al 0% APR." },
  { n: "4", title: "Cirugía y seguimiento", body: "Cirugía guiada por computadora, dientes el mismo día cuando es posible. Acompañamiento hasta el resultado final." },
];

const faq = [
  {
    q: "¿Cuánto cuesta el All-on-4?",
    a: "Desde $21,000 por arco completo. Después de la consulta gratis con CT 3D damos el costo exacto y opciones de financiamiento (desde $99/mes, hasta 84 meses al 0% APR para solicitantes calificados).",
  },
  {
    q: "¿Es posible recibir los dientes el mismo día?",
    a: "Para All-on-4 y All-on-6 — sí, cuando hay densidad ósea suficiente. Los implantes se colocan y los dientes provisionales se fijan ese mismo día. La prótesis definitiva se entrega después del periodo de cicatrización.",
  },
  {
    q: "Me dijeron que no tengo suficiente hueso. ¿Hay opciones?",
    a: "Sí. Dr. Antipov realiza injertos óseos complejos y coloca zygomatic implants cuando hay pérdida ósea severa en el maxilar superior. Las recomendaciones precisas son posibles tras la evaluación y CT 3D.",
  },
  {
    q: "Vivo lejos de Roseville. ¿Puedo empezar a distancia?",
    a: "Sí. El coordinador explicará qué fotos, radiografías o documentos preparar. Recibimos pacientes que vuelan desde otros estados y países.",
  },
  {
    q: "¿Aceptan seguros médicos y dentales?",
    a: "Trabajamos con la mayoría de los planes PPO. El coordinador verifica tu cobertura sin costo. Si el seguro no cubre el implante, el financiamiento desde $99/mes cubre el resto.",
  },
  {
    q: "¿Es seguro? ¿Qué tipo de anestesia usan?",
    a: "Todos los procedimientos se realizan bajo sedación IV o anestesia general. Dr. Antipov es fellowship-trained y certificado para cirugía maxilofacial compleja. Nuestro centro quirúrgico en Roseville está completamente equipado.",
  },
];

const concerns = [
  {
    title: "¿Habla español el equipo?",
    body: "El coordinador y el equipo te atienden en español. Las explicaciones del plan, costo, y opciones de tratamiento, todas en español sin pérdida en la traducción.",
  },
  {
    title: "¿Será claro el precio?",
    body: "Después del CT y la evaluación verás todas las opciones con números. Sin sorpresas el día de la cirugía. Financiamiento accesible y verificación gratuita de tu seguro.",
  },
  {
    title: "¿Cuántos años de práctica?",
    body: "25+ años de experiencia certificada en cirugía maxilofacial. 10,000+ sonrisas restauradas. 4.9★ con más de 300 reseñas verificadas.",
  },
];

export default function SpanishHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % implantSequence.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const goToSlide = useCallback((i: number) => {
    setCurrentSlide(i);
    setIsAutoPlaying(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark" lang="es">
      <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/es" className="flex items-center gap-3">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
            <a href="#services" className="transition hover:text-primary">Servicios</a>
            <a href="#process" className="transition hover:text-primary">Proceso</a>
            <a href="#faq" className="transition hover:text-primary">FAQ</a>
            <a href="#contact" className="transition hover:text-primary">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-dark/15 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-dark sm:inline"
            >
              EN
            </a>
            <a
              href={officePhoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
            >
              {officePhone}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-dark text-white">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Cirujano oral y maxilofacial &middot; Roseville, California
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Implantes
                <br />
                <span className="gradient-text">el mismo día</span>
                <br />
                Cirugía maxilofacial
                <br />
                y cosmética facial
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
              >
                Dr. Alexander Antipov: <strong className="text-white">All-on-4 y All-on-6</strong>,{" "}
                <strong className="text-white">cirugía ortognática</strong>,{" "}
                <strong className="text-white">cosmética facial</strong> e{" "}
                <strong className="text-white">injerto óseo orgánico</strong>. 25+ años certificado. Hablamos
                español.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30"
                >
                  Consulta gratis
                </a>
                <a
                  href={officePhoneHref}
                  className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Llama {officePhone}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/60 sm:grid-cols-3"
              >
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-tight">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={implantSequence[currentSlide]?.src ?? ""}
                      alt={implantSequence[currentSlide]?.label ?? ""}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(min-width: 1024px) 50vw, 0vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {implantSequence[currentSlide]?.step}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {implantSequence[currentSlide]?.label}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                {implantSequence.map((slide, i) => (
                  <button
                    key={slide.label}
                    onClick={() => goToSlide(i)}
                    aria-label={slide.label}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentSlide ? "w-8 bg-primary" : i < currentSlide ? "w-3 bg-primary/50" : "w-3 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-white/40">
                El camino del implante — de la extracción a la corona definitiva
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-dark/5 bg-light">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-dark sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Servicios</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Cirugía para adultos con 25+ años de experiencia
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Implantes, reconstrucción maxilar, cosmética facial e injerto óseo — todo bajo un solo techo
                y un solo cirujano que lleva el caso desde la consulta hasta el resultado final.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {services.map((service, idx) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group overflow-hidden rounded-3xl border border-dark/5 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{service.subtitle}</p>
                    <p className="mt-4 leading-7 text-muted">{service.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-dark/10 bg-light px-3 py-1 text-xs font-medium text-dark"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-light py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Proceso</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                De la solicitud a la sonrisa final
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.n} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-dark/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.n}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Concerns */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Lo más importante</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Lo que más preguntan los pacientes
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {concerns.map((c) => (
                <div key={c.title} className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-dark">{c.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real reviews */}
        <RealReviews />

        {/* Financing & insurance trust block */}
        <section className="bg-dark py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">
                Financiamiento y seguros
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Precios transparentes, pago accesible
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                Consulta gratis y CT 3D — sin pagos antes de que entiendas el plan y el costo. El
                financiamiento desde $99/mes hace los implantes accesibles sin pago único.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="mt-2 text-xl font-bold">Desde $99/mes</h3>
                <p className="mt-3 leading-7 text-white/75">
                  Financiamiento hasta 84 meses al 0% APR para solicitantes calificados. CareCredit,
                  LendingClub y otros socios médicos — solicitud en ~5 minutos.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="mt-2 text-xl font-bold">CT 3D gratis</h3>
                <p className="mt-3 leading-7 text-white/75">
                  Consulta inicial y tomografía computarizada — sin costo. Sin compromiso: recibes un plan
                  claro y el costo antes de tomar cualquier decisión.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="mt-2 text-xl font-bold">Aceptamos la mayoría de seguros</h3>
                <p className="mt-3 leading-7 text-white/75">
                  Trabajamos con planes PPO y te ayudamos a entender qué cubre tu seguro. Si el seguro no
                  cubre el implante, el financiamiento cubre el resto. El coordinador verifica detalles por
                  teléfono.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-dark/5 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-bold text-dark">
                    <span>{item.q}</span>
                    <span className="text-2xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 leading-8 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-light py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Consulta gratis</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Agenda tu consulta
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Llena el formulario — el coordinador te llama en español dentro de 24 horas con el siguiente
                paso. CT 3D y consulta gratis incluidos.
              </p>
              <div className="mt-10 space-y-5 text-dark">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-muted">Dirección</h4>
                  <p className="mt-1">{officeAddress}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-muted">Teléfono</h4>
                  <a href={officePhoneHref} className="mt-1 inline-block hover:text-primary">
                    {officePhone}
                  </a>
                </div>
              </div>
            </div>
            <SpanishMultiStepForm defaultCity="" landingPath="/es" />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dr. Alexander Antipov, DDS — Roseville, California</p>
          <div className="flex gap-4">
            <a href="/" className="font-semibold text-primary hover:text-primary-dark">English</a>
            <a href="/ru" className="hover:text-primary">Русский</a>
          </div>
        </div>
      </footer>

      <StickyConciergeBar />
      <MicrosoftClarity />
    </div>
  );
}
