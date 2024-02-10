import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const icons = [
  'profile-zhang.svg',
  'profile-tanjiro.jpg',
  'profile-real.jpg',
  'profile-unemployable.jpg',
  'profile-bucket.jpg',
  'profile-dog.jpg',
];

export default function Navbar(props) {
  const router = useRouter();
  const [activeBack, setActiveBack] = useState(false);

  const pageName = useRouter().asPath;

  //rotate images
  const [iconCount, setIconCount] = useState(0);

  useEffect(() => {}, [iconCount]);
  const incrementCount = () => {
    // Update state with incremented value
    iconCount == icons.length - 1
      ? setIconCount(0)
      : setIconCount(iconCount + 1);
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Escape') {
        setActiveBack(false);
        router.push('/');
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveBack(true);
        event.preventDefault(); // Prevents default browser behavior
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <nav
      className={`${
        pageName == '/' ? 'md:fixed' : 'md:sticky w-full'
      } select-none z-20 flex h-auto inline-block items-stretch flex-1 justify-between top-[1.99rem] md:mb-0 mb-6`}
    >
      {/* logo */}
      <div
        onClick={() => {
          incrementCount();
        }}
        className={` text-black shadow-sm game-border rounded-md overflow-hidden relative w-[48px]  h-[48px] hover:opacity-[.9] hover:cursor-help
         ease-[cubic-bezier(0.22, 1, 0.36, 1)]
            ${
              scrollY > 40
                ? 'md:opacity-0 pointer-events-none transition duration-[100ms]'
                : ''
            } 
      `}
      >
        {icons.map((icon) => (
          <Image
            priority
            count={iconCount}
            src={`/navbar-icons/${icon}`}
            alt="navbar-icon"
            objectFit="cover"
            layout="fill"
            key={icon}
            className={`
            ${icon == icons[iconCount] ? '' : 'opacity-0'}
             bg-neutral-800 absolute top-0 left-0 transition`}
          />
        ))}
      </div>

      <a className={` ml-auto sticky ${pageName == '/' ? 'hidden' : ''}`}>
        <Link passHref href="/">
          <p
            className={`${
              activeBack && 'persistent-game-border !bg-neutral-700'
            } caption game-border cursor-pointer justify-self-end px-2 py-1 text-zinc-100 bg-[rgba(50,50,50,.5)] hover:bg-neutral-700 rounded-md inline-block fit-content`}
          >
            Back Home
          </p>
        </Link>
      </a>
    </nav>
  );
}
