import GridContainer from "./GridContainer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const pageName = useRouter().asPath;
  const [hover, setHover] = useState(false);

  return (
    <footer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`text-zinc-100 pb-4 ${pageName == "/" ? " mt-12" : "mt-32"}`}
    >
      <GridContainer>
        {/* copyright and next.js mention */}
        <div className="relative col-start-1 col-end-5  hidden md:inline">
          {hover ? (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ ease: "easeOut" }}
                className={`absolute text-zinc-500`}
              >
                Joseph Zhang © 2022
              </motion.p>
            </AnimatePresence>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute text-zinc-500`}
            >
              ⌘K for a surprise
            </motion.p>
          )}
        </div>

        {/* links */}
        {/* <span className="col-start-1 md:col-start-5 md:col-end-7">
          <TextLink link="/josephzhang-resume.pdf">Resume</TextLink>
        </span> */}
        <span className="col-start-1 md:col-start-7">
          <TextLink link="https://read.cv/jo_">Read.CV</TextLink>
        </span>
        <span className="col-start-5 md:col-start-9">
          <TextLink link="https://twitter.com/__joz">Twitter</TextLink>
        </span>
        <span className="col-start-9 md:col-start-11">
          <TextLink link="mailto:jxsephz@gmail.com">Email</TextLink>
        </span>
      </GridContainer>
    </footer>
  );
}
