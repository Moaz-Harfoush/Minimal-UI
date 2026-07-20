"use client";

import { useState, useRef, useCallback, memo } from "react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import { SEARCH_ITEMS } from "@/app/(dashboard)/blog/_components/blogConfig";
import SearchInput from "@/app/components/ui/SearchInput";

const BlogSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsSearchFocused(false);
  }, []);

  useCloseOnOutsideClick(searchContainerRef, handleClose);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  const handleInputFocus = useCallback(() => {
    setIsSearchFocused(true);
  }, []);

  return (
    <div
      className="relative w-full sm:w-80"
      ref={searchContainerRef}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isSearchFocused}
      aria-owns="search-results-list"
    >
      <SearchInput
        placeholder="Search Post...."
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />

      {isSearchFocused && (
        <ul
          id="search-results-list"
          role="listbox"
          aria-label="Search suggestions"
          className="absolute left-0 mt-2 w-full max-h-64 overflow-y-auto rounded-lg border border-border-gray bg-pure-white shadow-xl z-50 p-2 flex flex-col gap-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-gray [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {SEARCH_ITEMS.map((item, index) => (
            <li key={index} role="option" aria-selected={searchQuery === item}>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery(item);
                  setIsSearchFocused(false);
                }}
                className="w-full text-left px-3 py-2.5 text-xs text-dark-gray hover:bg-soft-gray rounded-md transition-colors whitespace-normal leading-relaxed cursor-pointer outline-none focus:bg-soft-gray"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(BlogSearch);
