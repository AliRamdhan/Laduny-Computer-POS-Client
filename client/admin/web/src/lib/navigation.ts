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

export const breadcumbNavigation = {
  navMain: [
    {
      title: "Dashboard",
      url: "/laduny/dashboard",
      icon: "Frame",
    },
    {
      title: "Category Product",
      url: "/laduny/master/category",
      icon: "SquareTerminal",
    },
    {
      title: "Product",
      url: "/master/product",
      icon: "SquareTerminal",
    },

    {
      title: "Sales Order",
      url: "/sales/order",
      icon: "BookOpen",
    },
    {
      title: "Set FOC / Discount",
      url: "/sales/discount",
      icon: "BookOpen",
    },
  ],
};

export const sidebarNavigation = {
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
