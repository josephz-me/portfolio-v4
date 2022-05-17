import Head from "next/head";
import Image from "next/image";
import ProjectCard from "../components/home/ProjectCard";
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
          Joseph is a designer interested in digital toolmaking and multimodal
          interaction. He believes good design reflects artistic values focused
          around emotion and play. He holds a{` `}
          <TextLink link="https://design.cmu.edu/content/bachelor-design">
            Bachelor of Design
          </TextLink>{" "}
          and minor in{" "}
          <TextLink link="https://www.hcii.cmu.edu/">
            Human-Computer Interaction
          </TextLink>{" "}
          from Carnegie Mellon University. In the past, he has worked at{" "}
          <TextLink link="https://www.apple.com/siri/">Apple</TextLink>,{" "}
          <TextLink link="https://twitter.com/metalinklabs">
            Metalink Labs
          </TextLink>
          , <TextLink link="https://natural.ai/#/">Brain Technologies</TextLink>
          , and the{" "}
          <TextLink link="http://computational-creativity.org">
            Computational Creativity Lab
          </TextLink>
          . Joseph is an incoming designer at{" "}
          <TextLink link="https://twitter.com/skiffprivacy">Skiff</TextLink>{" "}
          where he'll be building privacy-first collaboration tools and
          workspaces.
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
          description="multimodal interaction"
          link="/brain"
          col={2}
          isImage={true}
          content={"/project-covers/natural.jpg"}
        ></ProjectCard>

        <ProjectCard
          title="AIGA&Hue"
          description="Interactive data visualization"
          link="/aiga"
          col={1}
          isImage={true}
          content={"/project-covers/aiga-2.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Metalink Labs"
          description="Product Design"
          col={2}
          isImage={true}
          link="/metalink"
          content={"/project-covers/metalink.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Pixel Push"
          description="Multiplayer painting experience"
          link="/pixelpush"
          col={1}
          isImage={false}
          content={"/project-covers/pixel-push.mp4"}
          placeholder={"/project-covers/pixelpush-placeholder.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Thinkspace"
          description="assistive voice agents"
          link="/thinkspace"
          col={2}
          isImage={false}
          content={"/project-covers/thinkspace.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></ProjectCard>
      </GridContainer>
    </motion.main>
  );
}
