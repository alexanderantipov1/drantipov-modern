import { unmatchedResponse } from "@/lib/not-found-response";

export function GET() {
  return unmatchedResponse("en");
}

export function HEAD() {
  const response = unmatchedResponse("en");
  return new Response(null, { status: response.status, headers: response.headers });
}