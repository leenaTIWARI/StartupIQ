import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Bookmark, GitCompare, CreditCard, Settings as SettingsIcon } from "lucide-react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import DashboardLayout from "./pages/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Analyze from "./pages/Analyze.tsx";
import { SimplePage } from "./pages/SimplePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analyze" element={<Analyze />} />
            <Route path="reports" element={<SimplePage icon={Bookmark} title="Saved Reports" desc="All your validated ideas in one place." />} />
            <Route path="compare" element={<SimplePage icon={GitCompare} title="Compare Ideas" desc="Side-by-side comparison of your top ideas." />} />
            <Route path="billing" element={<SimplePage icon={CreditCard} title="Billing" desc="Manage your subscription and invoices." />} />
            <Route path="settings" element={<SimplePage icon={SettingsIcon} title="Settings" desc="Account preferences & integrations." />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
