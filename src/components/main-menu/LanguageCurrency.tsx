import React from "react";
import { Icon } from "@iconify/react";

export const LanguageCurrency = () => {
  return (
    <div className=" flex items-center space-x-2  font-serif text-blue-900 cursor-pointer ">
      <div className="flex items-end  ">
        English
        <Icon className="w-3 h-3 ml-1 " icon="bi:chevron-down" />
      </div>

      <div className="flex items-end  ">
        Shop
        <Icon className="w-3 h-3 ml-1 " icon="bi:chevron-down" />
      </div>
    </div>
  );
};
