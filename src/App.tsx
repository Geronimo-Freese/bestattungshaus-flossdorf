import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { ErsteSchritte } from "./pages/ErsteSchritte";
import { Bestattungsarten } from "./pages/Bestattungsarten";
import { Kostenrechner } from "./pages/Kostenrechner";
import { UeberUns } from "./pages/UeberUns";
import { Kontakt } from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/erste-schritte" element={<ErsteSchritte />} />
            <Route path="/bestattungsarten" element={<Bestattungsarten />} />
            <Route path="/kostenrechner" element={<Kostenrechner />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
