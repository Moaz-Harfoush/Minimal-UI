"use client";

import { memo } from "react";
import Link from "next/link";
import { SIDEBAR_LINKS } from "@/app/components/common/sidebar/sidebarData";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 overflow-y-auto pr-1 flex-1  [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-gray [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-border-gray">
      {SIDEBAR_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={`flex items-center gap-3 p-3 font-bold rounded-sm transition-all duration-300 text-sm ${
              isActive
                ? "bg-bright-blue/10 text-bright-blue"
                : "text-medium-gray hover:bg-border-gray"
            }`}
          >
            <span
              style={{
                mask: `url(${link.image}) center center / contain no-repeat`,
                WebkitMask: `url(${link.image}) center center / contain no-repeat`,
              }}
              className="w-6 h-6 shrink-0 bg-current"
            />

            <span className="text-[14px] tracking-wider font-semibold">
              {link.text}
            </span>

            {link.badge && (
              <span className="text-[11px] text-pure-white bg-very-dark-gray px-2 py-1 rounded-md ml-auto">
                {link.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(SidebarNav);
