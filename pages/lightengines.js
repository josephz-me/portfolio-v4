import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import MobileMockupVideo from '../components/projects/MobileMockupVideo';
import LinkCard from '../components/projects/LinkCard';
import Spacer from '../components/projects/Spacer';
import ExternalVideo from '../components/projects/ExternalVideo';
import GalleryArt from '../public/work/pixelpush/gallery-art.jpg';
import LE_1 from '../public/work/experiments/LE-1.jpg';
import LE_2 from '../public/work/experiments/LE-2.jpg';
import LE_3 from '../public/work/experiments/LE-3.jpg';
import Divider from '../components/projects/Divider';

export default function Brain() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/work/experiments/LE-2.jpg" />
        <ProjectTitle role="Industrial Design">Lighting Engine</ProjectTitle>
        <ProjectBody>
          {`This was a form exploration from my time at Carnegie Mellon's School
          of Design. My prompt was to design a lamp, or lighting engine, that
          eased a person's ability to sleep. This form was inspired by the organic forms of
          shells and the hues of a himalayan salt lamp.`}
        </ProjectBody>
        <ProjectMedia src={LE_1}></ProjectMedia>
        <ProjectMedia src={LE_2}></ProjectMedia>
        <ProjectMedia src={LE_3}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
