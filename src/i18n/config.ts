export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export const siteUrl = "https://www.davidtung.net";

/** Vietnamese lives at the root, English under /en — same URLs as the old site. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? "/en/" : `/en${clean}`;
}

/** Swap the locale prefix of a pathname, used by the language switcher. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(to, bare);
}

export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "vi";
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}
