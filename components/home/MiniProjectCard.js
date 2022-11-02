import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function MiniProjectCard(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const column = {
    1: "lg:col-start-1 lg:col-end-4 col-start-1 col-end-7", 
    2: "lg:col-start-4 lg:col-end-7 col-start-7 col-end-13", 
    3: "lg:col-start-7 lg:col-end-10 col-start-1 col-end-7", 
    4: "lg:col-start-10 lg:col-end-13 col-start-7 col-end-13", 
  }

  // preloader
  const handleImageLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <Link passHref variants={props.animation} href={`${props.link}`}>
      <div
        className={`${column[props.col]} ${
          //determine if project is linked
          props.link != undefined
            ? "cursor-pointer hover:bg-[rgba(255,255,255,.08)]"
            : "pointer-events-none"
        }
      
      group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md z-10`}
      >
        <div className="relative h-[30vw] overflow-hidden object-cover lg:h-[20vw] rounded-md">
          {props.isImage ? (
            <div className="relative h-full">
              <article
                className={`object-cover w-full h-full transition duration-500 overflow-hidden rounded-md ease-out ${
                  isContentLoaded ? "opacity-1" : "opacity-0"
                }`}
              >
                <Image
                  alt="project cover"
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
          ) : (
            <CardVideo src={props.content} loadingPhrase={loadingPhrase} />
          )}
        </div>

        <div className="mt-2">
          <p className={`text-zinc-50`}>{props.title}</p>
          <p className="text-zinc-500 hidden md:block">{props.description}</p>
          {props.locked && (
            <p className="absolute text-zinc-300 rounded-md right-4 top-4 z-10 px-2 py-1 bg-[rgba(0,0,0,.5)]">
              LOCKED
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
