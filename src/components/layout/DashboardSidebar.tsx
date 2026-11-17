"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Droplet,
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SidebarItem {
  name: string;
  href?: string;
  icon: LucideIcon;
  badge?: number;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const SIDEBAR_SECTIONS: SidebarSection[] = [
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
        icon: FileText,
      },
      {
        name: "Solutions",
        icon: Lightbulb,
      },
      {
        name: "Chemical Catalogue",
        icon: Store,
      },
      {
        name: "Industries & Applications",
        icon: Factory,
      },
      {
        name: "Partners & Technologies",
        icon: Link2,
      },
      {
        name: "Resources",
        icon: Folder,
      },
    ],
  },
  {
    title: "INBOX",
    items: [
      {
        name: "Enquiries",
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
        icon: Globe,
      },
      {
        name: "Settings",
        icon: Settings,
      },
      {
        name: "Admins",
        icon: Users,
      },
      {
        name: "Activity log",
        icon: List,
      },
      {
        name: "Trash",
        icon: Trash2,
      },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-w-[256px] max-w-[256px] h-screen sticky top-0 bg-[#0A1940] text-slate-300 flex flex-col justify-between select-none z-30 overflow-y-auto">
      <div className="flex flex-col">
        {/* Brand / Logo Section */}
        <div className="pt-6 px-5 pb-5">
          <div className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-sky-400 fill-sky-400 shrink-0" />
            <span className="text-[17px] font-bold tracking-wider text-white">
              WAPTCO
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-[13px] font-semibold text-slate-100 tracking-wide">
              Control Panel
            </h2>
            <p className="text-[9.5px] font-semibold tracking-wider text-slate-400 uppercase leading-[1.35] mt-0.5">
              WATER &amp; PROCESS TECHNOLOGIES
              <br />
              CO.
            </p>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="px-3 pb-6 space-y-5">
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="px-2.5 mb-1.5 text-[10.5px] font-semibold tracking-wider text-slate-400/90 uppercase">
                {section.title}
              </div>

              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.href ? pathname === item.href : false;

                  const content = (
                    <>
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive
                            ? "text-sky-400"
                            : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      />
                      <span className="truncate">{item.name}</span>
                      {item.badge !== undefined && (
                        <span className="ml-auto w-[18px] h-[18px] rounded-full bg-sky-400 text-white font-bold text-[10.5px] flex items-center justify-center shrink-0 shadow-2xs">
                          {item.badge}
                        </span>
                      )}
                    </>
                  );

                  const commonClasses = `group flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] transition-colors w-full text-left ${
                    isActive
                      ? "bg-[#183255] text-white font-medium"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06] cursor-pointer"
                  }`;

                  if (item.href) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={commonClasses}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.name}
                      role="button"
                      tabIndex={0}
                      className={commonClasses}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="px-5 py-4 border-t border-slate-700/60 mt-auto">
        <p className="text-[11px] text-slate-400/80 tracking-wide font-mono">
          Prototype · v1 · Nov 2026
        </p>
      </div>
    </aside>
  );
}
