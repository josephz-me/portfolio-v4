import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';

import Notifs from '../public/work/brain/notifications.jpg';
import DS from '../public/work/metalink/ds.jpg';
import DS2 from '../public/work/metalink/ds-2.jpg';
import MembersPopup from '../public/work/metalink/members-popup.jpg';
import Launchpad from '../public/work/metalink/launchpad.jpg';
import ProfileModal from '../public/work/metalink/profile-modal.jpg';
import MessageStates from '../public/work/metalink/message-states.jpg';
import Message from '../public/work/metalink/message.jpg';
import Trading1 from '../public/work/metalink/trading-1.jpg';

export default function Metalink() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/metalink.jpg" />
        <ProjectTitle role="Design systems & messaging">
          Metalink Labs
        </ProjectTitle>
        <ProjectBody col={2}>
          {`Scam, social engineering, and disorganization plague the web3
          landscape, making it difficult to safely connect with others.
          Metalink Labs aims to solve these issues by launching a web3 social
          platform that synthesizes chat, trade, and data. During my time there,
          I introduced design infrastructure by building a 0 to 1 design system, improving global navigation, and
          fully revamping Metalink's messaging interface.`}
        </ProjectBody>
        <ProjectDetails
          role={['Product Designer']}
          collaborators={[
            'Jake Udell (CEO)',
            'Adam Ceresko',
            'Larry Yu',
            'Charlie Hilton',
          ]}
          duration="4 months"
          tools={['Figma']}
        />
        <ProjectMedia src={DS}></ProjectMedia>
        <ProjectBody caption={true}>
          Built the design system from the ground up with the goal of unifying
          visual language and aiding in a leaner engineering workflow.
        </ProjectBody>
        <ProjectMedia
          src={'/work/metalink/global-navbar.mp4'}
          isVideo
        ></ProjectMedia>
        <ProjectMedia src={DS2}></ProjectMedia>
        <ProjectBody caption>
          Redesigned the global navigation panel with an emphasis on clarity and
          scalability.
        </ProjectBody>{' '}
        <ProjectMedia src={MembersPopup}></ProjectMedia>
        <ProjectMedia pAll src={ProfileModal}></ProjectMedia>
        <ProjectBody caption={true}>
          Designs contextual profile popups that allow users to easily learn
          about other collectors.
        </ProjectBody>
        <ProjectMedia src={Message}></ProjectMedia>
        <ProjectMedia src={MessageStates}></ProjectMedia>
        <ProjectBody caption={true}>
          Organized chat elements into reusable and width-responsive design
          components.
        </ProjectBody>
        {/* 
        <ProjectMedia src={Launchpad}></ProjectMedia>
        <ProjectBody>Test</ProjectBody>
        <ProjectMedia src={Trading1}></ProjectMedia>
        <ProjectBody>Test</ProjectBody> */}
      </GridContainer>
    </motion.main>
  );
}
