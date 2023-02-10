import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import Link from "next/link";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectTitle from "../components/projects/ProjectTitle";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectMedia from "../components/projects/ProjectMedia";
import Spacer from "../components/projects/Spacer";
import LinkCard from "../components/projects/LinkCard";

// images
import AppSwitcher from "../public/work/skiff/app-switcher.jpg";
import LocalSharing from "../public/work/skiff/local-sharing.jpg";
import CustomDomains from "../public/work/skiff/custom-domains.jpg";
import Mail from "../public/work/skiff/mail.jpg";
import IconPicker from "../public/work/skiff/icon-picker.jpg";
import FormatBar from "../public/work/skiff/format-bar.jpg";
import Compose from "../public/work/skiff/compose-dark.jpg";
import Icons from "../public/work/skiff/icons.png";
import Calendar from "../public/work/skiff/calendar.jpg";
import MarketingCards from "../public/work/skiff/marketing-cards.png";
import MarketingLanding from "../public/work/skiff/marketing-landing.jpg";
import AppLogos from "../public/work/skiff/app-logos.jpg";
import SharingModals from "../public/work/skiff/sharing-modal.png";

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

export default function Skiff() {
  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo={false} content="/project-covers/skiff.jpg" />
        <ProjectTitle role="Collaboration tools">Skiff</ProjectTitle>
        <ProjectBody col={2}>
          {`I lead all things related to design at Skiff, a privacy company
          building collaboration tools for teams. As the sole traditional
          designer on the team, I scale Skiff Pages, Drive, Calendar, and Mail simultaneously. A blessing in disguise,
          managing such a large scope has helped me develop a holistic
          understanding of the entire ecosystem and how each product works
          together — all while still being able to contribute at the most
          granular level. In addition to design, I also regularly create and
          review engineering PR's.`}
        </ProjectBody>
        <ProjectDetails
          role={["Designer"]}
          collaborators={["Jason Ginsberg", "Sunny Li", "Oscar Dumlao (PAST)"]}
          duration="2022 - PRESENT"
          tools={["figma", "React Next JS"]}
        />
        <LinkCard col={1} link="https://skiff.com">
          Skiff.com
        </LinkCard>
        <LinkCard
          col={2}
          link="https://read.cv/teams/skiff/product-designer-hBlXg3CX0LtwC94rLCd1"
        >
          {`We're hiring a designer`}
        </LinkCard>
        <Spacer />
        <ProjectBody title="Branding">
          Aside from working on product features, I also iterate on Skiff&apos;s
          visual brand. After our redesign with{" "}
          <TextLink link="https://www.pentagram.com/work/skiff">
            Pentagram
          </TextLink>
          , it was a massive group effort between myself and three others to
          translate the new language into the product. Now as the core designer,
          I lead all initiatives related to brand.
        </ProjectBody>
        <ProjectMedia src={AppLogos}>
          Along with Jason, we designed app icons for each of our four products.
          The app icons needed to feel unique side by side as well as be
          identifiable when siloed.
        </ProjectMedia>
        <ProjectMedia src={MarketingLanding}>
          {" "}
          I lead the redesign of our Skiff marketing site, a 2.5 month long
          initiative from start to finish. We custom built almost very single
          graphic in code and engrained them with interactive hover states and
          dynamic details. The new design language strives to make privacy feel
          friendly and approachable. The site can be found{" "}
          <TextLink link="https://www.skiff.com">here</TextLink>.
        </ProjectMedia>
        <ProjectMedia pAll src={MarketingCards}>
          {" "}
          I designed 20 graphics that are now scattered across the marketing
          site — every single one built responsiveless in code (by Jason) with
          70% being interactive. Find them on the{" "}
          <TextLink link="https://www.skiff.com">
            landing page
          </TextLink> and{" "}
          <TextLink link="https://skiff.com/pages">product pages</TextLink>
        </ProjectMedia>

        <ProjectMedia src={Icons}>
          With initial guidance from Pentagram, we redrew every icon by hand in
          a style that combined angular and soft features. Skiff needed to
          simultaneously feel friendly yet serious and this was our solution.
        </ProjectMedia>
        <Spacer />
        <ProjectMedia dark pt pl src={AppSwitcher}>
          Once we launched our our second product, I had to redesign our app
          switcher to incorporate two levesl of distinct information — current
          app and current workspace.
        </ProjectMedia>
        <Spacer />
        <ProjectBody title="Pages">
          {`I started working on Pages when I was a still a contractor and
          wrapping up my last year in college. This was when Pages (Skiff's
          flagship product) was still in private beta — long before Mail,
          Calendar, and Drive were released. Since then, the product has grown
          tremendously and matured into a production-level application. Since
          joining, I've designed almost everything you see in the live app from
          0 to 1. This includes features such as the format bar, sharing,
          drag-and-drop, and much more.`}
        </ProjectBody>
        <ProjectMedia pt pr src={LocalSharing}>
          Sharing was a hefty project focused on permissions management, whether
          thats sharing users to a local document, private team, or an entire
          workspace. Because of the existing sharing architecture, designing for
          each level involved numerous constraints.
        </ProjectMedia>
        <ProjectMedia dark src={SharingModals}>
          Examples of various states of local and private team sharing
        </ProjectMedia>
        <ProjectMedia src={IconPicker}>
          {` Polished up our icon picker component. Using a dark surface
          proved to be tricky specifically contrast and representational accuracy.`}
        </ProjectMedia>
        <ProjectMedia src={FormatBar}>
          {`As much as I wanted to design the styling format bar to be
          vastly different and unique from software tools like Notion and
          Dropbox, Fitt's Law won at the end of the day.`}
        </ProjectMedia>
        <ProjectBody title="Mail">
          By the time I started working on Skiff Mial, the product already had a
          decent foundation in place. I played a core role in redesigning
          various sections of the product to be more legible and beautiful.
        </ProjectBody>
        <ProjectMedia pAll src={Mail}>
          {`Though I didn't design the mail app from 0 to 1, I redesigned the
          visual language to how it is today. Introduced subtler contrast,
          increasted legibility in scanning rows, and honestly just made the
          product a lot more elegant.`}
        </ProjectMedia>
        <ProjectMedia dark pr pb src={Compose}>
          Hovering compose modal visual touch-up
        </ProjectMedia>
        <ProjectMedia pt pr pb src={CustomDomains}></ProjectMedia>
        <ProjectBody caption>
          Though not a sexy project, I shipped features around custom domain
          management and custon domain purchasing. A highly requested feature
          from individuals and teams alike, this project yielded massive
          benefits in growth, retention and revenue.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
