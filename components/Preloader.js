import React, { useEffect, useState } from 'react';
import * as loadingCopy from './loadingCopy';

export default function Preloader(props) {
  const [loadingPhrase, setLoadingPhrase] = useState('Loading...');

  // create preloader text
  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <div
      className={`absolute top-0 w-full h-full overflow-hidden z-10 rounded-md z-10 ${
        props.isContentLoaded
          ? 'opacity-0 bg-[rgba(255,255,255,0)]'
          : 'opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]'
      }`}
    >
      {props.hideText ? null : (
        <p
          className={`${
            props.dark ? `text-white` : `text-zinc-500`
          } caption flex h-full justify-center items-center`}
        >
          {loadingPhrase}
          <span className="inline animate-bounce_1s_ease-in-out_infinite">
            .
          </span>
          <span className="inline animate-bounce_1s_ease-in-out_.1s_infinite">
            .
          </span>
          <span className="inline animate-bounce_1s_ease-in-out_.2s_infinite">
            .
          </span>
        </p>
      )}
    </div>
  );
}
