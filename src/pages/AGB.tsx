import { useEffect } from "react";

export default function AGB() {
  useEffect(() => {
    document.title = "AGB | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Allgemeine Geschäftsbedingungen von GastroHub. Restaurant-Bestellplattform mit Einmalzahlungs- oder Provisionsmodell.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Verträge zwischen Osama Farroukh, c/o MDC, Welserstraße 3, 87463 Dietmannsried (nachfolgend „GastroHub") und dem Restaurantbetreiber (nachfolgend „Kunde") über die Bereitstellung der GastroHub-Bestellplattform und damit verbundener Leistungen. Abweichende Bedingungen des Kunden werden nicht Vertragsbestandteil, sofern GastroHub diesen nicht ausdrücklich schriftlich zustimmt. Die Leistungen richten sich ausschließlich an Unternehmer im Sinne von § 14 BGB.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 2 Leistungsbeschreibung</h2>
        <p>
          GastroHub stellt dem Kunden eine browserbasierte Bestellplattform zur Verfügung, bestehend aus einer öffentlichen Bestellseite für Endkunden und einem Admin-Dashboard zur Verwaltung von Speisekarte, Bestellungen, Lieferzonen, Öffnungszeiten und weiteren Betriebsfunktionen. Der genaue Funktionsumfang ergibt sich aus der Beschreibung auf gastrohub.dev zum Zeitpunkt des Vertragsschlusses.
        </p>
        <p>
          Optional richtet GastroHub für den Kunden die Plattform ein, übernimmt die initiale Pflege der Speisekarte aus vorhandenen Quellen und richtet eine Subdomain oder verknüpft eine vom Kunden gestellte Domain. Diese Leistungen sind, sofern nicht ausdrücklich anders vereinbart, im Einrichtungspreis enthalten.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 3 Vertragsschluss</h2>
        <p>
          Der Vertrag kommt durch Annahme eines individuellen Angebots von GastroHub durch den Kunden in Textform (z.B. per E-Mail) zustande. Die auf gastrohub.dev dargestellten Preismodelle stellen kein bindendes Angebot dar, sondern eine Aufforderung zur Angebotsabgabe.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 4 Preismodelle und Zahlung</h2>
        <p>
          Der Kunde wählt eines der folgenden Preismodelle:
        </p>
        <ul>
          <li>
            <strong>Einmalzahlungsmodell:</strong> Der Kunde zahlt einen einmaligen, im Angebot benannten Festpreis für Einrichtung und Bereitstellung. Es fällt keine laufende Provision an. Wartung und Updates werden separat abgerechnet.
          </li>
          <li>
            <strong>Provisionsmodell 5 %:</strong> Es fällt keine Einrichtungsgebühr an. GastroHub erhält 5 % je verarbeiteter Bestellung. Wartung und Updates werden separat abgerechnet.
          </li>
          <li>
            <strong>Provisionsmodell 7 %:</strong> Es fällt keine Einrichtungsgebühr an. GastroHub erhält 7 % je verarbeiteter Bestellung. Wartung und Updates sowie technischer Support sind im Preis enthalten.
          </li>
        </ul>
        <p>
          Die Provision wird im Provisionsmodell automatisiert über Stripe Connect (Application Fee) je Transaktion einbehalten, ausgewiesen und an GastroHub ausgezahlt. Eine zusätzliche Rechnungsstellung an den Kunden entfällt insoweit. Einmalbeträge und gesonderte Wartungspauschalen werden per Rechnung mit einem Zahlungsziel von 14 Tagen fällig.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 5 Umsatzsteuer</h2>
        <p>
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen. Alle in dieser Vereinbarung und in Rechnungen genannten Beträge sind Nettobeträge ohne gesonderten Umsatzsteuerausweis.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 6 Mitwirkungspflichten des Kunden</h2>
        <p>
          Der Kunde stellt alle für die Einrichtung und den Betrieb erforderlichen Inhalte (Speisekarte, Bilder, Logo, Öffnungszeiten, Lieferzonen, Rechtsangaben) rechtzeitig zur Verfügung und sorgt für deren rechtliche Zulässigkeit. Der Kunde ist insbesondere für Vollständigkeit und Richtigkeit der Allergen- und Zusatzstoffkennzeichnung verantwortlich.
        </p>
        <p>
          Der Kunde benennt mindestens eine verantwortliche Person für die Plattform und sorgt für den vertraulichen Umgang mit Zugangsdaten.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 7 Stripe Connect und Zahlungsabwicklung</h2>
        <p>
          Für die Online-Zahlungsabwicklung ist die Einrichtung eines Stripe Connect Accounts auf den Kunden erforderlich. Vertragspartner für die Zahlungsabwicklung ist Stripe (Stripe Payments Europe, Limited, Dublin, Irland). Es gelten zusätzlich die Bedingungen von Stripe. GastroHub übernimmt keine Haftung für Verfügbarkeit oder Funktion der Stripe-Dienste.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 8 Datenschutz und Auftragsverarbeitung</h2>
        <p>
          Soweit GastroHub im Auftrag des Kunden personenbezogene Daten von Endkunden des Restaurants verarbeitet, schließen die Parteien eine separate Auftragsverarbeitungsvereinbarung (AVV) gemäß Art. 28 DSGVO ab. Weitere Informationen zur Datenverarbeitung finden Sie in der{" "}
          <a href="/#/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 9 Verfügbarkeit</h2>
        <p>
          GastroHub bemüht sich um eine möglichst hohe Verfügbarkeit der Plattform, sichert jedoch keine bestimmte Verfügbarkeit zu. Wartungsfenster werden, soweit möglich, außerhalb der typischen Bestellzeiten gelegt. Ausfälle aufgrund höherer Gewalt, Ausfällen bei Vorlieferanten (Hosting, Stripe, DNS) oder Angriffen Dritter führen nicht zu Schadensersatzansprüchen, soweit GastroHub diese nicht zu vertreten hat.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 10 Haftung</h2>
        <p>
          GastroHub haftet unbeschränkt für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen, sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei der leicht fahrlässigen Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf, ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Bei einfacher Fahrlässigkeit und Verletzung nicht-wesentlicher Pflichten ist die Haftung ausgeschlossen, soweit gesetzlich zulässig.
        </p>
        <p>
          Für Inhalte, die der Kunde über die Plattform veröffentlicht (insbesondere Speisekarte, Bilder, Texte), ist ausschließlich der Kunde verantwortlich. Der Kunde stellt GastroHub von Ansprüchen Dritter im Zusammenhang mit solchen Inhalten frei.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 11 Laufzeit und Kündigung</h2>
        <p>
          Im Einmalzahlungsmodell besteht keine feste Laufzeit. Mit Zahlung der Einmalsumme bleibt die bereitgestellte Plattform nutzbar; eine Kündigung der Bereitstellung ist nicht vorgesehen, optional gebuchte Wartungs- oder Supportleistungen sind monatlich kündbar.
        </p>
        <p>
          Das Provisionsmodell (5 % oder 7 %) kann von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende ordentlich gekündigt werden, sofern keine längere Bindung individuell vereinbart wurde. Mit Wirksamwerden der Kündigung wird die Bestellplattform deaktiviert; bereits angefallene Provisionen bleiben hiervon unberührt.
        </p>
        <p>
          Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Parteien unberührt. Kündigungen bedürfen der Textform.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 12 Rechtswahl und Gerichtsstand</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, Stuttgart. GastroHub ist auch berechtigt, am allgemeinen Gerichtsstand des Kunden zu klagen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">§ 13 Salvatorische Klausel</h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt davon die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen oder undurchführbaren Regelung tritt diejenige wirksame und durchführbare Regelung, die dem wirtschaftlichen Zweck der unwirksamen oder undurchführbaren Regelung am nächsten kommt.
        </p>

        <p className="text-sm text-slate-400 mt-12">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
