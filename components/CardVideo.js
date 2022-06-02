import React, { useState, useEffect } from "react";
import Image from "next/image";

const loadingPhrases = [
  "Generating graphics",
  "Populating content",
  "Materializing pixels",
  "Painting thumbnails",
  "Creating visuals",
  "Developing graphics",
  "Crafting images",
];
export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState();

  useEffect(() => {
    setLoadingPhrase(
      loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]
    );
  }, []);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log(isVideoLoaded);
  };

  return (
    <div className="relative rounded-md overflow-hidden h-full">
      <div
        className={`absolute top-0 w-full h-full overflow-hidden z-10 rounded-md ${
          isVideoLoaded
            ? "opacity-0 bg-[rgba(255,255,255,0)]"
            : "opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]"
        }`}
      >
        <p className="text-zinc-500 flex h-full justify-center items-center">
          {loadingPhrase}
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
        className={`object-cover w-full h-full transition duration-1000 overflow-hidden rounded-md ease-out ${
          isVideoLoaded ? "opacity-100 scale-[1]" : "opacity-0 scale-[1.06]"
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
