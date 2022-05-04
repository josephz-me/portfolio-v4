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
import DS from "../public/work/metalink/design-system.jpg";
import Launchpad from "../public/work/metalink/launchpad.jpg";
import ProfileModal from "../public/work/metalink/profile-modal.jpg";
import Trading1 from "../public/work/metalink/trading-1.jpg";

export default function Metalink() {
  return (
    <motion.main
      className="min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/metalink.jpg" />
        <ProjectTitle role="product design">Metalink Labs</ProjectTitle>
        <ProjectBody col={2}>
          Scam, social engineering, and disorganization plague the web3
          landscape, making it difficult to securely connect with others.
          Metalink Labs aims to solve these issues by launching a web3 social
          platform that synthesizes chat, trade, and data. During my time here,
          I introduced significantly more robust design infrastructure by
          starting a robust design system, improving global navigation, and
          fully revamping Metalink's chat interface.
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
        {/* <ProjectMedia src={DS}></ProjectMedia>
        <ProjectBody>Test</ProjectBody>
        <ProjectMedia src={Launchpad}></ProjectMedia>
        <ProjectBody>Test</ProjectBody>
        <ProjectMedia src={ProfileModal}></ProjectMedia>
        <ProjectBody>Test</ProjectBody>
        <ProjectMedia src={Trading1}></ProjectMedia>
        <ProjectBody>Test</ProjectBody> */}
      </GridContainer>
    </motion.main>
  );
}
