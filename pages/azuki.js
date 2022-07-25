import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ProjectDetails from "../components/projects/ProjectDetails";
import MobileMockupVideo from "../components/projects/MobileMockupVideo";
import LinkCard from "../components/projects/LinkCard";
import Spacer from "../components/projects/Spacer";

import BeanzLanding from "../public/work/azuki/beanz-landing.png";
import BeanzCarousel from "../public/work/azuki/beanz-carousel.png";
import BeanzSelfie from "../public/work/azuki/beanz-selfie.jpg";
import FoodCheckout from "../public/work/brain/food-checkout.jpg";
import Meetup from "../public/work/brain/meetup-1.jpg";

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

export default function Brain() {
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
        <ProjectHero content="/project-covers/azuki.jpg" />
        <ProjectTitle role="multimodal interaction">Azuki</ProjectTitle>
        <ProjectBody col={2}>
          From 2020-2021, I prototyped new ways to engage with computer
          interfaces, mostly working with voice and AI. Unfortunately, most of
          my (exciting) work is under NDA and can only be shared upon request.
          Some of my work has shipped though and is now in the{" "}
          <TextLink link="https://apps.apple.com/us/app/id1521375720/?role=f8a07a03-a0a9-4a5e-b59e-b48cb3ab1478">
            app store
          </TextLink>{" "}
          — Below are a few examples.
        </ProjectBody>
        <ProjectDetails
          role={["product designer"]}
          collaborators={["Hoshiboy", "Feb Tea", "2pm Flow"]}
          tools={["figma", "react(next.js)"]}
        />

        <LinkCard col={1} link="https://azuki.com">
          azuki.com
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/AzukiOfficial">
          Twitter
        </LinkCard>
        <Spacer></Spacer>
        <ProjectMedia
          src={"/work/azuki/beanz-pairing.mov"}
          isVideo={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Worked with Gleb to design a search bar for all domains, which
          improved UI visiblity and clarity.
        </ProjectBody>

        <ProjectMedia src={BeanzLanding}></ProjectMedia>
        <ProjectMedia src={BeanzCarousel}></ProjectMedia>
        <ProjectMedia src={BeanzSelfie}></ProjectMedia>

        <ProjectBody col={1} caption={true}>
          Expandable cards that can be collapsed for a more compact view.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
