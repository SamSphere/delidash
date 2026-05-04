export default function Impressum() {
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

        <h2 className="text-xl font-semibold mt-8 mb-4">Hinweise</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Alle auf dieser Website angezeigten Preise und Produktinformationen werden von Drittanbietern bereitgestellt und können Änderungen unterliegen. Bitte überprüfen Sie die Informationen direkt beim Anbieter.
        </p>
      </div>
    </div>
  );
}
