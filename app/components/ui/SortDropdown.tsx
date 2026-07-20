"use client";

import { useRef, useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import Button from "@/app/components/ui/Button";

interface SortOption {
  label: string;
  value: string;
}

interface SortDropdownProps {
  options: SortOption[];
  selectedOption: SortOption;
  onSelectOption: (option: SortOption) => void;
}

const SortDropdown = ({
  options,
  selectedOption,
  onSelectOption,
}: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useCloseOnOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
        <span>Sort By: {selectedOption.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-medium-gray transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </Button>

      <div
        className={`absolute right-0 mt-2 w-40 rounded-lg border border-border-gray bg-pure-white p-1 shadow-xl z-50 origin-top-right transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-0.5">
          {options.map((option) => {
            const isSelected = selectedOption.value === option.value;
            return (
              <li key={option.value}>
                <button
                  onClick={() => {
                    onSelectOption(option);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full rounded-md px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer outline-none ${
                    isSelected
                      ? "bg-border-gray text-dark-gray font-semibold"
                      : "text-medium-gray hover:bg-soft-gray"
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(SortDropdown);
