"use client";

/**
 * Client-side helper to obtain a reCAPTCHA v3 token before submitting a form.
 * Degrades gracefully: returns "" if grecaptcha is not loaded (e.g. localhost,
 * or before the deferred script initializes). The server verifies the token.
 */
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg";

type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

export function getRecaptchaToken(action = "form_submit"): Promise<string> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve("");
      return;
    }
    const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;
    if (!grecaptcha) {
      resolve("");
      return;
    }
    try {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then(resolve)
          .catch(() => resolve(""));
      });
    } catch {
      resolve("");
    }
  });
}
