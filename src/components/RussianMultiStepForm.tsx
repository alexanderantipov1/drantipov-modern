"use client";

import { useEffect, useRef, useState } from "react";
import {
  contactOptions,
  timingOptions,
  treatmentOptions,
} from "@/data/russianImplantFunnel";

interface Props {
  defaultCity?: string;
  landingPath?: string;
}

type Status = "editing" | "sending" | "success" | "error";

interface FormState {
  treatment: string;
  city: string;
  timing: string;
  name: string;
  phone: string;
  email: string;
  contactPreference: string;
  message: string;
  website: string; // honeypot
}

const INITIAL: FormState = {
  treatment: treatmentOptions[0] ?? "",
  city: "",
  timing: timingOptions[0] ?? "",
  name: "",
  phone: "",
  email: "",
  contactPreference: contactOptions[0] ?? "",
  message: "",
  website: "",
};

export default function RussianMultiStepForm({
  defaultCity = "",
  landingPath = "/ru",
}: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({ ...INITIAL, city: defaultCity });
  const [status, setStatus] = useState<Status>("editing");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const startedAtRef = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function step1Valid(): boolean {
    return form.treatment.trim().length > 0 && form.city.trim().length > 0 && form.timing.trim().length > 0;
  }

  function step2Valid(): boolean {
    return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 7 &&
      form.contactPreference.trim().length > 0
    );
  }

  async function submit() {
    if (!step2Valid()) return;
    setStatus("sending");
    setErrorMsg(null);
    const query = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const payload = {
      ...form,
      lang: "ru",
      landing_path: landingPath,
      started_at: String(startedAtRef.current),
      utm_source: query.get("utm_source") ?? "",
      utm_medium: query.get("utm_medium") ?? "",
      utm_campaign: query.get("utm_campaign") ?? "",
      utm_content: query.get("utm_content") ?? "",
      utm_term: query.get("utm_term") ?? "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "unknown");
    }
  }

  const totalSteps = 2;
  const progress = status === "success" ? 100 : Math.round(((step + 1) / totalSteps) * 100);

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10 ring-1 ring-dark/5 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="mt-5 text-2xl font-bold text-dark">Заявка получена</h3>
          <p className="mt-3 max-w-md leading-7 text-muted">
            Координатор перезвонит на русском в течение 24 часов и объяснит следующий шаг. Обычно сначала
            отправляем несколько уточняющих вопросов в WhatsApp / Telegram, чтобы консультация прошла быстрее.
          </p>
          <p className="mt-6 text-sm text-muted">
            Если хотите быстрее —{" "}
            <a href="tel:9167832110" className="font-bold text-primary hover:text-primary-dark">
              позвоните (916) 783-2110
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 0 && step1Valid()) setStep(1);
        else if (step === 1) submit();
      }}
      className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/10 ring-1 ring-dark/5 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Шаг {step + 1} из {totalSteps}
        </p>
        <p className="text-xs font-medium text-muted">
          {step === 0 ? "О ситуации" : "Контакты"}
        </p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-light">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
        {step === 0 ? "Расскажите о ситуации" : "Как с вами связаться?"}
      </h2>
      <p className="mt-3 text-sm text-muted">
        {step === 0
          ? "Это поможет координатору подготовить понятный план перед звонком."
          : "Координатор перезвонит на удобный канал в течение 24 часов. Бесплатно."}
      </p>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {step === 0 && (
        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="rmsf-treatment" className="block text-sm font-semibold text-dark">
              Что вас интересует
            </label>
            <select
              id="rmsf-treatment"
              value={form.treatment}
              onChange={(e) => update("treatment", e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {treatmentOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rmsf-city" className="block text-sm font-semibold text-dark">
                Город
              </label>
              <input
                id="rmsf-city"
                type="text"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Sacramento, Bay Area, Reno…"
                required
                className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="rmsf-timing" className="block text-sm font-semibold text-dark">
                Срок
              </label>
              <select
                id="rmsf-timing"
                value={form.timing}
                onChange={(e) => update("timing", e.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {timingOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={!step1Valid()}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            Продолжить
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <p className="text-center text-xs text-muted">
            ~30 секунд · бесплатно · 3D CT включён
          </p>
        </div>
      )}

      {step === 1 && (
        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="rmsf-name" className="block text-sm font-semibold text-dark">
              Имя и фамилия
            </label>
            <input
              id="rmsf-name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
              autoFocus
              className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rmsf-phone" className="block text-sm font-semibold text-dark">
                Телефон
              </label>
              <input
                id="rmsf-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="rmsf-email" className="block text-sm font-semibold text-dark">
                Email
              </label>
              <input
                id="rmsf-email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="rmsf-contact" className="block text-sm font-semibold text-dark">
              Удобный канал связи
            </label>
            <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {contactOptions.map((option) => {
                const checked = form.contactPreference === option;
                return (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition ${
                      checked
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-dark/10 bg-white text-dark hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactPreference"
                      value={option}
                      checked={checked}
                      onChange={() => update("contactPreference", option)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <label htmlFor="rmsf-message" className="block text-sm font-semibold text-dark">
              Что важно знать команде Dr. Antipov? <span className="font-normal text-muted">(необязательно)</span>
            </label>
            <textarea
              id="rmsf-message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={3}
              placeholder="Например: сколько зубов отсутствует, есть ли снимки, интересует All-on-4…"
              className="mt-2 w-full resize-none rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-dark/10 px-5 py-3 text-sm font-bold text-dark transition hover:border-dark/30"
              disabled={status === "sending"}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Назад
            </button>
            <button
              type="submit"
              disabled={!step2Valid() || status === "sending"}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Отправляем…" : "Отправить заявку"}
            </button>
          </div>

          {status === "error" && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Что-то пошло не так{errorMsg ? ` (${errorMsg})` : ""}. Попробуйте ещё раз или позвоните{" "}
              <a href="tel:9167832110" className="underline">
                (916) 783-2110
              </a>
              .
            </p>
          )}

          <p className="text-center text-xs text-muted">
            Бесплатная консультация · 3D CT включён · Финансирование от $99/мес
          </p>
        </div>
      )}
    </form>
  );
}
