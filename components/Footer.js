import GridContainer from "./GridContainer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const pageName = useRouter().asPath;
  const [aboutText, setAboutText] = useState(
    `▞▚▞▚▞▚▞_joseph_zhang_2022_▞▚▞▚▞▚▞_next.js_vercel_`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutText((aboutText) => aboutText.slice(-1) + aboutText.slice(0, -1));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(aboutText.charAt(0));
  }, [aboutText]);

  return (
    <footer
      className={`text-zinc-100 pb-4 ${pageName == "/" ? " mt-12" : "mt-32"}`}
    >
      <GridContainer>
        {/* copyright and next.js mention */}
        <div className="relative col-start-1 col-end-7  hidden md:inline text-clip overflow-hidden">
          <p
            className={`text-clip text-zinc-700 hover:text-zinc-500 whitespace-nowrap`}
          >
            {aboutText}
          </p>
        </div>

        {/* links */}
        {/* <span className="col-start-1 md:col-start-5 md:col-end-7">
          <TextLink link="/josephzhang-resume.pdf">Resume</TextLink>
        </span> */}
        <span className="col-start-1 md:col-start-7">
          <TextLink link="https://read.cv/jo_">Read.CV</TextLink>
        </span>
        <span className="col-start-5 md:col-start-9">
          <TextLink link="https://twitter.com/trader___jo">Twitter</TextLink>
        </span>
        <span className="col-start-9 md:col-start-11">
          <TextLink link="mailto:jxsephz@gmail.com">Email</TextLink>
        </span>
      </GridContainer>
    </footer>
  );
}
