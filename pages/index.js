import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/home/HomeCard";
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
        <motion.p
          className={`${
            scrollY > 40 ? "md:opacity-0 pointer-events-none" : ""
          } gap-6 text-zinc-100 lg:sticky top-[2rem] pt-2  mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
        >
          I&apos;m a designer interested in all things related to digital
          toolmaking, multimodal interaction, and systems thinking. I believe
          good design reflects artistic values focused around emotion and play.
          I&apos;m a fourth year undergrad at Carnegie Mellon studying
          {` `}
          <TextLink link="https://design.cmu.edu/content/bachelor-design">
            Communication Design
          </TextLink>{" "}
          and{" "}
          <TextLink link="https://www.hcii.cmu.edu/">
            Human-Computer Interaction
          </TextLink>
          .<br></br>
          <br></br>
          In the past, I worked at{" "}
          <TextLink link="https://www.apple.com/siri/">Apple</TextLink>,{" "}
          <TextLink link="https://twitter.com/metalinklabs">
            Metalink Labs
          </TextLink>
          , <TextLink link="https://natural.ai/#/">Brain Technologies</TextLink>
          , and{" "}
          <TextLink link="https://elevationchurch.org/">
            Elevation Church
          </TextLink>
          . I&apos;m currently a front-end developer at the{" "}
          <TextLink link="http://computational-creativity.org">
            Computational Creativity Lab
          </TextLink>
          . After graduation, I&apos;ll be joining{" "}
          <TextLink link="https://twitter.com/skiffprivacy">Skiff</TextLink>{" "}
          full-time to work on privacy-centric collaboration tools. If you have
          an interesting idea, let&apos;s get in touch.
        </motion.p>

        <HomeCard
          title="Apple"
          description="Multimodal interaction"
          col={1}
          link="/apple"
          isImage={false}
          content={"/project-covers/apple.mp4"}
          placeholder={"/project-covers/apple-placeholder.jpg"}
        ></HomeCard>
        <HomeCard
          title="Brain Technologies"
          description="multimodal interaction"
          link="/brain"
          col={2}
          isImage={true}
          content={"/project-covers/natural.jpg"}
        ></HomeCard>

        <HomeCard
          title="AIGA&Hue"
          description="Interactive data visualization"
          link="/aiga"
          col={1}
          isImage={true}
          content={"/project-covers/aiga-2.jpg"}
        ></HomeCard>
        <HomeCard
          title="Metalink Labs"
          description="Product Design"
          col={2}
          isImage={true}
          link="/metalink"
          content={"/project-covers/metalink.jpg"}
        ></HomeCard>
        <HomeCard
          title="Pixel Push"
          description="Multiplayer painting experience"
          link="/pixelpush"
          col={1}
          isImage={false}
          content={"/project-covers/pixel-push.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></HomeCard>
        <HomeCard
          title="Thinkspace"
          description="assistive voice agents"
          link="/thinkspace"
          col={2}
          isImage={false}
          content={"/project-covers/thinkspace.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></HomeCard>
      </GridContainer>
    </motion.main>
  );
}
