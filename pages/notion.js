import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';

export default function NotionCalendar() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/notion-calendar.jpg" />
        <ProjectTitle role="digital tooling">Notion Calendar</ProjectTitle>
        <ProjectBody col={2}>
          Notion Calendar is a calendar application designed to help you organize your time and
          manage your schedule effectively. This is placeholder content that will be updated with
          specific project details about the design work and features implemented.
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={['Notion Team']}
          duration={['2025']}
          tools={['Figma', 'React']}
        />
        <LinkCard col={1} link="https://notion.com">
          notion.com
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/notionhq">
          Twitter
        </LinkCard>
      </GridContainer>
    </motion.main>
  );
}
