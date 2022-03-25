import React from "react";
import { IconClose } from "./IconClose";

export const Notification = () => {
  return (
    <div className="w-100% pr-4 pl-4 mr-auto ml-auto box-content ">
      <div className="text-xs pt-2 pr-9 pb-2 pl-0 text-center text-blue-900 font-sans ">
        Due to the
        <strong> COVID 19 </strong>
        epidemic, orders may be processed with a slight delay
      </div>
      <IconClose />
    </div>
  );
};
