"use client";

import { memo } from "react";
import { useSidebar } from "@/app/hooks/useSidebar";

const SidebarOverlay = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm ${isOpen ? "block" : "hidden"} cursor-pointer`}
      onClick={closeSidebar}
      aria-hidden="true"
    />
  );
};

export default memo(SidebarOverlay);
