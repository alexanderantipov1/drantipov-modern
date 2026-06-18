import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    short_name: "Dr. Antipov",
    description:
      "Board-certified oral and maxillofacial surgeon in Roseville, CA. Specializing in dental implants, corrective jaw surgery, and facial cosmetic procedures.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0e3e5e",
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["health", "medical"],
    icons: [
      {
        src: "/images/logo-b97aa5c8.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo-b97aa5c8.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo-b97aa5c8.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
