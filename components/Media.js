import Image from 'next/image';
import { useState, useEffect } from 'react';
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
    <div
      className={`${props.className} game-border relative md:mt-1 w-full overflow-hidden`}
    >
      <article
        className={`w-full h-auto transition duration-500 ${
          isContentLoaded ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <Image
          alt="project cover"
          layout="fill"
          className="object-cover"
          src={props.src}
          priority
          onLoadingComplete={() => {
            handleContentLoad();
          }}
        />
      </article>
      <Preloader
        hideText={props.hidePreloaderText ? true : false}
        loadingPhrase={loadingPhrase}
        isContentLoaded={isContentLoaded}
      />
    </div>
  );
}
