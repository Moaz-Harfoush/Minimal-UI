"use client";

import { memo } from "react";
import { useSidebar } from "@/app/hooks/useSidebar";
import { Menu } from "lucide-react";
import Button from "@/app/components/ui/Button";

const MenuButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="icon"
        className="rounded-lg p-2 lg:hidden"
        aria-label="Toggle Menu"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default memo(MenuButton);
