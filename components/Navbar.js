import { motion, AnimatePresence, useForceUpdate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GridContainer from "./GridContainer";
import Link from "next/link";

export default function Navbar(props) {
  const pageName = useRouter().asPath;

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
    <div className="ml-auto flex flex-row block md:sticky top-[1.99rem] md:mb-0 mb-6 z-20">
      <Link href="/">
        <a
          className={`transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
            ${scrollY > 40 ? "md:opacity-0 pointer-events-none" : ""}`}
        >
          <img
            src={"/zhang-icon-white.svg"}
            className={`${
              pageName == "/" ? "md:fixed top-[2rem]" : ""
            } bg-[rgba(255,255,255,.05)] hover:bg-[rgba(255,255,255,.1)] w-[48px] h-[auto] p-3 text-[rgba(255,255,255,.9)] rounded-md p-2  inline-block`}
          />
        </a>
      </Link>

      <Link href="/">
        <a className={`ml-auto sticky ${pageName == "/" ? "hidden" : ""}`}>
          <p className="z-20 justify-self-end px-2 py-1 text-white bg-[rgba(150,150,150,.2)] transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:bg-[rgba(150,150,150,.4)] rounded-md inline-block fit-content">
            Back home
          </p>
        </a>
      </Link>
    </div>
  );
}
