import React from "react";
import { Title } from "./Title";
import { Text } from "./Text";
import { Name } from "./Name";
import { Rating } from "./Rating";

export const Reviews = () => {
  return (
    <div className="py-20 font-justSantSerif ">
      <Title />
      <div className=" flex flex-wrap justify-evenly lg:-mx-28 font-justSantSerif   ">
        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 font-justSantSerif ">
          <Text />
          <Name />
          <Rating />
        </div>

        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 hidden md:block font-justSantSerif ">
          <Text />
          <Name />
          <Rating />
        </div>

        <div className="bg-slate-200 p-7 w-80 h-64 mb-16 hidden lg:block font-justSantSerif ">
          <Text />
          <Name />
          <Rating />
        </div>
      </div>
    </div>
  );
};
