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
    <nav className="text-white body grid-layout sticky top-0 z-[100] main-bg py-4 border-solid border-b border-white/10">
      {/* logo */}
      <Link className="col-span-2" passHref href="/">
        <h1 className="">Joseph Zhang</h1>
      </Link>

      <p className="col-start-7 col-span-2">Software Designer</p>
      <p className="col-start-9 col-span-2">Los Angeles, California</p>
    </nav>
  );
}
