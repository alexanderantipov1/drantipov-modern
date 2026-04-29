"use client";

import { useState, useEffect } from "react";
import { officePhone, officePhoneHref } from "@/data/russianImplantFunnel";

export default function StickyConciergeBar() {
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setWhatsapp(process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "");
    setTelegram(process.env.NEXT_PUBLIC_CONTACT_TELEGRAM ?? "");
  }, []);

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Здравствуйте! Хочу получить консультацию.")}`
    : null;
  const telegramHref = telegram ? `https://t.me/${telegram}` : null;

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-dark/10 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)] sm:hidden">
        <a
          href={officePhoneHref}
          aria-label="Позвонить"
          className="flex flex-1 items-center justify-center gap-2 border-r border-dark/10 py-3 text-sm font-bold text-dark"
        >
          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.873 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Звонок
        </a>
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex flex-1 items-center justify-center gap-2 border-r border-dark/10 py-3 text-sm font-bold text-dark"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25D366]" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.66a11.83 11.83 0 005.66 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.35-8.46zM12.04 21.5a9.59 9.59 0 01-4.89-1.34l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.55 9.55 0 01-1.46-5.04c0-5.3 4.31-9.6 9.7-9.6 2.59 0 5.02 1 6.85 2.83a9.62 9.62 0 012.85 6.81c0 5.3-4.31 9.6-9.7 9.6zm5.31-7.18c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.19.29-.74.93-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5l-.55-.01a1.05 1.05 0 00-.77.36c-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3 .15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
            </svg>
            WhatsApp
          </a>
        )}
        {telegramHref && (
          <a
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex flex-1 items-center justify-center gap-2 border-r border-dark/10 py-3 text-sm font-bold text-dark"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#229ED9]" fill="currentColor" aria-hidden="true">
              <path d="M11.94 0C5.36 0 0 5.36 0 11.94c0 6.59 5.36 11.94 11.94 11.94S23.88 18.53 23.88 11.94 18.52 0 11.94 0zm5.96 8.21l-2.06 9.69c-.15.69-.56.86-1.13.54l-3.13-2.31-1.51 1.45c-.17.17-.31.31-.62.31l.22-3.16 5.74-5.19c.25-.22-.06-.34-.38-.13l-7.1 4.47-3.06-.95c-.66-.21-.68-.66.14-.97l11.99-4.62c.55-.21 1.03.13.85.97z" />
            </svg>
            Telegram
          </a>
        )}
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center bg-primary py-3 text-sm font-bold text-white"
        >
          Заявка
        </a>
      </div>

      {/* Desktop floating action button */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex">
        {open && (
          <div className="flex flex-col items-end gap-2">
            <a
              href={officePhoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-dark shadow-lg ring-1 ring-dark/10 transition hover:bg-light"
            >
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.873 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {officePhone}
            </a>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.66a11.83 11.83 0 005.66 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.35-8.46zM12.04 21.5a9.59 9.59 0 01-4.89-1.34l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.55 9.55 0 01-1.46-5.04c0-5.3 4.31-9.6 9.7-9.6 2.59 0 5.02 1 6.85 2.83a9.62 9.62 0 012.85 6.81c0 5.3-4.31 9.6-9.7 9.6zm5.31-7.18c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.19.29-.74.93-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5l-.55-.01a1.05 1.05 0 00-.77.36c-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3 .15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
                </svg>
                WhatsApp
              </a>
            )}
            {telegramHref && (
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M11.94 0C5.36 0 0 5.36 0 11.94c0 6.59 5.36 11.94 11.94 11.94S23.88 18.53 23.88 11.94 18.52 0 11.94 0zm5.96 8.21l-2.06 9.69c-.15.69-.56.86-1.13.54l-3.13-2.31-1.51 1.45c-.17.17-.31.31-.62.31l.22-3.16 5.74-5.19c.25-.22-.06-.34-.38-.13l-7.1 4.47-3.06-.95c-.66-.21-.68-.66.14-.97l11.99-4.62c.55-.21 1.03.13.85.97z" />
                </svg>
                Telegram
              </a>
            )}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Скрыть контакты" : "Связаться"}
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition hover:bg-primary-dark"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7V9h10v2zm0-3H7V6h10v2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
