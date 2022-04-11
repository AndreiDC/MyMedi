import React from "react";

export const VideoGallery = () => {
  return (
    <div className=" flex lg:justify-start justify-center my-9 lg:my-0  ">
      <iframe
        className="w-96 h-56 lg:h-96 lg:w-full"
        src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
        frameBorder={0}
      />
    </div>
  );
};
