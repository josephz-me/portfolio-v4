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
import DragDrop from "../public/work/skiff/drag-drop.jpg";

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
          building collaboration tools for teams. I primarily work on three of Skiff's products — Pages, Drive, and Mail. A blessing in disguise,
          managing such a large scope has helped me develop a holistic
          understanding, all while still being able to contribute at the most
          granular level. In addition to design, I also regularly push code and review eng implementation.`}
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
        <LinkCard col={2} link="https://twitter.com/skiffprivacy">
          {`Twitter`}
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
          {`Led the redesign of Skiff's marketing site, a 2.5 month long
          initiative from start to finish. We custom built almost very single
          graphic in code and engrained them with interactive hover states and
          dynamic details. The new design language strives to make privacy feel
          friendly and approachable. The site can be found `}
          <TextLink link="https://www.skiff.com">here</TextLink>.
        </ProjectMedia>
        <ProjectMedia pAll src={MarketingCards}>
          {" "}
          20 graphics that are scattered across the marketing site — every one
          built responsively in code (by Jason) with 70% being interactive. Find
          them on the{" "}
          <TextLink link="https://www.skiff.com">
            landing page
          </TextLink> and{" "}
          <TextLink link="https://skiff.com/pages">product pages</TextLink>
        </ProjectMedia>

        <ProjectMedia src={Icons}>
          Hand drawn icons combinging angular and soft features.
        </ProjectMedia>
        <Spacer />
        <ProjectMedia pt pl src={AppSwitcher}></ProjectMedia>
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
        <ProjectMedia pt pr src={LocalSharing}></ProjectMedia>
        <ProjectMedia src={SharingModals} />
        <ProjectMedia src={IconPicker}></ProjectMedia>
        <ProjectMedia src={DragDrop}></ProjectMedia>
        <ProjectMedia src={FormatBar}></ProjectMedia>
        <ProjectBody title="Mail">
          By the time I started working on Skiff Mial, the product already had a
          decent foundation in place. I played a core role in redesigning
          various sections of the product to be more legible and beautiful.
        </ProjectBody>
        <ProjectMedia pAll src={Mail} />
        <ProjectMedia pr pb src={Compose} />
        <ProjectMedia pt pr pb src={CustomDomains}></ProjectMedia>
        <ProjectBody caption>
          Shipped features around custom domain management and purchasing. A
          highly requested feature from individuals and teams alike, this
          feature yielded massive increases in growth, retention, and revenue.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
