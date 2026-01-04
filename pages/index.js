import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import Skiff from '../public/project-covers/skiff.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Brain from '../public/project-covers/natural.jpg';
import Azuki from '../public/project-covers/azuki.jpg';
import CollectorStatus from '../public/project-covers/collector-status.jpg';
import Cursor from '../public/project-covers/cursor-long.jpg';
import NotionCalendar from '../public/project-covers/notion-calendar.jpg';
import AIGA from '../public/project-covers/aiga-square.jpg';
import Metalink from '../public/project-covers/metalink.jpg';
import SkiffIcons from '../public/project-covers/skiffIcons.jpg';
import AnimeCom from '../public/project-covers/animecom.jpg';
import Experiments from '../public/work/experiments/LE-1.jpg';
import FormatBar from '../public/work/skiff/format-bar.jpg';

import Plane from '../public/project-covers/plane.jpg';

const gapValue = 'gap-6';

export default function Home() {
  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}
        <section className="my-6 md:my-8 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 md:col-end-6">
            <p className="text-white opacity-40 caption mb-2">ABOUT</p>
            <p
              className={`col-start-1 col-end-13 mb-4 text-white body z-1000 md:col-start-1 md:mb-0`}
            >
              I design software with the belief it&apos;s one of the most malleable mediums we have.
              At the moment, I&apos;m interested in how tools connect with each other, how they act
              on our behalf, and how we interact with them across different modes. I currently lead
              Design at <TextLink link="https://cognition.ai/">Cognition</TextLink>, an applied
              research lab building AI tooling for software creation. I studied{' '}
              <TextLink link="https://design.cmu.edu/">Communication Design</TextLink> and{' '}
              <TextLink link="https://www.hcii.cmu.edu/">Human-Computer Interaction</TextLink> at
              Carnegie Mellon University, an experience I hold fondly and will cherish for the rest
              of my life. If you have an interesting idea,{' '}
              <TextLink link="mailto:jxsephz@gmail.com">get in touch</TextLink>.
            </p>
          </div>

          <span
            className={`body text-white col-start-1 col-end-7 md:col-end-9 md:col-start-7 flex flex-col items-start`}
          >
            <p className="text-white opacity-40 caption mb-2">Teams</p>
            <span className="translate-x-[-2px]">
              <TextLink inline={false} super={1} link="https://cognition.ai/">
                Cognition
              </TextLink>
              <TextLink inline={false} super={2} link="https://www.notion.so/">
                Notion
              </TextLink>
              <TextLink inline={false} super={3} link="https://www.azuki.com/">
                Azuki
              </TextLink>
              <TextLink inline={false} super={4} link="https://www.skiff.com/">
                Skiff
              </TextLink>
              <TextLink inline={false} super={5} link="https://www.apple.com/">
                Apple
              </TextLink>
            </span>
          </span>
          <span
            className={`body text-white col-start-7 col-end-13 md:col-start-9 flex flex-col items-start`}
          >
            <p className="text-white opacity-40 caption mb-2">Links</p>
            <span className="translate-x-[-2px]">
              <TextLink inline={false} sameTab link="/reading">
                Reading
              </TextLink>
              <TextLink inline={false} link="https://www.linkedin.com/in/josephhhz/">
                Linkedin
              </TextLink>
              <TextLink inline={false} link="https://www.instagram.com/josephhhz/">
                Instagram
              </TextLink>
              <TextLink inline={false} link="https://twitter.com/josephhhhz">
                Twitter
              </TextLink>
            </span>
          </span>
        </section>
        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}

          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Notion"
              description="Digital toolmaking"
              link="/notion"
              content={NotionCalendar}
            />
            <ProjectCard
              title="Azuki"
              description="Consumer Product"
              link="/azuki"
              content={Azuki}
            />
            <ProjectCard
              title="Skiff"
              description="productivity"
              link="/skiff"
              content={Skiff}
              notionLabel
            />
            <ProjectCard
              title="Cursor AI"
              description="AI code editor"
              link="/cursor"
              content={Cursor}
            />

            <ProjectCard
              title="Thinkspace"
              description="Assistive AI Agents"
              link="/thinkspace"
              isVideo
              content={'/project-covers/thinkspace.mp4'}
            />
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Multimodal Search"
              description="Brain Technologies"
              link="/brain"
              isVideo
              content={'/project-covers/brain-nested-query.mp4'}
            />
            <ProjectCard
              title="Skiff Pages"
              description="Editor Tool"
              link="/skiff/#editor"
              content={FormatBar}
            />
            <ProjectCard
              title="AIGA Hue"
              description="Data Visualization"
              link="/aiga"
              content={AIGA}
            />
            {/* <ProjectCard
              title="Skiff Icons"
              description="Branding & Systems"
              link="/skiff/#icons"
              content={SkiffIcons}
            /> */}
            <ProjectCard
              title="Lighting Engine"
              description="Industrial Design"
              link="/lightengines"
              content={Experiments}
            />
          </div>

          {/* COLUMN 3 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Apple"
              description="Conversational AI"
              link="/apple"
              isVideo
              content={'/project-covers/apple.mp4'}
            />

            <ProjectCard
              title="Brain Technologies"
              description="Conversational AI"
              link="/brain"
              content={Brain}
            />
            <ProjectCard
              title="Skiff Mail"
              description="Productivity Tooling"
              link="/skiff/#mail"
              content={Compose}
            />
            <ProjectCard
              title="Pixel Push"
              description="Multiplayer Art"
              link="/pixelpush"
              isVideo
              content={'/project-covers/pixel-push.mp4'}
            />
          </div>
        </div>
      </GridContainer>
    </main>
  );
}

function WorkExperience(props) {
  return (
    <>
      <h1 className="col-span-2 col-start-1 col-end-3 text-white body">
        {props.title}
        <br />
        {props.date}
      </h1>
      <p className="col-span-4 col-start-3 text-white body">{props.children}</p>
    </>
  );
}
