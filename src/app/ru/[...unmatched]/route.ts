import { unmatchedResponse } from "@/lib/not-found-response";

export function GET() {
  return unmatchedResponse("ru");
}

export function HEAD() {
  const response = unmatchedResponse("ru");
  return new Response(null, { status: response.status, headers: response.headers });
}