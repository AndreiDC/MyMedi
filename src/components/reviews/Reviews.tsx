import React from "react";
import { Title } from "./Title";
import { Text } from "./Text";
import { Name } from "./Name";
import { Rating } from "./Rating";

export const Reviews = () => {
  return (
    <div className="py-20 font-serif ">
      <Title />
      <div className=" flex flex-wrap justify-evenly lg:-mx-16    ">
        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 ">
          <Text />
          <Name />
          <Rating />
        </div>

        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 hidden md:block ">
          <Text />
          <Name />
          <Rating />
        </div>

        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 hidden lg:block ">
          <Text />
          <Name />
          <Rating />
        </div>
      </div>
    </div>
  );
};
