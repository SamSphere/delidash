import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6" role="region" aria-label="Cookie">
      <div className="max-w-4xl mx-auto bg-slate-900 text-slate-200 rounded-2xl shadow-2xl border border-slate-700 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm flex-1 leading-relaxed">
          {t("cookie_banner.text")}{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-white transition-colors">
            {t("cookie_banner.datenschutz_link")}
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={decline}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {t("cookie_banner.decline")}
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            {t("cookie_banner.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
