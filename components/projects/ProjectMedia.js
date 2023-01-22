import TextLink from "../TextLink";
import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function ProjectMedia(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const [path,setPath] = useState();

  const bgColors = {
    skiff:'bg-gray-200',
    azuki:'azuki-red',
    metalink:'bg-gray-700'
  }


  //preloader
  const handleImageLoad = (e) => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    setPath(window.location.pathname.replace('/', ''));
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  useEffect(()=>{
    console.log(path);
  },[path]);


  return (
    <div className={`block grid rounded-md overflow-hidden col-start-1 col-end-13
          ${props.large ? "md:col-start-1" : "md:col-start-5"}
          ${props.pl || props.pr || props.pt || props.pb || props.pAll ? `border-solid border-neutral-800 border ${bgColors[path]}` : ""}
          ${props.pAll ? "p-12" : ""}
          ${props.pl ? "pl-12" : ""}
          ${props.pr ? "pr-12" : ""}
          ${props.pb ? "pb-12" : ""}
          ${props.pt ? "pt-12" : ""}
      `}>
      {props.isVideo ? (
        <CardVideo src={props.src} loadingPhrase={loadingPhrase} />
      ) : (
        <div className="relative">
          <article className={` w-full h-auto transition duration-500 rounded-md ease-out
                      ${isImageLoaded ? "opacity-1" : "opacity-0"}
                      text-[0px]`
                    }
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
              ${props.pt && props.pl ? "rounded-tl-md" : ""}
              ${props.pt && props.pr ? "rounded-tr-md" : ""}
              ${props.pb && props.pl ? "rounded-bl-md" : ""}
              ${props.pb && props.pr ? "rounded-br-md" : ""}
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
