import { useContext } from "react";
import { SidebarContext } from "@/app/components/context/SidebarContext";

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("MenuButton must be used within a SidebarProvider");
  }
  return context;
}
