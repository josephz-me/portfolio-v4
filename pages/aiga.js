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
import ProjectDetails from "../components/projects/ProjectDetails";

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
        <ProjectHero content="/project-covers/aiga-2.jpg" />
        <ProjectTitle role="Interactive Data Visualization">
          AIGA & Hue
        </ProjectTitle>
        <ProjectBody col={2}>
          AIGA & Hue is a desktop web experience that visualizes career data
          from the 2019 AIGA Design Census in a playful and informative manner.
          The recent over-saturation of interest in certain design fields has
          resulted in skewed perceptions of neighboring creative industries.
          This project strives to break those stereotypes by providing a
          holistic understanding of the creative industry and all the viable
          career options that exist.
        </ProjectBody>
        <ProjectDetails
          role={["Frontend developer", "Visual designer"]}
          collaborators={[
            "Kyuha Shim (advisor)",
            "Langston Wells",
            "Stefanie Suk",
          ]}
          duration="8 weeks"
          tools={["html/css/js", "figma", "Cinema4D"]}
        />
        <LinkCard col={1} link="https://josephz-me.github.io/aiga-hue/">
          View live website
        </LinkCard>
        <LinkCard link="https://josephz.notion.site/AIGA-Hue-38cd5f40c38c464ab1c5885468a1a3de">
          View complete documentation
        </LinkCard>
        <ExternalVideo url="https://player.vimeo.com/video/529104061?h=d6d37cfb1c&title=0&byline=0&portrait=0"></ExternalVideo>
        <ProjectBody caption={true}>
          {`Synthesized +9400 data points from AIGA's census and interactively
          visualizing them through Matter.js, a Javascript physics engine.`}
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}