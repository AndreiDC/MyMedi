import React from "react";
import { HeaderText } from "./HeaderText";
import { Menu } from "./Menu";
import { Social } from "./Social";
import { Language } from "./Language";
import { Currency } from "./Currency";

export const TopMenu = () => {
  return (
    <div className="w-100% h-8 border-white bg-blue-900 pr-4 pl-4 mr-auto ml-auto font-serif text-white font-medium box-border flex items-center  ">
      <div className="w-1/2 lg:w-1/3   ">
        <HeaderText />
      </div>
      <div className=" w-1/2  lg:w-1/2 flex justify-end lg:mx-4 ">
        <Menu />
      </div>
      <div className="w-1/2 lg:w-1/2 hidden lg:contents ">
        <div className="flex justify-end lg:space-x-4 ">
          <Social />
          <Language />
          <Currency />
        </div>
      </div>
    </div>
  );
};
