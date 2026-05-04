import { Link } from "wouter";
import { PackageOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-white/10 p-1.5 rounded-md text-white">
              <PackageOpen className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">GastroHub</span>
          </Link>
          <p className="text-sm text-slate-400 max-w-xs text-center md:text-left">
            Die Restaurantplattform für direkte Bestellungen, Menüverwaltung und mobiles Owner-Dashboard.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
        </div>
        <div className="w-full border-t border-slate-800 pt-6 mt-2 flex justify-center md:justify-end">
          <p className="text-sm text-slate-400">© 2025 GastroHub. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
