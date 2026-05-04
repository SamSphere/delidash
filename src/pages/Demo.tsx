import { useState } from "react";
import { Link } from "wouter";
import { 
  PackageOpen, 
  LayoutDashboard, 
  MenuSquare, 
  Users, 
  Settings, 
  Search, 
  Bell,
  CheckCircle2,
  XCircle,
  MoreHorizontal
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export default function Demo() {
  useEffect(() => {
    document.title = "Demo | GastroHub";
  }, []);

  const [order1Status, setOrder1Status] = useState<"Neu" | "In Zubereitung">("Neu");

  return (
    <div className="flex h-[100dvh] bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col hidden md:flex border-r border-slate-800">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2 text-white">
            <PackageOpen className="h-5 w-5 text-blue-400" />
            <span className="font-bold text-lg tracking-tight">GastroHub</span>
          </Link>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/20 text-blue-400 font-medium transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span>Bestellungen</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <MenuSquare className="h-5 w-5" />
            <span>Menü</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <Users className="h-5 w-5" />
            <span>Fahrer</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
            <span>Einstellungen</span>
          </button>
        </div>
        
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white">
              MR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Mario's Pizza</p>
              <p className="text-xs text-slate-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              Bestellungen
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-none animate-pulse">
                Live
              </Badge>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input 
                type="search" 
                placeholder="Bestellnummer..." 
                className="w-64 pl-9 bg-slate-50 border-slate-200"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative rounded-full text-slate-500">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-1">Aktiv</div>
              <div className="text-3xl font-bold text-slate-900">12</div>
            </Card>
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-1">In Lieferung</div>
              <div className="text-3xl font-bold text-slate-900">3</div>
            </Card>
            <Card className="p-6 bg-primary border-transparent text-white shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="text-sm font-medium text-blue-100 mb-1 relative z-10">Heute</div>
              <div className="text-3xl font-bold relative z-10">47</div>
            </Card>
          </div>

          <h2 className="text-lg font-semibold text-slate-900 mb-4">Aktuelle Bestellungen</h2>
          
          {/* Order Cards */}
          <div className="space-y-4">
            {/* Card 1 (Interactive) */}
            <Card className={`p-0 overflow-hidden border-l-4 shadow-sm transition-colors ${order1Status === "Neu" ? "border-l-blue-500 bg-blue-50/30" : "border-l-yellow-500 bg-white"}`}>
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">
                    #1042
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">
                      Pizza Margherita x2, Cola x1
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="font-medium text-slate-700">18,50 €</span>
                      <span>•</span>
                      <span>Vor 2 Min.</span>
                      <span>•</span>
                      <span className="text-slate-700">Max Mustermann</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge 
                    variant="outline" 
                    className={`font-medium ${order1Status === "Neu" ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-yellow-100 text-yellow-700 border-yellow-200"}`}
                  >
                    {order1Status}
                  </Badge>
                  
                  {order1Status === "Neu" && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                      >
                        Ablehnen
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => setOrder1Status("In Zubereitung")}
                        data-testid="button-accept-order"
                      >
                        Akzeptieren
                      </Button>
                    </div>
                  )}
                  {order1Status !== "Neu" && (
                    <Button variant="ghost" size="icon" className="text-slate-400">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-0 overflow-hidden border-l-4 border-l-yellow-500 shadow-sm bg-white">
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">
                    #1041
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">
                      Burger Deluxe x1, Pommes x1
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="font-medium text-slate-700">14,20 €</span>
                      <span>•</span>
                      <span>Vor 15 Min.</span>
                      <span>•</span>
                      <span className="text-slate-700">Sarah Schmidt</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 font-medium">
                    In Zubereitung
                  </Badge>
                  <Button variant="ghost" size="icon" className="text-slate-400">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="p-0 overflow-hidden border-l-4 border-l-emerald-500 shadow-sm bg-white">
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">
                    #1040
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">
                      Döner Teller x2
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="font-medium text-slate-700">22,00 €</span>
                      <span>•</span>
                      <span>Vor 35 Min.</span>
                      <span>•</span>
                      <span className="text-slate-700">Fahrer: Ali M.</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200 font-medium">
                    In Lieferung
                  </Badge>
                  <Button variant="ghost" size="icon" className="text-slate-400">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 mb-4">Dies ist eine statische Demo-Ansicht.</p>
            <Button asChild variant="outline">
              <Link href="/">Zurück zur Startseite</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
