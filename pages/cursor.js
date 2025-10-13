import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';

export default function Cursor() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/cursor-long.jpg" />
        <ProjectTitle role="AI code editor">Cursor AI</ProjectTitle>
        <ProjectBody col={2}>
          I freelanced with Cursor in August 2023 before the world knew who they were. During my
          time with the founding team, I explored features that helped users visualize what AI was
          thinking and doing. Since then, the product has exponentially improved under the
          leadership of my former Notion collaborators, who now shape Cursor&apos;s design language.
        </ProjectBody>
        <ProjectDetails
          role={['Product designer']}
          collaborators={['Michael Truell', 'Walden Yan', 'Sualeh Asif']}
          duration="2 months"
        />
        <LinkCard col={1} link="https://www.cursor.com/">
          Website
        </LinkCard>
        <LinkCard col={2} link="https://x.com/Cursor_ai">
          X.com
        </LinkCard>
      </GridContainer>
    </motion.main>
  );
}
