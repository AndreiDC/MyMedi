import React from "react";

export const Language = () => {
  return (
    <select
      className="max-w-xs text-white font-sans bg-blue-900 hover:text-orange-500  text-sm cursor-pointer "
      name="Language"
    >
      <option>English</option>
      <option>Romanian</option>
      <option>Russian</option>
    </select>
  );
};
