import { DashboardSidebar } from "@/components/dash-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
        {/* SidebarTrigger is a component that toggles the sidebar visibility */}
        <SidebarTrigger />
        <div>
          {/* Main content*/}
          {children}
        </div>
      </SidebarProvider>
    </>
  );
};

export default layout;
