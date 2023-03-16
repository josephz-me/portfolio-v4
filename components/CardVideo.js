import React, { useState, useRef, useEffect } from "react";

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);
  const playPause = () => {
    //play pause icon
    if (vidRef.current.paused) {
      setIsPlaying(true);
      vidRef.current.play();
    } else {
      setIsPlaying(false);
      vidRef.current.pause();
    }
  };

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.msMaxTouchPoints > 0);
  }, []);

  useEffect(() => {
    console.log(isTouch);
  }, [isTouch]);

  return (
    <div
      className={` group relative rounded-md overflow-hidden h-full
      ${props.hasControl ? "cursor-pointer" : ""}
      ${props.pAll ? "rounded md:rounded-md" : ""}
      ${props.pt && props.pl ? "rounded-tl md:rounded-tl-xl" : ""}
      ${props.pt && props.pr ? "rounded-tr md:rounded-tr-xl" : ""}
      ${props.pb && props.pl ? "rounded-bl md:rounded-bl-xl" : ""}
      ${props.pb && props.pr ? "rounded-br-md md:rounded-br-xl" : ""}`}
      onClick={() => {
        playPause();
      }}
    >
      <div
        className={`absolute top-0 w-full h-full overflow-hidden ${
          isVideoLoaded || props.hasControl
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
        ref={vidRef}
        className={`object-cover w-full h-full transition duration-1000 overflow-hidden ease-out ${
          isVideoLoaded || props.hasControl ? "opacity-100" : "opacity-0"
        }`}
        preload={props.hasControl ? "none" : "none"}
        poster={props.poster}
        playsInline
        loop
        autoPlay={props.hasControl ? false : true}
        muted
        src={props.src}
        onCanPlay={onLoadedData}
      />
      <div
        className={`${props.hasControl ? "" : "hidden"}
        ${isPlaying ? "opacity-0" : "opacity-100"}
        ${isTouch ? "" : "group-hover:opacity-100"}
         left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit absolute px-4 py-2 bg-black/80 shadow-lg group-hover:scale-[1.05] duration-200 rounded-full`}
      >
        {/* play button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 fill-white ${isPlaying ? "hidden" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>

        {/* pause button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 fill-white ${isPlaying ? "" : "hidden"}`}
        >
          <path
            fillRule="evenodd"
            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
