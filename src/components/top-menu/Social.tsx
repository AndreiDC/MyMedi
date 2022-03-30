import React from "react";
import { Icon } from "@iconify/react";

export const Social = () => {
  return (
    <div className="flex items-center  space-x-4 cursor-pointer ">
      <Icon className=" bg-transparent" icon="bi:facebook" />
      <Icon className=" bg-transparent" icon="bi:instagram" />
      <Icon className=" bg-transparent" icon="bi:youtube" />
      <Icon className=" bg-transparent" icon="bi:pinterest" />
      <Icon className=" bg-transparent" icon="bi:linkedin" />
    </div>
  );
};
