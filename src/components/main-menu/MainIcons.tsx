import React from "react";
import { Icon } from "@iconify/react";

export const MainIcons = () => {
  return (
    <div className="flex items-center  text-orange-400 space-x-6">
      <Icon className="h-6 w-6" icon="bi:search" />
      <Icon className="h-6 w-6" icon="bi:person-circle" />
      <Icon className="h-6 w-6" icon="bi:suit-heart" />
      <Icon className="h-6 w-6" icon="bi:cart" />
    </div>
  );
};
