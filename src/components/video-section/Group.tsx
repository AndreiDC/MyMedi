import React from "react";
import { Icon } from "@iconify/react";

export const Group = () => {
  return (
    <div className="flex lg:justify-start  justify-center text-blue-900 font-serif  ">
      <div className="text-lg   flex-col font-medium mb-4    ">
        <div className="flex mb-4 space-x-4  ">
          <div className="text-2xl">
            <Icon icon="icon-park-outline:certificate" />
          </div>
          <div>Up to 5 users simultaneously</div>
        </div>
        <div className="flex space-x-4  ">
          <div className="text-2xl ">
            <Icon icon="fa-solid:bacterium" />
          </div>
          <div>Has HEALTH certificate</div>
        </div>
      </div>
    </div>
  );
};
