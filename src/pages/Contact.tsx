import { Mail, Clock, MapPin } from "lucide-react";
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
              href="mailto:hallo@deliverdirect.de" 
              className="inline-block text-3xl md:text-4xl font-bold text-primary hover:text-blue-700 transition-colors mb-8 border-b-2 border-transparent hover:border-blue-700 pb-1"
              data-testid="link-email"
            >
              hallo@deliverdirect.de
            </a>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8 border-t border-slate-100 pt-8 text-left">
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Antwortzeit</h4>
                  <p className="text-slate-600 text-sm">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Standort</h4>
                  <p className="text-slate-600 text-sm">Berlin, Deutschland<br/>Remote First Team</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
