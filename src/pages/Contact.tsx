import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Kontakt | GastroHub";
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
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            
            <a
              href="mailto:kontakt@gastrohub.dev"
              className="inline-block text-3xl md:text-4xl font-bold text-primary hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 pb-1"
              data-testid="link-email"
            >
              kontakt@gastrohub.dev
            </a>

            <p className="text-slate-500 text-sm mt-6">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
