import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log(isVideoLoaded);
  };

  return (
    <div className="relative rounded-md overflow-hidden h-full">
      <Image
        alt="thumbnail video"
        layout="fill"
        objectFit="cover"
        src={props.placeholder}
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />

      <video
        className="object-cover w-full h-full"
        autoPlay
        playsInline
        loop
        muted
        src={props.link}
        onCanPlay={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
    </div>
  );
}
