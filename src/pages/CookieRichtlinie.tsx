import { useEffect } from "react";
import { Link } from "wouter";

export default function CookieRichtlinie() {
  useEffect(() => {
    document.title = "Cookie-Richtlinie | GastroHub";
    const meta = document.querySelector('meta[name="description"]') ?? Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content = "Cookie-Richtlinie von GastroHub. Wir setzen ausschließlich technisch notwendige Cookies ein. Keine Analyse, kein Tracking, keine Werbung.";
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Cookie-Richtlinie</h1>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Was sind Cookies?</h2>
        <p>
          Cookies sind kleine Textdateien, die beim Besuch einer Website in Ihrem Browser abgelegt werden. Sie ermöglichen es, technische Funktionen bereitzustellen (z.B. das Merken einer einmal getroffenen Auswahl). Ähnliche Funktionen erfüllen Local Storage und Session Storage Ihres Browsers, die im Folgenden ebenfalls als „Cookies" bezeichnet werden.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Welche Cookies setzen wir ein?</h2>
        <p>
          Wir setzen auf gastrohub.dev ausschließlich technisch notwendige Cookies ein. Aktuell sind dies:
        </p>
        <ul>
          <li>
            <strong>Cookie-Einwilligung (Local Storage):</strong> Speichert Ihre Entscheidung über den Cookie-Banner („akzeptiert" oder „abgelehnt"), damit Ihnen der Hinweis nicht erneut angezeigt wird. Es werden keine personenbezogenen Daten gespeichert. Speicherdauer: bis zur Löschung durch Sie selbst.
          </li>
        </ul>
        <p>
          Wir verwenden <strong>keine</strong> Analyse-Cookies, <strong>keine</strong> Tracking-Cookies, <strong>keine</strong> Marketing- oder Werbe-Cookies und <strong>keine</strong> Cookies von Drittanbietern.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Rechtsgrundlage</h2>
        <p>
          Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist § 25 Abs. 2 Nr. 2 TTDSG. Danach ist eine Einwilligung nicht erforderlich, soweit die Speicherung von Informationen oder der Zugriff auf bereits gespeicherte Informationen unbedingt erforderlich ist, damit der Anbieter eines Telemediendienstes einen vom Nutzer ausdrücklich gewünschten Dienst zur Verfügung stellen kann.
        </p>
        <p>
          Da wir keine Cookies einsetzen, die eine Einwilligung erfordern würden, dient unser Cookie-Banner ausschließlich der Information und der freiwilligen Bestätigung dieses Hinweises.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies in Ihrem Browser verwalten</h2>
        <p>
          Sie können Cookies und Local Storage jederzeit in den Einstellungen Ihres Browsers anzeigen, einzeln oder vollständig löschen sowie die Annahme neuer Cookies blockieren. Wie das geht, hängt von Ihrem Browser ab. Anleitungen finden Sie in der Hilfe Ihres jeweiligen Browsers (z.B. Chrome, Firefox, Safari, Edge).
        </p>
        <p>
          Wenn Sie das Cookie zur Einwilligung löschen, wird Ihnen der Cookie-Hinweis beim nächsten Besuch erneut angezeigt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Weitere Informationen</h2>
        <p>
          Weitere Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
        </p>

        <p className="text-sm text-slate-400 mt-12">Stand: Mai 2026</p>
      </div>
    </div>
  );
}
