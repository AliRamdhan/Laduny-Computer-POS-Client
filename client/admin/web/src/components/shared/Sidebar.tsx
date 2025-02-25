"use client";

import React, { useEffect } from "react";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://kitwind.io/assets/kometa/laptop.png  ",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
    {
      title: "Master Data",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Category Product",
          url: "/master/category",
        },
        {
          title: "Product",
          url: "/master/product",
        },
      ],
    },
    {
      title: "Sales",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Sales Order",
          url: "/sales/order",
        },
        {
          title: "Set FOC / Discount",
          url: "/sales/discount",
        },
      ],
    },
    {
      title: "Purchase",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Purchase Order",
          url: "/purchase/oder",
        },
      ],
    },
    {
      title: "Inventory",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Stock",
          url: "/inventory/stock",
        },
      ],
    },
    {
      title: "Report",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Sales Report",
          url: "/report/sales",
        },
        {
          title: "Stock Report",
          url: "/report/stock",
        },
        {
          title: "Stock Flow",
          url: "/report/movement",
        },
      ],
    },
    {
      title: "User",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Registered User",
          url: "/user",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavTitle title="POS SYSTEM" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
