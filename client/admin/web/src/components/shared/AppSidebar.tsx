"use client";

import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/laduny/components/ui/sidebar";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import NavTitle from "./NavTitle";
import { sidebarNavigation } from "@/laduny/lib/navigation";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavTitle title="POS SYSTEM" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarNavigation.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarNavigation.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
