"use client";

import { usePathname } from "next/navigation";
import { Info, ExternalLink } from "lucide-react";
import { getSectionTitle } from "@/lib/navigation";

export default function DashboardHeader() {
  const pathname = usePathname();
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "/";
  const sectionTitle = getSectionTitle(pathname);

  return (
    <header className="w-full shrink-0 flex flex-col z-20">
      {/* Top Notice Banner - ~30px height */}
      <div className="h-[30px] min-h-[30px] bg-[#FFF8E7] border-b border-[#EFE5CA] px-6 lg:px-8 flex items-center gap-2 text-[12px] text-[#7A6E46] select-none">
        <Info className="w-3.5 h-3.5 text-[#8C7A4B] shrink-0" />
        <span className="truncate">
          Prototype — sample data, nothing is saved after reload. Website: EN (default) + AR — Arabic is required for every filled text.
        </span>
      </div>

      {/* Main Header Bar - ~64px height */}
      <div className="h-16 min-h-[64px] bg-white border-b border-slate-200/90 px-6 lg:px-8 flex items-center justify-between">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm">
          <span className="text-slate-500 font-normal">WAPTCO CMS</span>
          <span className="text-slate-400 mx-2 font-normal">/</span>
          <span className="text-slate-900 font-semibold">{sectionTitle}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 text-xs font-medium text-slate-700 transition-colors shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            <span>View website</span>
          </a>

          {/* User Avatar WA */}
          <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold tracking-tight select-none shadow-2xs">
            WA
          </div>
        </div>
      </div>
    </header>
  );
}
