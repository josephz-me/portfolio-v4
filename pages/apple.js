import Head from "next/head";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import Link from "next/link";
import GridContainer from "../components/GridContainer";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

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
    <motion.main
      className="min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GridContainer>
        <video
          className="rounded-md my-2 md:my-8 h-[60vw] md:h-[40vw] object-cover w-full grid col-span-12"
          autoPlay
          playsInline
          loop
          muted
          src={"/project-covers/apple.mp4"}
        />

        <p className="grid col-start-1 text-white">Apple</p>
        <p
          className={`text-white gap-6 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13`}
        >
          During the summers of 2020 and 2021, I interned at Apple as an
          Interaction Designer working on two core Siri teams — the
          Understanding team with Garrett Weinberg and the Knowledge team with
          Maria Cordell. During my time there, I designed platform-level voice
          UI patterns and disambiguation behaviors for various hardware
          platforms. My time at Apple involved pitching ideas to high level
          leadership such as Robby Walker, weekly syncs with Machine Learning
          engineers, and throwing around ideas with senior designers.
        </p>
      </GridContainer>
    </motion.main>
  );
}
