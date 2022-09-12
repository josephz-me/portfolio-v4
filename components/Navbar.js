import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar(props) {
  const pageName = useRouter().asPath;
  //check if mobile
  const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches;
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

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  return (
    <div className="  ml-auto flex flex-row block md:sticky top-[1.99rem] md:mb-0 mb-6 z-20">
      <a
        className={`hover:cursor-pointer transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
            ${scrollY > 40 ? "md:opacity-0 pointer-events-none" : ""}`}
      >
        <Link href="/">
          <img
            src={"/zhang-icon-white.svg"}
            alt="zhang logo"
            className={`${
              pageName == "/" ? "md:fixed top-[2rem]" : ""
            } bg-[rgba(255,255,255,.05)] hover:bg-[rgba(255,255,255,.1)] w-[48px] h-[auto] p-2 rounded-md  inline-block`}
          />
        </Link>
      </a>

      <a className={`ml-auto sticky ${pageName == "/" ? "hidden" : ""}`}>
        <Link href="/">
          <p className=" cursor-pointer z-20 justify-self-end px-2 py-1 text-zinc-100 bg-[rgba(150,150,150,.2)]  hover:bg-[rgba(150,150,150,.4)] rounded-md inline-block fit-content">
            Back home
          </p>
        </Link>
      </a>
    </div>
  );
}
