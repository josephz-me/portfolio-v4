import CardVideo from '../CardVideo';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as loadingCopy from '../loadingCopy';
import Preloader from '../Preloader';

export default function ProjectCard(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');

  // preloader
  const handleImageLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <Link passHref variants={props.animation} href={`${props.link}`}>
      <a
        target={props.isExternal ? '_blank' : ''}
        className={`${
          //determine if project is linked
          props.link != undefined ? 'cursor-pointer' : 'pointer-events-none'
        }
      group relative grid w-full opacity-100 inline-block select-none`}
      >
        {props.isImage ? (
          <div className="inline-block group-hover:opacity-90 game-border">
            <article
              className={`w-full h-auto transition duration-500 ${
                isContentLoaded ? 'opacity-1' : 'opacity-0'
              }`}
            >
              <Image
                alt="project cover"
                layout="responsive"
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
          <CardVideo
            className="game-border"
            homePage
            src={props.content}
            loadingPhrase={loadingPhrase}
          />
        )}

        <div className="mt-3">
          <h1 className={`caption text-zinc-50`}>{props.title}</h1>
          <p className="caption text-zinc-500">{props.description}</p>
          {props.locked && (
            <p className="absolute text-neutral-100 rounded-md right-4 top-4 px-2 z-10 py-1 bg-gray-800 shadow-xl">
              LOCKED
            </p>
          )}
        </div>
      </a>
    </Link>
  );
}
