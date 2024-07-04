import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import ProjectMedia from '../components/projects/ProjectMedia';
import Spacer from '../components/projects/Spacer';
import LinkCard from '../components/projects/LinkCard';

// images
import AppSwitcher from '../public/work/skiff/app-switcher.jpg';
import LocalSharing from '../public/work/skiff/local-sharing.jpg';
import CustomDomains from '../public/work/skiff/custom-domains.jpg';
import Mail from '../public/work/skiff/mail.jpg';
import IconPicker from '../public/work/skiff/icon-picker.jpg';
import FormatBar from '../public/work/skiff/format-bar.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Icons from '../public/work/skiff/icons.png';
import MarketingCards from '../public/work/skiff/marketing-cards.png';
import MarketingCards2 from '../public/work/skiff/marketing-cards-2.jpg';
import MarketingLanding from '../public/work/skiff/marketing-landing.jpg';
import AppLogos from '../public/work/skiff/app-logos.jpg';
import SharingModals from '../public/work/skiff/sharing-modal.png';
import DragDrop from '../public/work/skiff/drag-drop.jpg';
import Tables from '../public/work/skiff/tables.jpg';
import Comments from '../public/work/skiff/comments.jpg';
import Onboarding from '../public/work/skiff/onboarding.jpg';
import OnboardingChecklist from '../public/work/skiff/onboarding-checklist.jpg';
import MobileMail1 from '../public/work/skiff/mobile-mail-1.png';
import MobileMail2 from '../public/work/skiff/mobile-mail-2.png';

export default function Skiff() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo={false} content="/project-covers/skiff.jpg" />
        <ProjectTitle role="Productivity">Skiff</ProjectTitle>
        <ProjectBody col={2}>
          I led design at Skiff, a productivity company building E2EE
          collaboration tools. As the first full-time design hire, I helped
          scale Skiff from a beta product to over +1,000,000 users. During my
          time with the team, I focused mostly on Skiff Pages, Drive, and Mail.
          A blessing in disguise, managing such a large scope has helped me
          develop a holistic understanding of the product ecosystem, all while
          still being able to contribute at the most granular level. As of
          February 2024,{' '}
          <TextLink link="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family">
            Skiff has been acquired by Notion
          </TextLink>
          .
        </ProjectBody>
        <ProjectDetails
          role={['Product & Brand Designer']}
          collaborators={[
            'Jason Ginsberg',
            'Sunny Li',
            'Natalie Almosa',
            'Oscar Dumlao',
          ]}
          duration="2022 - 2023"
          tools={['Figma', 'React']}
        />
        <LinkCard
          col={1}
          link="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family"
        >
          Notion acquires Skiff
        </LinkCard>
        <LinkCard col={2} link="https://twitter.com/skiffprivacy">
          {`Twitter`}
        </LinkCard>
        <Spacer />
        <ProjectBody title="Visual Language">
          I helped transform Skiff&apos;s visual design language. This involved
          working with{' '}
          <TextLink link="https://www.pentagram.com/work/skiff">
            Pentagram
          </TextLink>{' '}
          on an initial rebrand to evolving it into a usable design system,
          complete iconography set, and visual graphic style.
        </ProjectBody>
        <ProjectMedia src={AppLogos}>
          Four skeuomorphic icons, one for each product [Co-designed with Jason]
        </ProjectMedia>
        <ProjectMedia src={MarketingLanding}>
          Led design for the Skiff marketing site relaunch, a 2.5 month project.
          Visit <TextLink link="https://www.skiff.com">here</TextLink>
        </ProjectMedia>
        <ProjectMedia src={MarketingCards2} />
        <ProjectMedia noShadow pAll src={MarketingCards}>
          20 interactive graphics scattered across the marketing site, each
          individually coded in React
        </ProjectMedia>

        <ProjectMedia id="icons" src={Icons}>
          +200 Hand drawn icons combining angular and soft features
        </ProjectMedia>
        <ProjectMedia pt pl src={AppSwitcher}>
          Global app switcher for navigation between products and workspaces.
        </ProjectMedia>
        <ProjectMedia pAll src={Onboarding} />

        {/* MAIl */}
        <ProjectBody id="mail" title="Mail">
          Search, sorting automation, compose editor, web3 wallet email, etc.
        </ProjectBody>
        <ProjectMedia pAll src={Mail} />
        <ProjectMedia pr pb pt src={Compose} />
        <ProjectMedia noShadow pAll src={MobileMail1} />
        <ProjectMedia noShadow pAll src={MobileMail2} />
        <ProjectMedia pt pr pb src={CustomDomains}></ProjectMedia>
        <ProjectMedia pb pr src={OnboardingChecklist} />

        {/* PAGES */}
        <ProjectBody id="editor" title="Pages">
          Text styles, tables, navigation sidebar, format bar, sharing features,
          enterprise controls, public documents, etc.
        </ProjectBody>
        <ProjectMedia pt pr pb src={Comments}></ProjectMedia>
        <ProjectMedia pt pr src={LocalSharing}></ProjectMedia>
        <ProjectMedia src={SharingModals} />
        <ProjectMedia src={IconPicker}></ProjectMedia>
        <ProjectMedia src={DragDrop}></ProjectMedia>
        <ProjectMedia src={FormatBar}></ProjectMedia>
        <ProjectMedia src={Tables}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
