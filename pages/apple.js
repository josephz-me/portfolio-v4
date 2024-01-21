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

export default function Apple() {
  const [scrollY, setScrollY] = useState(0);

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo={true} content="/project-covers/apple.mp4" />
        <ProjectTitle role="multimodal interaction">Apple</ProjectTitle>
        <ProjectBody col={2}>
          During the summers of 2020 and 2021, I interned at Apple as an
          Interaction Designer working on two core Siri teams — the
          Understanding team with Garrett Weinberg and the Knowledge team with
          Maria Cordell. During my time there, I designed platform-level voice
          UI patterns and disambiguation behaviors for various hardware
          platforms. My time at Apple involved pitching ideas to high level
          leadership such as Robby Walker, weekly syncs with Machine Learning
          engineers, and throwing around ideas with senior designers.
        </ProjectBody>
        <ProjectDetails
          role={['Interaction Design Intern']}
          replaceCollab="managers"
          collaborators={['Maria Cordell', 'Garrett Weinberg']}
          duration="24 weeks total"
        />
      </GridContainer>
    </motion.main>
  );
}
