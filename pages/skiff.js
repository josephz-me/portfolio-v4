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
import Compose from "../public/work/skiff/compose-modal.jpg";
import Icons from "../public/work/skiff/icons.png";
import Calendar from "../public/work/skiff/calendar.jpg";
import MarketingCards from "../public/work/skiff/marketing-cards.png";
import MarketingCards2 from "../public/work/skiff/marketing-cards-2.jpg";
import MarketingLanding from "../public/work/skiff/marketing-landing.jpg";
import AppLogos from "../public/work/skiff/app-logos.jpg";
import SharingModals from "../public/work/skiff/sharing-modal.png";
import DragDrop from "../public/work/skiff/drag-drop.jpg";
import Tables from "../public/work/skiff/tables.jpg";
import Comments from "../public/work/skiff/comments.jpg";
import Onboarding from "../public/work/skiff/onboarding.jpg";
import MobileMail1 from "../public/work/skiff/mobile-mail-1.png";
import MobileMail2 from "../public/work/skiff/mobile-mail-2.png";

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
          {`I lead design at Skiff, a privacy company building encrypted productivity tools. As the first full-time design hire, I helped scale Skiff from a beta product to over +600,000 users. During my time with the team, I focused mostly on Skiff Pages, Drive, and Mail. A blessing in disguise,
          managing such a large scope has helped me develop a holistic
          understanding of the product ecosystem, all while still being able to contribute at the most
          granular level.`}
        </ProjectBody>
        <ProjectDetails
          role={["Designer"]}
          collaborators={[
            "Jason Ginsberg",
            "Sunny Li",
            "Natalie Almosa",
            "Oscar Dumlao (PAST)",
          ]}
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
        <ProjectBody title="Visual Language">
          I helped transform Skiff&apos;s visual design language. This involved
          working with{" "}
          <TextLink link="https://www.pentagram.com/work/skiff">
            Pentagram
          </TextLink>{" "}
          on an initial rebrand to evolving it into a usable design system,
          complete iconography set, and visual graphic style.
        </ProjectBody>
        <ProjectMedia src={AppLogos}>
          Four skeuomorphic icons, one for each product [Co-designed with Jason]
        </ProjectMedia>
        <ProjectMedia src={MarketingLanding}>
          Led design for the Skiff marketing site relaunch, a 2.5 month project.
          Visit <TextLink link="https://www.skiff.com">here</TextLink>
        </ProjectMedia>
        <ProjectMedia src={MarketingCards2} />
        <ProjectMedia pAll src={MarketingCards}>
          20 interactive graphics scattered across the marketing site, each
          individually coded in React
        </ProjectMedia>

        <ProjectMedia src={Icons}>
          +200 Hand drawn icons combining angular and soft features
        </ProjectMedia>
        <ProjectMedia pt pl src={AppSwitcher}>
          Global app switcher for navigation between products and workspaces.
        </ProjectMedia>
        <ProjectMedia pAll src={Onboarding}>
          Onboarding 4.0
        </ProjectMedia>

        {/* MAIl */}
        <ProjectBody title="Mail">
          Search, sorting automation, compose editor, web3 wallet email, etc.
        </ProjectBody>
        <ProjectMedia pAll src={Mail} />
        <ProjectMedia pr pb pt src={Compose} />
        <ProjectMedia pAll src={MobileMail1} />
        <ProjectMedia pAll src={MobileMail2} />
        <ProjectMedia pt pr pb src={CustomDomains}></ProjectMedia>

        {/* PAGES */}
        <ProjectBody title="Pages">
          Text styles, tables, navigation sidebar, format bar, sharing features,
          enterprise controls, public documents, etc.
        </ProjectBody>
        <ProjectMedia pt pr pb src={Comments}></ProjectMedia>
        <ProjectMedia pt pr src={LocalSharing}></ProjectMedia>
        <ProjectMedia src={SharingModals} />
        <ProjectMedia src={IconPicker}></ProjectMedia>
        <ProjectMedia src={DragDrop}></ProjectMedia>
        <ProjectMedia src={FormatBar}></ProjectMedia>
        <ProjectMedia src={Tables}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
