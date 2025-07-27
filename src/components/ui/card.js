
import React from "react";

export const Card = ({ children }) => (
  <div className="rounded-2xl shadow-md bg-white p-4 border">
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);
