"use client";

import React, { useRef, useState, memo } from "react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import Button from "@/app/components/ui/Button";

interface LanguageItem {
  id: string;
  name: string;
  flag: string;
}

const LANGUAGES: LanguageItem[] = [
  { id: "en", name: "English", flag: "/assets/icons/flags/ic-flag-en.svg" },
  { id: "de", name: "German", flag: "/assets/icons/flags/ic-flag-de.svg" },
  { id: "fr", name: "French", flag: "/assets/icons/flags/ic-flag-fr.svg" },
];

const LanguageDropdown = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(dropDownRef, () => setIsOpenLanguage(false));

  return (
    <div className="relative" ref={dropDownRef}>
      <Button
        variant="icon"
        isActive={isOpenLanguage}
        aria-label="Change Language"
        onClick={() => setIsOpenLanguage(!isOpenLanguage)}
      >
        <img
          src={selectedLanguage.flag}
          className="h-5 w-7 rounded-sm object-cover shadow-sm"
          alt={`Selected Language: ${selectedLanguage.name}`}
        />
      </Button>

      <div
        className={`absolute right-4 mt-1 w-44 rounded-md border border-border-gray bg-pure-white p-1.5 shadow-xl ring-1 ring-black/5 z-50 origin-top-right transition-all duration-300 transform ${
          isOpenLanguage
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-0.5">
          {LANGUAGES.map((lang) => (
            <li key={lang.id}>
              <button
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsOpenLanguage(false);
                }}
                className={`flex items-center gap-2 w-full rounded-lg p-2 text-left text-sm font-medium cursor-pointer transition-colors duration-200 outline-none ${
                  selectedLanguage.flag === lang.flag
                    ? "bg-border-gray font-semibold text-dark-gray"
                    : "text-medium-gray hover:bg-border-gray/50"
                }`}
              >
                <img
                  src={lang.flag}
                  className="h-6 w-8 rounded-sm object-cover"
                  alt={`${lang.name} flag`}
                />
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(LanguageDropdown);
