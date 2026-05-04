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
  MoreHorizontal,
  ShoppingCart,
  Plus,
  Minus,
  MapPin,
  Clock,
  CreditCard,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

type Tab = "kunde" | "admin";

const menuItems = [
  { id: 1, name: "Pizza Margherita", desc: "Tomate, Mozzarella, Basilikum", price: 10.5, category: "Pizza" },
  { id: 2, name: "Döner Teller", desc: "Hähnchen, Salat, Soße, Reis", price: 11.9, category: "Döner" },
  { id: 3, name: "Burger Deluxe", desc: "Rindfleisch, Cheddar, Sauce", price: 9.9, category: "Burger" },
  { id: 4, name: "Falafel Box", desc: "Falafel, Hummus, Salat", price: 8.5, category: "Vegetarisch" },
  { id: 5, name: "Cola 0,5L", desc: "Kalt serviert", price: 2.5, category: "Getränke" },
  { id: 6, name: "Pommes", desc: "Mit Ketchup & Mayo", price: 3.5, category: "Beilagen" },
];

export default function Demo() {
  useEffect(() => {
    document.title = "Demo | GastroHub";
  }, []);

  const [tab, setTab] = useState<Tab>("kunde");
  const [order1Status, setOrder1Status] = useState<"Neu" | "In Zubereitung">("Neu");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 1, 2: 1 });

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((m) => m.id === Number(id));
    return sum + (item?.price ?? 0) * qty;
  }, 0);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  function addToCart(id: number) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }
  function removeFromCart(id: number) {
    setCart((c) => {
      const next = { ...c };
      if ((next[id] ?? 0) <= 1) delete next[id];
      else next[id]--;
      return next;
    });
  }

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-50">
      {/* Top bar with tab switcher */}
      <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <PackageOpen className="h-5 w-5 text-blue-400" />
          <span className="font-bold text-lg tracking-tight">GastroHub</span>
          <Badge className="ml-2 bg-blue-600/30 text-blue-300 border-none text-xs">Demo</Badge>
        </Link>
        <div className="flex bg-slate-800 rounded-lg p-1 gap-1">
          <button
            onClick={() => setTab("kunde")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${tab === "kunde" ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"}`}
          >
            Kundensicht
          </button>
          <button
            onClick={() => setTab("admin")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${tab === "admin" ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"}`}
          >
            Admin-Dashboard
          </button>
        </div>
        <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors hidden sm:block">
          ← Zurück
        </Link>
      </div>

      {/* Customer View */}
      {tab === "kunde" && (
        <div className="flex flex-1 overflow-hidden">
          {/* Menu */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Mario's Pizza</h1>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 25–35 Min.</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Lieferung ab €15</span>
                </div>
              </div>

              {["Pizza", "Döner", "Burger", "Vegetarisch", "Beilagen", "Getränke"].map((cat) => {
                const items = menuItems.filter((m) => m.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat} className="mb-8">
                    <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{cat}</h2>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between shadow-sm">
                          <div>
                            <p className="font-semibold text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                            <p className="text-sm font-bold text-primary mt-1">{item.price.toFixed(2)} €</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {cart[item.id] ? (
                              <>
                                <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                                  <Minus className="h-4 w-4 text-slate-600" />
                                </button>
                                <span className="w-5 text-center font-semibold text-slate-900">{cart[item.id]}</span>
                              </>
                            ) : null}
                            <button onClick={() => addToCart(item.id)} className="w-8 h-8 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
                              <Plus className="h-4 w-4 text-white" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="w-72 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 hidden md:flex">
            <div className="p-5 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Warenkorb
                {cartCount > 0 && (
                  <Badge className="bg-primary text-white border-none ml-auto">{cartCount}</Badge>
                )}
              </h2>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-3">
              {Object.entries(cart).map(([id, qty]) => {
                const item = menuItems.find((m) => m.id === Number(id));
                if (!item) return null;
                return (
                  <div key={id} className="flex items-center justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 truncate">{item.name}</p>
                      <p className="text-slate-500">{(item.price * qty).toFixed(2)} €</p>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <button onClick={() => removeFromCart(Number(id))} className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-4 text-center text-xs font-semibold">{qty}</span>
                      <button onClick={() => addToCart(Number(id))} className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
              {cartCount === 0 && (
                <p className="text-slate-400 text-sm text-center py-8">Noch nichts im Warenkorb</p>
              )}
            </div>
            {cartCount > 0 && (
              <div className="p-4 border-t border-slate-100">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Zwischensumme</span>
                  <span className="font-medium">{cartTotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500">Service (5%)</span>
                  <span className="font-medium">{(cartTotal * 0.05).toFixed(2)} €</span>
                </div>
                <div className="flex justify-between font-bold text-base mb-4">
                  <span>Gesamt</span>
                  <span>{(cartTotal * 1.05).toFixed(2)} €</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 text-xs text-slate-500 flex items-start gap-2">
                  <CreditCard className="h-4 w-4 shrink-0 mt-0.5" />
                  Kreditkarte · PayPal · Apple Pay
                </div>
                <Button className="w-full font-semibold" size="sm">Zur Kasse</Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Admin View */}
      {tab === "admin" && (
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col hidden md:flex border-r border-slate-800">
            <div className="flex-1 py-6 px-4 space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/20 text-blue-400 font-medium transition-colors">
                <LayoutDashboard className="h-5 w-5" />
                <span>Bestellungen</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <MenuSquare className="h-5 w-5" />
                <span>Speisekarte</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <Users className="h-5 w-5" />
                <span>Kunden</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <Settings className="h-5 w-5" />
                <span>Einstellungen</span>
              </button>
            </div>
            <div className="p-4 border-t border-slate-800">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white">MR</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">Mario's Pizza</p>
                  <p className="text-xs text-slate-500 truncate">Admin</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 flex flex-col min-w-0">
            <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                Bestellungen
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-none animate-pulse">Live</Badge>
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input type="search" placeholder="Bestellnummer..." className="w-64 pl-9 bg-slate-50 border-slate-200" />
                </div>
                <Button variant="ghost" size="icon" className="relative rounded-full text-slate-500">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
                </Button>
              </div>
            </header>

            <div className="flex-1 overflow-auto p-6">
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
              <div className="space-y-4">
                <Card className={`p-0 overflow-hidden border-l-4 shadow-sm transition-colors ${order1Status === "Neu" ? "border-l-blue-500 bg-blue-50/30" : "border-l-yellow-500 bg-white"}`}>
                  <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">#1042</div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Pizza Margherita x2, Cola x1</div>
                        <div className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="font-medium text-slate-700">23,50 €</span>
                          <span>•</span><span>Vor 2 Min.</span>
                          <span>•</span><span className="text-slate-700">Max Mustermann</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className={`font-medium ${order1Status === "Neu" ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-yellow-100 text-yellow-700 border-yellow-200"}`}>
                        {order1Status}
                      </Badge>
                      {order1Status === "Neu" && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Ablehnen</Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => setOrder1Status("In Zubereitung")} data-testid="button-accept-order">
                            Akzeptieren
                          </Button>
                        </div>
                      )}
                      {order1Status !== "Neu" && (
                        <Button variant="ghost" size="icon" className="text-slate-400"><MoreHorizontal className="h-5 w-5" /></Button>
                      )}
                    </div>
                  </div>
                </Card>

                <Card className="p-0 overflow-hidden border-l-4 border-l-yellow-500 shadow-sm bg-white">
                  <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">#1041</div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Burger Deluxe x1, Pommes x1</div>
                        <div className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="font-medium text-slate-700">13,40 €</span>
                          <span>•</span><span>Vor 15 Min.</span>
                          <span>•</span><span className="text-slate-700">Sarah Schmidt</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 font-medium">In Zubereitung</Badge>
                      <Button variant="ghost" size="icon" className="text-slate-400"><MoreHorizontal className="h-5 w-5" /></Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-0 overflow-hidden border-l-4 border-l-emerald-500 shadow-sm bg-white">
                  <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 px-3 py-1.5 rounded-md text-sm font-bold text-slate-700">#1040</div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Döner Teller x2</div>
                        <div className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="font-medium text-slate-700">23,80 €</span>
                          <span>•</span><span>Vor 35 Min.</span>
                          <span>•</span><span className="text-slate-700">Fahrer: Ali M.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200 font-medium">In Lieferung</Badge>
                      <Button variant="ghost" size="icon" className="text-slate-400"><MoreHorizontal className="h-5 w-5" /></Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
