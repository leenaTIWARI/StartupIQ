import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashSidebar } from "@/components/dashboard/DashSidebar";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const DashboardLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
      <DashSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border/50 flex items-center px-4 gap-4 sticky top-0 bg-background/80 backdrop-blur-xl z-30">
          <SidebarTrigger />
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search reports, ideas..." className="pl-9 bg-muted/40 border-border" />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition"><Bell className="h-4 w-4" /></button>
            <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-semibold text-white">A</div>
          </div>
        </header>
        <main className="flex-1 p-6"><Outlet /></main>
      </div>
    </div>
  </SidebarProvider>
);
export default DashboardLayout;
