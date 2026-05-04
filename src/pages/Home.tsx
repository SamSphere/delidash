import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock, Check, PackageOpen, Globe, Cookie, UserRound, Settings, ShoppingCart, Languages, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "GastroHub | Restaurant Bestell-App, Admin & Website";
    const updateMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    updateMeta("description", "GastroHub ist die moderne Restaurantplattform für Bestellungen, Menüverwaltung, Kundenkonto und mobiles Owner-Dashboard.");
    updateMeta("robots", "index, follow");
    updateMeta("og:title", "GastroHub | Restaurant Bestell-App, Admin & Website", "property");
    updateMeta("og:description", "Moderne Restaurantplattform mit Landingpage, Kunden-App und mobilem Owner-Dashboard.", "property");
    updateMeta("twitter:title", "GastroHub | Restaurant Bestell-App, Admin & Website");
    updateMeta("twitter:description", "Restaurantplattform mit Website, App und Owner-Dashboard.");
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-24 pb-32 lg:pt-36 lg:pb-40 text-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e11a_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e11a_1px,transparent_1px)] bg-[size:18px_28px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6 border border-blue-200">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Für Restaurants und Gastronomie
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Einmal zahlen.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Für immer Ihr Restaurant behalten.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 mb-8 max-w-xl leading-relaxed">
                GastroHub ist Ihr größtes Verkaufsargument: einmal zahlen, für immer nutzen, keine monatlichen Kosten, keine Umsatzbeteiligung und kein Sharing mit Liefer-Apps.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-base font-semibold">
                  <Link href="/demo" data-testid="button-hero-demo">
                    Demo ansehen <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-semibold bg-white border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-slate-900">
                  <Link href="/kontakt" data-testid="button-hero-contact">Jetzt kontaktieren</Link>
                </Button>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Für Restaurantbetrieb gebaut</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Alles vom Handy steuerbar</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Dashboard Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
            >
              <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                <img
                  src="/images/delivery-banner-evening.png"
                  alt="GastroHub Statistikvorschau"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Warum GastroHub für Restaurants?</h2>
            <p className="text-lg text-slate-600">
              Eine zentrale Plattform für Restaurant-Website, App-Version, Menüpflege und Owner-Dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}>
              <Card className="p-8 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="h-12 w-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mehr Direktbestellungen</h3>
                <p className="text-slate-600 leading-relaxed">
                  Einmal zahlen, dauerhaft nutzen, unser größter Vorteil für Restaurants.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-8 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="h-12 w-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Volle Kontrolle für den Betrieb</h3>
                <p className="text-slate-600 leading-relaxed">
                  Eigene Preise, eigene Regeln, eigene Kundendaten. Ideal für Restaurants, die unabhängig und professionell verkaufen wollen.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="p-8 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="h-12 w-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Schnell im Restaurantalltag</h3>
                <p className="text-slate-600 leading-relaxed">
                  Schnell live gehen. Menü, Fotos und Bestellungen sind in wenigen Tagen eingerichtet und sofort nutzbar.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alle wichtigen Funktionen an einem Ort</h2>
            <p className="text-lg text-slate-600">
              Vom ersten Kontakt bis zur laufenden Bestellung deckt GastroHub den gesamten Ablauf ab, komplett ohne laufende Kosten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Landing/Marketing", text: "Starke Startseite, die GastroHub erklärt und Anfragen erzeugt." },
              { icon: LayoutDashboard, title: "Live Demo & Menü", text: "Klickbare Demo mit Speisekarte, Kategorien und Restaurantnamen." },
              { icon: ShoppingCart, title: "Cart Flow", text: "Artikel hinzufügen, Mengen ändern, entfernen und Zwischensumme sehen." },
              { icon: PackageOpen, title: "Checkout", text: "Bestellungen nach Prüfung des Warenkorbs sauber abschließen." },
              { icon: UserRound, title: "Kunden-Login", text: "Login, Registrierung und Kontobereich für wiederkehrende Gäste." },
              { icon: Settings, title: "Admin auf dem Handy", text: "Bestellungen annehmen, Lieferzeiten setzen, Artikel offline nehmen, neue Gerichte mit Fotos anlegen und alles direkt am Telefon steuern." },
              { icon: Cookie, title: "Cookie Banner", text: "Banner anzeigen und Einwilligung bequem akzeptieren." },
              { icon: Languages, title: "Sprachwechsel", text: "Verfügbar auf Deutsch, Englisch, Arabisch und Türkisch, weitere Sprachen auf Anfrage." },
              { icon: CheckCircle2, title: "FAQ & Recht", text: "FAQ, AGB, Impressum und Datenschutz sind direkt eingebunden." },
              { icon: ArrowRight, title: "Kontaktwege", text: "E-Mail, Telefon und Demo-Kontaktwege für direkte Anfragen." },
              { icon: TrendingUp, title: "Mobile-optimiert", text: "Vollständig mobile-optimierte Web-App für Menü, Warenkorb, Checkout und Kundenkonto, ohne App-Installation." },
              { icon: ShieldCheck, title: "Konto & Einstellungen", text: "Bestellhistorie, Wunschliste, Adressen, Zahlungsarten und Profileinstellungen." },
              { icon: Clock, title: "Admin-Funktionen", text: "Grocery List, AI-Tab, Settings, Customer-Infos, Order Queue, Drafts, Coupons, Zonen, Staff und Reviews." },
              { icon: Check, title: "Backend/API", text: "Menü, Orders, Checkout Sessions, Uploads, Telegram-Test und Webhook-Integration für Stripe-Zahlungen." },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-slate-50/80">
                <feature.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: GastroHub vs. Lieferando */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Plattformgebühren im Vergleich</h2>
            <p className="text-lg text-slate-600">Vergleichen Sie selbst, und rechnen Sie nach, was Sie jährlich sparen.</p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <div className="grid grid-cols-4 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 px-4 min-w-[560px]">
              <div></div>
              <div className="text-center">Lieferando</div>
              <div className="text-center">Uber Eats</div>
              <div className="text-center text-primary">GastroHub</div>
            </div>
            {[
              { label: "Provision", lieferando: "15–30 %", ubereats: "15–30 %", gastrohub: "5 % / 7 % (fest) oder Einmal" },
              { label: "Monatl. Gebühr", lieferando: "Ab €99/Mo.", ubereats: "Ab €0 (höhere %)", gastrohub: "Kein Abo" },
              { label: "Kundendaten", lieferando: "Plattform", ubereats: "Plattform", gastrohub: "Ihnen" },
              { label: "Eigenes Branding", lieferando: "Nein", ubereats: "Nein", gastrohub: "Vollständig" },
              { label: "Zahlung", lieferando: "Plattform", ubereats: "Plattform", gastrohub: "Direkt (Stripe)" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-4 px-4 py-4 rounded-xl mb-2 items-center min-w-[560px] ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                <div className="text-sm font-medium text-slate-700">{row.label}</div>
                <div className="text-center text-sm text-red-500 font-medium">{row.lieferando}</div>
                <div className="text-center text-sm text-red-400 font-medium">{row.ubereats}</div>
                <div className="text-center text-sm text-emerald-600 font-semibold">{row.gastrohub}</div>
              </div>
            ))}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
              <p className="text-slate-700 text-base">
                Bei <span className="font-bold text-slate-900">€10.000 Monatsumsatz</span> können Plattformprovisionen bis zu{" "}
                <span className="font-bold text-red-600">€3.000 pro Monat</span> betragen, das sind bis zu{" "}
                <span className="font-bold text-red-600">€36.000 pro Jahr</span>.*
              </p>
              <p className="text-slate-700 text-base mt-2">
                Mit GastroHub zahlen Sie <span className="font-bold text-emerald-600">deutlich weniger</span>, und behalten den Rest.
              </p>
              <p className="text-xs text-slate-400 mt-4">* Angaben basieren auf veröffentlichten Standardkonditionen. Tatsächliche Provisionsraten können je nach individuellem Vertrag abweichen. Lieferando und Uber Eats sind eingetragene Marken ihrer jeweiligen Inhaber. Diese Darstellung dient dem sachlichen Preisvergleich gemäß § 6 UWG.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Flexible Preismodelle</h2>
            <p className="text-lg text-slate-600 mb-10">
              Wählen Sie das Modell, das zu Ihrem Restaurant passt, beide deutlich günstiger als Lieferando.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Option A: One-time */}
              <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 text-left flex flex-col">
                <div className="text-2xl font-extrabold text-slate-900 mb-1">Einmalzahlung</div>
                <div className="text-slate-500 text-sm mb-6">Einmalige Einrichtungsgebühr, kein Abo</div>
                <ul className="space-y-3 text-sm text-slate-700 flex-1">
                  {[
                    "0 % Provision auf jede Bestellung",
                    "Kein monatliches Abo",
                    "Vollständiges Bestellsystem",
                    "Wartung & Updates werden separat abgerechnet",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
              {/* Option B: Provision */}
              <div className="bg-white rounded-2xl shadow-md border-2 border-primary p-8 text-left flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Empfohlen</div>
                <div className="text-2xl font-extrabold text-slate-900 mb-1">Provision</div>
                <div className="text-slate-500 text-sm mb-6">Niedrige Beteiligung statt Einmalgebühr</div>
                <ul className="space-y-3 text-sm text-slate-700 flex-1">
                  {[
                    "5 % Provision, Grundpaket",
                    "7 % Provision, inkl. Wartung & Support",
                    "Weit unter Lieferando (15–30 %)",
                    "Vollständiges Bestellsystem",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-500 text-sm mb-6">Alle Preise individuell nach Restaurantgröße, sprechen Sie uns an.</p>
            <Button asChild size="lg" className="h-14 px-10 text-base font-semibold">
              <Link href="/kontakt">Angebot anfragen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">So einfach funktioniert es</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Wir haben den Prozess so unkompliziert wie möglich gestaltet. Sie konzentrieren sich auf das Kochen, wir auf die Technik.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Registrieren</h4>
                    <p className="text-slate-600">Melden Sie sich an und wählen Sie das passende Preismodell für Ihr Restaurant.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Menü einrichten</h4>
                    <p className="text-slate-600">Wir importieren Ihr bestehendes Menü oder helfen Ihnen beim Anlegen Ihrer Gerichte.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Bestellungen empfangen</h4>
                    <p className="text-slate-600">Starten Sie den Verkauf über Ihre eigene Website und verwalten Sie Bestellungen im Dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-slate-100 rounded-full flex items-center justify-center relative shadow-inner">
                {/* Abstract shape representing the platform */}
                <div className="absolute inset-4 rounded-full border-4 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-12 rounded-full border-4 border-primary/30 animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="w-48 h-48 bg-white shadow-xl rounded-2xl z-10 flex flex-col items-center justify-center p-6 text-center rotate-3 hover:rotate-0 transition-transform">
                  <PackageOpen className="w-16 h-16 text-primary mb-4" />
                  <div className="font-bold text-slate-900">Schnell startklar</div>
                  <div className="text-sm text-slate-500">Wir begleiten Sie beim Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ihr Restaurant. Ihre Bestellungen.</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Wählen Sie das Modell, das zu Ihnen passt, deutlich günstig als Lieferando, ohne Abhängigkeit von fremden Plattformen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold bg-sky-600 text-white hover:bg-sky-700">
              <Link href="/demo" data-testid="button-cta-demo">Demo ansehen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold bg-white border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-slate-900">
              <Link href="/kontakt" data-testid="button-cta-contact">Fragen? Kontaktieren Sie uns</Link>
            </Button>
          </div>
          <div className="mt-8 text-slate-500 text-sm flex items-center justify-center gap-4">
            <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-emerald-500" /> Keine Kreditkarte nötig</span>
            <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-emerald-500" /> Weit unter Lieferando-Konditionen</span>
          </div>
        </div>
      </section>
    </div>
  );
}
