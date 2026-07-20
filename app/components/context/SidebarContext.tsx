"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}
export const SidebarContext = createContext<SidebarContextType | null>(null);
