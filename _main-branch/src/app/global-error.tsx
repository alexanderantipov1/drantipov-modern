"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h2>Something went wrong</h2>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={() => reset()} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Try again
        </button>
      </body>
    </html>
  )
}
