/**
 * Simple in-memory rate limiter using a sliding window per IP.
 *
 * Production note: this resets on every cold start of the serverless function.
 * For a small medical practice with low traffic this is acceptable - most
 * brute-force / spam attempts come from a single IP and would still be
 * throttled within a single function instance lifetime.
 *
 * For higher-traffic deployments, swap this for Upstash Redis (or Vercel KV).
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

// Clean up old buckets every 5 minutes to prevent unbounded memory growth
let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 5 * 60 * 1000;

function maybeCleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
}

export type RateLimitOptions = {
  /** Identifier (typically IP address) */
  identifier: string;
  /** Max requests in the window */
  max: number;
  /** Window in milliseconds */
  windowMs: number;
  /** Optional prefix for the bucket key (e.g., route name) */
  prefix?: string;
};

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: number;
};

export function rateLimit(opts: RateLimitOptions): RateLimitResult {
  maybeCleanup();

  const key = `${opts.prefix ?? "default"}:${opts.identifier}`;
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    // New window
    const resetAt = now + opts.windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { success: true, remaining: opts.max - 1, resetAt };
  }

  if (bucket.count >= opts.max) {
    return { success: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count++;
  return { success: true, remaining: opts.max - bucket.count, resetAt: bucket.resetAt };
}

/** Extract IP from a Next.js Request. Falls back to "unknown" if no proxy header. */
export function getClientIp(req: Request): string {
  // Vercel sets x-forwarded-for in production
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    // x-forwarded-for can be "client, proxy1, proxy2" - first is client
    const first = xff.split(",")[0];
    if (first) return first.trim();
  }
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

/**
 * Convenience: return a 429 response if rate-limited, or null if OK.
 * Usage:
 *   const limited = await checkRateLimit(req, { prefix: "contact", max: 10, windowMs: 60_000 });
 *   if (limited) return limited;
 */
/**
 * Distributed fixed-window check via Upstash Redis REST API. Returns null when
 * Upstash isn't configured (caller falls back to the in-memory limiter) or on
 * any error (fail-open). Activated by setting UPSTASH_REDIS_REST_URL and
 * UPSTASH_REDIS_REST_TOKEN in the environment.
 */
async function upstashCheck(
  key: string,
  max: number,
  windowMs: number
): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  try {
    const windowSec = Math.max(1, Math.ceil(windowMs / 1000));
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(windowSec), "NX"],
        ["PTTL", key],
      ]),
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{ result?: number }>;
    const count = Number(data?.[0]?.result ?? 0);
    const pttl = Number(data?.[2]?.result ?? windowMs);
    const resetAt = Date.now() + (pttl > 0 ? pttl : windowMs);
    if (count > max) return { success: false, remaining: 0, resetAt };
    return { success: true, remaining: Math.max(0, max - count), resetAt };
  } catch {
    return null; // fail-open to in-memory limiter
  }
}

export async function checkRateLimit(
  req: Request,
  opts: { prefix: string; max: number; windowMs: number }
): Promise<Response | null> {
  const ip = getClientIp(req);
  const result =
    (await upstashCheck(`${opts.prefix}:${ip}`, opts.max, opts.windowMs)) ??
    rateLimit({
      identifier: ip,
      max: opts.max,
      windowMs: opts.windowMs,
      prefix: opts.prefix,
    });

  if (!result.success) {
    const retryAfter = Math.ceil((result.resetAt - Date.now()) / 1000);
    return new Response(
      JSON.stringify({
        error: "Too many requests",
        retryAfter,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(retryAfter),
          "X-RateLimit-Limit": String(opts.max),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.floor(result.resetAt / 1000)),
        },
      }
    );
  }

  return null;
}
