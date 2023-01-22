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

// images
import AppSwitcher from "../public/work/skiff/app-switcher.jpg";
import LocalSharing from "../public/work/skiff/local-sharing.jpg"
import CustomDomains from "../public/work/skiff/custom-domains.jpg"
import Mail from "../public/work/skiff/mail.jpg"
import Calendar from "../public/work/skiff/calendar.jpg"

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
          {`I lead all things related to design at Skiff, a privacy company building collaboration tools for teams.
          As the only [pure] designer on the team, I design for all of Skiff's apps: Pages, Drive, Calendar, and Mail. A blessing in disguise, managing such a large scope has helped me develop a holistic understanding of the entire ecosystem and how each product works together — all while still being able to contribute at the most granular level.`}</ProjectBody>
        <ProjectDetails
          role={["Designer"]}
          collaborators={["Jason Ginsberg", "Sunny Li"]}
          duration="2022 - PRESENT"
        />
        <ProjectMedia pAll src={Mail}></ProjectMedia>
        <ProjectMedia pAll src={Calendar}></ProjectMedia>
        <ProjectMedia pt pl src={AppSwitcher}></ProjectMedia>
        <ProjectMedia pt pr src={LocalSharing}></ProjectMedia>
        <ProjectMedia pAll src={CustomDomains}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
