// Post-build prerender: emits dist/<route>/index.html per route with route-specific
// <title>, meta description, og:title/description, twitter:title/description, and canonical.
// /faq additionally gets FAQPage JSON-LD injected for rich-result eligibility.
// React hydrates over the same body; only <head> differs. Wins crawlers and social previews.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const ORIGIN = "https://gastrohub.dev";

const faqData = JSON.parse(await readFile(join(__dirname, "..", "src", "data", "faq.json"), "utf8"));

const ROUTES = [
  // Home is the default index.html — skip (don't overwrite the SPA shell with itself).
  {
    path: "/demo",
    title: "Demo | GastroHub",
    description: "Interaktive Demo der GastroHub Restaurantplattform. Kundensicht und Admin-Dashboard ohne Registrierung ausprobieren.",
  },
  {
    path: "/faq",
    title: "FAQ | GastroHub",
    description: "Häufig gestellte Fragen zu GastroHub: Preismodelle, Wechsel von Liefer-Apps, Datenschutz, Stripe-Zahlungen und Einrichtung. Antworten in Klartext.",
    extraHead: faqJsonLdScript(),
  },
  {
    path: "/kontakt",
    title: "Kontakt | GastroHub",
    description: "Kontaktieren Sie GastroHub. Wir helfen Ihnen beim Aufbau Ihres eigenen Restaurant-Bestellsystems ohne Provision. Antwort werktags am selben oder nächsten Tag.",
  },
  {
    path: "/impressum",
    title: "Impressum | GastroHub",
    description: "Impressum von GastroHub, Anbieter für eigene Restaurant-Bestellsysteme ohne Provision.",
  },
  {
    path: "/datenschutz",
    title: "Datenschutz | GastroHub",
    description: "Datenschutzerklärung von GastroHub. DSGVO-konform, europäische Server, Stripe Connect als Zahlungsdienstleister.",
  },
  {
    path: "/agb",
    title: "AGB | GastroHub",
    description: "Allgemeine Geschäftsbedingungen von GastroHub. Restaurant-Bestellplattform mit Einmalzahlungs- oder Provisionsmodell.",
  },
  {
    path: "/cookie-richtlinie",
    title: "Cookie-Richtlinie | GastroHub",
    description: "Cookie-Richtlinie von GastroHub. Wir setzen ausschließlich technisch notwendige Cookies ein. Keine Analyse, kein Tracking, keine Werbung.",
  },
];

function escapeHtmlAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function faqJsonLdScript() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.sections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };
  return `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
}

function rewriteHead(html, { title, description, canonical, extraHead }) {
  const t = escapeHtmlAttr(title);
  const d = escapeHtmlAttr(description);
  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${d}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${d}" />`);
  if (extraHead) {
    out = out.replace(/<\/head>/, `${extraHead}\n  </head>`);
  }
  return out;
}

const indexHtml = await readFile(join(distDir, "index.html"), "utf8");

for (const route of ROUTES) {
  const canonical = `${ORIGIN}${route.path}`;
  const out = rewriteHead(indexHtml, { ...route, canonical });
  const targetDir = join(distDir, route.path.replace(/^\//, ""));
  await mkdir(targetDir, { recursive: true });
  await writeFile(join(targetDir, "index.html"), out, "utf8");
  console.log(`prerendered ${route.path} -> ${targetDir}/index.html`);
}

console.log(`prerender complete: ${ROUTES.length} routes`);
