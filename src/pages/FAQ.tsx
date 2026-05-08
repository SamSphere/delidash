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
        a: "Wir bieten zwei Modelle an. Einmalzahlung: einmalige Zahlung, danach 0 % Provision und keine monatlichen Gebühren. Provisionsmodell: 5 % pro Bestellung (Wartung separat) oder 7 % pro Bestellung inkl. vollständiger Wartung und Support. Den genauen Preis für die Einmalzahlung nennen wir Ihnen nach einem kurzen Gespräch, da er je nach Umfang variiert.",
      },
      {
        q: "Was ist der Unterschied zwischen den beiden Preismodellen?",
        a: "Beim Einmalzahlungsmodell tragen Sie einmalig die Kosten und zahlen danach keine Provision. Das lohnt sich, wenn Ihr Umsatz wächst. Beim Provisionsmodell entfällt die Anfangszahlung, dafür gehen 5 % oder 7 % jeder Bestellung an GastroHub. Das 7%-Modell beinhaltet vollständigen Wartungssupport, beim 5%-Modell wird Wartung gesondert berechnet. Beide Modelle sind deutlich günstiger als Lieferando oder Uber Eats.",
      },
      {
        q: "Kann ich von Lieferando oder Uber Eats zu GastroHub wechseln?",
        a: "Ja, und viele unserer Kunden kommen genau daher. Wir übernehmen Ihr bestehendes Menü, richten Ihr eigenes Bestellsystem ein und begleiten Sie beim Übergang. Sie behalten alle Ihre Kundendaten und zahlen keine Provision mehr an Drittplattformen.",
      },
      {
        q: "Gibt es eine Mindestvertragslaufzeit?",
        a: "Nein. Beim Einmalzahlungsmodell gibt es keinerlei Bindung. Beim Provisionsmodell legen wir die Konditionen gemeinsam fest.",
      },
      {
        q: "Kann ich GastroHub kostenlos testen?",
        a: "Ja. Die interaktive Demo auf dieser Website steht Ihnen jederzeit frei zur Verfügung, ohne Registrierung oder Kreditkarte. Sie können sowohl die Kundensicht als auch das Admin-Dashboard ausprobieren.",
      },
    ],
  },
  {
    title: "Einrichtung & Technik",
    items: [
      {
        q: "Wie lange dauert die Einrichtung?",
        a: "Die Einrichtung ist in der Regel innerhalb weniger Tage abgeschlossen. Unser Team begleitet Sie bei Konfiguration, Menü-Import und Inbetriebnahme.",
      },
      {
        q: "Brauche ich technische Kenntnisse?",
        a: "Nein. Wir richten alles für Sie ein. Im Alltag verwalten Sie Menü, Bestellungen und Öffnungszeiten über ein übersichtliches Dashboard auf dem Smartphone.",
      },
      {
        q: "Kann ich mein bestehendes Menü übernehmen?",
        a: "Ja. Wir helfen Ihnen, Ihr Menü einzurichten. Kategorien, Varianten, Extras und Fotos werden dabei vollständig übernommen.",
      },
      {
        q: "Benötige ich eine eigene Domain?",
        a: "Nicht zwingend. Für den Start können wir eine Subdomain einrichten. Eine eigene Domain wie bestellen.ihr-restaurant.de empfehlen wir für einen professionellen Auftritt.",
      },
      {
        q: "Welche Geräte werden unterstützt?",
        a: "Ihr Dashboard läuft vollständig im Browser auf Smartphone, Tablet und Desktop. Ihre Kunden bestellen über jeden modernen Browser, ohne App-Installation.",
      },
    ],
  },
  {
    title: "Funktionen & Betrieb",
    items: [
      {
        q: "Wie werde ich über neue Bestellungen informiert?",
        a: "Neue Bestellungen werden Ihnen sofort per Telegram-Nachricht und E-Mail gemeldet. Sie können Bestellungen direkt aus dem Dashboard annehmen oder ablehnen und den Status in Echtzeit aktualisieren.",
      },
      {
        q: "Brauche ich eigene Fahrer?",
        a: "Für die Lieferung benötigen Sie entweder eigene Fahrer oder einen externen Kurierdienst. GastroHub verwaltet die Bestellungen und hält Sie in Echtzeit auf dem Laufenden, die Lieferlogistik organisieren Sie selbst.",
      },
      {
        q: "Kann ich Öffnungszeiten und Liefergebiete selbst einstellen?",
        a: "Ja. Öffnungszeiten, Mindestbestellwerte, Lieferzonen und Pausenzeiten stellen Sie jederzeit selbst im Dashboard ein.",
      },
      {
        q: "Kann ich Gerichte temporär deaktivieren?",
        a: "Ja. Artikel können mit einem Klick offline genommen und wieder aktiviert werden. Ideal für ausverkaufte Tagesgerichte oder saisonale Angebote.",
      },
      {
        q: "Welche Zahlungsmethoden werden unterstützt?",
        a: "Online-Zahlungen laufen über einen Anbieter Ihrer Wahl (z. B. Stripe): Kreditkarte, PayPal und weitere. Zusätzlich können Sie Barzahlung bei der Lieferung aktivieren.",
      },
      {
        q: "Gibt es eine mehrsprachige Unterstützung?",
        a: "Ja. Die Plattform unterstützt aktuell Deutsch, Englisch, Arabisch und Türkisch. Weitere Sprachen sind auf Anfrage möglich.",
      },
    ],
  },
  {
    title: "Support & Datenschutz",
    items: [
      {
        q: "Wie erreiche ich den Support?",
        a: "Unser Support ist per E-Mail erreichbar. Wir antworten werktags in der Regel am selben oder nächsten Tag. Bei dringenden Problemen bemühen wir uns um eine schnellstmögliche Lösung.",
      },
      {
        q: "Werden meine Daten gesichert?",
        a: "Ja. Alle Bestell- und Kundendaten werden regelmäßig gesichert. Im Falle eines technischen Problems stellen wir den letzten Stand wieder her.",
      },
      {
        q: "Wem gehören meine Kundendaten?",
        a: "Ihnen. Alle Bestell- und Kundendaten gehören ausschließlich Ihrem Restaurant. Wir verkaufen oder teilen diese Daten niemals mit Dritten.",
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
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Häufig gestellte Fragen zu GastroHub: Preismodelle, Einrichtung, Funktionen und Datenschutz. Alles, was Restaurantbesitzer über ihr eigenes Bestellsystem wissen müssen.";
    if (!meta.parentNode) document.head.appendChild(meta);
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

          <div className="bg-secondary/40 border border-primary/15 rounded-2xl p-8 text-center">
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
