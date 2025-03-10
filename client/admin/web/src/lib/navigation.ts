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
      icon: "Frame",
    },
    {
      title: "Product",
      url: "/laduny/master/product",
      icon: "Frame",
    },

    {
      title: "Sales Order",
      url: "/laduny/sales",
      icon: "Frame",
    },

    {
      title: "Purchase Order",
      url: "/laduny/purchase/oder",
      icon: "Frame",
    },

    {
      title: "Stock",
      url: "/laduny/inventory/stock_adjustment",
      icon: "Frame",
    },
    {
      title: "Stock",
      url: "/laduny/inventory/stock_opname",
      icon: "Frame",
    },

    {
      title: "Sales Report",
      url: "/report/sales",
      icon: "Frame",
    },
    {
      title: "Stock Report",
      url: "/report/stock",
      icon: "Frame",
    },
    {
      title: "Stock Flow",
      url: "/report/movement",
      icon: "Frame",
    },

    {
      title: "Employee User",
      url: "/laduny/user",
      icon: "Frame",
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
      url: "/laduny/dashboard",
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
          url: "/laduny/master/category",
        },
        {
          title: "Product",
          url: "/laduny/master/product",
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
          url: "/laduny/sales",
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
          url: "/laduny/purchase/oder",
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
          url: "/laduny/inventory/stock_adjustment",
        },
        {
          title: "Stock",
          url: "/laduny/inventory/stock_opname",
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
          title: "Employee User",
          url: "/laduny/user",
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
