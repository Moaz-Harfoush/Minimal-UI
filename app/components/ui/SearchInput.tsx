"use client";

import { memo } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder: string;
}

const SearchInput = ({
  value,
  onChange,
  onFocus,
  placeholder,
}: SearchInputProps) => {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 w-5 h-5 text-medium-gray" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        className="w-56 text-md pl-10 pr-4 py-4 bg-pure-white border-2 border-border-gray rounded-lg outline-none focus:border-bright-blue focus:bg-pure-white transition-all duration-200"
      />
    </div>
  );
};

export default memo(SearchInput);
