import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div
      className={`relative rounded-md overflow-hidden h-full
      ${props.pAll ? "rounded md:rounded-md" : ""}
      ${props.pt && props.pl ? "rounded-tl md:rounded-tl-xl" : ""}
      ${props.pt && props.pr ? "rounded-tr md:rounded-tr-xl" : ""}
      ${props.pb && props.pl ? "rounded-bl md:rounded-bl-xl" : ""}
      ${props.pb && props.pr ? "rounded-br-md md:rounded-br-xl" : ""}`}
    >
      <div
        className={`absolute top-0 w-full h-full overflow-hidden ${
          isVideoLoaded
            ? "opacity-0 bg-[rgba(255,255,255,0)]"
            : "opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]"
        }`}
      >
        <p className="text-zinc-500 flex h-full justify-center items-center">
          {props.loadingPhrase}
          <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
          <span className="animate-[bounce_1s_ease-in-out_.1s_infinite]">
            .
          </span>
          <span className="animate-[bounce_1s_ease-in-out_.2s_infinite]">
            .
          </span>
        </p>
      </div>

      <video
        className={`object-cover w-full h-full transition duration-1000 overflow-hidden ease-out ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        playsInline
        loop
        muted
        src={props.src}
        onCanPlay={onLoadedData}
      />
    </div>
  );
}
