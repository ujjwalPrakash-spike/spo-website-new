// Generic button primitive supporting primary, secondary, and accent styles.

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "accent",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variantStyles = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-md",
    secondary: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
    accent: "bg-[#93c5fd] hover:bg-[#7bb7fc] text-neutral-950 shadow-lg active:scale-95",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 rounded-md gap-2",
    md: "text-xs sm:text-sm px-5 py-2.5 rounded-lg gap-2.5",
    lg: "text-sm sm:text-base px-6 py-3.5 rounded-lg gap-3",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
