"use client";

import { useState, useRef, memo } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import Button from "@/app/components/ui/Button";

const Search = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(dropDownRef, () => setIsOpenSearch(false));

  return (
    <div ref={dropDownRef}>
      <Button
        variant="icon"
        isActive={isOpenSearch}
        onClick={() => setIsOpenSearch(!isOpenSearch)}
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>

      <div
        className={`fixed top-0 right-0 lg:max-w-[calc(100vw-320px)] shadow-2xl w-full bg-soft-gray/95 backdrop-blur-sm p-4 flex justify-between z-50 transition-all duration-300 ${
          isOpenSearch
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-4 px-4 py-2">
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-medium-gray/70" />
            </div>

            <input
              type="text"
              className="w-full p-2.5 ps-11 text-sm text-dark-gray bg-transparent rounded-lg focus:outline-none placeholder-medium-gray/60"
              placeholder="Search..."
            />
          </div>

          <Button variant="primary" onClick={() => setIsOpenSearch(false)}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
