import React from "react";
import { IconClose } from "./IconClose";

export const Notification = () => {
  return (
    <div className="w-100% pr-4 pl-4 pt-1 mr-auto ml-auto box-content  ">
      <div className="text-sm  pr-9 pb-2  text-center text-blue-900 font-sans font-medium">
        Due to the
        <strong className="text-base"> COVID 19 </strong>
        epidemic, orders may be processed with a slight delay
      </div>
      <IconClose />
    </div>
  );
};
