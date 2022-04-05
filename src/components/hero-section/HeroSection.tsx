import React from "react";
import { Thumnail } from "./Thumnail";
import { Baged } from "./Baged";
import { Title } from "./Title";
import { Desc } from "./Desc";
import { Group } from "./Group";

export const HeroSection = () => {
  return (
    <div>
      <Thumnail />
      <Baged />
      <Title />
      <Desc />
      <Group />
    </div>
  );
};
