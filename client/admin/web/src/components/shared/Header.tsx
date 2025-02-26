"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/laduny/components/ui/breadcrumb";
import { Separator } from "@/laduny/components/ui/separator";
import { SidebarTrigger } from "@/laduny/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { breadcumbNavigation } from "@/laduny/lib/navigation";

const Header = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { title: string; url: string; icon?: string }[]
  >([]);

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split("/").filter(Boolean);
      let breadcrumbItems: { title: string; url: string; icon?: string }[] = [];
      let accumulatedPath = "";

      pathSegments.forEach((segment) => {
        accumulatedPath += `/${segment}`;

        const foundItem = breadcumbNavigation.navMain.find((item) =>
          accumulatedPath.startsWith(item.url)
        );

        if (
          foundItem &&
          !breadcrumbItems.some((b) => b.url === foundItem.url)
        ) {
          breadcrumbItems.push({
            title: foundItem.title,
            url: foundItem.url,
            icon: foundItem.icon,
          });
        }
      });

      setBreadcrumbs(breadcrumbItems);
    }
  }, [pathname]);

  return (
    <header>
      <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/laduny/dashboard">
                  POS SYSTEM
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.url}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={breadcrumb.url}>
                        {breadcrumb.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};

export default Header;
