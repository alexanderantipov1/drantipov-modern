import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["tooth-extractions"];

export const metadata = buildServiceMetadata(data);

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
