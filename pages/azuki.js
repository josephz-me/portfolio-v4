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
import BeanzCarousel from "../public/work/azuki/beanz-carousel.jpg";
import LoreMain from "../public/work/azuki/lore-main.jpg";
import LoreChapterOne from "../public/work/azuki/lore-chapter-one.jpg";
import cp_main from "../public/work/azuki/cp-main.jpg";
import auctionMain from "../public/work/azuki/auction-main.jpg";
import auctionList from "../public/work/azuki/auction-list.jpg";
import auctionCountdown from "../public/work/azuki/auction-countdown.jpg";
import auctionK11 from "../public/work/azuki/auction-k11.jpeg";
import auctionK112 from "../public/work/azuki/auction-k11-2.jpeg";
import multiwallet from "../public/work/azuki/multiwallet.jpg";
import ambushLanding from "../public/work/azuki/ambush-landing.jpg";
import auctionOrder from "../public/work/azuki/auction-order.jpg";
import equipBeanz from "../public/work/azuki/equip-beanz.jpg";
import equipExamples from "../public/work/azuki/equip-examples.png";
import equipMain from "../public/work/azuki/equip-main.jpg";

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
        <ProjectHero content="/project-covers/azuki-2.jpg" />
        <ProjectTitle role="product & brand">Azuki</ProjectTitle>
        <ProjectBody col={2}>
          Azuki is a web3 brand pioneering the integration of blockchain
          identity with digital art, fashion, and physical collectibles. Since
          launch, they have worked with brands like{" "}
          <TextLink link="https://www.ambushdesign.com/en-us/">
            Ambush Streetwear
          </TextLink>
          ,
          <TextLink link="https://twitter.com/Azuki/status/1512886138670759941?s=20&t=fP4dEVgYoaYo7q-xJQmN4g">
            Epik High
          </TextLink>
          ,
          <TextLink link="https://twitter.com/Ledger/status/1519179535325052933?s=20&t=23FSw7lnvc53d_Fjxc0ZOw">
            NASA
          </TextLink>
          , and
          <TextLink link="https://www.redbullracing.com/int-en">
            RedBull Racing
          </TextLink>
          . As a product designer, I scale core digital product experiences.
        </ProjectBody>
        <ProjectDetails
          role={["product designer"]}
          collaborators={["Hoshiboy", "Azuki team"]}
          duration={["2022-PRESENT"]}
          tools={["figma", "react next.js"]}
        />

        <LinkCard col={1} link="https://azuki.com">
          azuki.com
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/azuki">
          Twitter
        </LinkCard>
        <Divider />
        <Spacer></Spacer>
        <ProjectBody title="Collector's Profile" col={1}>
          {`The collector's profile is platform for token holders to
          display their collection — whether that's the Azuki they own, the emblems they earned, and more. We wanted to build a showroom experience that made members feel proud and special to be a part of the Azuki community.`}
        </ProjectBody>
        <LinkCard col={1} link="https://www.azuki.com/collector/dingaling">
          {`Shrimpwen's Profile`}
        </LinkCard>
        <ProjectMedia pt pr pl dark src={cp_main}></ProjectMedia>
        <ProjectMedia src={"/work/azuki/cp-emblems.mp4"} isVideo></ProjectMedia>
        <ProjectMedia src={"/work/azuki/cp-badges.mp4"} isVideo></ProjectMedia>
        <ProjectMedia
          src={"/work/azuki/cp-highlights.mp4"}
          isVideo
        ></ProjectMedia>
        {/* <ProjectMedia dark src={multiwallet}></ProjectMedia> */}
        <ProjectBody title="Token Equipping" col={1}>
          In the Azuki ecosystem, Beans are the companions all Azukis need. We
          introduced an equpping system that allows users to unite both into
          one.
        </ProjectBody>
        <ProjectMedia src={equipBeanz}></ProjectMedia>
        <ProjectMedia pAll src={equipExamples}></ProjectMedia>
        <Divider />
        <Spacer></Spacer>
        <ProjectBody title="Ambush x Azuki Collab" col={1}>
          {`The Ambush collaboration marks one of the first high-profile streetwear partnerships between a web3 company and high fashion. Purchase access is gated through an on-chain raffle system where buyers need to enter a drawing system to gain presale access. We strived for the shopping experience strives to feel luxurious and high-fashion and still respectful of web3's digital origins.`}
        </ProjectBody>
        <LinkCard
          col={1}
          link="https://www.highsnobiety.com/p/ambush-azuki-nft-collab-collection/"
        >
          Highest Nobiety
        </LinkCard>
        <LinkCard
          col={2}
          link="https://hypebeast.com/2022/11/azuki-ambush-collaboration-web3-fashion-info"
        >
          Hypebeast
        </LinkCard>
        <ProjectMedia dark src={ambushLanding} />
        <Divider />
        <ProjectBody title="Proof of Skate Auction" col={1}>
          Azuki recently made history by setting the record for the most
          expensive skateboards sold in history. I co-designed the experience
          for a 24 hour auction focused around 9 gold-plated skateboards.{" "}
        </ProjectBody>
        <LinkCard
          col={1}
          link="https://hypemoon.com/2022/10/azuki-nft-gold-skateboard-auction-world-record"
        >
          Hypemoon (Hypebeast)
        </LinkCard>
        <LinkCard
          col={2}
          link="https://hypemoon.com/2022/10/azuki-nft-gold-skateboard-auction-world-record"
        >
          Hypemoon (Hypebeast)
        </LinkCard>
        <ProjectMedia src={auctionCountdown} />
        <ProjectMedia src={auctionMain} />
        <ProjectMedia src={auctionK112}>
          Proof of Skate exhibition at K11 Musea in Hong Kong
        </ProjectMedia>
        <ProjectMedia src={auctionK11} />
        <Divider />
        <ProjectBody title="Azuki Lore" col={1}>
          A core part of the Azuki brand is storytelling. I helped design the
          brand&apos;s lore initiative. A huge collaborative effort across all
          parts of the Azuki team, we placed a huge emphasis on user exploration
          by thoughtfully sequencing copy, animation, and art.
        </ProjectBody>
        <LinkCard col={1} link="https://azuki.com/world">
          Lore Chapters
        </LinkCard>
        <ProjectMedia dark src={LoreMain}></ProjectMedia>
        <ProjectMedia dark src={LoreChapterOne}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
