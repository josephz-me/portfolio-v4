import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import Link from 'next/link';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';

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

export default function Plane() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/plane.jpg" />
        <ProjectTitle role="Productivity">Plane</ProjectTitle>
        <ProjectBody col={2}>
          Plane is an open-source productivity company combining task
          management, wiki, and scheduling features into one comprehensive
          platform. I consult with the team on various initiatives, primarily
          focusing on task organization, visual interface identity, and editor
          features.
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={['Vihar Kurama', 'Dilip Pitchika', 'Vamsi Kurama']}
          duration="2 months"
        />
      </GridContainer>
    </motion.main>
  );
}
