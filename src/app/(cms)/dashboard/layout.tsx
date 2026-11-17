import type { ReactNode } from "react";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div dir="ltr" className="min-h-screen flex bg-[#F6F7FB] text-slate-800 antialiased">
      {/* Sidebar on the left */}
      <DashboardSidebar />

      {/* Main column on the right: Header on top, Main below */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <DashboardHeader />
        <main className="flex-1 bg-[#F6F7FB] p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
