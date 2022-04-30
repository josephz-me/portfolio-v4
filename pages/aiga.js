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

export default function Aiga() {
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
        <ProjectHero isImage={true} content="/project-covers/aiga-2.jpg" />
        <ProjectTitle role="Designer and developer">AIGA & Hue</ProjectTitle>
        <ProjectBody col={2}>
          AIGA & Hue is a desktop web experience that visualizes career data
          from the 2019 AIGA Design Census in a playful and informative manner.
          The recent over-saturation of interest in certain design fields has
          resulted in skewed perceptions of neighboring creative industries.
          This project strives to break those stereotypes by providing a
          holistic understanding of the creative industry and all the viable
          career options that exist. This project was advised by Professor Kyuha
          Shim and in collaboration with Langston Wells and Stefanie Suk.
        </ProjectBody>

        <LinkCard col={1} link="https://josephz-me.github.io/aiga-hue/">
          View live website
        </LinkCard>

        <LinkCard link="https://josephz.notion.site/AIGA-Hue-38cd5f40c38c464ab1c5885468a1a3de">
          View complete documentation
        </LinkCard>
        <video
          playsInline
          controls
          preload="metadata"
          poster="/project-covers/aiga.jpg"
          loop
          className="md:col-start-5 col-span-full"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6f6331ce-f09f-4d7d-96a2-d6809f4df852/datavis-main.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220429T201414Z&X-Amz-Expires=86400&X-Amz-Signature=01cc7e1edb7a77c3fa4c9fd5fbd72f4e25ad212bfb500e6edc0a72d12fc6bc7f&X-Amz-SignedHeaders=host&x-id=GetObject"
        />
        <ProjectBody caption={true}>
          {`Synthesized +9400 data points from AIGA's census and interactively
          visualizing them through Matter.js, a Javascript physics engine.`}
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
