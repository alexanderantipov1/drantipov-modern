import { getWebPageSchema, structuredDataScript } from "@/lib/structured-data";

/** Explicit route-owned identity; never infer a medical type from a global layout. */
export default function PageIdentity(props: Parameters<typeof getWebPageSchema>[0]) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript(getWebPageSchema(props))} />;
}