import { notFound } from "next/navigation";

// Smile gallery page removed from the site.
// Return 404 so it does not open even via a direct URL.
export const metadata = {
  robots: { index: false, follow: false },
};

export default function RemovedSmileGalleryPage() {
  notFound();
}
