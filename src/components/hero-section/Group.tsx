import React from "react";
import { Icon } from "@iconify/react";

export const Group = () => {
  return (
    <div className="flex justify-center text-orange-500 font-justSantSerif  ">
      <div className="text-lg flex align-middle  flex-col font-medium mb-4 lg:flex-row lg:space-x-10  ">
        <div className="flex mb-4   ">
          <div className="text-2xl">
            <Icon icon="mdi:bacteria-outline" />
          </div>
          <div>Anti-Bacterial</div>
        </div>
        <div className="flex ">
          <div className="text-2xl ">
            <Icon icon="arcticons:coronavirus" />
          </div>
          <div>Anti-Virus</div>
        </div>
      </div>
    </div>
  );
};
