import { notFound } from "next/navigation";

// Страница галереи удалена из русской версии сайта.
// Возвращаем 404, чтобы она не открывалась даже по прямой ссылке.
export const metadata = {
  robots: { index: false, follow: false },
};

export default function RemovedRuSmileGalleryPage() {
  notFound();
}
