import GridContainer from "./GridContainer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const GLOBAL_SPACING = 'md:px-6 px-4 py-10 md:py-12';
const BREAKPOINT = 'col-start-1 col-end-13'

export default function Footer() {
  const pageName = useRouter().asPath;
  const [aboutText, setAboutText] = useState(
    `▞▚▞▚▞▚▞_Copyright_2022_▞▚▞▚▞▚▞_Built with Next.JS_Vercel_▞▚▞▚▞▚▞_Based in Seattle_`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutText((aboutText) => aboutText.slice(-1) + aboutText.slice(0, -1));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className={`bg-[#1C1C1C] z-[1] w-full sticky bottom-0 text-zinc-100 ${pageName == "/" ? "" : ""}`}
    >
      <GridContainer footerSpacing={GLOBAL_SPACING}>
        
        <div className={`${BREAKPOINT} md:col-start-1 md:col-end-6 flex-col space-y-2`}>
          <h1 className="sans  uppercase text-3xl">Joseph Zhang</h1>
          <span className="flex-row flex align-middle space-x-4">
            {/* <p className="self-center w-min px-2 py-0 pt-1 pb-[2px] mono lowercase text-zinc-600 border border-solid border-zinc-600 rounded-full">v4.1.2</p> */}
            <p className="self-center mono uppercase text-zinc-600">Last updated 12.04.22</p>
            </span>
        </div>

    
        <span className={`${BREAKPOINT} md:col-start-7 md:col-end-8 flex flex-col space-y-1`}>
          <p>
          <TextLink super={1} link="https://read.cv/jo_">Read.CV</TextLink>
          </p>
          <p>
          <TextLink super={2} link="https://www.linkedin.com/in/josephzme/">Linkedin</TextLink>
          </p>
          <p>
          <TextLink super={3} link="https://www.instagram.com/josephhhz/">Instagram</TextLink>
          </p>
          <p className="text-zinc-600 strikethrough"><strike>Twitter</strike></p>
        </span>
        <div className={`${BREAKPOINT} md:col-start-9  flex flex-col space-y-1`}>
          <p>{`Let's make something beautiful together.`}</p>
          <span>
          <TextLink super={4} link="mailto:jxsephz@gmail.com">jxsephz@gmail.com</TextLink>
          </span>
        </div>


      </GridContainer>
        {/* animated text bar */}
        <div className={`relative col-start-1 col-end-13 pb-2 text-clip overflow-hidden`}>
          <p
            className={`text-clip text-zinc-600 hover:text-yellow-600 whitespace-nowrap`}
          >
            {aboutText.repeat(10)}
          </p>
        </div>
    </footer>
  );
}
