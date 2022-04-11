import React from "react";
import { Title } from "./Title";
import { Desc } from "./Desc";
import { Group } from "./Group";
import { About } from "./About";
import { VideoGallery } from "./VideoGallery";

export const VideoSection = () => {
  return (
    <div className="w-100% flex flex-col lg:flex-row mx-4 ">
      <div className="lg:w-1/2">
        <div>
          <Title />
          <Desc />
          <Group />
          <About />
        </div>
      </div>
      <div className="lg:w-1/2">
        <div>
          <VideoGallery />
        </div>
      </div>
    </div>
  );
};
