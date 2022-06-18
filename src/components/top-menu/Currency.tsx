import React from "react";

export const Currency = () => {
  return (
    <select
      className=" text-white font-justSantSerif bg-blue-900 hover:text-orange-500 text-sm hidden lg:block cursor-pointer  "
      name="Currency"
      id=""
    >
      <option value="">USD</option>
      <option value="">EUR</option>
      <option value="">KWD</option>
    </select>
  );
};
