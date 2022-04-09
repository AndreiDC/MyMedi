import React from "react";
import { Baged } from "./Baged";
import { Title } from "./Title";
import { Description } from "./Description";
import { Shop } from "./Shop";

export const HeroSectionTwo = () => {
  return (
    <div className="lg:ml-4 mb-12 ">
      <div className="  lg:flex justify-start ">
        <Baged />
      </div>
      <div className="  lg:flex justify-start ">
        <Title />
      </div>
      <div className="  lg:flex justify-start ">
        <Description />
      </div>
      <div className="  lg:flex justify-start ">
        <Shop />
      </div>
    </div>
  );
};
