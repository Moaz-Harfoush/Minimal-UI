"use client";

import React, { memo } from "react";
import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary" | "icon" | "menuItem";
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant,
  children,
  className = "",
  isActive = false,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "transition-all duration-300 cursor-pointer outline-none select-none flex items-center justify-center";

  const variants = {
    primary:
      "block w-fit text-center p-3 bg-very-dark-gray text-pure-white font-bold rounded-sm shadow-lg shadow-black/10 transition-transform duration-300 mt-2 text-sm active:scale-90",
    secondary:
      "gap-2 px-4 py-2 border border-border-gray rounded-lg bg-pure-white text-sm font-medium text-dark-gray hover:bg-soft-gray",
    icon: `h-10 w-10 rounded-full text-medium-gray ${isActive ? "bg-border-gray" : "hover:bg-border-gray"}`,
    menuItem: `w-full justify-start gap-2.5 p-2.5 font-medium transition-colors`,
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
