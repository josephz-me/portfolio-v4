import TextLink from "../TextLink";
import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function ProjectMedia(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const [background, setBackground] = useState();
  const [path, setPath] = useState();

  const bgColors = {
    skiff: ["bg-gray-200", "bg-white/[.15]"],
    azuki: ["azuki-red", "bg-white/[.15]"],
    metalink: "bg-gray-700",
    experiments: "bg-white/[.15]",
  };

  //determine background
  const determineBackground = () => {
    if (Array.isArray(bgColors[path])) {
      props.dark
        ? setBackground(bgColors[path][1])
        : setBackground(bgColors[path][0]);
    } else {
      setBackground(bgColors[path]);
    }
  };

  //preloader
  const handleImageLoad = (e) => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    setPath(window.location.pathname.replace("/", ""));
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  useEffect(() => {
    determineBackground();
  }, [path]);

  return (
    <div
      className={`block grid rounded-md overflow-hidden col-start-1 col-end-13 transition duration-300
          ${isImageLoaded ? background : "bg-neutral-900"}
          ${props.large ? "md:col-start-1" : "md:col-start-5"}
          ${
            props.pl ||
            props.pr ||
            props.pt ||
            props.pb ||
            (props.pAll && isImageLoaded)
              ? `border-solid border-neutral-800 border`
              : ""
          }
          ${props.pAll ? "p-12" : ""}
          ${props.pl ? "pl-12" : ""}
          ${props.pr ? "pr-12" : ""}
          ${props.pb ? "pb-12" : ""}
          ${props.pt ? "pt-12" : ""}
      `}
    >
      {props.isVideo ? (
        <CardVideo src={props.src} loadingPhrase={loadingPhrase} />
      ) : (
        <div className="relative">
          <article
            className={` w-full h-auto transition duration-500 rounded-md ease-out
                ${isImageLoaded ? "opacity-1" : "opacity-0"}
                text-[0px]`}
          >
            <Image
              src={props.src}
              alt="image"
              placeholder="blur"
              onLoadingComplete={() => {
                handleImageLoad();
              }}
              className={` 

              ${props.pAll ? "rounded-md" : ""}
              ${props.pt && props.pl ? "rounded-tl-xl" : ""}
              ${props.pt && props.pr ? "rounded-tr-xl" : ""}
              ${props.pb && props.pl ? "rounded-bl-xl" : ""}
              ${props.pb && props.pr ? "rounded-br-xl" : ""}
              `}
            />
          </article>
          <Preloader
            loadingPhrase={loadingPhrase}
            isContentLoaded={isImageLoaded}
          ></Preloader>
        </div>
      )}
    </div>
  );
}
