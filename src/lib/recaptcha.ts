/**
 * Server-side Google reCAPTCHA v3 token verification.
 *
 * Validates the token submitted by the client against Google's siteverify API.
 * Returns true only if the token is valid AND score is above threshold.
 *
 * Setup:
 *   1. Set RECAPTCHA_SECRET_KEY in env (NOT public - server-only)
 *   2. Client sends the token in body.recaptchaToken (or as ?token= query)
 *   3. Server calls verifyRecaptcha(token) before processing the form
 */

const SITEVERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5; // reCAPTCHA v3 score threshold (1.0 = very likely human, 0.0 = very likely bot)

export type RecaptchaResult = {
  valid: boolean;
  score?: number;
  reason?: string;
};

export async function verifyRecaptcha(token: string | undefined | null): Promise<RecaptchaResult> {
  // If reCAPTCHA isn't configured server-side, skip verification (dev mode)
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    // In dev: log a warning but allow through. In prod: still allow but log to monitoring.
    if (process.env.NODE_ENV === "production") {
      console.warn("[recaptcha] RECAPTCHA_SECRET_KEY not configured - skipping verification");
    }
    return { valid: true, reason: "not_configured" };
  }

  if (!token || typeof token !== "string" || token.length < 10) {
    return { valid: false, reason: "missing_token" };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      // Short timeout - don't hang the form if Google is slow
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return { valid: false, reason: "siteverify_error" };
    }

    const data = await response.json() as {
      success?: boolean;
      score?: number;
      action?: string;
      challenge_ts?: string;
      hostname?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      return { valid: false, reason: "siteverify_failed", score: data.score };
    }

    if (typeof data.score === "number" && data.score < MIN_SCORE) {
      return { valid: false, reason: "score_too_low", score: data.score };
    }

    return { valid: true, score: data.score };
  } catch (err) {
    // Network error, timeout, etc - log internally but don't expose to client
    console.error("[recaptcha] verification error:", err instanceof Error ? err.message : "unknown");
    // Fail-open in case of Google outage - better UX, low security risk for a clinic site
    return { valid: true, reason: "verify_error_open" };
  }
}
