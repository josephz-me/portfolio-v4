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
    <div className="flex flex-row z-10 block md:sticky top-[2rem]">
      <Link href="/">
        <a>
          <motion.img
            src={"/zhang-icon-white.svg"}
            className={`${
              scrollY > 100
                ? "md:opacity-0 pointer-events-none"
                : "bg-[rgba(255,255,255,.05)]"
            } 
            ${pageName == "/" ? "fixed" : ""}
            w-[48px] h-[auto] p-3  text-[rgba(255,255,255,.9)] rounded-md p-2 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
          />
        </a>
      </Link>
      {pageName != "/" && (
        <div
          className={`ml-auto transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${
            scrollY > 100 ? "md:opacity-0 pointer-events-none" : ""
          }`}
        >
          <p className=" justify-self-end px-2 py-1 text-white bg-[rgba(255,255,255,.1)] rounded-md inline-block fit-content">
            Back home
          </p>
        </div>
      )}
    </div>
  );
}
