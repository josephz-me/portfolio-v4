import React, { useState, useRef, useEffect } from 'react';

export default function CardVideo(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);
  const vidRef = useRef(null);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldLoad && vidRef.current) {
      vidRef.current.play().catch(error => {
        console.error('Video play failed:', error);
      });
    }
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={`group relative h-auto overflow-hidden
      ${props.homePage && 'game-border'}
      ${props.hasControl ? 'cursor-pointer' : ''}
      ${props.pAll ? 'rounded md:rounded-md' : ''}
      ${props.pt && props.pl ? 'rounded-tl md:rounded-tl-xl' : ''}
      ${props.pt && props.pr ? 'rounded-tr md:rounded-tr-xl' : ''}
      ${props.pb && props.pl ? 'rounded-bl md:rounded-bl-xl' : ''}
      ${props.pb && props.pr ? 'rounded-br-md md:rounded-br-xl' : ''}`}
    >
      <div
        className={`caption absolute top-0 w-full h-full overflow-hidden ${
          isVideoLoaded
            ? 'opacity-0 bg-[rgba(255,255,255,0)]'
            : 'opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]'
        }`}
      >
        <p className="text-zinc-500 flex h-full justify-center items-center">
          {props.loadingPhrase}
          <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
          <span className="animate-[bounce_1s_ease-in-out_.1s_infinite]">.</span>
          <span className="animate-[bounce_1s_ease-in-out_.2s_infinite]">.</span>
        </p>
      </div>

      {shouldLoad && (
        <video
          ref={vidRef}
          className={`object-cover w-full h-full transition duration-1000 overflow-hidden ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          playsInline
          loop
          muted
          src={props.src}
          onCanPlay={onLoadedData}
        />
      )}
    </div>
  );
}
