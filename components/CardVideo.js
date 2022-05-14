import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log(isVideoLoaded);
  };

  useEffect(() => {
    console.log(props.link);
  });

  return (
    <div className="relative rounded-md overflow-hidden h-full">
      {props.placeholder ? (
        <Image
          alt="thumbnail video"
          layout="fill"
          objectFit="cover"
          src={props.placeholder}
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />
      ) : (
        <div
          className="absolute top-0 w-full h-full bg-[rgba(255,255,255,.05)] animate-pulse"
          style={{ display: isVideoLoaded ? "none" : "inline" }}
        ></div>
      )}

      <video
        className="object-cover w-full h-full"
        autoPlay
        playsInline
        loop
        muted
        src={props.src}
        onCanPlay={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
    </div>
  );
}
