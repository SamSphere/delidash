import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutz | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Datenschutzerklärung von GastroHub. DSGVO-konform, europäische Server, Ihre Kundendaten gehören ausschließlich Ihnen.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Allgemeine Hinweise</h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer nachfolgenden Datenschutzerklärung.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Verantwortlicher</h2>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
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

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Hosting</h2>
        <p>
          Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Website übermittelt Ihr Browser automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Uhrzeit des Zugriffs) an die Server von GitHub. Diese Daten werden von GitHub gemäß deren Datenschutzrichtlinie verarbeitet. Weitere Informationen finden Sie unter <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">docs.github.com/privacy</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Erhebung von Daten</h2>
        <p>
          Diese Website erhebt selbst keine personenbezogenen Daten aktiv. Es werden keine Kontaktformulare, Nutzungskonten oder Tracking-Tools eingesetzt. Einzig das Anklicken eines Mailto-Links führt zur Übermittlung Ihrer E-Mail-Adresse an Ihr eigenes E-Mail-Programm.
        </p>
        <p>
          Technische Zugriffsdaten (Server-Logfiles) werden automatisch durch den Hosting-Anbieter (GitHub Pages) erfasst und liegen nicht in unserem Zugriff.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies</h2>
        <p>
          Diese Website verwendet keine eigenen Cookies. Soweit GitHub Pages beim Aufruf der Seite technisch notwendige Cookies setzt, liegt dies im Verantwortungsbereich von GitHub.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Ihre Rechte</h2>
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

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde für Bayern ist der Bayerische Landesbeauftragte für den Datenschutz (BayLfD), Wagmüllerstraße 18, 80538 München.
        </p>

        <p className="text-sm text-slate-400 mt-12">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
