import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Kontakt | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Kontaktieren Sie GastroHub. Wir helfen Ihnen beim Aufbau Ihres eigenen Restaurant-Bestellsystems ohne Provision. Antwort werktags am selben oder nächsten Tag.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <div className="flex-1 py-20 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Kontakt aufnehmen</h1>
            <p className="text-lg text-slate-600">
              Haben Sie Fragen? Schreiben Sie uns direkt eine E-Mail. Wir freuen uns, von Ihnen zu hören.
            </p>
          </div>

          <Card className="p-10 border-none shadow-lg bg-white text-center rounded-2xl">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="h-10 w-10 text-primary" />
            </div>

            <a
              href="mailto:kontakt@gastrohub.dev"
              className="inline-block text-3xl md:text-4xl font-bold text-primary hover:text-primary-hover transition-colors border-b-2 border-transparent hover:border-primary-hover pb-1"
              data-testid="link-email"
            >
              kontakt@gastrohub.dev
            </a>

            <p className="text-slate-500 text-sm mt-6">Wir antworten werktags in der Regel am selben oder nächsten Tag.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
