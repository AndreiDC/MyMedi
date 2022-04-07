import React from "react";
import { MyLogo } from "./MyLogo";
import { Search } from "./Search";
import { MegaMenu } from "./MegaMenu";
import { MainIcons } from "./MainIcons";
import { LanguageCurrency } from "./LanguageCurrency";

export const MainMenu = () => {
  return (
    <div className="w-100%  h-16 mr-auto ml-auto font-serif box-content flex   ">
      <div className=" w-1/2  lg:w-1/4 flex justify-center sm:justify-start  md:pl-4 md:pr-4  md:mr-auto md:ml-auto">
        <MyLogo />
      </div>
      <div className="w-1/2 flex justify-end items-center  box-content  md:hidden     ">
        <Search />
      </div>
      <div className="hidden md:contents lg:hidden ">
        <div className="flex justify-center space-x-2">
          <LanguageCurrency />
          <MainIcons />
        </div>
      </div>
      <div className="hidden lg:contents  ">
        <div className="flex justify-center lg:w-1/2">
          <MegaMenu />
        </div>
        <div className="flex justify-end lg:w-1/3 md:contents     ">
          <MainIcons />
        </div>
      </div>
    </div>
  );
};
