import TextLink from "../TextLink";
import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";
import ProjectBody from "./ProjectBody";

export default function ProjectMedia(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const [background, setBackground] = useState();
  const [path, setPath] = useState();

  const bgColors = {
    skiff: ["bg-gray-200", "bg-[#4F4C59]"],
    azuki: ["azuki-red", "bg-slate-800"],
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
    <>
      <div
        className={`block grid rounded-md overflow-hidden col-start-1 col-end-13 transition duration-300
          ${background}
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
          ${props.pAll ? "p-4 md:p-12" : ""}
          ${props.pl ? "pl-4 md:pl-12" : ""}
          ${props.pr ? "pr-4 md:pr-12" : ""}
          ${props.pb ? "pb-4 md:pb-12" : ""}
          ${props.pt ? "pt-4 md:pt-12" : ""}
      `}
      >
        {props.isVideo ? (
          <CardVideo
            hasControl={props.hasControl}
            src={props.src}
            poster={props.poster}
            loadingPhrase={loadingPhrase}
            pAll={props.pAll}
            pt={props.pt}
            pr={props.pr}
            pl={props.pl}
            pb={props.pb}
          />
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
                onLoadingComplete={() => {
                  handleImageLoad();
                }}
                className={` 

              ${props.pAll ? "rounded md:rounded-md" : ""}
              ${props.pt && props.pl ? "rounded-tl md:rounded-tl-xl" : ""}
              ${props.pt && props.pr ? "rounded-tr md:rounded-tr-xl" : ""}
              ${props.pb && props.pl ? "rounded-bl md:rounded-bl-xl" : ""}
              ${props.pb && props.pr ? "rounded-br-md md:rounded-br-xl" : ""}
              `}
              />
            </article>
            <Preloader
              dark={props.dark ? true : false}
              loadingPhrase={loadingPhrase}
              isContentLoaded={isImageLoaded}
            ></Preloader>
          </div>
        )}
      </div>
      {props.children && <ProjectBody caption>{props.children}</ProjectBody>}
    </>
  );
}
