import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GoldWhiteLoginPage from "./components/LoginPage";
import SignatureHaircutPage from "./components/HairCut/SignatureHaircut";
import BeardGroomingPage from "./components/HairCut/BeardGrooming";
import RoyalShavePage from "./components/HairCut/RoyalShave";
import TeamMembers from "./components/TeamMembers";
import AdminPage from "./pages/AdminPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<GoldWhiteLoginPage open={true} onClose={() => {}} />} />
          <Route path="/signature-haircut" element={<SignatureHaircutPage />} />
          <Route path="/beard-grooming" element={<BeardGroomingPage />} />
          <Route path="/royal-shave" element={<RoyalShavePage />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
