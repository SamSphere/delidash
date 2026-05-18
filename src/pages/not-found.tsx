import { Link } from "wouter";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("not_found.title")} | GastroHub`;
  }, [t]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Compass className="h-8 w-8" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{t("not_found.subtitle")}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{t("not_found.title")}</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">{t("not_found.body")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">{t("not_found.back_home")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white">
            <Link href="/demo">{t("not_found.open_demo")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
