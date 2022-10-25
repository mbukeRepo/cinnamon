import React from "react";

export default function Label({ label, children }) {
  return (
    <label htmlFor={label} className="text-sm text-tartiary">
      {children}
    </label>
  );
}
