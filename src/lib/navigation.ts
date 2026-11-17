import {
  LayoutGrid,
  FileText,
  Lightbulb,
  Store,
  Factory,
  Link2,
  Folder,
  Mail,
  Globe,
  Settings,
  Users,
  List,
  Trash2,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const SIDEBAR_SECTIONS: NavSection[] = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutGrid,
      },
    ],
  },
  {
    title: "CONTENT",
    items: [
      {
        name: "Pages & Home",
        href: "/dashboard/pages",
        icon: FileText,
      },
      {
        name: "Solutions",
        href: "/dashboard/solutions",
        icon: Lightbulb,
      },
      {
        name: "Chemical Catalogue",
        href: "/dashboard/chemical-catalogue",
        icon: Store,
      },
      {
        name: "Industries & Applications",
        href: "/dashboard/industries-applications",
        icon: Factory,
      },
      {
        name: "Partners & Technologies",
        href: "/dashboard/partners-technologies",
        icon: Link2,
      },
      {
        name: "Resources",
        href: "/dashboard/resources",
        icon: Folder,
      },
    ],
  },
  {
    title: "INBOX",
    items: [
      {
        name: "Enquiries",
        href: "/dashboard/enquiries",
        icon: Mail,
        badge: 2,
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "SEO",
        href: "/dashboard/seo",
        icon: Globe,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        name: "Admins",
        href: "/dashboard/admins",
        icon: Users,
      },
      {
        name: "Activity log",
        href: "/dashboard/activity-log",
        icon: List,
      },
      {
        name: "Trash",
        href: "/dashboard/trash",
        icon: Trash2,
      },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = SIDEBAR_SECTIONS.flatMap(
  (section) => section.items
);

export function getSectionTitle(pathname: string): string {
  // Sort items with longer hrefs first so specific paths match before /dashboard
  const sorted = [...ALL_NAV_ITEMS].sort((a, b) => b.href.length - a.href.length);
  for (const item of sorted) {
    if (item.href === "/dashboard") {
      if (pathname === "/dashboard") {
        return item.name;
      }
    } else if (pathname === item.href || pathname.startsWith(item.href + "/")) {
      return item.name;
    }
  }
  return "Dashboard";
}

export function isItemActive(itemHref: string, pathname: string): boolean {
  if (itemHref === "/dashboard") {
    return pathname === "/dashboard";
  }
  return pathname === itemHref || pathname.startsWith(itemHref + "/");
}
