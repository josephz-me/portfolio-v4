import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useReward } from 'react-rewards';
import {isMobile} from 'react-device-detect';



const icons = [
  "profile-zhang.svg",
  "profile-tanjiro.jpg",
  "profile-real.jpg",
  "profile-unemployable.jpg",
  "profile-bucket.jpg",
  "profile-dog.jpg",
];

export default function Navbar() {

  //confetti config
  const {reward: celebrationOne, isAnimating: isConfettiAnimating} = useReward('celebration', 'confetti',
  {angle: -20,
    zIndex: 200,
    colors:["#FFFFFF"]});
  const {reward: celebrationTwo, isAnimating: isBallooInsAnimating} = useReward('celebration', 'emoji', 
  {angle: -20,
    zIndex: 200,
    elementSize: 40,
    emoji:["🎂","🌝","🍰", "🛁", ""]
  });
  
  const pageName = useRouter().asPath;

  //rotate images
  const [iconCount, setIconCount] = useState(0);

  useEffect(()=>{
    console.log(iconCount);
  },[iconCount])
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`${pageName == "/" ? "md:fixed" : "md:sticky w-full"} z-20 flex h-auto inline-block items-stretch flex-1 justify-between top-[1.99rem] md:mb-0 mb-6`}>
      {/* icon container */}
      <div
        id="celebration"
        disabled={isConfettiAnimating || celebrationTwo}
        onClick={()=> {
          incrementCount();
          if(!isMobile) {
            console.log(isMobile);
            celebrationOne(); celebrationTwo();
          }
        }}
        className={`relative w-[48px] h-[48px] hover:opacity-[.9] hover:cursor-help
         ease-[cubic-bezier(0.22, 1, 0.36, 1)]
            ${
                scrollY > 40
                  ? "md:opacity-0 pointer-events-none transition duration-[100ms]"
                  : ""
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
            ${icon == icons[iconCount] ? "" : "opacity-0"}
            rounded-md bg-neutral-800 absolute top-0 left-0 transition`}
          />
        ))
        }
      </div>

      <a className={`ml-auto sticky ${pageName == "/" ? "hidden" : ""}`}>
        <Link passHref href="/">
          <p className=" cursor-pointer justify-self-end px-2 py-1 text-zinc-100 bg-white/10 hover:bg-white/20 rounded-md inline-block fit-content">
            Back home
          </p>
        </Link>
      </a>
    </nav>
  );
}


