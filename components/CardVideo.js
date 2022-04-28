import React, { useState, useEffect } from "react";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log(isVideoLoaded);
  };

  return (
    <div className={`relative overflow-hidden w-full h-full rounded-md`}>
      <img
        className="absolute object-cover w-full h-full overflow-hidden m-auto"
        src={props.placeholder}
        alt="thumbnail video"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        className="object-cover w-full h-full rounded-md"
        autoPlay
        playsInline
        loop
        muted
        src={props.video}
        onCanPlay={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
    </div>
  );
}
