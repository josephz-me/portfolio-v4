import CardVideo from "../CardVideo";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as loadingCopy from "../loadingCopy";
import Preloader from "../Preloader";

export default function ProjectCard(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");

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
        className={`${
          //determine if project is linked
          props.link != undefined ? "cursor-pointer" : "pointer-events-none"
        }
      group game-border relative grid ease-in rounded-[32px] md:rounded-[48px] overflow-hidden `}
      >
        <div className="relative h-[60vw] overflow-hidden object-cover lg:h-[29vw] ">
          {props.isImage ? (
            <div className="relative h-full">
              <article
                className={`object-cover w-full h-full transition duration-500 overflow-hidden ${
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
      </div>
    </Link>
  );
}
