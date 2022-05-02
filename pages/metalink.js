import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/home/HomeCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ProjectDetails from "../components/projects/ProjectDetails";

import Notifs from "../public/work/brain/notifications.jpg";
import LinkCard from "../components/projects/LinkCard";

export default function Metalink() {
  return (
    <motion.main
      className="min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/metalink-2.jpg" />
        <ProjectTitle role="product design">Metalink Labs</ProjectTitle>
        <ProjectBody col={2}>
          Scam, social engineering, and disorganization plagues the web3
          landscape. Malicious individuals scam people of thousands of dollars
          and hackers infiltrate Discords servers everyday. Metalink Labs aims
          to solve these issues by launching a web3 social platform that
          securely unifies chat, trade, and portfolio data. During my time here,
          I built the design system from scratch, revamped the entire chat
          interface, and co-designed the initial specs for a peer-to-peer
          trading experience.
        </ProjectBody>

        <ProjectDetails
          role={["product designer (contract)"]}
          collaborators={[
            "Jake Udell (CEO)",
            "Adam Ceresko",
            "Larry Yu",
            "Charlie Hilton",
          ]}
          duration="4 months"
          tools={["figma"]}
        />
      </GridContainer>
    </motion.main>
  );
}
