import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import * as loadingCopy from './loadingCopy';
import Preloader from './Preloader';

const bgColors = {
  skiff: ['bg-gray-200', 'bg-[#4F4C59]'],
  azuki: ['bg-[#EBEBE6]', 'bg-gray-800'],
  metalink: 'bg-gray-700',
  experiments: 'bg-white/[.15]',
};

export default function ProjectMedia(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const [background, setBackground] = useState();
  const [path, setPath] = useState();
  const vidRef = useRef(null);

  //preloader
  const handleContentLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setPath(window.location.pathname.replace('/', ''));
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  useEffect(() => {
    // determineBackground();
    if (Array.isArray(bgColors[path])) {
      props.dark
        ? setBackground(bgColors[path][1])
        : setBackground(bgColors[path][0]);
    } else {
      setBackground(bgColors[path]);
    }
  }, [path]);

  return (
    <div className={`${props.className} relative w-full overflow-hidden`}>
      <article
        className={`overflow-hidden object-cover w-full h-full transition duration-500 overflow-hidden rounded-md ease-out ${
          isContentLoaded ? 'opacity-1' : 'opacity-0'
        }`}
      >
        {props.isVideo ? (
          <video
            ref={vidRef}
            className={`object-cover w-full h-full transition duration-1000 overflow-hidden ease-out`}
            playsInline
            loop
            autoPlay
            muted
            src={props.src}
            onCanPlay={handleContentLoad}
          />
        ) : (
          <Image
            alt="project hero"
            className="overflow-hidden"
            layout="fill"
            objectFit="cover"
            src={props.src}
            priority
            onLoadingComplete={() => {
              handleContentLoad();
            }}
          />
        )}
      </article>
      <Preloader
        loadingPhrase={loadingPhrase}
        isContentLoaded={isContentLoaded}
      />
    </div>
  );
}
