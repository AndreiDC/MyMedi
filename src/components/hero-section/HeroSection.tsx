import React from "react";
import { Thumnail } from "./Thumnail";
import { Baged } from "./Baged";
import { Title } from "./Title";
import { Desc } from "./Desc";
import { Group } from "./Group";
import { Shop } from "./Shop";

export const HeroSection = () => {
  return (
    <div className="  flex flex-col lg:flex-row lg:pl-4">
      <div className="lg:order-last lg:w-1/2 lg:pt-16  ">
        <Thumnail />
      </div>
      <div className="lg:flex-row lg:w-1/2  ">
        <div className="lg:flex justify-center">
          <Baged />
        </div>
        <div className="lg:flex justify-start">
          <Title />
        </div>
        <div className="lg:flex justify-start">
          <Desc />
        </div>
        <div className=" lg:flex justify-start ">
          <Group />
        </div>
        <div className="lg:flex justify-start">
          <Shop />
        </div>
      </div>
    </div>
  );
};
