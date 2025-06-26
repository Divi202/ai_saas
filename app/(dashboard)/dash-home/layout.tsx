import { DashboardSidebar } from "@/components/dash-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SidebarProvider>
        {/* Sidebar  */}
        <DashboardSidebar />
        {children}
      </SidebarProvider>
    </>
  );
};

export default layout;
