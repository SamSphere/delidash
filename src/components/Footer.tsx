import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2 group" aria-label="GastroHub Startseite">
            <img
              src="/brand/mark-light.svg"
              alt=""
              width="32"
              height="32"
              className="h-8 w-8 group-hover:scale-105 transition-transform"
            />
            <span className="font-extrabold text-xl tracking-tight">
              <span className="text-white">Gastro</span><span className="text-[#E5B870]">Hub</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 max-w-xs text-center md:text-left">
            Die Restaurantplattform für direkte Bestellungen, Menüverwaltung und mobiles Owner-Dashboard.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          <Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link>
          <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
        </div>
        <div className="w-full border-t border-slate-800 pt-6 mt-2 flex justify-center md:justify-end">
          <p className="text-sm text-slate-400">© 2026 GastroHub. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
