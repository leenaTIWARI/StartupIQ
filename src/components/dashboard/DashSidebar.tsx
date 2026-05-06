import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Sparkles, Bookmark, GitCompare, CreditCard, Settings, LogOut } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar } from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard },
  { title: "Analyze Idea", url: "/app/analyze", icon: Sparkles },
  { title: "Saved Reports", url: "/app/reports", icon: Bookmark },
  { title: "Compare Ideas", url: "/app/compare", icon: GitCompare },
  { title: "Billing", url: "/app/billing", icon: CreditCard },
  { title: "Settings", url: "/app/settings", icon: Settings },
];

export const DashSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  const isActive = (u: string) => pathname === u;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">{!collapsed && <Logo />}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(it => (
                <SidebarMenuItem key={it.title}>
                  <SidebarMenuButton asChild isActive={isActive(it.url)} tooltip={it.title}>
                    <NavLink to={it.url} end className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg ${isActive ? "bg-gradient-primary text-white shadow-glow" : "hover:bg-sidebar-accent"}`
                    }>
                      <it.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{it.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <NavLink to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
                {!collapsed && <span>Logout</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
