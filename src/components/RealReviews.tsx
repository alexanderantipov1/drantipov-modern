const DEFAULT_REVIEWS_URL = "https://www.google.com/search?q=Dr+Alexander+Antipov+DDS+Roseville+reviews";

interface Props {
  variant?: "compact" | "full";
}

export default function RealReviews({ variant = "full" }: Props) {
  const reviewsUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ?? DEFAULT_REVIEWS_URL;

  if (variant === "compact") {
    return (
      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-3 py-1.5 text-xs font-semibold text-dark transition hover:border-primary/40 hover:text-primary"
      >
        <span className="flex items-center gap-0.5 text-primary" aria-hidden="true">
          <Star /> <Star /> <Star /> <Star /> <Star />
        </span>
        <span>4.9 · 300+ отзывов на Google</span>
      </a>
    );
  }

  return (
    <section className="bg-bone py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-dark/5 sm:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold tracking-tight text-dark sm:text-7xl">
                4.9
                <span className="text-3xl text-muted">/5</span>
              </div>
              <div className="mt-3 flex justify-center text-primary md:justify-start" aria-hidden="true">
                <Star className="h-6 w-6" />
                <Star className="h-6 w-6" />
                <Star className="h-6 w-6" />
                <Star className="h-6 w-6" />
                <Star className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted">
                300+ verified reviews
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Отзывы пациентов</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Что говорят пациенты Dr. Antipov
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                4.9★ — средняя оценка по 300+ верифицированным отзывам на Google. Истории пациентов — про
                сложные случаи, прозрачную стоимость, comfort во время процедуры и долгосрочный результат.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-base font-bold text-white transition hover:bg-primary-dark"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Read reviews on Google
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-dark/10 px-6 py-3 text-base font-bold text-dark transition hover:border-primary/40"
                >
                  Записаться на консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l3.09 6.26L22 9.77l-5 4.87 1.18 6.88L12 18.27l-6.18 3.25L7 14.64 2 9.77l6.91-1.01L12 2.5z" />
    </svg>
  );
}
