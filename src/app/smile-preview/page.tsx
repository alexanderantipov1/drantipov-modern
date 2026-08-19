import type { Metadata } from "next";
import SmilePreview from "@/components/SmilePreview";

export const metadata: Metadata = {
  title: { absolute: "AI Smile Preview - See Your New Smile | Dr. Antipov" },
  description:
    "Upload a selfie and see an AI preview of your future smile in seconds. Free virtual smile makeover from Dr. Alexander Antipov, oral surgeon in Roseville, CA.",
  alternates: {
    canonical: "/smile-preview",
    languages: {
      en: "/smile-preview",
      ru: "/ru/smile-preview",
      "x-default": "/smile-preview",
    },
  },
  openGraph: {
    title: "AI Smile Preview - See Your New Smile",
    description:
      "Upload a selfie and see an AI preview of your future smile in seconds. Free virtual smile makeover in Roseville, CA.",
  },
};

export default function SmilePreviewPage() {
  return <SmilePreview locale="en" />;
}
