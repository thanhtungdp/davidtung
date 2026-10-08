import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { localePath, siteUrl, type Locale } from "@/i18n/config";

/** Per-page metadata with canonical + hreflang alternates for both locales. */
export function pageMetadata(locale: Locale, path: string, opts: { title?: string; description?: string } = {}): Metadata {
  const t = getDictionary(locale);
  const title = opts.title ? `${opts.title} — David Tung` : t.meta.title;
  const description = opts.description ?? t.meta.description;
  const url = localePath(locale, path);
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: { vi: localePath("vi", path), en: localePath("en", path), "x-default": localePath("vi", path) },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "David Tung",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    icons: {
      icon: [{ url: "/favicon-32.png", sizes: "32x32" }, { url: "/icon-512.png", sizes: "512x512" }],
      apple: "/apple-touch-icon.png",
    },
  };
}
