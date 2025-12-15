import React from "react";

export function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 mb-4 w-full"
      placeholder="Search by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
