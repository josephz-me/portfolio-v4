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

export default function Cursor() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/cursor-long.jpg" />
        <ProjectTitle role="AI INTERFACES">Cursor AI</ProjectTitle>
        <ProjectBody col={2}>
          {`Cursor is a collaborative AI code editor backed by Open AI. During my contract, I designed product solutions that help users understand what the AI can do and contextually see. Given language intefaces have no bounds in terms of what's allowed, many people struggly with leveraging the AI's capabilities properly, often resulting in subpar results. If you are interested in learning more, please reach out.`}
        </ProjectBody>
        <ProjectDetails
          role={["Product designer"]}
          collaborators={["Michael Truell", "Cursor Team"]}
          duration="6 Weeks"
          tools={["Figma"]}
        />
        <LinkCard col={1} link="https://www.cursor.so/">
          Cursor Website
        </LinkCard>
      </GridContainer>
    </motion.main>
  );
}
