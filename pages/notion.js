import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';

export default function notion() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/calendar-long.jpg" />
        <ProjectTitle role="Digital toolmaking">Notion</ProjectTitle>
        <ProjectBody col={2}>
          I design for the time layer of the Notion ecosystem, primarily focusing on turning Notion
          Calendar into the most powerful calendar application in the world. I also work on core
          Notion features that build connective tissue between Notion, Mail, and Calendar. This
          includes features such as AI Meeting Notes and Notion Agent. I&apos;m incredibly fortunate
          to collaborate with some of the most talented people in the industry.
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={['Raphael Schaad', 'Calendar Team', 'Product Design Team']}
          duration={['2025 – Present']}
          tools={['Figma', 'React']}
        />
        <LinkCard col={1} link="https://notion.com">
          Notion
        </LinkCard>
        <LinkCard col={2} link="https://www.notion.com/product/calendar">
          Notion Calendar
        </LinkCard>
      </GridContainer>
    </motion.main>
  );
}
