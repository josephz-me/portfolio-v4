import Head from "next/head";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";

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
    console.log(scrollY);
  }, [scrollY]);

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
    <motion.div className="px-4 md:px-6 pt-8 pb-20 relative">
      <Head>
        <title>Joseph Z.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/liy8bpw.css"
        ></link>
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-12 gap-4 md:gap-6"
      >
        <motion.img
          src={"/zhang-icon-white.svg"}
          className={`${
            scrollY > 200
              ? "md:opacity-0 pointer-events-none"
              : "bg-[rgba(255,255,255,.05)]"
          } w-[48px] h-[auto] col-start-1 col-end-3 p-3 md:fixed z-10 text-[rgba(255,255,255,.9)] rounded-md p-2 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
        />
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
          link="https://josephz.notion.site/Apple-91d54c71155d444c9a1abf2a0e8d5f43"
          col={1}
          isImage={true}
          content={"/project-covers/apple.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="AIGA&Hue"
          description="Interactive data vis"
          link="https://josephz.notion.site/AIGA-Hue-38cd5f40c38c464ab1c5885468a1a3de"
          col={2}
          isImage={true}
          content={"/project-covers/aiga-2.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Elevation Connect"
          description="Web app"
          link="https://josephz.notion.site/Elevation-Connect-ac95e52bf2794c74b95f29810c11a089"
          col={1}
          isImage={true}
          content={"/project-covers/elevation-connect.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Brain Technologies"
          description="Multimodal interaction"
          link="https://josephz.notion.site/Natural-AI-9bf5bc35f91545e3bcce20bc9450db05"
          col={2}
          isImage={true}
          content={"/project-covers/natural-2.jpg"}
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
        <ProjectCard
          title="Reading Trends"
          description="Interactive datavis, NYT API"
          link="https://josephz.notion.site/Reading-Trends-2c9be594b74c44e885724dc7a910e42e"
          col={2}
          isImage={false}
          content={"/project-covers/reading-trends.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></ProjectCard>
        <ProjectCard
          title="Thinkspace"
          description="speculative VUI exploration"
          link="https://josephz.notion.site/Thinkspace-24f3dc1c62904b0da412b0a4230cc92d"
          col={1}
          isImage={false}
          content={"/project-covers/thinkspace.mp4"}
          placeholder={"/project-covers/thinkspace-placeholder.jpeg"}
        ></ProjectCard>
      </motion.main>

      <footer
        className={`left-0 w-full mix-blend-difference fixed bottom-0 grid text-[rgba(255,255,255,.9)] grid-cols-12 gap-6 px-6 py-4`}
      >
        <p className="col-start-1 col-end-5 opacity-20 hidden md:inline">
          Updated April 24, 2022
        </p>

        <span className="col-start-1 md:col-start-5">
          <TextLink link="/josephzhang-resume.pdf">Resume</TextLink>
        </span>
        <span className="col-start-5 md:col-start-7">
          <TextLink link="https://www.linkedin.com/in/josephzme/">
            LinkedIn
          </TextLink>
        </span>
        <span className="col-start-10 md:col-start-9">
          <TextLink link="https://twitter.com/__joz">Twitter</TextLink>
        </span>
        <span className="col-start-7 md:col-start-11 hidden md:inline">
          <TextLink link="mailto:jxsephz@gmail.com">jxsephz@gmail.com</TextLink>
        </span>
      </footer>
    </motion.div>
  );
}