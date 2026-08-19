"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { getSupplementalSteps, DENTALPRICE_STEPS_MARKER } from "@/lib/calcSupplementalSteps";
import { translateCalcField } from "@/lib/calcTranslations";
import { overridePrice } from "@/lib/calcPriceOverrides";
import { getComponentMeta, pick } from "@/lib/calcComponentMeta";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Comp {
  id: string;
  name: string;
  description?: string;
  price: number;
  can_be_free?: boolean;
  is_default?: boolean;
  auto_included?: boolean;
  is_available?: boolean;
  extra_data?: any;
}
interface Step {
  id: string;
  name: string;
  description?: string;
  is_required?: boolean;
  single_selection?: boolean;
  component_type: string;
  components: Comp[];
}

export type FunnelLocale = "en" | "ru";

const SELECTABLE = new Set(["choice", "payment_selection"]);
const FINANCING_MONTHS = 24; // active promo: 0% APR for 24 months

// Insurance plans fallback (live list comes from /api/calc/insurance).
const INSURANCE_FALLBACK = ["Medicare / Medicaid", "PPO Plan", "DHMO", "Self Pay - No Insurance"];

const fmt = (n: number, locale: FunnelLocale) =>
  "$" + Math.round(n).toLocaleString(locale === "ru" ? "ru-RU" : "en-US");

const T = {
  en: {
    back: "← Back to treatment options",
    total: "Estimated total",
    step: (a: number, b: number) => `Step ${a} of ${b}`,
    included: "Included",
    monthly: (m: string) => `≈ ${m}/mo · 0% APR for ${FINANCING_MONTHS} months*`,
    stepMore: "This step continues in the estimate.",
    promoHeading: "Special offers applied at consultation:",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    zip: "ZIP code",
    notes: "Anything we should know? (optional)",
    privacy: "Privacy Policy",
    consent: (privacy: ReactNode) => <>I agree to be contacted about my estimate and accept the {privacy}.</>,
    submit: (t: string) => `Email me my estimate - ${t}`,
    thanksTitle: (n: string) => (n.trim() ? `Thank you, ${n.trim()}!` : "Thank you!"),
    thanksBody: (t: string, e: string) =>
      `Your personalized estimate of ${t} is on its way to ${e || "your email"}. Our team will follow up shortly.`,
    footnote: "Final price is confirmed after a free consultation and 3D scan.",
    disclaimerTitle: "These prices are estimates",
    disclaimerBody:
      "Every mouth is different, so the numbers here are a guide, not a quote. Your real cost depends on your bone, your gums and how many teeth we're working with.",
    disclaimerBody2:
      "At your free consultation the doctor reviews your 3D scan, confirms the exact price for your case, and walks you through which procedures you actually need and which ones you can skip. You leave with a clear plan and a firm number.",
    loading: "Loading the calculator…",
    error: "Couldn’t load the calculator right now. Please try again shortly.",
    heroKicker: "Your personalized estimate",
    heroTagline: "Answer a few quick questions and see your price - transparent and no obligation.",
    trust: ["No commitment", "Free consultation", "Confirmed after 3D scan"],
    from: "from",
  },
  ru: {
    back: "← К выбору лечения",
    total: "Ориентировочная сумма",
    step: (a: number, b: number) => `Шаг ${a} из ${b}`,
    included: "Включено",
    monthly: (m: string) => `≈ ${m}/мес · 0% годовых на ${FINANCING_MONTHS} мес*`,
    stepMore: "Этот шаг продолжается в расчёте.",
    promoHeading: "Спецпредложения, применяемые на консультации:",
    name: "Имя и фамилия",
    email: "Email",
    phone: "Телефон",
    zip: "Индекс (ZIP)",
    notes: "Что-то, что нам стоит знать? (необязательно)",
    privacy: "Политикой конфиденциальности",
    consent: (privacy: ReactNode) => (
      <>Согласен(-на), что со мной свяжутся по поводу расчёта, и соглашаюсь с {privacy}.</>
    ),
    submit: (t: string) => `Получить расчёт на email - ${t}`,
    thanksTitle: (n: string) => (n.trim() ? `Спасибо, ${n.trim()}!` : "Спасибо за заявку!"),
    thanksBody: (t: string, e: string) =>
      `Ваш ориентировочный расчёт ${t} отправляется на ${e || "вашу почту"}. Мы скоро свяжемся.`,
    footnote: "Итоговая цена подтверждается после бесплатного 3D-скана и консультации.",
    disclaimerTitle: "Приведённые цены являются ориентировочными",
    disclaimerBody:
      "У каждого своя ситуация, поэтому суммы на этой странице это ориентир, а не готовый счёт. Итог зависит от состояния кости, дёсен и от того, сколько зубов нужно восстановить.",
    disclaimerBody2:
      "На бесплатной консультации доктор посмотрит ваш 3D-скан, назовёт точную цену именно для вашего случая и объяснит, какие процедуры вам действительно нужны. Вы уйдёте с понятным планом и конкретной суммой.",
    loading: "Загружаем калькулятор…",
    error: "Не удалось загрузить калькулятор. Попробуйте позже.",
    heroKicker: "Персональный расчёт",
    heroTagline: "Ответьте на несколько вопросов и узнайте вашу цену - прозрачно и без обязательств.",
    trust: ["Без обязательств", "Бесплатная консультация", "Подтверждается после 3D-скана"],
    from: "от",
  },
} as const;

export default function ApiFunnel({
  slug,
  onBack,
  locale = "en",
  styled = true,
  title,
  stickyBack = false,
}: {
  slug: string;
  onBack?: () => void;
  locale?: FunnelLocale;
  styled?: boolean;
  title?: string;
  /**
   * Pins the "back to treatment options" control inside the sticky total bar
   * so it stays reachable once the user scrolls into the funnel. Opt-in.
   */
  stickyBack?: boolean;
}) {
  const t = T[locale];
  /** Consent link goes to the policy in the visitor's own language. */
  const privacyLink = (
    <Link
      href={locale === "ru" ? "/ru/legal/privacy-policy" : "/legal/privacy-policy"}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-neutral-700"
    >
      {t.privacy}
    </Link>
  );
  const tField = (
    id: string,
    discriminator: string,
    original: string | undefined,
    field: "name" | "description",
  ) => translateCalcField(id, discriminator, field, original, locale);
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [pkgName, setPkgName] = useState("");
  const displayName = title || pkgName;
  const [err, setErr] = useState(false);
  const [sel, setSel] = useState<Record<string, Set<string>>>({});
  const [insurance, setInsurance] = useState<string>("");
  const [plans, setPlans] = useState<{ id: string; name: string; description?: string }[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    notes: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setSteps(null);
    setErr(false);
    setSubmitted(false);
    fetch(`/api/calc/steps?slug=${encodeURIComponent(slug)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: any) => {
        if (cancelled) return;
        const fetched: Step[] = (d?.steps || []).filter((s: Step) => Array.isArray(s.components));
        // System steps (Insurance / Payment / Contact form) always stay at the very
        // end; everything else from DentalPrice is a "core" treatment step that can
        // be interleaved with supplemental (client-side) steps via the marker below.
        const SYSTEM_TYPES = new Set(["insurance", "payment_selection", "form"]);
        const core = fetched.filter((s) => !SYSTEM_TYPES.has(s.component_type));
        const system = fetched.filter((s) => SYSTEM_TYPES.has(s.component_type));
        const supplemental = getSupplementalSteps(slug);
        const markerIndex = supplemental.findIndex((s) => s.id === DENTALPRICE_STEPS_MARKER);
        const st: Step[] =
          markerIndex === -1
            ? [...supplemental, ...core, ...system]
            : [
                ...supplemental.slice(0, markerIndex),
                ...core,
                ...supplemental.slice(markerIndex + 1),
                ...system,
              ];
        setPkgName(d?.package_name || "");
        const init: Record<string, Set<string>> = {};
        st.forEach((s) => {
          const set = new Set<string>();
          s.components.forEach((c) => {
            const included = c.can_be_free || Number(c.price) === 0;
            const auto = c.is_default || c.auto_included;
            const freebieInMulti =
              !s.single_selection &&
              s.component_type === "choice" &&
              included &&
              c.is_available !== false;
            if (auto || freebieInMulti) set.add(c.id);
          });
          init[s.id] = set;
        });
        setSteps(st);
        setSel(init);
      })
      .catch(() => {
        if (!cancelled) setErr(true);
      });
    fetch("/api/calc/insurance")
      .then((r) => (r.ok ? r.json() : { plans: [] }))
      .then((d) => {
        if (!cancelled) setPlans(d?.plans || []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const toggle = (step: Step, comp: Comp) => {
    setSel((prev) => {
      const next = { ...prev };
      const cur = new Set(next[step.id] || []);
      if (step.single_selection) {
        cur.clear();
        cur.add(comp.id);
      } else if (cur.has(comp.id)) {
        cur.delete(comp.id);
      } else {
        cur.add(comp.id);
      }
      next[step.id] = cur;
      return next;
    });
  };

  const total = useMemo(() => {
    if (!steps) return 0;
    let sum = 0;
    steps.forEach((s) =>
      s.components.forEach((c) => {
        if (sel[s.id]?.has(c.id)) sum += overridePrice(c.id, Number(c.price) || 0);
      }),
    );
    return sum;
  }, [steps, sel]);

  const monthlySelected = useMemo(() => {
    if (!steps) return false;
    const pay = steps.find((s) => s.component_type === "payment_selection");
    if (!pay) return false;
    const chosen = pay.components.find((c) => sel[pay.id]?.has(c.id));
    const label = ((chosen?.name || "") + " " + (chosen?.extra_data?.payment_type || "")).toLowerCase();
    return /month|мес/.test(label);
  }, [steps, sel]);
  const monthly = FINANCING_MONTHS > 0 ? Math.round(total / FINANCING_MONTHS) : 0;

  /* Estimate disclaimer shown under every funnel variant. */
  const disclaimer = (
    <aside className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
      <div className="flex gap-4 p-5 sm:p-6">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-lg text-primary"
          aria-hidden="true"
        >
          i
        </span>
        <div className="min-w-0">
          <p className="font-serif text-base font-bold text-secondary">{t.disclaimerTitle}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{t.disclaimerBody}</p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t.disclaimerBody2}</p>
          <p className="mt-3 text-xs font-medium text-neutral-600">{t.footnote}</p>
        </div>
      </div>
    </aside>
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Phase 2b: POST to /api/calc/submit -> DentalPrice /submit-quote (Salesforce).
    setSubmitted(true);
  };

  if (err)
    return (
      <div className="rounded-2xl border border-neutral-200 p-8 text-center text-neutral-600">
        {t.error}
        {onBack && (
          <div className="mt-4">
            <button onClick={onBack} className="font-semibold text-primary underline">
              {t.back}
            </button>
          </div>
        )}
      </div>
    );

  if (!steps)
    return (
      <div className="animate-pulse rounded-2xl border border-neutral-200 p-12 text-center text-neutral-400">
        {t.loading}
      </div>
    );

  /* ---------------- Styled (corporate) variant ---------------- */
  if (styled) {
    return (
      <div>
        {onBack && !stickyBack && (
          <button
            onClick={onBack}
            className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
          >
            {t.back}
          </button>
        )}

        {/* Hero band */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-secondary to-primary px-6 py-8 shadow-lg sm:px-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 right-10 h-44 w-44 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{t.heroKicker}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">{displayName}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">{t.heroTagline}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {t.trust.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                  <svg className="h-4 w-4 text-primary-light" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky running total */}
        <div className="sticky top-16 z-30 -mt-4 mb-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-navy to-secondary px-6 py-4 shadow-xl sm:top-20">
          {onBack && stickyBack && (
            <button
              type="button"
              onClick={onBack}
              title={t.back}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="sr-only">{t.back}</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.707 4.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
              {t.total}
            </span>
            <span className="font-serif text-3xl font-bold text-white">
              {total > 0 && (
                <span className="mr-1 align-middle text-sm text-white">
                  {t.from}
                </span>
              )}
              {fmt(total, locale)}
            </span>
            {monthlySelected && total > 0 && (
              <span className="mt-0.5 block text-xs font-semibold text-primary-light">
                {t.monthly(fmt(monthly, locale))}
              </span>
            )}
          </div>
          <span className="max-w-[42%] text-right text-xs font-medium text-white/70">{displayName}</span>
        </div>

        <div className="space-y-5">
          {steps.map((s, idx) => (
            <section
              key={s.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/[0.02]"
            >
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-sm">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {t.step(idx + 1, steps.length)}
                    </p>
                    <h3 className="mt-0.5 font-serif text-xl font-bold text-neutral-900">{tField(s.id, s.name, s.name, "name")}</h3>
                  </div>
                </div>
                {s.description && (
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-neutral-600">
                    {tField(s.id, s.name, s.description, "description")}
                  </p>
                )}

                {SELECTABLE.has(s.component_type) ? (
                  <div className="mt-4 space-y-3">
                    {s.components
                      .filter((c) => c.is_available !== false)
                      .map((c) => {
                        const on = sel[s.id]?.has(c.id);
                        const price = overridePrice(c.id, Number(c.price) || 0);
                        const meta = getComponentMeta(c.id);
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => toggle(s, c)}
                            aria-pressed={on}
                            className={`flex w-full items-start justify-between gap-4 rounded-xl border p-4 text-left transition ${
                              on
                                ? "border-primary bg-gradient-to-r from-primary/10 to-accent/5 ring-1 ring-primary"
                                : "border-neutral-200 hover:border-primary/40 hover:bg-light"
                            }`}
                          >
                            <span className="min-w-0">
                              <span className="flex flex-wrap items-center gap-2 font-semibold text-neutral-900">
                                <span
                                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-xs transition ${
                                    on ? "border-primary bg-gradient-to-br from-primary to-accent text-white" : "border-neutral-300"
                                  }`}
                                  aria-hidden="true"
                                >
                                  {on ? "✓" : ""}
                                </span>
                                {tField(c.id, c.name, c.name, "name")}
                                {meta?.badge && (
                                  <span className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                                    {pick(meta.badge, locale)}
                                  </span>
                                )}
                              </span>
                              {c.description && (
                                <span className="mt-1 block whitespace-pre-line text-sm text-neutral-600">
                                  {tField(c.id, c.name, c.description, "description")}
                                </span>
                              )}
                              {meta?.facts && meta.facts.length > 0 && (
                                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                                  {meta.facts.map((f) => (
                                    <span key={f.label.en} className="text-xs text-neutral-500">
                                      {pick(f.label, locale)}:{" "}
                                      <span className="font-semibold text-neutral-700">{pick(f.value, locale)}</span>
                                    </span>
                                  ))}
                                </span>
                              )}
                            </span>
                            <span className="shrink-0 text-right">
                              {price > 0 ? (
                                <span className="block">
                                  <span className="mr-1 text-sm text-neutral-700">
                                    {t.from}
                                  </span>
                                  <span className="font-serif text-lg font-bold text-secondary">
                                    {fmt(price, locale)}
                                  </span>
                                </span>
                              ) : (
                                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                                  {t.included}
                                </span>
                              )}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                ) : s.component_type === "insurance" ? (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {(plans.length ? plans : INSURANCE_FALLBACK.map((n) => ({ id: n, name: n, description: "" }))).map(
                      (plan) => {
                        const on = insurance === plan.name;
                        return (
                          <button
                            key={plan.id}
                            type="button"
                            onClick={() => setInsurance(on ? "" : plan.name)}
                            aria-pressed={on}
                            className={`rounded-xl border p-4 text-left transition ${
                              on
                                ? "border-primary bg-gradient-to-r from-primary/10 to-accent/5 ring-1 ring-primary"
                                : "border-neutral-200 hover:border-primary/40 hover:bg-light"
                            }`}
                          >
                            <span className="block font-medium text-neutral-900">{tField(plan.id, plan.name, plan.name, "name")}</span>
                            {plan.description && (
                              <span className="mt-1 block text-xs text-neutral-500">{tField(plan.id, plan.name, plan.description, "description")}</span>
                            )}
                          </button>
                        );
                      },
                    )}
                  </div>
                ) : s.component_type === "form" ? (
                  submitted ? (
                    <div className="mt-4 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 p-6 text-center">
                      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-sm">
                        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-serif text-xl font-bold text-neutral-900">{t.thanksTitle(form.name)}</p>
                      <p className="mt-2 text-sm text-neutral-600">
                        {t.thanksBody(fmt(total, locale), form.email)}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="mt-4 space-y-4">
                      {s.components.filter(
                        (c) => c?.extra_data?.promo_code || c?.extra_data?.discount_cash || c?.extra_data?.discount_percentage,
                      ).length > 0 && (
                        <div className="rounded-xl border border-gold/40 bg-gradient-to-r from-gold/10 to-gold/5 p-4">
                          <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                            <svg className="h-4 w-4 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.98 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.958z" />
                            </svg>
                            {t.promoHeading}
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                            {s.components
                              .filter(
                                (c) =>
                                  c?.extra_data?.promo_code ||
                                  c?.extra_data?.discount_cash ||
                                  c?.extra_data?.discount_percentage,
                              )
                              .map((c) => (
                                <li key={c.id}>• {tField(c.id, c.name, c.name, "name")}</li>
                              ))}
                          </ul>
                        </div>
                      )}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input required placeholder={t.name} value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        <input required type="email" placeholder={t.email} value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        <input required type="tel" placeholder={t.phone} value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        <input placeholder={t.zip} value={form.zipcode}
                          onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
                          className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <textarea placeholder={t.notes} value={form.notes} rows={3}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      <label className="flex items-start gap-2 text-xs text-neutral-500">
                        <input type="checkbox" required checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-0.5" />
                        <span>{t.consent(privacyLink)}</span>
                      </label>
                      <button type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-xl hover:brightness-105">
                        {t.submit(fmt(total, locale))}
                      </button>
                    </form>
                  )
                ) : (
                  <div className="mt-4 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-500">
                    {t.stepMore}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {disclaimer}
      </div>
    );
  }

  /* ---------------- Default (plain) variant ---------------- */
  return (
    <div>
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          {t.back}
        </button>
      )}

      <div className="sticky top-16 z-30 mb-6 flex items-center justify-between rounded-xl border border-neutral-200 bg-white/95 px-5 py-3 shadow-sm backdrop-blur sm:top-20">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {t.total}
          </span>
          <span className="font-serif text-2xl font-bold text-neutral-900">
            {total > 0 && (
              <span className="mr-1 align-middle text-sm text-neutral-700">
                {t.from}
              </span>
            )}
            {fmt(total, locale)}
          </span>
          {monthlySelected && total > 0 && (
            <span className="mt-0.5 block text-xs font-medium text-primary">
              {t.monthly(fmt(monthly, locale))}
            </span>
          )}
        </div>
        <span className="max-w-[45%] text-right text-xs text-neutral-500">{displayName}</span>
      </div>

      <div className="space-y-5">
        {steps.map((s, idx) => (
          <section key={s.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
              {t.step(idx + 1, steps.length)}
            </p>
            <h3 className="mt-1 font-serif text-xl font-bold text-neutral-900">{tField(s.id, s.name, s.name, "name")}</h3>
            {s.description && (
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-600">
                {tField(s.id, s.name, s.description, "description")}
              </p>
            )}

            {SELECTABLE.has(s.component_type) ? (
              <div className="mt-4 space-y-3">
                {s.components
                  .filter((c) => c.is_available !== false)
                  .map((c) => {
                    const on = sel[s.id]?.has(c.id);
                    const price = overridePrice(c.id, Number(c.price) || 0);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => toggle(s, c)}
                        aria-pressed={on}
                        className={`flex w-full items-start justify-between gap-4 rounded-xl border p-4 text-left transition ${
                          on ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 font-semibold text-neutral-900">
                            <span
                              className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-xs ${
                                on ? "border-primary bg-primary text-white" : "border-neutral-300"
                              }`}
                              aria-hidden="true"
                            >
                              {on ? "✓" : ""}
                            </span>
                            {tField(c.id, c.name, c.name, "name")}
                          </span>
                          {c.description && (
                            <span className="mt-1 block whitespace-pre-line text-sm text-neutral-600">
                              {tField(c.id, c.name, c.description, "description")}
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 text-right font-semibold">
                          {price > 0 ? (
                            <span className="text-neutral-900">
                              <span className="mr-1 text-sm text-neutral-700">
                                {t.from}
                              </span>
                              {fmt(price, locale)}
                            </span>
                          ) : (
                            <span className="text-primary">{t.included}</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
              </div>
            ) : s.component_type === "insurance" ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(plans.length ? plans : INSURANCE_FALLBACK.map((n) => ({ id: n, name: n, description: "" }))).map(
                  (plan) => {
                    const on = insurance === plan.name;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setInsurance(on ? "" : plan.name)}
                        aria-pressed={on}
                        className={`rounded-xl border p-4 text-left transition ${
                          on ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="block font-medium text-neutral-900">{tField(plan.id, plan.name, plan.name, "name")}</span>
                        {plan.description && (
                          <span className="mt-1 block text-xs text-neutral-500">{tField(plan.id, plan.name, plan.description, "description")}</span>
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            ) : s.component_type === "form" ? (
              submitted ? (
                <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                  <p className="font-serif text-xl font-bold text-neutral-900">{t.thanksTitle(form.name)}</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {t.thanksBody(fmt(total, locale), form.email)}
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-4 space-y-4">
                  {s.components.filter(
                    (c) => c?.extra_data?.promo_code || c?.extra_data?.discount_cash || c?.extra_data?.discount_percentage,
                  ).length > 0 && (
                    <div className="rounded-xl border border-gold/40 bg-gold/5 p-4">
                      <p className="text-sm font-semibold text-neutral-900">{t.promoHeading}</p>
                      <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                        {s.components
                          .filter(
                            (c) =>
                              c?.extra_data?.promo_code ||
                              c?.extra_data?.discount_cash ||
                              c?.extra_data?.discount_percentage,
                          )
                          .map((c) => (
                            <li key={c.id}>• {tField(c.id, c.name, c.name, "name")}</li>
                          ))}
                      </ul>
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder={t.name} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none" />
                    <input required type="email" placeholder={t.email} value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none" />
                    <input required type="tel" placeholder={t.phone} value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none" />
                    <input placeholder={t.zip} value={form.zipcode}
                      onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
                      className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none" />
                  </div>
                  <textarea placeholder={t.notes} value={form.notes} rows={3}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none" />
                  <label className="flex items-start gap-2 text-xs text-neutral-500">
                    <input type="checkbox" required checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-0.5" />
                    <span>{t.consent(privacyLink)}</span>
                  </label>
                  <button type="submit"
                    className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                    {t.submit(fmt(total, locale))}
                  </button>
                </form>
              )
            ) : (
              <div className="mt-4 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-500">
                {t.stepMore}
              </div>
            )}
          </section>
        ))}
      </div>

      {disclaimer}
    </div>
  );
}
