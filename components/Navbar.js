import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const icons = [
  "profile-zhang.png",
  "profile-tanjiro.jpg",
  "profile-real.jpg",
  "profile-unemployable.jpg",
  "profile-bucket.jpg",
  "profile-dog.jpg",
];

export default function Navbar(props) {
  const pageName = useRouter().asPath;

  //rotate images
  const [iconCount, setIconCount] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    iconCount == icons.length - 1
      ? setIconCount(0)
      : setIconCount(iconCount + 1);
  };

  const iconItems = icons.map((icon) => (
    <span
      className={`
      ${icon == icons[iconCount] ? "" : "opacity-0 pointer-events-none"} 
      rounded-md bg-neutral-800 absolute w-[48px] h-[48px] top-0 left-0 
      md:hover:scale-[1.03] hover:cursor-pointer hover:cursor-help
      transition duration-[100ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
      key={icon}
    >
      <Image
        onClick={incrementCount}
        src={`/navbar-icons/${icon}`}
        alt="navbar-icon"
        objectFit="cover"
        layout="fill"
        className="rounded-md"
      />
    </span>
  ));

  useEffect(() => {
    console.log(iconCount);
  }, [iconCount]);

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

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  return (
    <nav className=" flex w-full h-auto inline-block md:sticky items-stretch flex-1 justify-between top-[1.99rem] md:mb-0 mb-6 z-20 ">
      <div
        className={`relative
            ${
              scrollY > 40
                ? "md:opacity-0 pointer-events-none transition duration-[100ms]"
                : ""
            } 
            ${pageName == "/" ? "md:fixed top-[2rem]" : ""}
             `}
      >
        {iconItems}
      </div>

      <a className={`ml-auto sticky ${pageName == "/" ? "hidden" : ""}`}>
        <Link passHref href="/">
          <p className=" cursor-pointer z-20 justify-self-end px-2 py-1 text-zinc-100 bg-[rgba(150,150,150,.2)]  hover:bg-[rgba(150,150,150,.4)] rounded-md inline-block fit-content">
            Back home
          </p>
        </Link>
      </a>
    </nav>
  );
}
