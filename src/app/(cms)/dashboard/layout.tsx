import { Suspense, type ReactNode } from "react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div
      dir="ltr"
      className="h-screen w-screen overflow-hidden flex bg-[#F6F7FB] text-slate-800 antialiased"
    >
      {/* Sidebar on the left: fixed width, full height, scrolls internally if needed */}
      <Suspense fallback={<aside className="w-64 min-w-[256px] max-w-[256px] h-screen bg-[#0A1940] shrink-0" />}>
        <DashboardSidebar />
      </Suspense>

      {/* Main column on the right: Header on top (pinned), Main below (scrollable) */}
      <div className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
        <Suspense fallback={<header className="w-full h-[94px] bg-white border-b border-slate-200 shrink-0" />}>
          <DashboardHeader />
        </Suspense>
        <main className="flex-1 overflow-y-auto bg-[#F6F7FB] p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
