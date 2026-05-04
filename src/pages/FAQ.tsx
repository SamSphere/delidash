import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const faqSections = [
  {
    title: "Allgemein & Preise",
    items: [
      {
        q: "Was kostet GastroHub?",
        a: "GastroHub funktioniert als Einmalzahlung, keine monatlichen Gebühren, keine Provision pro Bestellung. Den genauen Preis teilen wir Ihnen nach einem kurzen Gespräch mit, da er je nach Umfang Ihres Restaurants variiert. Kontaktieren Sie uns einfach für ein Angebot.",
      },
      {
        q: "Gibt es eine Testphase?",
        a: "Ja, Sie können die Demo direkt auf dieser Website unverbindlich und kostenlos ausprobieren, ohne Kreditkarte oder Registrierung.",
      },
      {
        q: "Gibt es laufende Kosten nach der Einmalzahlung?",
        a: "Nein. Nach der Einmalzahlung entstehen keine weiteren Pflichtkosten durch GastroHub. Optional können Kosten für Ihre eigene Domain oder einen externen Zahlungsanbieter anfallen, das liegt jedoch außerhalb unseres Produkts.",
      },
      {
        q: "Gibt es eine Mindestvertragslaufzeit?",
        a: "Nein. Es gibt keine Vertragsbindung. Sie zahlen einmal und nutzen das System dauerhaft.",
      },
      {
        q: "Fallen Provisionen pro Bestellung an?",
        a: "Nein. GastroHub erhebt 0 % Provision auf Ihre Bestellungen. Alle Einnahmen gehören Ihnen.",
      },
    ],
  },
  {
    title: "Einrichtung & Technik",
    items: [
      {
        q: "Wie lange dauert die Einrichtung?",
        a: "Die Einrichtung dauert in der Regel weniger als 24 Stunden. Unser Team unterstützt Sie aktiv bei der Konfiguration, dem Menü-Import und der Inbetriebnahme.",
      },
      {
        q: "Brauche ich technische Kenntnisse?",
        a: "Nein. Wir richten alles für Sie ein. Die Bedienung im Alltag, Menü pflegen, Bestellungen annehmen, Öffnungszeiten ändern, erfolgt über ein einfaches Dashboard auf dem Smartphone.",
      },
      {
        q: "Kann ich mein bestehendes Menü übernehmen?",
        a: "Ja. Wir importieren Ihr Menü automatisch oder helfen Ihnen, es manuell einzurichten. Kategorien, Varianten, Extras und Fotos werden dabei sauber übernommen.",
      },
      {
        q: "Benötige ich eine eigene Domain?",
        a: "Nicht zwingend für den Start. Wir können das System auch unter einer Subdomain oder einem bestehenden Link bereitstellen. Eine eigene Domain (z. B. bestellen.ihr-restaurant.de) empfehlen wir für einen professionellen Auftritt.",
      },
      {
        q: "Welche Geräte werden unterstützt?",
        a: "Das Owner-Dashboard funktioniert vollständig über den Browser auf Smartphone, Tablet und Desktop. Ihre Kunden können über jeden modernen Browser bestellen, keine App-Installation notwendig.",
      },
    ],
  },
  {
    title: "Funktionen & Betrieb",
    items: [
      {
        q: "Brauche ich eigene Fahrer?",
        a: "Nein. Sie können das System sowohl mit eigenen Fahrern als auch mit externen Kurierdiensten nutzen. GastroHub verwaltet die Bestellungen, die Lieferlogistik entscheiden Sie selbst.",
      },
      {
        q: "Kann ich Öffnungszeiten und Liefergebiete selbst einstellen?",
        a: "Ja. Sie stellen Öffnungszeiten, Mindestbestellwerte, Lieferzonen und Pausenzeiten direkt im Dashboard ein, jederzeit und ohne unsere Hilfe.",
      },
      {
        q: "Kann ich Gerichte temporär deaktivieren?",
        a: "Ja. Artikel können mit einem Klick offline genommen und wieder aktiviert werden. Ideal für ausverkaufte Tagesgerichte oder saisonale Angebote.",
      },
      {
        q: "Welche Zahlungsmethoden werden unterstützt?",
        a: "GastroHub unterstützt gängige Online-Zahlungsmethoden wie Kreditkarte und PayPal über einen Zahlungsanbieter Ihrer Wahl (z. B. Stripe). Die Integration richten wir bei der Einrichtung für Sie ein.",
      },
      {
        q: "Gibt es eine mehrsprachige Unterstützung?",
        a: "Ja. Die Plattform unterstützt Deutsch, Englisch und Arabisch, damit erreichen Sie mehr Kunden ohne zusätzlichen Aufwand.",
      },
    ],
  },
  {
    title: "Support & Datenschutz",
    items: [
      {
        q: "Was passiert, wenn ich ein technisches Problem habe?",
        a: "Unser Support ist per E-Mail erreichbar und antwortet in der Regel innerhalb von 24 Stunden. Bei dringenden Problemen bemühen wir uns um eine schnellstmögliche Lösung.",
      },
      {
        q: "Wem gehören meine Kundendaten?",
        a: "Ihnen. Alle Bestelldaten und Kundendaten gehören ausschließlich Ihrem Restaurant. Wir verkaufen oder teilen diese Daten niemals mit Dritten.",
      },
      {
        q: "Ist GastroHub DSGVO-konform?",
        a: "Ja. Das System ist auf den europäischen Markt ausgerichtet und DSGVO-konform aufgebaut. Alle Daten werden auf europäischen Servern verarbeitet.",
      },
    ],
  },
];

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

          <div className="space-y-6 mb-12">
            {faqSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 md:px-8 py-4 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-slate-500 uppercase tracking-wide">{section.title}</h2>
                </div>
                <div className="px-6 md:px-8">
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${section.title}-${i}`}
                        className={i === section.items.length - 1 ? "border-b-0" : ""}
                      >
                        <AccordionTrigger className="text-left text-base font-semibold text-slate-800 hover:text-primary">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
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
