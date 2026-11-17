import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header slot */}
      <header className="border-b px-6 py-4">
        {/* Header content will be placed here */}
      </header>

      <div className="flex flex-1">
        {/* Sidebar slot */}
        <aside className="w-64 border-r p-4 hidden md:block">
          {/* Sidebar content will be placed here */}
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
