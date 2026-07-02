"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Здравствуйте! Я виртуальный помощник практики Dr. Antipov. Расскажите, что вас интересует — импланты, исправление прикуса, ринопластика — и в каком вы городе. Подскажу варианты и помогу записаться на бесплатную консультацию.",
};

const SUGGESTIONS = [
  "Сколько стоит All-on-4?",
  "Мне сказали, что кости недостаточно. Есть варианты?",
  "Я живу не в California. Можно начать удалённо?",
  "Что такое zygomatic implants?",
];

export default function RussianChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 200);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  async function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;
    setError(null);
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m !== GREETING),
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        fallback?: string;
        error?: string;
      };
      if (data.ok && data.message) {
        setMessages((m) => [...m, { role: "assistant", content: data.message ?? "" }]);
      } else {
        const fallback =
          data.fallback ??
          "Что-то пошло не так. Позвоните (916) 783-2110 или оставьте заявку через форму.";
        setMessages((m) => [...m, { role: "assistant", content: fallback }]);
        setError(data.error ?? "error");
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Не получилось отправить сообщение. Проверьте интернет — или позвоните (916) 783-2110.",
        },
      ]);
      setError("network");
    } finally {
      setSending(false);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendText(input);
  }

  return (
    <>
      {/* Floating launcher button (bottom-left so it doesn't collide with StickyConciergeBar bottom-right) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрыть чат" : "Открыть чат"}
        aria-expanded={open}
        className="fixed bottom-20 left-4 z-40 hidden h-14 items-center gap-2 rounded-full bg-dark px-5 text-sm font-bold text-white shadow-xl shadow-dark/30 transition hover:bg-navy sm:bottom-6 sm:flex"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        Спросить на русском
      </button>

      {/* Mobile launcher — smaller, sits above the sticky bottom bar */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрыть чат" : "Открыть чат"}
        aria-expanded={open}
        className="fixed bottom-20 left-4 z-40 flex h-12 items-center gap-2 rounded-full bg-dark px-4 text-xs font-bold text-white shadow-xl shadow-dark/30 sm:hidden"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Чат
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Чат с помощником Dr. Antipov"
          className="fixed inset-x-2 bottom-20 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-2xl shadow-black/30 sm:bottom-24 sm:left-4 sm:right-auto sm:max-h-[600px] sm:w-[380px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-dark px-5 py-4 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-light">
                AI-помощник
              </p>
              <p className="text-base font-bold">Dr. Antipov · по-русски</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
              className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-light px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6 shadow-sm ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-white"
                      : "rounded-bl-sm bg-white text-dark ring-1 ring-dark/5"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 ring-1 ring-dark/5">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick suggestions */}
          {messages.length <= 1 && !sending && (
            <div className="border-t border-dark/5 bg-light px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => sendText(s)}
                    className="rounded-full border border-dark/10 bg-white px-3 py-1.5 text-xs font-medium text-dark transition hover:border-primary/40 hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="flex items-end gap-2 border-t border-dark/10 bg-white px-3 py-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendText(input);
                }
              }}
              placeholder="Опишите ситуацию или задайте вопрос…"
              rows={1}
              disabled={sending}
              className="max-h-32 flex-1 resize-none rounded-2xl border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sending || input.trim().length === 0}
              aria-label="Отправить"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12L20.25 4.5l-3 7.5 3 7.5L3.75 12z" />
              </svg>
            </button>
          </form>

          <p className="border-t border-dark/5 bg-white px-4 py-2 text-[11px] leading-snug text-muted">
            AI-помощник, не заменяет консультацию. Точные рекомендации — после осмотра и 3D CT.
            Срочно?{" "}
            <a href="tel:9167832110" className="font-semibold text-primary hover:text-primary-dark">
              (916) 783-2110
            </a>
            {error ? <span className="ml-2 text-red-500">· временная ошибка</span> : null}
          </p>
        </div>
      )}
    </>
  );
}
