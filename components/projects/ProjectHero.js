import GridContainer from "../GridContainer";
import React, { useState, useEffect } from "react";
import CardVideo from "../CardVideo";
import Image from "next/image";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function ProjectHero(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const handleImageLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[40px] my-2 md:my-8 h-[60vw] md:h-[49vw] object-cover w-full grid col-span-12">
      {props.isVideo ? (
        <CardVideo src={props.content} loadingPhrase={loadingPhrase} />
      ) : (
        <div className="relative h-full">
          <article
            className={`object-cover w-full h-full transition duration-500 overflow-hidden rounded-md ease-out ${
              isContentLoaded ? "opacity-1" : "opacity-0"
            }`}
          >
            <Image
              alt="project hero"
              layout="fill"
              objectFit="cover"
              src={props.content}
              priority
              onLoadingComplete={() => {
                handleImageLoad();
              }}
            />
          </article>
          <Preloader
            loadingPhrase={loadingPhrase}
            isContentLoaded={isContentLoaded}
          ></Preloader>
        </div>
      )}
    </div>
  );
}
