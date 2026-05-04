import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

import Home from "@/pages/Home";
import Demo from "@/pages/Demo";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/faq" component={FAQ} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  // We check if it's the demo page, if so we don't show the standard navbar/footer
  // since the demo is a full-screen dashboard UI
  return (
    <Switch>
      <Route path="/demo">{children}</Route>
      <Route>
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter hook={useHashLocation}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
        <CookieBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
