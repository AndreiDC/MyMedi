import React from "react";
import { Icon } from "@iconify/react";

export const MegaMenu = () => {
  return (
    <ul className="flex items-center  space-x-4 pt-4 pr-0 pb-4 pl-0 text-base text-blue-900 font-sans font-semibold truncate  ">
      <li className="h-10 flex items-center rounded-full text-white pt-1 pr-4 pb-1 pl-5 bg-blue-900 space-x-2 ">
        <Icon className="mr-1 mb-1" icon="bi:menu-button" />
        Products <Icon className="w-3 h-3" icon="bi:chevron-down" />
      </li>
      <li className="flex items-end space-x-2 ">
        Home Medical Supplies
        <Icon className="w-3 h-3t" icon="bi:chevron-down" />
      </li>
      <li className="flex items-end space-x-2">
        Home pages
        <Icon className="w-3 h-3" icon="bi:chevron-down" />
      </li>
      <li className="flex items-end space-x-2">
        Shop
        <Icon className="w-3 h-3" icon="bi:chevron-down" />
      </li>
      <li className="flex items-end space-x-2">
        Pages
        <Icon className="w-3 h-3" icon="bi:chevron-down" />
      </li>
    </ul>
  );
};
