"use client";

import { useState, useRef, memo } from "react";
import { BellRing, CheckCheck } from "lucide-react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import NotificationList from "@/app/components/common/header/NotificationList";
import Button from "@/app/components/ui/Button";

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(dropDownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropDownRef}>
      <Button
        variant="icon"
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
        aria-label="Notifications"
      >
        <BellRing className="h-5 w-5" />
        <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-very-dark-gray text-[10px] font-bold text-pure-white">
          2
        </span>
      </Button>

      <div
        className={`absolute max-sm:right-4 mt-1 w-[calc(100vw-120px)] sm:w-80 right-0 rounded-md border border-border-gray bg-pure-white shadow-xl ring-1 ring-black/5 z-50 origin-top-right transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-dashed border-border-gray">
          <div>
            <h3 className="text-base font-semibold text-dark-gray">
              Notifications
            </h3>
            <p className="text-sm text-medium-gray mt-0.5">
              You have 2 unread messages
            </p>
          </div>

          <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-border-gray cursor-pointer text-bright-blue transition-colors duration-200">
            <CheckCheck className="w-5 h-5" />
          </div>
        </div>

        <NotificationList />

        <div className="*:w-full p-2 border-t border-solid border-border-gray text-center">
          <Button variant="primary">View all</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(NotificationsDropdown);
