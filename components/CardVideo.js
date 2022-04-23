import React, { useState, useEffect } from "react";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    console.log(isVideoLoaded);
  }, [isVideoLoaded]);

  return (
    <div className={`relative overflow-hidden w-full h-full`}>
      {/* <img
        className="absolute w-full h-full object-cover overflow-hidden m-auto"
        src={props.placeholder}
        alt="thumbnail video"
        style={{ display: isVideoLoaded ? "none" : "block" }}
      /> */}
      <video
        className="absolute object-cover w-full h-full"
        autoPlay
        playsInline
        loop
        muted
        src={props.video}
        onCanPlay={() => setIsVideoLoaded(true)}
        // style={{ display: isVideoLoaded ? "block" : "none" }}
      />
    </div>
  );
}
