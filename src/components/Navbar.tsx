import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Demo", href: "/demo" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="GastroHub Startseite">
          <img
            src="/brand/mark-light.svg"
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 group-hover:scale-105 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tight">
            <span className="text-foreground">Gastro</span><span className="text-primary-hover">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4 font-semibold px-6 shadow-sm hover:shadow-md transition-shadow">
            <Link href="/demo" data-testid="button-nav-demo">Demo ansehen</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-lg font-medium p-2 rounded-md ${
                location === link.href ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-2 font-semibold">
            <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)}>Demo ansehen</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
