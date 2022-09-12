import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ProjectDetails from "../components/projects/ProjectDetails";
import LinkCard from "../components/projects/LinkCard";
import Spacer from "../components/projects/Spacer";
import Divider from "../components/projects/Divider";

// images
import BeanzLanding from "../public/work/azuki/beanz-landing.jpg";
import BeanzCarousel from "../public/work/azuki/beanz-carousel.jpg";
import MerchItem from "../public/work/azuki/merch-item.jpg";
import GalleryBeanz from "../public/work/azuki/gallery-beanz.jpg";

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

export default function Brain() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/azuki.jpg" />
        <ProjectTitle role="product & brand">Azuki</ProjectTitle>
        <ProjectBody col={2}>
          Azuki is a web3 brand pioneering the integration of blockchain art and
          physical artifacts. Since launch, they&apos;ve worked with{" "}
          <TextLink link="https://twitter.com/AzukiOfficial/status/1512886138670759941?s=20&t=fP4dEVgYoaYo7q-xJQmN4g">
            Coachella artists
          </TextLink>
          , sent{" "}
          <TextLink link="https://twitter.com/Ledger/status/1519179535325052933?s=20&t=23FSw7lnvc53d_Fjxc0ZOw">
            a digital token to the moon
          </TextLink>
          , and much more. As a designer, I work on interactive storytelling and
          features for product launches. I also push code, which I absolutely
          love.
        </ProjectBody>
        <ProjectDetails
          role={["product designer, frontend developer"]}
          collaborators={["Hoshiboy", "Azuki team"]}
          duration={["2022-PRESENT"]}
          tools={["figma", "react(next.js)"]}
        />

        <LinkCard col={1} link="https://azuki.com">
          azuki.com
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/AzukiOfficial">
          Twitter
        </LinkCard>
        <Spacer></Spacer>
        <Divider />
        <ProjectBody col={1}>
          I helped design the brand's storytelling section of the website. A
          huge collaborative effort across all parts of the Azuki team, we
          placed a huge emphasis on user exploration by thoughtfully sequencing
          copy, animation, and art.
        </ProjectBody>
        <ProjectMedia
          src={"/work/azuki/lore-main.mp4"}
          isVideo={true}
        ></ProjectMedia>
        <ProjectMedia
          src={"/work/azuki/lore-ch-1.mp4"}
          isVideo={true}
        ></ProjectMedia>
        <Divider />
        <ProjectBody col={1}>
          I designed the merchandise and cart experience. As conventional as the
          designs look, working on this project was unique because of Azuki's
          integration with web3 tokens and wallet addresses. Almost all physical
          items released through Azuki.com have digital token counterparts,
          making blockchain verification an integral part of the purchase
          process. Really cool interaction work to come soon...
        </ProjectBody>
        <ProjectMedia src="/work/azuki/cart.mp4" isVideo={true}></ProjectMedia>
        <ProjectMedia src={MerchItem}></ProjectMedia>

        <Divider />
        <ProjectBody col={1}>
          The Beanz NFT collection was my first project, which consisted of
          designing the Beanz storytelling page as well as the Beanz pairing
          experience.
        </ProjectBody>
        <ProjectMedia src={BeanzLanding}></ProjectMedia>
        <ProjectMedia
          src={"/work/azuki/beanz-pairing.mp4"}
          isVideo={true}
        ></ProjectMedia>
        <ProjectMedia src={BeanzCarousel}></ProjectMedia>
        <ProjectMedia src={GalleryBeanz}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
