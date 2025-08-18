import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { en, tr, de, es, ru, zh, fr, pl } from "./dictionaries";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  tr: tr as Dictionary,
  de: de as Dictionary,
  es: es as Dictionary,
  ru: ru as Dictionary,
  zh: zh as Dictionary,
  fr: fr as Dictionary,
  pl: pl as Dictionary,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? (en as Dictionary);
}
