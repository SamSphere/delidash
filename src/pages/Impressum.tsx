import { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Impressum von GastroHub, Anbieter für eigene Restaurant-Bestellsysteme ohne Provision.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>

        <h2 className="text-xl font-semibold mt-8 mb-4">Diensteanbieter</h2>
        <p>
          Osama Farroukh<br />
          Einzelunternehmer<br />
          c/o MDC, z.Hd. Osama Farroukh<br />
          Welserstraße 3<br />
          87463 Dietmannsried<br />
          Deutschland
        </p>
        <p className="text-sm text-slate-500">
          Ladungsfähige Geschäftsanschrift; MDC ist zur Entgegennahme von Post- und Klagezustellungen für den Diensteanbieter bevollmächtigt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:kontakt@gastrohub.dev">kontakt@gastrohub.dev</a><br />
          Telefon: +49 151 11017356
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Umsatzsteuer</h2>
        <p>
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Verantwortlicher nach § 18 Abs. 2 MStV</h2>
        <p>
          Osama Farroukh<br />
          c/o MDC, Welserstraße 3<br />
          87463 Dietmannsried
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Hinweise</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Alle auf dieser Website angezeigten Preise und Produktinformationen werden von Drittanbietern bereitgestellt und können Änderungen unterliegen. Bitte überprüfen Sie die Informationen direkt beim Anbieter.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">EU-Streitschlichtung</h2>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
        </p>
      </div>
    </div>
  );
}
