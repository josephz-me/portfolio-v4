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
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <GridContainer>
        <video
          className="rounded-md mt-8 h-[70vh] object-cover w-full grid col-span-12"
          autoPlay
          playsInline
          loop
          muted
          src={"/project-covers/apple.mp4"}
        />
        <video
          className="rounded-md mt-16 h-[70vh] object-cover w-full grid col-span-12"
          autoPlay
          playsInline
          loop
          muted
          src={"/project-covers/apple.mp4"}
        />
      </GridContainer>
    </motion.main>
  );
}
