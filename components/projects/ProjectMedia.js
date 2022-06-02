import TextLink from "../TextLink";
import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function ProjectMedia(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");

  //preloader
  const handleImageLoad = (e) => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <div className=" block grid rounded-md overflow-hidden col-start-1 md:col-start-5 col-end-13">
      {props.isVideo ? (
        <CardVideo src={props.src} loadingPhrase={loadingPhrase} />
      ) : (
        <div className="relative">
          <article
            className={`object-cover w-full h-full transition duration-500 overflow-hidden rounded-md ease-out ${
              isImageLoaded ? "opacity-1" : "opacity-0"
            }`}
          >
            <Image
              src={props.src}
              alt="image"
              placeholder="blur"
              onLoadingComplete={() => {
                handleImageLoad();
              }}
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
