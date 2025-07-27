import React from "react";

// Utility function to join class names conditionally
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Reusable Button component
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-2xl bg-pink-600 text-white hover:bg-pink-700 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};