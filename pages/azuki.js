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
        <ProjectTitle role="product and branding">Azuki</ProjectTitle>
        <ProjectBody col={2}>
          Azuki is a web3 brand striving to blur the lines between blockchain
          art, physical artifacts, and curated spaces. Since launch, they've
          worked with artists at Coachella and partnered with companies like
          HYPEBEAST, NASA, and Magic Eden. Since March 2022, I've been crafting
          interactive experiences for azuki.com. I also occasionally push code,
          which I absolutely love.
        </ProjectBody>
        <ProjectDetails
          role={["product designer, frontend developer"]}
          collaborators={["Hoshiboy", "Feb Tea", "2pm Flow"]}
          duration={["March 2022-PRESENT"]}
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
