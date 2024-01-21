import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  SwitchLayoutGroupContext,
} from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ExternalVideo from '../components/projects/ExternalVideo';
import LinkCard from '../components/projects/LinkCard';
import Link from 'next/link';
import ProjectDetails from '../components/projects/ProjectDetails';
import Spacer from '../components/projects/Spacer';

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

export default function Home() {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo={true} content="/project-covers/thinkspace.mp4" />
        <ProjectTitle role="Assistive AI Agents">Thinkspace</ProjectTitle>
        <ProjectBody col={2}>
          Rich, engaging conversation is a hallmark of meaningful human-to-human
          interaction. However, factors such as relational closeness, social
          formalities, and insecurities often hinder unfamiliar individuals from
          going beyond the surface-level conversation. Thinkspace is a
          speculative concept that aims to reinvision the role of conversational
          agents in discussion-based contexts.
        </ProjectBody>
        <ProjectDetails
          role={['Designer']}
          replaceCollab="advisors"
          collaborators={['Jonathan Chapman', 'Steve Stadelmeier']}
          duration="7 weeks"
          tools={['Javascript']}
        />
        <LinkCard
          col={1}
          link="https://josephz.notion.site/Thinkspace-24f3dc1c62904b0da412b0a4230cc92d"
        >
          View complete documentation
        </LinkCard>
        <ExternalVideo url="https://player.vimeo.com/video/704621543?h=5407db28dd&title=0&byline=0&portrait=0"></ExternalVideo>
      </GridContainer>
    </motion.main>
  );
}
