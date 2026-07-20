"use client";

import { memo } from "react";
import { useSidebar } from "@/app/hooks/useSidebar";

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <aside
      aria-label="Main Sidebar"
      className={`fixed lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-80"} duration-300 left-0 top-0 z-50 w-80 h-screen bg-pure-white border-r-2 border-border-gray flex flex-col p-4 font-sans select-none`}
    >
      {children}
    </aside>
  );
};

export default memo(SidebarWrapper);
