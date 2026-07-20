"use client";

import { useState, useRef, memo } from "react";
import { Home, User, Settings } from "lucide-react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import Button from "@/app/components/ui/Button";

const ProfileDropdown = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(dropDownRef, () => setIsOpenProfile(false));

  const userName = "Jaydon Frankie";

  return (
    <div className="relative" ref={dropDownRef}>
      <Button
        variant="icon"
        isActive={isOpenProfile}
        onClick={() => setIsOpenProfile(!isOpenProfile)}
        aria-label="User Profile"
      >
        <div className="h-9 w-9 overflow-hidden rounded-full p-0.5 bg-linear-to-tr from-emerald-500 via-yellow-400 to-blue-500 transition-all duration-300">
          <img
            src="/assets/images/avatar/avatar-25.webp"
            alt={`${userName} avatar`}
            className="h-full w-full object-cover rounded-full bg-pure-white"
          />
        </div>
      </Button>

      <div
        className={`absolute right-4 mt-1 w-56 rounded-xl border border-border-gray bg-pure-white shadow-xl ring-1 ring-black/5 z-50 origin-top-right transition-all duration-300 transform ${
          isOpenProfile
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 border-b border-dashed border-border-gray">
          <p className="text-sm font-semibold text-dark-gray truncate">
            {userName}
          </p>
          <p className="text-xs text-medium-gray truncate mt-0.5">
            demo@minimals.cc
          </p>
        </div>

        <ul className="p-1.5 flex flex-col gap-2">
          <li>
            <button
              onClick={() => setIsOpenProfile(false)}
              className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-left text-sm font-medium bg-border-gray text-dark-gray cursor-pointer outline-none"
            >
              <Home className="w-5 h-5 text-medium-gray" />
              <span>Home</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => setIsOpenProfile(false)}
              className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-medium-gray hover:bg-border-gray hover:text-dark-gray cursor-pointer transition-colors duration-200 outline-none"
            >
              <User className="w-5 h-5 text-medium-gray" />
              <span>Profile</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => setIsOpenProfile(false)}
              className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-medium-gray hover:bg-border-gray hover:text-dark-gray cursor-pointer transition-colors duration-200 outline-none"
            >
              <Settings className="w-5 h-5 text-medium-gray" />
              <span>Settings</span>
            </button>
          </li>
        </ul>

        <div className="*:w-full p-1.5 border-t border-dashed border-border-gray">
          <Button variant="primary">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileDropdown);
