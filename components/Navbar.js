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
    <div className="flex flex-row block md:sticky top-[2rem] md:mb-0 mb-6">
      <Link href="/">
        <a>
          <img
            src={"/zhang-icon-white.svg"}
            className={`${
              scrollY > 40
                ? "md:opacity-0 pointer-events-none"
                : "bg-[rgba(255,255,255,.05)] hover:bg-[rgba(255,255,255,.1)]"
            } 
            ${pageName == "/" ? "md:fixed" : ""}
            w-[48px] h-[auto] p-3 text-[rgba(255,255,255,.9)] rounded-md p-2 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
          />
        </a>
      </Link>
      {pageName != "/" && (
        <Link href="/">
          <a className={`ml-auto `}>
            <p className=" justify-self-end px-2 py-1 text-white bg-[rgba(255,255,255,.05)] transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:bg-[rgba(255,255,255,.1)] rounded-md inline-block fit-content">
              Back home
            </p>
          </a>
        </Link>
      )}
    </div>
  );
}
