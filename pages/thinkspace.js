import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ExternalVideo from "../components/projects/ExternalVideo";
import LinkCard from "../components/projects/LinkCard";
import Link from "next/link";

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
        <ProjectHero
          placeholder="/project-covers/thinkspace-placeholder.jpeg"
          content="/project-covers/thinkspace.mp4"
        />
        <ProjectTitle>Thinkspace</ProjectTitle>
        <ProjectBody col={2}>
          Rich, engaging conversation is a hallmark of meaningful human-to-human
          interaction. However, factors such as relational closeness, social
          formalities, and insecurities often hinder unfamiliar individuals from
          going beyond the surface-level conversation. Thinkspace is a
          speculative concept that aims to reinvision the role of conversational
          agents in discussion-based contexts.
        </ProjectBody>

        <LinkCard link="https://josephz.notion.site/Thinkspace-24f3dc1c62904b0da412b0a4230cc92d">
          View complete documentation
        </LinkCard>

        <ExternalVideo url="https://player.vimeo.com/video/704621543?h=5407db28dd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"></ExternalVideo>
      </GridContainer>
    </motion.main>
  );
}
