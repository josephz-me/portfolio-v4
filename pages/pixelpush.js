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
import ProjectDetails from '../components/projects/ProjectDetails';
import GalleryArt from '../public/work/pixelpush/gallery-art.jpg';
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

export default function PixelPush() {
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
        <ProjectHero
          isImage={true}
          content="/work/pixelpush/pixelpush-placeholder.jpg"
        />
        <ProjectTitle role="multiplayer art">Pixel Push</ProjectTitle>
        <ProjectBody col={2}>
          Tools shape the way we express ourselves and share our ideas. From
          Microsoft Paint to more complex tools such as Adobe Photoshop, the
          affordances of creative applications heavily influence the way we
          create. Pixel Push is a collaborative painting experience that
          reimagines art in the digital space through experimentation with audio
          recognition and webcam image-capture. Instead of solid hex code or RGB
          values, users paint with webcam video and the microphone audio.
        </ProjectBody>
        <ProjectDetails
          role={['Frontend Developer', 'Interaction Designer']}
          replaceCollab="collaborators"
          collaborators={[
            'Kyuha Shim (Advisor)',
            'Sophia Kim',
            'Margo Gersing',
            'Elizabeth Han',
            'Vicky Zhou',
          ]}
          duration="2.5 weeks"
          tools={[
            'HTML/CSS/JS',
            'Socket.io',
            'Google Teachable Machine',
            'Figma',
          ]}
        />
        <LinkCard
          col={1}
          link="https://josephz.notion.site/Pixel-Push-48910c3a971747b0b6fc3f31572b9984"
        >
          View complete documentation
        </LinkCard>
        <Spacer></Spacer>
        <ExternalVideo url="https://player.vimeo.com/video/488803937?h=99634d02a7&title=0&byline=0&portrait=0"></ExternalVideo>
        <ProjectMedia src={GalleryArt} isImage={true}></ProjectMedia>
        <ProjectBody caption={true}>
          Some of the art made with our collaborative painting tool!
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
