import { Mail, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_ID";

export default function Contact() {
  const { t } = useTranslation("contact");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Kontakt | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = t("meta_description");
    if (!meta.parentNode) document.head.appendChild(meta);

    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") setSubmitted(true);
  }, [t]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <div className="flex-1 py-20 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{t("title")}</h1>
            <p className="text-lg text-slate-600">{t("subtitle")}</p>
          </div>

          {submitted ? (
            <Card className="p-10 border-none shadow-lg bg-white text-center rounded-2xl">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t("success_title")}</h2>
              <p className="text-slate-600">{t("success_body")}</p>
            </Card>
          ) : (
            <Card className="p-8 md:p-10 border-none shadow-lg bg-white rounded-2xl">
              <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-5" data-testid="form-contact">
                <input type="hidden" name="_next" value="https://gastrohub.dev/kontakt?sent=1" />
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="contact-name" className="mb-2 inline-block">{t("form_name")} {t("form_required_suffix")}</Label>
                    <Input id="contact-name" name="name" type="text" required autoComplete="name" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="mb-2 inline-block">{t("form_email")} {t("form_required_suffix")}</Label>
                    <Input id="contact-email" name="email" type="email" required autoComplete="email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="contact-restaurant" className="mb-2 inline-block">{t("form_restaurant")}</Label>
                    <Input id="contact-restaurant" name="restaurant" type="text" autoComplete="organization" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="mb-2 inline-block">{t("form_phone")}</Label>
                    <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-message" className="mb-2 inline-block">{t("form_message")} {t("form_required_suffix")}</Label>
                  <Textarea id="contact-message" name="message" required rows={6} />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" data-testid="button-contact-submit">
                  {t("submit")}
                </Button>
              </form>
            </Card>
          )}

          <div className="mt-10 text-center text-slate-500 text-sm">
            {t("fallback")}{" "}
            <a
              href="mailto:kontakt@gastrohub.dev"
              className="inline-flex items-center gap-1 text-primary hover:text-primary-hover transition-colors font-medium"
              data-testid="link-email"
            >
              <Mail className="h-4 w-4" />
              kontakt@gastrohub.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
