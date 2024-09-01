import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';
import Spacer from '../components/projects/Spacer';
import Divider from '../components/projects/Divider';

// images
import LoreMain from '../public/work/azuki/lore-main.jpg';
import LoreOrigin from '../public/work/azuki/lore-origin.jpg';
import LoreBeanz from '../public/work/azuki/lore-beanz.jpg';
import LoreChapterOne from '../public/work/azuki/lore-chapter-one.jpg';
import loreHilumia from '../public/work/azuki/lore-hilumia.jpg';
import LoreSisters from '../public/work/azuki/lore-sisters.jpg';
import cp_main from '../public/work/azuki/cp-main.jpg';
import auctionMain from '../public/work/azuki/auction-main.jpg';
import auctionCountdown from '../public/work/azuki/auction-countdown.jpg';
import auctionK11 from '../public/work/azuki/auction-k11.jpg';
import auctionK112 from '../public/work/azuki/auction-k11-2.jpeg';
import ambushLanding from '../public/work/azuki/ambush-landing.jpg';
import equipBeanz from '../public/work/azuki/equip-beanz.jpg';
import equipExamples from '../public/work/azuki/equip-examples.png';
import rabbitTicket from '../public/work/azuki/rabbit-ticket.jpg';
import s2_mint from '../public/work/azuki/s2-mint.jpg';
import s2_mint_closeup from '../public/work/azuki/s2-mint-closeup.jpg';
import s2_reveal from '../public/work/azuki/s2-reveal.jpg';
import s2_reveal_likeall from '../public/work/azuki/s2-reveal-likeall.jpg';
import s2_reveal_tweet from '../public/work/azuki/s2-reveal-tweet.jpg';
import emblems from '../public/work/azuki/emblems.jpg';

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
          Azuki is a technology company pioneering on-chain integration with
          with media, physical collectibles, and gaming. Since launch, they have
          worked with brands like{' '}
          <TextLink link="https://www.azuki.com/about?id=2EbxXtctOGyHOEGYjTiiMC">
            Line Friends
          </TextLink>
          ,{' '}
          <TextLink link="https://www.azuki.com/about?id=550eZh4yqFOnfAJN81LuGq">
            Patrick Mahomes
          </TextLink>
          ,{' '}
          <TextLink link="https://www.ambushdesign.com/en-us/">
            Ambush Streetwear
          </TextLink>
          ,{' '}
          <TextLink link="https://www.azuki.com/about?id=194vALOMcWszG3SVNmCPIi">
            Epik High
          </TextLink>
          , and{' '}
          <TextLink link="https://www.azuki.com/about?id=4Hm7gPDuAKzbfheWiob3A4">
            RedBull Racing
          </TextLink>
          . As a product designer, I lead design for all our digital interactive
          experiences.
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={['Hoshi', 'Alice Cai']}
          duration={['2022 - Present']}
          tools={['Figma', 'React']}
        />

        <LinkCard col={1} link="https://azuki.com">
          azuki.com
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/azuki">
          Twitter
        </LinkCard>
        <Divider />
        <Spacer></Spacer>

        <ProjectBody id="collector" title="Collector's Profile" col={1}>
          {`The Collector's Profile is a platform for the Azuki community to display their collection of NFTs, badges, emblems, and memorabilia. Adding an extra dimension to this experience is the Collector's Status – a gamification layer built on top of the Collector's Profile. 
          This layer uses various calculations to score and rank each individual based on their collection, allowing us to reward members at scale for their dedication and enthusiasm toward the brand.`}
        </ProjectBody>
        <LinkCard col={1} link="https://www.azuki.com/collector/dingaling">
          {`View a profile`}
        </LinkCard>
        <ProjectMedia pt pr pl src={cp_main}></ProjectMedia>
        <ProjectMedia
          pAll
          isVideo
          src={`/work/azuki/cp-slideshow.mp4`}
        ></ProjectMedia>
        <ProjectMedia pl pt pb src={emblems} />
        <ProjectMedia src={'/work/azuki/cp-badges.mp4'} isVideo></ProjectMedia>
        <ProjectMedia
          src={'/work/azuki/cp-highlights.mp4'}
          isVideo
        ></ProjectMedia>

        <ProjectBody title="Token Equipping" col={1}>
          In the Azuki ecosystem, Beans are the companions all Azukis need. We
          introduced an equpping system that allows users to unite both into
          one.
        </ProjectBody>
        <ProjectMedia src={equipBeanz}></ProjectMedia>
        <ProjectMedia pAll noShadow src={equipExamples}></ProjectMedia>
        <Divider />
        <ProjectBody id="elementals" title="Elementals Sale + Unboxing" col={1}>
          We designed the Elementals reveal experience to be full of
          anticipation and delight, similar to the unboxing of up a Yugioh or
          baseball mystery pack. The experience is packed with tons of features,
          including a live Twitter feed, compose Tweet functionality, drag and
          drop, and even Chat-GPT integration.{' '}
        </ProjectBody>
        <ProjectMedia pAll src={s2_reveal}></ProjectMedia>
        <ProjectMedia pl pt src={s2_reveal_tweet}>
          Everytime someone clicks the white rabbit, a new quote is generated
          via Chat GPT in the language and style of one Chiru team member.
        </ProjectMedia>
        <ProjectMedia pl pb src={s2_reveal_likeall}>
          {`We want new holders to feel loved and appreciated. Two alternating Like/Follow All buttons give individuals the agency to spread that love.`}
        </ProjectMedia>
        <ProjectMedia pAll src={'/work/azuki/s2-reveal-animation.mp4'} isVideo>
          thoughtfully chosen VFX animations come on screen during the actual
          reveal, representing either the Earth, Fire, Lightning, or Water
          domain.
        </ProjectMedia>
        <ProjectMedia pAll src={s2_mint}>
          Three phase sale fully equipped with dynamic graphics and delightful
          UI
        </ProjectMedia>
        <ProjectMedia pr pb src={s2_mint_closeup}>
          Bobu the Bean Farmer manages all purchased inventory and ongoing
          transactions
        </ProjectMedia>
        <Divider />
        <Spacer></Spacer>

        <ProjectBody title="Ambush x Azuki Collab" col={1}>
          {`The Ambush collaboration marks one of the first high-profile streetwear partnerships between a web3 company and high fashion. Purchase access is gated through an on-chain raffle system where buyers need to enter a drawing system to gain presale access. We strived for the shopping experience strives to feel luxurious and high-fashion and still respectful of web3's digital origins.`}
        </ProjectBody>
        <LinkCard
          col={1}
          link="https://www.highsnobiety.com/p/ambush-azuki-nft-collab-collection/"
        >
          Highsnobiety
        </LinkCard>
        <LinkCard
          col={2}
          link="https://hypebeast.com/2022/11/azuki-ambush-collaboration-web3-fashion-info"
        >
          Hypebeast
        </LinkCard>
        <ProjectMedia pAll src={ambushLanding} />
        <Divider />
        <ProjectBody title="Azuki Lore" col={1}>
          The Azuki brand grounds itself in thoughtful storytelling. The World
          page consists of several interactive chapters, each highlighting a
          piece of the universe. We designed each chapter to be different in
          format and interactivity.
        </ProjectBody>
        <LinkCard col={1} link="https://azuki.com/world">
          Lore Chapters
        </LinkCard>
        <ProjectMedia pAll src={LoreMain}></ProjectMedia>
        <ProjectMedia pAll src={LoreOrigin}></ProjectMedia>
        <ProjectMedia pAll src={LoreBeanz}></ProjectMedia>
        <ProjectMedia id="sisters" pAll src={LoreSisters}></ProjectMedia>
        <ProjectMedia pAll src={LoreChapterOne}></ProjectMedia>
        <ProjectMedia pAll src={loreHilumia}></ProjectMedia>
        <Divider />
        <ProjectBody title="Proof of Skate Auction" col={1}>
          Azuki recently made history by setting the record for the most
          expensive skateboards sold in history. I co-designed the experience
          for a 24 hour auction focused around 9 gold-plated skateboards.{' '}
        </ProjectBody>
        <LinkCard
          col={1}
          link="https://hypemoon.com/2022/10/azuki-nft-gold-skateboard-auction-world-record"
        >
          Hypebeast
        </LinkCard>
        <LinkCard
          col={2}
          link="https://www.yahoo.com/video/azuki-raises-2-5m-nft-191212817.html"
        >
          Yahoo Finance
        </LinkCard>
        <ProjectMedia pAll src={auctionCountdown} />
        <ProjectMedia pAll src={auctionMain} />
        <ProjectMedia src={auctionK112}>
          Proof of Skate exhibition at K11 Musea in Hong Kong
        </ProjectMedia>
        <ProjectMedia src={auctionK11} />
      </GridContainer>
    </motion.main>
  );
}
