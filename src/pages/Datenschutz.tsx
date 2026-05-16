import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutz | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Datenschutzerklärung von GastroHub. DSGVO-konform, europäische Server, Stripe Connect als Zahlungsdienstleister.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Allgemeine Hinweise</h2>
        <p>
          Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unsere Restaurant-Bestellplattform nutzen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <p>
          Diese Erklärung deckt sowohl den Auftritt auf <strong>gastrohub.dev</strong> als auch die von GastroHub betriebene Bestellplattform ab, die Restaurantbetreiber bei sich einsetzen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Verantwortlicher</h2>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung im Sinne der DSGVO ist:
        </p>
        <p>
          Osama Farroukh<br />
          c/o MDC, z.Hd. Osama Farroukh<br />
          Welserstraße 3<br />
          87463 Dietmannsried<br />
          Deutschland<br />
          E-Mail: <a href="mailto:kontakt@gastrohub.dev">kontakt@gastrohub.dev</a><br />
          Telefon: +49 151 11017356
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Hosting der Webseite</h2>
        <p>
          Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Website übermittelt Ihr Browser automatisch technische Daten (z.B. IP-Adresse, Browsertyp, Uhrzeit des Zugriffs) an die Server von GitHub. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien Bereitstellung). Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Frameworks.
        </p>
        <p>
          Die Bestellplattform-Anwendungsdaten werden ausschließlich auf Servern in Deutschland (Frankfurt) verarbeitet. Für die Marketing-Website erfolgt ein USA-Transfer an GitHub Pages (siehe Abs. 1).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder über den auf der Website angebotenen Mailto-Link kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Anfragen werden gelöscht, sobald sie abschließend bearbeitet sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kontaktanfragen werden spätestens nach 12 Monaten gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Restaurantbetreiber als Kunden</h2>
        <p>
          Wenn Sie als Restaurantbetreiber unsere Plattform buchen, verarbeiten wir Ihre Stammdaten zur Vertragsabwicklung und Rechnungsstellung:
        </p>
        <ul>
          <li>Name und Anschrift des Betriebs</li>
          <li>Ansprechpartner, E-Mail, Telefon</li>
          <li>Umsatzsteuer-ID, sofern vorhanden</li>
          <li>Stripe Connect Account-ID (siehe Abschnitt 7)</li>
        </ul>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Speicherdauer richtet sich nach den handels- und steuerrechtlichen Aufbewahrungsfristen (in der Regel 10 Jahre nach § 147 AO).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Daten der Endkunden des Restaurants</h2>
        <p>
          Endkunden, die über die von GastroHub bereitgestellte Plattform bei einem Restaurant bestellen, geben dabei personenbezogene Daten ein (Name, Lieferadresse, E-Mail, Telefonnummer, Bestelldetails). Verantwortlicher für diese Daten ist primär der Restaurantbetreiber. GastroHub verarbeitet diese Daten als Auftragsverarbeiter im Sinne von Art. 28 DSGVO ausschließlich im Auftrag und nach Weisung des Restaurantbetreibers.
        </p>
        <p>
          Mit jedem Restaurantbetreiber wird eine Auftragsverarbeitungsvereinbarung (AVV) gemäß Art. 28 DSGVO abgeschlossen, in der die Pflichten und Garantien festgelegt sind. Der AVV wird vor Beginn der ersten Verarbeitung personenbezogener Daten von Endkunden abgeschlossen. Die Daten werden ausschließlich auf europäischen Servern verarbeitet und nicht an Dritte weitergegeben, mit Ausnahme der unter Abschnitt 7 genannten Zahlungsdienstleister.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Zahlungsabwicklung über Stripe Connect</h2>
        <p>
          Für die Abwicklung der Zahlungen auf der Restaurantplattform setzen wir Stripe Connect ein (Stripe Payments Europe, Limited, 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland). Stripe ist ein eigenständiger Verantwortlicher im Sinne der DSGVO.
        </p>
        <p>
          Bei einer Bestellung mit Online-Zahlung werden die Zahlungsdaten (insbesondere Kartendaten) direkt an Stripe übermittelt. Wir selbst speichern oder sehen keine vollständigen Kartendaten. Stripe verarbeitet die Daten zur Zahlungsabwicklung sowie zur Betrugsprävention. Die Bedingungen finden Sie unter <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">stripe.com/de/privacy</a>.
        </p>
        <p>
          Im Provisionsmodell behält Stripe automatisiert eine Plattformgebühr von 5 % je Transaktion ein und leitet diese an GastroHub weiter. Hierbei werden uns Transaktions-Metadaten (Bestellzeitpunkt, Betrag, Restaurant-Identifikator) übermittelt, jedoch keine Zahlungsmittel und keine vollständigen Endkundendaten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Stripe behält sich Transfers an verbundene Unternehmen außerhalb der EU vor, abgesichert durch SCCs und das EU-US Data Privacy Framework (Stripe ist DPF-zertifiziert).
        </p>
        <p>
          Transaktionsmetadaten werden gemäß § 147 AO für 10 Jahre aufbewahrt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Elektronischer Geschäftsverkehr</h2>
        <p>
          Die Bestellplattform stellt eine elektronische Geschäftsverkehrs-Plattform im Sinne des § 312i BGB dar. Die Anforderungen der Button-Lösung gemäß § 312j Abs. 3 BGB werden im Bestellprozess umgesetzt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Cookies</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies, insbesondere zur Speicherung Ihrer Cookie-Einwilligung. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt. Details finden Sie in unserer{" "}
          <a href="/#/cookie-richtlinie" className="text-primary hover:underline">Cookie-Richtlinie</a>.
        </p>
        <p>
          Rechtsgrundlage für technisch notwendige Cookies: § 25 Abs. 2 Nr. 2 TTDSG i.V.m. Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. Server-Logfiles</h2>
        <p>
          Bei jedem Aufruf der Website werden technische Zugriffsdaten (Server-Logfiles) automatisiert durch den Hosting-Anbieter (GitHub Pages) bzw. unseren Plattform-Hosting-Anbieter erfasst. Dazu zählen IP-Adresse, Datum und Uhrzeit, aufgerufene URL, übertragene Datenmenge, Referrer-URL, User-Agent. Diese Daten werden ausschließlich zur Sicherstellung des fehlerfreien Betriebs und zur Abwehr von Missbrauch verarbeitet und nach spätestens 90 Tagen gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">11. Datensicherheit</h2>
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation und unbefugten Zugriff zu schützen. Die Verbindung zur Website ist SSL/TLS-verschlüsselt. Zugriffe auf die Plattform sind passwortgeschützt und protokolliert.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">12. Ihre Rechte</h2>
        <p>
          Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
        </p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an <a href="mailto:kontakt@gastrohub.dev">kontakt@gastrohub.dev</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">13. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die für GastroHub zuständige Aufsichtsbehörde ist:
        </p>
        <p>
          Landesbeauftragter für Datenschutz und Informationsfreiheit Baden-Württemberg<br />
          Königstraße 10a<br />
          70173 Stuttgart<br />
          <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">https://www.baden-wuerttemberg.datenschutz.de</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">14. Änderung dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern dies rechtliche Änderungen oder Anpassungen unserer Dienste erforderlich machen. Die jeweils aktuelle Fassung finden Sie stets auf dieser Seite.
        </p>

        <p className="text-sm text-slate-400 mt-12">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
