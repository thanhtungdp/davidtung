"use client";

import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || "/";
  return (
    <div role="group" aria-label={label} className="relative flex h-10 items-center rounded-full border border-line p-1 text-xs font-bold">
      {locales.map((l) => {
        const active = l === locale;
        return (
          // Plain <a>: each locale has its own root layout (and <html lang>), so a full load is intended.
          <a
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`relative z-10 grid h-8 w-9 place-items-center rounded-full uppercase transition-colors ${
              active ? "bg-invert text-invert-fg" : "text-muted hover:text-fg"
            }`}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
