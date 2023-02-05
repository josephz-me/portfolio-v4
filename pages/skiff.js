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

// images
import AppSwitcher from "../public/work/skiff/app-switcher.jpg";
import LocalSharing from "../public/work/skiff/local-sharing.jpg";
import CustomDomains from "../public/work/skiff/custom-domains.jpg";
import Mail from "../public/work/skiff/mail.jpg";
import IconPicker from "../public/work/skiff/icon-picker.jpg";
import FormatBar from "../public/work/skiff/format-bar.jpg";
import Compose from "../public/work/skiff/compose-dark.jpg";
import Icons from "../public/work/skiff/icons.jpg";
import Calendar from "../public/work/skiff/calendar.jpg";

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
          designer on the team, I scale all of Skiff's products at the same
          time: Pages, Drive, Calendar, and Mail. A blessing in disguise,
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
        <ProjectBody title="General">
          I organized this case study to display work relevant to each app.
          However, some projects break this structure such as branding, design
          systems, and global product features.
        </ProjectBody>
        <ProjectMedia dark pt pl src={AppSwitcher}></ProjectMedia>
        <ProjectBody caption>
          Once we launched our our second product, I had to redesign our app
          switcher to incorporate two levesl of distinct information — current
          app and current workspace.
        </ProjectBody>
        <ProjectMedia src={Icons}></ProjectMedia>
        <ProjectBody caption>
          With initial guidance from Pentagram, we redrew every icon by hand in
          a style that harmonized angular and soft features.
        </ProjectBody>
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
        <ProjectMedia src={IconPicker}></ProjectMedia>
        <ProjectBody caption>
          {` Redesigned our icon picker to be more elegant and aligned with Skiff's
          visual language. Using a dark surface to represent light themed color
          customization was very tricky. We had to find a middle ground between
          accurate representation of color, consistent modal language, and
          visual contrast of selected colors.`}
        </ProjectBody>
        <ProjectMedia src={FormatBar}></ProjectMedia>
        <ProjectBody caption>
          {`As much as I wanted to design the styling format bar to be
          vastly different and unique from software tools like Notion and
          Dropbox, Fitt's Law won at the end of the day.`}
        </ProjectBody>
        <ProjectBody title="Mail">
          By the time I started working on Skiff Mial, the product already had a
          decent foundation in place. I played a core role in redesigning
          various sections of the product to be more legible and beautiful.
        </ProjectBody>
        <ProjectMedia pAll src={Mail}></ProjectMedia>
        <ProjectBody caption>
          {`Though I didn't design the mail app from 0 to 1, I redesigned the
          visual language to how it is today. Introduced subtler contrast,
          increasted legibility in scanning rows, and honestly just made the
          product a lot more elegant.`}
        </ProjectBody>
        <ProjectMedia dark pr pb src={Compose}></ProjectMedia>
        <ProjectMedia pt pr pb src={CustomDomains}></ProjectMedia>
        <ProjectBody caption>
          Though not a sexy project, I lead designs for custom domain management
          and custon domain purchasing. A highly requested feature from
          individuals and teams alike, this project yielded massive benefits in
          growth, retention and revenue.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
