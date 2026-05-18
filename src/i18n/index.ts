import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deCommon from "@/locales/de/common.json";
import enCommon from "@/locales/en/common.json";

export const SUPPORTED_LANGS = ["de", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: SupportedLang = "de";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { common: deCommon },
      en: { common: enCommon },
    },
    fallbackLng: DEFAULT_LANG,
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "gastrohub_lang",
      caches: ["localStorage"],
    },
  });

// Keep <html lang> in sync with the active language so screen readers + SEO see the right value.
function applyHtmlLang(lng: string) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", lng);
  }
}
applyHtmlLang(i18n.language || DEFAULT_LANG);
i18n.on("languageChanged", applyHtmlLang);

export default i18n;
