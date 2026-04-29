"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { FullArchLandingContent } from "@/data/fullArchLanding";

interface FullArchLeadFormProps {
  content: FullArchLandingContent;
}

type Status = "idle" | "sending" | "success" | "error";

export default function FullArchLeadForm({ content }: FullArchLeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<number>(Date.now());
  const [status, setStatus] = useState<Status>("idle");

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
    const condition = String(data.get("condition") ?? "");
    const arch = String(data.get("arch") ?? "");

    const payload = {
      name: data.get("name") ?? "",
      phone: data.get("phone") ?? "",
      email: data.get("email") ?? "",
      city: data.get("city") ?? "",
      treatment: ["Full-arch dental implants", condition, arch].filter(Boolean).join(" | "),
      timing: data.get("timing") ?? "",
      contactPreference: data.get("contactPreference") ?? "",
      message: data.get("message") ?? "",
      website: data.get("website") ?? "",
      lang: content.locale,
      source: "Full Arch Ad Landing",
      landing_path: content.path,
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
      className="rounded-2xl border border-white/20 bg-white p-5 text-dark shadow-2xl shadow-black/25 sm:p-6"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{content.form.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark">{content.form.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{content.form.body}</p>
      </div>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor={`${content.locale}-fullarch-name`} className="block text-sm font-semibold text-dark">
            {content.form.name}
          </label>
          <input
            id={`${content.locale}-fullarch-name`}
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-dark/10 px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${content.locale}-fullarch-phone`} className="block text-sm font-semibold text-dark">
              {content.form.phone}
            </label>
            <input
              id={`${content.locale}-fullarch-phone`}
              name="phone"
              type="tel"
              required
              className="mt-2 w-full rounded-xl border border-dark/10 px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor={`${content.locale}-fullarch-email`} className="block text-sm font-semibold text-dark">
              {content.form.email}
            </label>
            <input
              id={`${content.locale}-fullarch-email`}
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-dark/10 px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${content.locale}-fullarch-city`} className="block text-sm font-semibold text-dark">
              {content.form.city}
            </label>
            <input
              id={`${content.locale}-fullarch-city`}
              name="city"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-dark/10 px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor={`${content.locale}-fullarch-timing`} className="block text-sm font-semibold text-dark">
              {content.form.timing}
            </label>
            <select
              id={`${content.locale}-fullarch-timing`}
              name="timing"
              className="mt-2 w-full rounded-xl border border-dark/10 bg-white px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              {content.form.timingOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={`${content.locale}-fullarch-condition`} className="block text-sm font-semibold text-dark">
            {content.form.condition}
          </label>
          <select
            id={`${content.locale}-fullarch-condition`}
            name="condition"
            className="mt-2 w-full rounded-xl border border-dark/10 bg-white px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {content.form.conditionOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${content.locale}-fullarch-contact`} className="block text-sm font-semibold text-dark">
            {content.form.contact}
          </label>
          <select
            id={`${content.locale}-fullarch-contact`}
            name="contactPreference"
            className="mt-2 w-full rounded-xl border border-dark/10 bg-white px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {content.form.contactOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${content.locale}-fullarch-message`} className="block text-sm font-semibold text-dark">
            {content.form.message}
          </label>
          <textarea
            id={`${content.locale}-fullarch-message`}
            name="message"
            rows={3}
            placeholder={content.form.messagePlaceholder}
            className="mt-2 w-full resize-none rounded-xl border border-dark/10 px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
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
        className="mt-5 w-full rounded-xl bg-primary px-5 py-4 text-base font-bold text-white transition hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? content.form.sending : content.form.submit}
      </button>

      <p className="mt-3 text-xs leading-5 text-muted">{content.form.consent}</p>

      {status === "success" && (
        <div role="status" className="mt-4 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-dark">
          <p className="font-bold">{content.form.successTitle}</p>
          <p className="mt-1 leading-6">{content.form.successBody}</p>
        </div>
      )}

      {status === "error" && (
        <div role="status" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-bold">{content.form.errorTitle}</p>
          <p className="mt-1 leading-6">{content.form.errorBody}</p>
        </div>
      )}
    </form>
  );
}
