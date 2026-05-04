export default function Impressum() {
  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          GastroHub GmbH<br />
          Musterstraße 123<br />
          10115 Berlin<br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Kontakt</h2>
        <p>
          Telefon: +49 (0) 30 12345678<br />
          E-Mail: hallo@gastrohub.de
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Handelsregister</h2>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Charlottenburg<br />
          Registernummer: HRB 123456 B
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 123456789
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Max Mustermann<br />
          Musterstraße 123<br />
          10115 Berlin
        </p>
      </div>
    </div>
  );
}
