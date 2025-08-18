export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isSupportedLocale(input: string): input is Locale {
  return (locales as readonly string[]).includes(input);
}
