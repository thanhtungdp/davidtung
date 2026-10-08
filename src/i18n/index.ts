import en from "./dictionaries/en";
import vi, { type Dictionary } from "./dictionaries/vi";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from "./config";
