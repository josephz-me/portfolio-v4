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
        <motion.p
          className={`${
            scrollY > 40
              ? "md:opacity-0 text-[rgba(255,255,255,.9)] pointer-events-none"
              : "text-[rgba(255,255,255,.9)]"
          } gap-6 lg:sticky top-[2rem] pt-2  mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
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
          <TextLink link="https://twitter.com/metalinklabs">Metalink</TextLink>,{" "}
          <TextLink link="https://natural.ai/#/">Brain Technologies</TextLink>,
          and{" "}
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

        <ProjectCard
          title="Apple"
          description="Multimodal interaction"
          col={1}
          link="/apple"
          isImage={false}
          content={"/project-covers/apple.mp4"}
          placeholder={"/project-covers/apple-placeholder.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Brain Technologies"
          description="humanizing commerce through ai"
          link="https://josephz.notion.site/Natural-AI-9bf5bc35f91545e3bcce20bc9450db05"
          col={2}
          isImage={true}
          content={"/project-covers/natural.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Azuki"
          description="Web3 Brand"
          col={1}
          isImage={true}
          content={"/project-covers/azuki-1.jpg"}
          locked={true}
        ></ProjectCard>

        <ProjectCard
          title="Metalink"
          description="sythensizing chat,trade,and data"
          col={2}
          isImage={true}
          locked={true}
          content={"/project-covers/metalink-2.jpg"}
        ></ProjectCard>

        <ProjectCard
          title="AIGA&Hue"
          description="Interactive data visualization"
          link="https://josephz.notion.site/AIGA-Hue-38cd5f40c38c464ab1c5885468a1a3de"
          col={1}
          isImage={true}
          content={"/project-covers/aiga-2.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Thinkspace"
          description="spatial conversation"
          link="https://josephz.notion.site/Thinkspace-24f3dc1c62904b0da412b0a4230cc92d"
          col={2}
          isImage={false}
          content={"/project-covers/thinkspace.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></ProjectCard>

        <ProjectCard
          title="Pixel Push"
          description="Multiplayer painting experience"
          link="https://josephz.notion.site/Pixel-Push-48910c3a971747b0b6fc3f31572b9984"
          col={1}
          isImage={false}
          content={"/project-covers/pixel-push.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></ProjectCard>
      </GridContainer>
    </motion.main>
  );
}
