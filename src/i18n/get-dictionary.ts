import type { Locale } from "./config";

export type Dictionary = typeof import("./dictionaries/en").dictionary;

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "tr":
      return (await import("./dictionaries/tr")).dictionary;
    case "en":
    default:
      return (await import("./dictionaries/en")).dictionary;
  }
}
