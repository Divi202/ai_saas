import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
const PageHeader = ({ title }) => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="default"
            asChild
            size="sm"
            className="hidden sm:flex"
          >
            <a
              href="#"
              rel="noopener noreferrer"
              className="dark:text-foreground"
            >
              Do Something
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
