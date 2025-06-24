import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Bot, Home } from "lucide-react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dash-home",
    icon: Home,
  },
  {
    title: "AI Stylist",
    url: "/dash-home/ai-stylist",
    icon: Bot,
  },
  {
    title: "Wardrobe",
    url: "/dash-home/wardrobe",
    icon: Home,
  },
];
export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>DivyaLook</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
