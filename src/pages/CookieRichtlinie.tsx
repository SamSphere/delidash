import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function CookieRichtlinie() {
  const { t, i18n } = useTranslation("legal");
  const tk = (k: string) => t(`cookie_richtlinie.${k}`);
  const isEn = i18n.language === "en";

  useEffect(() => {
    document.title = `${tk("title")} | GastroHub`;
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = tk("meta_description");
    if (!meta.parentNode) document.head.appendChild(meta);
  }, [t, i18n.language]);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">{tk("title")}</h1>

        {isEn && (
          <div className="not-prose mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {t("translation_disclaimer")}
          </div>
        )}

        <h2 className="text-xl font-semibold mt-8 mb-4">{tk("s1_h")}</h2>
        <p>{tk("s1_body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">{tk("s2_h")}</h2>
        <p>{tk("s2_intro")}</p>
        <ul>
          <li>
            <strong>{tk("s2_consent_strong")}</strong> {tk("s2_consent_body")}
          </li>
        </ul>
        <p>{tk("s2_no_analytics")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">{tk("s3_h")}</h2>
        <p>{tk("s3_body1")}</p>
        <p>{tk("s3_body2")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">{tk("s4_h")}</h2>
        <p>{tk("s4_body1")}</p>
        <p>{tk("s4_body2")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">{tk("s5_h")}</h2>
        <p>
          {tk("s5_body_prefix")}{" "}
          <Link href="/datenschutz" className="text-primary hover:underline">{tk("s5_link")}</Link>.
        </p>

        <p className="text-sm text-slate-400 mt-12">{tk("stand")}</p>
      </div>
    </div>
  );
}
