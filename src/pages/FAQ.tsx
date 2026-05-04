import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | GastroHub";
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Häufig gestellte Fragen</h1>
            <p className="text-lg text-slate-600">
              Alles, was Sie über GastroHub wissen müssen.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                  Brauche ich eigene Fahrer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Nein, Sie können das System sowohl mit eigenen Fahrern als auch mit Kurierdiensten nutzen. Wir bieten eine flexible Fahreranbindung, sodass Sie entscheiden, wer Ihre Speisen ausliefert.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                  Wie lange dauert die Einrichtung?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Die Einrichtung dauert in der Regel weniger als 24 Stunden. Unser Team unterstützt Sie aktiv bei der Konfiguration, damit Sie schnellstmöglich starten können.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                  Gibt es eine Mindestvertragslaufzeit?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Nein. Sie können monatlich kündigen — ganz ohne Risiko und ohne versteckte Gebühren. Wir binden Kunden durch Leistung, nicht durch Knebelverträge.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                  Kann ich mein bestehendes Menü übernehmen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Ja, wir importieren Ihr Menü automatisch oder helfen Ihnen dabei, es schnell manuell einzurichten. Kategorien, Varianten und Extras werden dabei sauber übernommen.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary">
                  Was kostet das System?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Wir berechnen eine feste monatliche Gebühr — keine prozentuale Provision pro Bestellung, keine Überraschungen. Kontaktieren Sie uns für ein individuelles Angebot, das zu Ihrer Unternehmensgröße passt.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Noch offene Fragen?</h3>
            <p className="text-slate-600 mb-6">Unser Team hilft Ihnen gerne weiter.</p>
            <Button asChild size="lg">
              <Link href="/kontakt" data-testid="button-faq-contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
