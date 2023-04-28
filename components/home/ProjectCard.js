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
        className={`rounded-[40px] overflow-hidden border border-solid border-[rgba(255,255,255,.02)] hover:opacity-90 ${
          props.col == 1
            ? "lg:col-start-1 lg:col-end-7 col-start-1 col-end-13"
            : "lg:col-start-7 lg:col-end-13 col-start-1 col-end-13"
        } ${
          //determine if project is linked
          props.link != undefined ? "cursor-pointer" : "pointer-events-none"
        }
      
      group relative grid ease-in`}
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
