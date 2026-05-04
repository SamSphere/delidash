import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  PackageOpen, ShoppingCart, Plus, Minus, MapPin, Clock, CreditCard,
  LayoutDashboard, UtensilsCrossed, FileText, ShoppingBag, Sparkles,
  Users, BarChart2, Tag, UserCheck, Star, ClipboardList, Settings,
  Bell, Search, MoreHorizontal, Check, X, Pencil, Trash2,
  TrendingUp, TrendingDown, Package, Euro, ChevronRight, Send,
  AlertCircle, CheckCircle2, Circle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ViewTab = "kunde" | "admin";
type AdminTab = "orders" | "menu" | "drafts" | "grocery" | "ai" | "customers" |
                "controller" | "stats" | "coupons" | "zones" | "staff" |
                "reviews" | "custorders" | "settings";

const menuItems = [
  { id: 1, name: "Pizza Margherita", desc: "Tomate, Mozzarella, Basilikum", price: 10.5, category: "Pizza", available: true },
  { id: 2, name: "Döner Teller", desc: "Hähnchen, Salat, Soße, Reis", price: 11.9, category: "Döner", available: true },
  { id: 3, name: "Burger Deluxe", desc: "Rindfleisch, Cheddar, Sauce", price: 9.9, category: "Burger", available: true },
  { id: 4, name: "Falafel Box", desc: "Falafel, Hummus, Salat", price: 8.5, category: "Vegetarisch", available: true },
  { id: 5, name: "Cola 0,5L", desc: "Kalt serviert", price: 2.5, category: "Getränke", available: true },
  { id: 6, name: "Pommes", desc: "Mit Ketchup & Mayo", price: 3.5, category: "Beilagen", available: false },
  { id: 7, name: "Pizza Salami", desc: "Tomate, Mozzarella, Salami", price: 11.5, category: "Pizza", available: true },
  { id: 8, name: "Ayran", desc: "500ml", price: 2.0, category: "Getränke", available: true },
];

const ADMIN_NAV: { key: AdminTab; label: string; icon: React.ReactNode; badge?: number }[] = [
  { key: "orders",     label: "Bestellungen",       icon: <ShoppingBag className="h-4 w-4 shrink-0" />,     badge: 2 },
  { key: "menu",       label: "Speisekarte",         icon: <UtensilsCrossed className="h-4 w-4 shrink-0" /> },
  { key: "drafts",     label: "Entwürfe",            icon: <FileText className="h-4 w-4 shrink-0" />,        badge: 1 },
  { key: "grocery",    label: "Einkaufsliste",       icon: <ShoppingCart className="h-4 w-4 shrink-0" />,    badge: 4 },
  { key: "ai",         label: "KI-Assistent",        icon: <Sparkles className="h-4 w-4 shrink-0" /> },
  { key: "customers",  label: "Kunden",              icon: <Users className="h-4 w-4 shrink-0" /> },
  { key: "controller", label: "Abrechnung",          icon: <BarChart2 className="h-4 w-4 shrink-0" /> },
  { key: "stats",      label: "Statistiken",         icon: <TrendingUp className="h-4 w-4 shrink-0" /> },
  { key: "coupons",    label: "Gutscheine",          icon: <Tag className="h-4 w-4 shrink-0" /> },
  { key: "zones",      label: "Lieferzonen",         icon: <MapPin className="h-4 w-4 shrink-0" /> },
  { key: "staff",      label: "Mitarbeiter",         icon: <UserCheck className="h-4 w-4 shrink-0" /> },
  { key: "reviews",    label: "Bewertungen",         icon: <Star className="h-4 w-4 shrink-0" />,            badge: 1 },
  { key: "custorders", label: "Kundenbestellungen",  icon: <ClipboardList className="h-4 w-4 shrink-0" /> },
  { key: "settings",   label: "Einstellungen",       icon: <Settings className="h-4 w-4 shrink-0" /> },
];

export default function Demo() {
  useEffect(() => { document.title = "Demo | GastroHub"; }, []);

  const [view, setView] = useState<ViewTab>("kunde");
  const [adminTab, setAdminTab] = useState<AdminTab>("orders");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 1, 2: 1 });
  const [notifCount, setNotifCount] = useState(3);
  const [showNotifs, setShowNotifs] = useState(false);

  // orders state
  const [order1Status, setOrder1Status] = useState<"Neu" | "In Zubereitung">("Neu");
  const [order2Status, setOrder2Status] = useState<"Neu" | "In Zubereitung">("Neu");

  // grocery checklist
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  // ai chat
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState([
    { role: "assistant", text: "Hallo! Ich helfe dir bei der Einkaufsliste. Schreib z.B. 'Tomaten 3kg' oder 'Öl 2 Flaschen'." },
  ]);

  const cartTotal = Object.entries(cart).reduce((s, [id, qty]) => {
    return s + (menuItems.find(m => m.id === Number(id))?.price ?? 0) * qty;
  }, 0);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  function addToCart(id: number) { setCart(c => ({ ...c, [id]: (c[id] ?? 0) + 1 })); }
  function removeFromCart(id: number) {
    setCart(c => { const n = { ...c }; if ((n[id] ?? 0) <= 1) delete n[id]; else n[id]--; return n; });
  }

  function acceptOrder(which: 1 | 2) {
    if (which === 1) setOrder1Status("In Zubereitung");
    else setOrder2Status("In Zubereitung");
    setNotifCount(n => Math.max(0, n - 1));
  }

  function sendAiMessage() {
    if (!aiInput.trim()) return;
    const input = aiInput.trim();
    setAiMessages(m => [...m, { role: "user", text: input }]);
    setAiInput("");
    setTimeout(() => {
      let reply = "Wurde zur Einkaufsliste hinzugefügt ✓";
      if (input.toLowerCase().includes("öl") || input.toLowerCase().includes("oil"))
        reply = "Verstanden — wie viele Flaschen Öl benötigst du? (Standard: 2L)";
      else if (input.toLowerCase().includes("kg") || input.toLowerCase().includes("fleisch"))
        reply = "Notiert! Soll ich direkt eine WhatsApp-Nachricht an den Lieferanten generieren?";
      setAiMessages(m => [...m, { role: "assistant", text: reply }]);
    }, 700);
  }

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white px-4 md:px-6 py-3 flex items-center justify-between flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <PackageOpen className="h-5 w-5 text-blue-400" />
          <span className="font-bold text-lg tracking-tight">GastroHub</span>
          <Badge className="ml-2 bg-blue-600/30 text-blue-300 border-none text-xs">Demo</Badge>
        </Link>
        <div className="flex bg-slate-800 rounded-lg p-1 gap-1">
          <button onClick={() => setView("kunde")} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "kunde" ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"}`}>
            Kundensicht
          </button>
          <button onClick={() => setView("admin")} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "admin" ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"}`}>
            Admin-Dashboard
          </button>
        </div>
        <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors hidden sm:block">← Zurück</Link>
      </div>

      {/* ── CUSTOMER VIEW ── */}
      {view === "kunde" && (
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Mario's Pizza</h1>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 25–35 Min.</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Lieferung ab €15</span>
                </div>
              </div>
              {["Pizza", "Döner", "Burger", "Vegetarisch", "Beilagen", "Getränke"].map(cat => {
                const items = menuItems.filter(m => m.category === cat && m.available);
                if (!items.length) return null;
                return (
                  <div key={cat} className="mb-8">
                    <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{cat}</h2>
                    <div className="space-y-3">
                      {items.map(item => (
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
          {/* Cart sidebar */}
          <div className="w-72 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 hidden md:flex">
            <div className="p-5 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Warenkorb
                {cartCount > 0 && <Badge className="bg-primary text-white border-none ml-auto">{cartCount}</Badge>}
              </h2>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-3">
              {Object.entries(cart).map(([id, qty]) => {
                const item = menuItems.find(m => m.id === Number(id));
                if (!item) return null;
                return (
                  <div key={id} className="flex items-center justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 truncate">{item.name}</p>
                      <p className="text-slate-500">{(item.price * qty).toFixed(2)} €</p>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <button onClick={() => removeFromCart(Number(id))} className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                      <span className="w-4 text-center text-xs font-semibold">{qty}</span>
                      <button onClick={() => addToCart(Number(id))} className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                );
              })}
              {cartCount === 0 && <p className="text-slate-400 text-sm text-center py-8">Noch nichts im Warenkorb</p>}
            </div>
            {cartCount > 0 && (
              <div className="p-4 border-t border-slate-100">
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Zwischensumme</span><span className="font-medium">{cartTotal.toFixed(2)} €</span></div>
                <div className="flex justify-between text-sm mb-4"><span className="text-slate-500">Lieferung</span><span className="font-medium">2,00 €</span></div>
                <div className="flex justify-between font-bold text-base mb-4"><span>Gesamt</span><span>{(cartTotal + 2).toFixed(2)} €</span></div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 text-xs text-slate-500 flex items-start gap-2">
                  <CreditCard className="h-4 w-4 shrink-0 mt-0.5" />Kreditkarte · PayPal · Apple Pay
                </div>
                <Button className="w-full font-semibold" size="sm">Zur Kasse</Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── ADMIN VIEW ── */}
      {view === "admin" && (
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-60 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col hidden md:flex border-r border-slate-800">
            <div className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
              {ADMIN_NAV.map(({ key, label, icon, badge }) => (
                <button key={key} onClick={() => setAdminTab(key)} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${adminTab === key ? "bg-blue-600/20 text-blue-400" : "hover:bg-slate-800 hover:text-white"}`}>
                  {icon}
                  <span className="flex-1">{label}</span>
                  {badge !== undefined && badge > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1.5 text-[11px] font-bold text-white">{badge}</span>
                  )}
                </button>
              ))}
            </div>
            <div className="p-3 border-t border-slate-800">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white">MR</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">Mario's Pizza</p>
                  <p className="text-xs text-slate-500 truncate">Admin</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile tab scroller */}
          <div className="md:hidden absolute top-14 left-0 right-0 bg-slate-900 z-10 overflow-x-auto flex border-b border-slate-800">
            {ADMIN_NAV.map(({ key, label }) => (
              <button key={key} onClick={() => setAdminTab(key)} className={`shrink-0 px-3 py-2 text-xs font-medium border-b-2 transition-colors ${adminTab === key ? "border-blue-400 text-blue-400" : "border-transparent text-slate-400"}`}>
                {label}
              </button>
            ))}
          </div>

          <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Header */}
            <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
              <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {ADMIN_NAV.find(n => n.key === adminTab)?.label}
                {adminTab === "orders" && <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-none animate-pulse text-xs">Live</Badge>}
              </h1>
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input type="search" placeholder="Suchen..." className="w-48 pl-9 h-9 bg-slate-50 border-slate-200 text-sm" />
                </div>
                <div className="relative">
                  <button onClick={() => setShowNotifs(!showNotifs)} className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                    <Bell className="h-5 w-5" />
                    {notifCount > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white" />}
                  </button>
                  {showNotifs && (
                    <div className="absolute right-0 top-11 w-72 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden">
                      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900">Benachrichtigungen</span>
                        <button onClick={() => { setNotifCount(0); setShowNotifs(false); }} className="text-xs text-blue-600 hover:underline">Alle gelesen</button>
                      </div>
                      <div className="divide-y divide-slate-50">
                        {order1Status === "Neu" && <div className="px-4 py-3 flex gap-3 hover:bg-slate-50"><div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" /><div><p className="text-sm font-medium text-slate-900">Neue Bestellung #1042</p><p className="text-xs text-slate-500">Vor 2 Min. · 23,50 €</p></div></div>}
                        {order2Status === "Neu" && <div className="px-4 py-3 flex gap-3 hover:bg-slate-50"><div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" /><div><p className="text-sm font-medium text-slate-900">Neue Bestellung #1041</p><p className="text-xs text-slate-500">Vor 5 Min. · 13,40 €</p></div></div>}
                        <div className="px-4 py-3 flex gap-3 hover:bg-slate-50"><div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" /><div><p className="text-sm font-medium text-slate-900">Neue Bewertung — 5 ★</p><p className="text-xs text-slate-500">Vor 30 Min. · Genehmigung ausstehend</p></div></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-auto p-5">
              {adminTab === "orders" && <OrdersTab order1Status={order1Status} order2Status={order2Status} acceptOrder={acceptOrder} />}
              {adminTab === "menu" && <MenuTab />}
              {adminTab === "drafts" && <DraftsTab />}
              {adminTab === "grocery" && <GroceryTab checked={checked} setChecked={setChecked} />}
              {adminTab === "ai" && <AITab messages={aiMessages} input={aiInput} setInput={setAiInput} onSend={sendAiMessage} />}
              {adminTab === "customers" && <CustomersTab />}
              {adminTab === "controller" && <ControllerTab />}
              {adminTab === "stats" && <StatsTab />}
              {adminTab === "coupons" && <CouponsTab />}
              {adminTab === "zones" && <ZonesTab />}
              {adminTab === "staff" && <StaffTab />}
              {adminTab === "reviews" && <ReviewsTab />}
              {adminTab === "custorders" && <CustOrdersTab />}
              {adminTab === "settings" && <SettingsTab />}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

/* ── ORDERS TAB ─────────────────────────────────────────────────── */
function OrdersTab({ order1Status, order2Status, acceptOrder }: {
  order1Status: "Neu" | "In Zubereitung";
  order2Status: "Neu" | "In Zubereitung";
  acceptOrder: (w: 1 | 2) => void;
}) {
  const statusColor = (s: string) => s === "Neu" ? "bg-blue-100 text-blue-700 border-blue-200" : s === "In Zubereitung" ? "bg-yellow-100 text-yellow-700 border-yellow-200" : "bg-emerald-100 text-emerald-700 border-emerald-200";
  const borderColor = (s: string) => s === "Neu" ? "border-l-blue-500 bg-blue-50/20" : "border-l-yellow-500 bg-white";
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-5 bg-white border-slate-200 shadow-sm"><div className="text-xs font-medium text-slate-500 mb-1">Aktiv</div><div className="text-3xl font-bold text-slate-900">12</div></Card>
        <Card className="p-5 bg-white border-slate-200 shadow-sm"><div className="text-xs font-medium text-slate-500 mb-1">In Lieferung</div><div className="text-3xl font-bold text-slate-900">3</div></Card>
        <Card className="p-5 bg-blue-600 border-transparent text-white shadow-md"><div className="text-xs font-medium text-blue-200 mb-1">Heute</div><div className="text-3xl font-bold">47</div></Card>
      </div>
      <h2 className="text-sm font-semibold text-slate-700 mb-3">Aktuelle Bestellungen</h2>
      <div className="space-y-3">
        {[
          { num: "#1042", items: "Pizza Margherita x2, Cola x1", price: "23,50 €", time: "Vor 2 Min.", customer: "Max Mustermann", status: order1Status, idx: 1 as const },
          { num: "#1041", items: "Burger Deluxe x1, Pommes x1", price: "13,40 €", time: "Vor 5 Min.", customer: "Sarah Schmidt", status: order2Status, idx: 2 as const },
          { num: "#1040", items: "Döner Teller x2", price: "23,80 €", time: "Vor 35 Min.", customer: "Fahrer: Ali M.", status: "In Lieferung", idx: null as null },
        ].map(order => (
          <Card key={order.num} className={`p-0 overflow-hidden border-l-4 shadow-sm ${borderColor(order.status)}`}>
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 px-2.5 py-1 rounded-md text-sm font-bold text-slate-700">{order.num}</div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{order.items}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                    <span className="font-medium text-slate-700">{order.price}</span><span>•</span><span>{order.time}</span><span>•</span><span>{order.customer}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className={`text-xs font-medium ${statusColor(order.status)}`}>{order.status}</Badge>
                {order.idx && order.status === "Neu" && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50">Ablehnen</Button>
                    <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700" onClick={() => acceptOrder(order.idx!)}>Akzeptieren</Button>
                  </div>
                )}
                {order.status !== "Neu" && <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="h-5 w-5" /></button>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── MENU TAB ───────────────────────────────────────────────────── */
function MenuTab() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-slate-500">{menuItems.length} Gerichte</p>
        <Button size="sm" className="h-8 gap-1.5 text-xs"><Plus className="h-3.5 w-3.5" /> Neues Gericht</Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Name</th><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Kategorie</th><th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Preis</th><th className="text-center px-4 py-3 text-xs font-semibold text-slate-500">Verfügbar</th><th className="px-4 py-3" /></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {menuItems.map(item => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3"><div className="font-medium text-slate-900">{item.name}</div><div className="text-xs text-slate-400">{item.desc}</div></td>
                <td className="px-4 py-3 hidden md:table-cell"><span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{item.category}</span></td>
                <td className="px-4 py-3 text-right font-semibold text-slate-800">{item.price.toFixed(2)} €</td>
                <td className="px-4 py-3 text-center">{item.available ? <span className="inline-flex w-5 h-5 bg-emerald-100 rounded-full items-center justify-center"><Check className="h-3 w-3 text-emerald-600" /></span> : <span className="inline-flex w-5 h-5 bg-red-100 rounded-full items-center justify-center"><X className="h-3 w-3 text-red-500" /></span>}</td>
                <td className="px-4 py-3"><div className="flex gap-1.5 justify-end"><button className="text-slate-400 hover:text-blue-600"><Pencil className="h-4 w-4" /></button><button className="text-slate-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── DRAFTS TAB ─────────────────────────────────────────────────── */
function DraftsTab() {
  const drafts = [
    { id: "#D-055", note: "Telefonbestellung — Döner Teller x1, Pommes x1", total: "15,40 €", time: "10:32", contact: "Klaus R." },
    { id: "#D-054", note: "WhatsApp — Pizza Salami x2, Ayran x2", total: "27,00 €", time: "10:18", contact: "Fatima K." },
  ];
  return (
    <div>
      <p className="text-sm text-slate-500 mb-4">Nicht-Online Bestellungen (Telefon, WhatsApp) — bitte bestätigen.</p>
      <div className="space-y-3">
        {drafts.map(d => (
          <Card key={d.id} className="p-4 border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex gap-3">
                <div className="bg-slate-100 px-2.5 py-1 rounded-md text-sm font-bold text-slate-700 self-start">{d.id}</div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{d.note}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{d.time} Uhr · {d.contact} · <span className="font-medium text-slate-700">{d.total}</span></p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50">Verwerfen</Button>
                <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700">Bestätigen</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── GROCERY TAB ────────────────────────────────────────────────── */
function GroceryTab({ checked, setChecked }: { checked: Record<number, boolean>; setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>> }) {
  const items = [
    { id: 1, name: "Tomaten", amount: "5 kg", category: "Gemüse" },
    { id: 2, name: "Mozzarella", amount: "3 kg", category: "Milchprodukte" },
    { id: 3, name: "Hähnchenfleisch", amount: "10 kg", category: "Fleisch" },
    { id: 4, name: "Olivenöl", amount: "2 × 1L", category: "Zutaten" },
    { id: 5, name: "Mehl (Typ 550)", amount: "10 kg", category: "Zutaten" },
    { id: 6, name: "Cola", amount: "3 × 6er-Pack", category: "Getränke" },
    { id: 7, name: "Ayran", amount: "24 Stück", category: "Getränke" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-slate-500">{items.filter(i => !checked[i.id]).length} von {items.length} ausstehend</p>
        <Button size="sm" variant="outline" className="h-8 gap-1.5 text-xs"><Plus className="h-3.5 w-3.5" /> Hinzufügen</Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {items.map((item, i) => (
          <div key={item.id} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-slate-50" : ""} ${checked[item.id] ? "opacity-40" : ""}`}>
            <button onClick={() => setChecked(c => ({ ...c, [item.id]: !c[item.id] }))} className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${checked[item.id] ? "bg-emerald-500 border-emerald-500" : "border-slate-300 hover:border-blue-400"}`}>
              {checked[item.id] && <Check className="h-3 w-3 text-white" />}
            </button>
            <div className="flex-1">
              <span className={`text-sm font-medium ${checked[item.id] ? "line-through text-slate-400" : "text-slate-900"}`}>{item.name}</span>
              <span className="text-xs text-slate-400 ml-2">{item.amount}</span>
            </div>
            <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── AI TAB ─────────────────────────────────────────────────────── */
function AITab({ messages, input, setInput, onSend }: {
  messages: { role: string; text: string }[];
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4 flex gap-3">
        <Sparkles className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700">Der KI-Assistent analysiert deine Einkaufsliste und kann automatisch Bestellnachrichten an Lieferanten generieren.</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col" style={{ height: "420px" }}>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-blue-600 text-white rounded-br-sm" : "bg-slate-100 text-slate-800 rounded-bl-sm"}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-slate-100 flex gap-2">
          <Input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && onSend()} placeholder="z.B. Tomaten 5kg, Fleisch 10kg..." className="text-sm h-9" />
          <Button size="sm" className="h-9 px-3 bg-blue-600 hover:bg-blue-700" onClick={onSend}><Send className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}

/* ── CUSTOMERS TAB ──────────────────────────────────────────────── */
function CustomersTab() {
  const customers = [
    { name: "Max Mustermann", email: "max@example.de", orders: 14, lastOrder: "Heute", total: "187,50 €" },
    { name: "Sarah Schmidt", email: "sarah@example.de", orders: 8, lastOrder: "Gestern", total: "94,20 €" },
    { name: "Klaus Richter", email: "k.richter@example.de", orders: 22, lastOrder: "03.05.", total: "310,80 €" },
    { name: "Fatima Kaya", email: "fatima.k@example.de", orders: 5, lastOrder: "01.05.", total: "62,50 €" },
    { name: "Lena Braun", email: "lena@example.de", orders: 31, lastOrder: "30.04.", total: "415,00 €" },
  ];
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Kunde</th><th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Bestellungen</th><th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Umsatz</th><th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Letzte Bestellung</th></tr></thead>
        <tbody className="divide-y divide-slate-50">
          {customers.map(c => (
            <tr key={c.email} className="hover:bg-slate-50">
              <td className="px-4 py-3"><div className="font-medium text-slate-900">{c.name}</div><div className="text-xs text-slate-400">{c.email}</div></td>
              <td className="px-4 py-3 text-center hidden md:table-cell"><span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">{c.orders}</span></td>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{c.total}</td>
              <td className="px-4 py-3 text-right text-xs text-slate-500 hidden md:table-cell">{c.lastOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── CONTROLLER TAB ─────────────────────────────────────────────── */
function ControllerTab() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Heute", value: "847,30 €", sub: "47 Bestellungen", up: true },
          { label: "Diese Woche", value: "4.218,60 €", sub: "+12% vs. Vorwoche", up: true },
          { label: "Diesen Monat", value: "16.742,00 €", sub: "Mai 2026", up: true },
          { label: "Ø Bestellwert", value: "18,00 €", sub: "vs. 16,50 € letzten Monat", up: true },
        ].map(s => (
          <Card key={s.label} className="p-4 bg-white border-slate-200 shadow-sm">
            <div className="text-xs font-medium text-slate-500 mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
            <div className={`text-xs flex items-center gap-1 ${s.up ? "text-emerald-600" : "text-red-500"}`}>
              {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}{s.sub}
            </div>
          </Card>
        ))}
      </div>
      <h3 className="text-sm font-semibold text-slate-700 mb-3">Letzte Transaktionen</h3>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {[
          { id: "#1042", method: "Stripe (Kreditkarte)", amount: "23,50 €", time: "11:02", status: "Erfolgreich" },
          { id: "#1041", method: "PayPal", amount: "13,40 €", time: "10:49", status: "Erfolgreich" },
          { id: "#1040", method: "Stripe (Kreditkarte)", amount: "23,80 €", time: "10:27", status: "Erfolgreich" },
          { id: "#1039", method: "Stripe (Apple Pay)", amount: "9,90 €", time: "10:01", status: "Erfolgreich" },
        ].map((t, i) => (
          <div key={i} className={`flex items-center justify-between px-4 py-3 text-sm ${i > 0 ? "border-t border-slate-50" : ""}`}>
            <div className="flex items-center gap-3">
              <Euro className="h-4 w-4 text-slate-400" />
              <div><span className="font-medium text-slate-900">{t.id}</span><span className="text-slate-400 ml-2 text-xs">{t.method}</span></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400">{t.time} Uhr</span>
              <span className="font-semibold text-slate-800">{t.amount}</span>
              <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── STATS TAB ──────────────────────────────────────────────────── */
function StatsTab() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const vals = [420, 580, 390, 710, 890, 1240, 847];
  const max = Math.max(...vals);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Bestellungen (Monat)", value: "412", icon: <Package className="h-5 w-5" /> },
          { label: "Umsatz (Monat)", value: "16.742 €", icon: <Euro className="h-5 w-5" /> },
          { label: "Neue Kunden", value: "28", icon: <Users className="h-5 w-5" /> },
        ].map(s => (
          <Card key={s.label} className="p-4 bg-white border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">{s.icon}</div>
            <div><div className="text-xl font-bold text-slate-900">{s.value}</div><div className="text-xs text-slate-500">{s.label}</div></div>
          </Card>
        ))}
      </div>
      <Card className="p-5 bg-white border-slate-200 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Umsatz letzte 7 Tage</h3>
        <div className="flex items-end gap-2 h-32">
          {days.map((d, i) => (
            <div key={d} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-blue-500 transition-all" style={{ height: `${(vals[i] / max) * 100}%`, opacity: i === 6 ? 1 : 0.5 }} />
              <span className="text-xs text-slate-400">{d}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-xs text-slate-400">
          <span>0 €</span><span>Max: {max.toLocaleString("de")} €</span>
        </div>
      </Card>
      <Card className="mt-4 p-5 bg-white border-slate-200 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Top Gerichte</h3>
        {[
          { name: "Pizza Margherita", pct: 78 },
          { name: "Döner Teller", pct: 61 },
          { name: "Burger Deluxe", pct: 44 },
        ].map(item => (
          <div key={item.name} className="mb-3">
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-700">{item.name}</span><span className="text-slate-500">{item.pct} Bestellungen</span></div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${(item.pct / 78) * 100}%` }} /></div>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ── COUPONS TAB ────────────────────────────────────────────────── */
function CouponsTab() {
  const coupons = [
    { code: "WELCOME10", type: "10 % Rabatt", uses: 34, maxUses: 100, active: true },
    { code: "GRATIS5", type: "5 € Rabatt (ab 20 €)", uses: 12, maxUses: 50, active: true },
    { code: "SOMMER20", type: "20 % Rabatt", uses: 50, maxUses: 50, active: false },
  ];
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button size="sm" className="h-8 gap-1.5 text-xs"><Plus className="h-3.5 w-3.5" /> Gutschein erstellen</Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Code</th><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Typ</th><th className="text-center px-4 py-3 text-xs font-semibold text-slate-500">Nutzungen</th><th className="text-center px-4 py-3 text-xs font-semibold text-slate-500">Status</th></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {coupons.map(c => (
              <tr key={c.code} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono font-bold text-slate-800">{c.code}</td>
                <td className="px-4 py-3 text-slate-600 hidden md:table-cell">{c.type}</td>
                <td className="px-4 py-3 text-center text-xs text-slate-500">{c.uses}/{c.maxUses}</td>
                <td className="px-4 py-3 text-center">{c.active ? <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-medium">Aktiv</span> : <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">Inaktiv</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── ZONES TAB ──────────────────────────────────────────────────── */
function ZonesTab() {
  const zones = [
    { name: "Zone 1 — Innenstadt", radius: "0–3 km", fee: "2,00 €", minOrder: "12,00 €", active: true },
    { name: "Zone 2 — Stadtrand", radius: "3–6 km", fee: "3,50 €", minOrder: "18,00 €", active: true },
    { name: "Zone 3 — Umland", radius: "6–10 km", fee: "5,00 €", minOrder: "25,00 €", active: false },
  ];
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button size="sm" className="h-8 gap-1.5 text-xs"><Plus className="h-3.5 w-3.5" /> Zone hinzufügen</Button>
      </div>
      <div className="space-y-3">
        {zones.map(z => (
          <Card key={z.name} className={`p-4 border-slate-200 shadow-sm ${!z.active ? "opacity-50" : ""}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${z.active ? "bg-emerald-500" : "bg-slate-300"}`} />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{z.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Radius: {z.radius} · Mindestbestellung: {z.minOrder}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-800">{z.fee} Liefergebühr</span>
                <button className="text-slate-400 hover:text-blue-600"><Pencil className="h-4 w-4" /></button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ── STAFF TAB ──────────────────────────────────────────────────── */
function StaffTab() {
  const staff = [
    { name: "Mario Rossi", role: "Inhaber / Admin", email: "mario@mariosbest.de", since: "Jan 2024" },
    { name: "Ali Mehmood", role: "Fahrer", email: "ali@mariosbest.de", since: "Mär 2024" },
    { name: "Jana Hoffmann", role: "Küche", email: "jana@mariosbest.de", since: "Apr 2024" },
  ];
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button size="sm" className="h-8 gap-1.5 text-xs"><Plus className="h-3.5 w-3.5" /> Mitarbeiter einladen</Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {staff.map((s, i) => (
          <div key={s.email} className={`flex items-center justify-between px-4 py-4 ${i > 0 ? "border-t border-slate-50" : ""}`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">{s.name.split(" ").map(n => n[0]).join("")}</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{s.name}</p>
                <p className="text-xs text-slate-400">{s.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{s.role}</span>
              <span className="text-xs text-slate-400 hidden md:block">seit {s.since}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── REVIEWS TAB ────────────────────────────────────────────────── */
function ReviewsTab() {
  const [approved, setApproved] = useState<Record<number, boolean>>({});
  const reviews = [
    { id: 1, name: "Sarah S.", stars: 5, text: "Sehr schnelle Lieferung und das Essen war frisch und lecker! Absolut empfehlenswert.", date: "Heute", pending: true },
    { id: 2, name: "Klaus R.", stars: 4, text: "Gutes Essen, Pizza war perfekt. Lieferung kam 5 Minuten früher als erwartet.", date: "Gestern", pending: false },
    { id: 3, name: "Lena B.", stars: 5, text: "Beste Pizza in der Stadt. Wir bestellen jetzt immer hier!", date: "02.05.", pending: false },
  ];
  return (
    <div className="space-y-3">
      {reviews.map(r => (
        <Card key={r.id} className={`p-4 border-slate-200 shadow-sm ${r.pending && !approved[r.id] ? "border-l-4 border-l-orange-400" : ""}`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-slate-900">{r.name}</span>
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < r.stars ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />)}</div>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>
              <p className="text-sm text-slate-600">{r.text}</p>
            </div>
            {r.pending && !approved[r.id] ? (
              <div className="flex gap-1.5 shrink-0">
                <button onClick={() => setApproved(a => ({ ...a, [r.id]: false }))} className="w-7 h-7 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-500"><X className="h-3.5 w-3.5" /></button>
                <button onClick={() => setApproved(a => ({ ...a, [r.id]: true }))} className="w-7 h-7 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="h-3.5 w-3.5" /></button>
              </div>
            ) : (
              <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">Genehmigt</span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ── CUSTOMER ORDERS TAB ────────────────────────────────────────── */
function CustOrdersTab() {
  const history = [
    { num: "#1042", customer: "Max Mustermann", items: "Pizza Margherita x2, Cola x1", total: "23,50 €", date: "Heute, 11:02", status: "In Lieferung" },
    { num: "#1039", customer: "Max Mustermann", items: "Pizza Salami x1, Pommes x1", total: "15,00 €", date: "02.05., 19:45", status: "Abgeschlossen" },
    { num: "#1031", customer: "Lena Braun", items: "Döner Teller x2, Ayran x2", total: "27,80 €", date: "01.05., 20:12", status: "Abgeschlossen" },
    { num: "#1028", customer: "Klaus Richter", items: "Burger Deluxe x3", total: "29,70 €", date: "30.04., 18:33", status: "Abgeschlossen" },
  ];
  const statusColor = (s: string) => s === "Abgeschlossen" ? "bg-slate-100 text-slate-500" : "bg-emerald-100 text-emerald-700";
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">#</th><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Kunde</th><th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Bestellung</th><th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Gesamt</th><th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 hidden md:table-cell">Status</th></tr></thead>
        <tbody className="divide-y divide-slate-50">
          {history.map(o => (
            <tr key={o.num} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-mono text-xs font-bold text-slate-600">{o.num}</td>
              <td className="px-4 py-3"><div className="text-sm font-medium text-slate-900">{o.customer}</div><div className="text-xs text-slate-400">{o.date}</div></td>
              <td className="px-4 py-3 text-xs text-slate-500 hidden md:table-cell">{o.items}</td>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{o.total}</td>
              <td className="px-4 py-3 text-right hidden md:table-cell"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor(o.status)}`}>{o.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── SETTINGS TAB ───────────────────────────────────────────────── */
function SettingsTab() {
  return (
    <div className="max-w-xl space-y-6">
      {[
        { section: "Restaurant", fields: [{ label: "Name", value: "Mario's Pizza" }, { label: "Adresse", value: "Hauptstraße 12, 70173 Stuttgart" }, { label: "Telefon", value: "+49 711 123456" }, { label: "E-Mail", value: "info@mariosbest.de" }] },
        { section: "Betrieb", fields: [{ label: "Öffnungszeiten", value: "Mo–Sa 11:00–22:00, So 12:00–21:00" }, { label: "Mindestbestellwert", value: "12,00 €" }, { label: "Lieferzeit (Ø)", value: "30 Minuten" }] },
        { section: "Benachrichtigungen", fields: [{ label: "Telegram Bot Token", value: "••••••••••••••••••••••••••" }, { label: "E-Mail für Bestellungen", value: "orders@mariosbest.de" }] },
      ].map(block => (
        <Card key={block.section} className="p-5 bg-white border-slate-200 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">{block.section}</h3>
          <div className="space-y-3">
            {block.fields.map(f => (
              <div key={f.label}>
                <label className="text-xs font-medium text-slate-500 mb-1 block">{f.label}</label>
                <Input defaultValue={f.value} className="h-9 text-sm bg-slate-50" />
              </div>
            ))}
          </div>
        </Card>
      ))}
      <Button className="w-full h-10 font-semibold"><Check className="h-4 w-4 mr-2" /> Einstellungen speichern</Button>
    </div>
  );
}
