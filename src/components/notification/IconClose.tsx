import React from "react";
import { Icon } from "@iconify/react";

export const IconClose = () => {
  return (
    <div className=" box-content text-yellow-400 font-sans text-xs absolute top-3 right-2 block w-5 h-5  cursor-pointer text-left bg-inherit   ">
      <Icon className="w-3 h-3" icon="bytesize:close" />
    </div>
  );
};
