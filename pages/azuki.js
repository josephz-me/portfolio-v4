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
import LoreMain from "../public/work/azuki/lore-main.jpg";
import GalleryBeanz from "../public/work/azuki/gallery-beanz.jpg";
import cp_main from "../public/work/azuki/cp-main.jpg";
import cp_gallery from "../public/work/azuki/cp-gallery.jpg";
import cp_badges_card from "../public/work/azuki/cp-badges-card.jpg";
import auction_main from "../public/work/azuki/auction-main.jpg";

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
          Azuki is a web3 brand pioneering the integration of blockchain
          identity with digital art, fashion, and physical collectibles. Since
          launch, they have worked with{" "}
          <TextLink link="https://twitter.com/AzukiOfficial/status/1512886138670759941?s=20&t=fP4dEVgYoaYo7q-xJQmN4g">
            Coachella artists
          </TextLink>
          ,{" "}
          <TextLink link="https://twitter.com/Ledger/status/1519179535325052933?s=20&t=23FSw7lnvc53d_Fjxc0ZOw">
            NASA
          </TextLink>
          , and much more. Despite being a contract designer, I have played a
          pivotal role in all digital product initiatives since March 2022.
          Below are a few examples.
        </ProjectBody>
        <ProjectDetails
          role={["product designer"]}
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
        <Divider />
        <Spacer></Spacer>
        <ProjectBody title="Collector's Profile" col={1}>
          I recently lead design for a platform that allows token holders to
          display their collection. The designs are embedded with a variety of
          thoughtful interactions, from badge hover tilts to even how a user
          would edit their profile.
        </ProjectBody>
        <TextLink link="https://www.azuki.com/collector/dingaling">
          Example Profile
        </TextLink>
        <ProjectMedia src={cp_main} />
        <ProjectMedia src={cp_gallery} />
        <ProjectMedia src={cp_badges_card} />
        <ProjectMedia
          src={"/work/azuki/cp-badges.mp4"}
          isVideo={true}
        ></ProjectMedia>
        <Divider />
        <ProjectBody title="Proof of Skate Auction" col={1}>
          Azuki recently made history by setting the record for the most
          expensive skateboards sold in history. I co-designed the experience
          for a 24 hour auction focused around 9 gold-plated skateboards.{" "}
        </ProjectBody>
        <ProjectMedia src={auction_main} />

        <Divider />
        <ProjectBody title="Azuki Lore" col={1}>
          A core part of the Azuki brand is storytelling. I helped design the
          brand&apos;s lore initiative. A huge collaborative effort across all
          parts of the Azuki team, we placed a huge emphasis on user exploration
          by thoughtfully sequencing copy, animation, and art.
        </ProjectBody>
        <ProjectMedia src={LoreMain}></ProjectMedia>
        <ProjectMedia
          src={"/work/azuki/lore-ch-1.mp4"}
          isVideo={true}
        ></ProjectMedia>
        <Divider />
        <ProjectBody title="Shop" col={1}>
          I designed the merchandise and cart experience. As conventional as the
          designs look, working on this project was unique because of
          Azuki&apos;s integration with web3 tokens and wallet addresses. Almost
          all physical items released through Azuki.com have digital token
          counterparts, making blockchain verification an integral part of the
          purchase process. Really cool interaction work to come soon...
        </ProjectBody>
        <ProjectMedia src="/work/azuki/cart.mp4" isVideo={true}></ProjectMedia>
        <ProjectMedia src={MerchItem}></ProjectMedia>

        <Divider />
        <ProjectBody title="Beanz Collection" col={1}>
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
