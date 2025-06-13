import React, { useEffect, useState } from 'react';
import * as loadingCopy from './loadingCopy';
import { twMerge } from 'tailwind-merge';

export default function Preloader(props) {
  const [loadingPhrase, setLoadingPhrase] = useState('Loading...');

  // create preloader text
  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <div
      className={`select-none absolute top-0 w-full h-full overflow-hidden rounded-md ${
        props.isContentLoaded
          ? 'opacity-0 bg-[rgba(255,255,255,0)] hidden'
          : `opacity-100 animate-pulse ${props.hideBackground ? '' : 'bg-[rgba(255,255,255,.03)]'}`
      }`}
    >
      {props.hideText ? null : (
        <p
          className={twMerge(
            'select-none caption flex h-full justify-center items-center',
            props.dark ? 'text-white' : 'text-zinc-500'
          )}
        >
          <span className={`${props.hideTextMobile && 'hidden'}`}>{loadingPhrase}</span>
          <span className="inline animate-bounce">.</span>
          <span className="inline animate-bounce [animation-delay:0.1s]">.</span>
          <span className="inline animate-bounce [animation-delay:0.2s]">.</span>
        </p>
      )}
    </div>
  );
}
