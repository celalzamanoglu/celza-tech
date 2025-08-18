import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { dictionary as en } from "./dictionaries/en";
import { dictionary as tr } from "./dictionaries/tr";
import { dictionary as de } from "./dictionaries/de";
import { dictionary as es } from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  tr: tr as Dictionary,
  de: de as Dictionary,
  es: es as Dictionary,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? (en as Dictionary);
}
