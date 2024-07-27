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

import Notifs from '../public/work/brain/notifications.jpg';
import FoodCheckout from '../public/work/brain/food-checkout.jpg';
import Meetup from '../public/work/brain/meetup-1.jpg';

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

export default function Brain() {
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
        <ProjectHero content="/project-covers/natural.jpg" />
        <ProjectTitle role="multimodal interaction">
          Brain Technologies
        </ProjectTitle>
        <ProjectBody col={2}>
          For 2 years, I prototyped new ways to engage with computer interfaces,
          mostly working with voice and AI. Brain was one of the first companies
          to explore the idea of multimodal, generative interfaces. My time
          working with the team has shaped many of the principles I design with
          now. Most of my work stayed in R&D but pieces of it have shipped and
          are now in the{' '}
          <TextLink link="https://apps.apple.com/us/app/id1521375720/?role=f8a07a03-a0a9-4a5e-b59e-b48cb3ab1478">
            app store
          </TextLink>{' '}
          .
        </ProjectBody>
        <ProjectDetails
          role={['Design Consultant']}
          collaborators={['Jerry Yue (CEO)', 'Gleb Kuznetsov']}
          duration="2020-2021"
          tools={['Figma', 'Origami Studio']}
        />

        <LinkCard col={1} link="https://natural.ai/#/">
          Main Website
        </LinkCard>
        <LinkCard
          col={2}
          link="https://apps.apple.com/us/app/id1521375720/?role=f8a07a03-a0a9-4a5e-b59e-b48cb3ab1478"
        >
          Natural AI App
        </LinkCard>
        <Spacer />
        <MobileMockupVideo src="work/brain/followup-queries.mp4">
          Multimodal search with the ability to give follow-up queries
        </MobileMockupVideo>
        <MobileMockupVideo zoomed src="work/brain/followup-queries-zoomed.mp4">
          {' '}
          Closer look at query architecture
        </MobileMockupVideo>
        {/* <ProjectMedia isVideo src={`work/brain/followup-queries.mp4`}>
          Explored nested search queries and ways to edit them through both
          voice and screen.
        </ProjectMedia> */}
        {/* <ProjectMedia isVideo src={`work/brain/followup-queries-zoomed.mp4`}>
          Nexted search query architecture
        </ProjectMedia> */}
        <MobileMockupVideo src="work/brain/fluid-search.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Improve navigation and usability with a persistent search bar.
        </ProjectBody>

        <ProjectMedia src={Notifs}></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Redesigned notifications to be more communicative and systematic
          across domains.
        </ProjectBody>
        <ProjectMedia src={FoodCheckout}></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Designed a better way for people to view their preferences and
          purchase details.
        </ProjectBody>
        <MobileMockupVideo src="/work/brain/food-preferences.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Expandable cards that can be collapsed for a more compact view.
        </ProjectBody>
        <ProjectMedia src={Meetup}></ProjectMedia>

        <ProjectBody col={1} caption={true}>
          Led designs for an experimental feature, Meet up, where users can find
          restaurants and make reservations based on location and preference.
          The app leverages user location data to find top Yelp rated
          restaurants geographically close to both users.
        </ProjectBody>

        <MobileMockupVideo src="/work/brain/reorder-suggestions.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Prototyped intelligent restaurant suggestions based on user preference
          and order history.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
