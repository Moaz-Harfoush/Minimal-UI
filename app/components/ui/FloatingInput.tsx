"use client";

import { useState, memo, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  defaultValue?: string;
  required?: boolean;
}

const FloatingInput = ({
  id,
  label,
  type = "text",
  defaultValue = "",
  required = false,
  ...props
}: FloatingInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        id={id}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full pl-4 pr-12 py-4 border-2 border-border-gray rounded-xl outline-none focus:border-dark-gray transition-all text-sm font-medium peer bg-transparent"
        {...props}
      />

      <label
        htmlFor={id}
        className={`absolute left-3 transition-all pointer-events-none rounded-md px-1.5 text-medium-gray bg-pure-white ${
          isFloating
            ? "top-0 -translate-y-1/2 text-xs"
            : "top-1/2 -translate-y-1/2 text-sm"
        }`}
      >
        {label}
      </label>

      {type === "password" && (
        <button
          aria-label={showPassword ? "Hide password" : "Show password"}
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-medium-gray hover:text-very-dark-gray transition-colors focus:outline-none min-h-8 min-w-8 flex items-center justify-center"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default memo(FloatingInput);
