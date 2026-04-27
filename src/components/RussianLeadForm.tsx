"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  contactOptions,
  timingOptions,
  treatmentOptions,
} from "@/data/russianImplantFunnel";

interface RussianLeadFormProps {
  defaultCity?: string;
  landingPath: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function RussianLeadForm({ defaultCity = "", landingPath }: RussianLeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const startedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const form = formRef.current;
    const data = new FormData(form);
    const query = new URLSearchParams(window.location.search);

    const payload = {
      name: data.get("name") ?? "",
      phone: data.get("phone") ?? "",
      email: data.get("email") ?? "",
      city: data.get("city") ?? "",
      treatment: data.get("treatment") ?? "",
      timing: data.get("timing") ?? "",
      contactPreference: data.get("contactPreference") ?? "",
      message: data.get("message") ?? "",
      website: data.get("website") ?? "",
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
      form.reset();
      startedAtRef.current = Date.now();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-black/10 ring-1 ring-dark/5 sm:p-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Бесплатная заявка на консультацию</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark">Запишитесь на консультацию по имплантам</h2>
        <p className="mt-3 text-muted">
          Оставьте контакты, город и вопрос. Команда Dr. Antipov свяжется с вами и объяснит следующий шаг.
        </p>
      </div>

      <div className="mt-8 grid gap-5">
        <div>
          <label htmlFor="ru-name" className="block text-sm font-semibold text-dark">
            Имя и фамилия
          </label>
          <input
            id="ru-name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ru-phone" className="block text-sm font-semibold text-dark">
              Телефон
            </label>
            <input
              id="ru-phone"
              name="phone"
              type="tel"
              required
              className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="ru-email" className="block text-sm font-semibold text-dark">
              Email
            </label>
            <input
              id="ru-email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ru-city" className="block text-sm font-semibold text-dark">
              Город
            </label>
            <input
              id="ru-city"
              name="city"
              type="text"
              defaultValue={defaultCity}
              required
              className="mt-2 w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="ru-timing" className="block text-sm font-semibold text-dark">
              Срок
            </label>
            <select
              id="ru-timing"
              name="timing"
              className="mt-2 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {timingOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="ru-treatment" className="block text-sm font-semibold text-dark">
            Что вас интересует
          </label>
          <select
            id="ru-treatment"
            name="treatment"
            className="mt-2 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {treatmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ru-contact" className="block text-sm font-semibold text-dark">
            Как связаться
          </label>
          <select
            id="ru-contact"
            name="contactPreference"
            className="mt-2 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {contactOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ru-message" className="block text-sm font-semibold text-dark">
            Что важно знать команде Dr. Antipov?
          </label>
          <textarea
            id="ru-message"
            name="message"
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-dark/10 px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Например: сколько зубов отсутствует, есть ли снимки, интересует All-on-4, нужна second opinion..."
          />
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-white transition hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем…" : "Отправить заявку"}
      </button>

      <p className="mt-3 text-center text-xs text-muted">
        Бесплатная консультация. Complimentary 3D CT scan is completed at the Roseville office.
      </p>

      {status === "success" && (
        <p role="status" className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-dark">
          Спасибо! Мы получили вашу заявку и свяжемся в течение 24 часов.
        </p>
      )}
      {status === "error" && (
        <p role="status" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Что-то пошло не так. Попробуйте ещё раз или позвоните нам.
        </p>
      )}
    </form>
  );
}
