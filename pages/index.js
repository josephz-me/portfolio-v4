import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import Skiff from '../public/project-covers/skiff.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Brain from '../public/project-covers/natural.jpg';
import Azuki from '../public/project-covers/azuki.jpg';
import CollectorStatus from '../public/project-covers/collector-status.jpg';
import Cursor from '../public/project-covers/cursor.jpg';
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
        <section className="my-6 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-5">
            <p className="text-white opacity-40 caption">ABOUT</p>
            <p
              className={`col-start-1 col-end-13 mb-4 text-white body z-1000 md:col-start-1 md:col-span-5 md:mb-0`}
            >
              Jo (He/Him) designs interfaces. He thrives in complex, ambiguous
              problem spaces focused around interactive media, digital tooling,
              and multimodal interaction. He studied{' '}
              <TextLink link="https://design.cmu.edu/">
                Communication Design
              </TextLink>{' '}
              and{' '}
              <TextLink link="https://www.hcii.cmu.edu/">
                Human-Computer Interaction
              </TextLink>{' '}
              at Carnegie Mellon University, an experience he holds fondly and
              will cherish for the rest of his life. If you have an interesting
              idea, please{' '}
              <TextLink link="mailto:jxsephz@gmail.com">get in touch</TextLink>.
            </p>
          </div>
          {/* WORK EXPERIENCE */}
          <div className="grid grid-cols-6 col-start-1 col-end-13 gap-3 md:col-start-7">
            <p className="col-start-1 text-white opacity-40 caption">Team</p>
            <p className="col-start-3 text-white opacity-40 caption">
              Description
            </p>
            <WorkExperience
              title="Azuki"
              date="2022 - Present"
              description=""
            >
              Building Anime.com and interactive experiences for the Azuki IP.
              Actively building out the design team.
            </WorkExperience>
            <WorkExperience title="Independent Practice">
              Design consulting for emerging AI and productivity companies.
              Notable clients include{' '}
              <TextLink super={1} link="https://cursor.sh/">
                Anysphere (Cursor AI)
              </TextLink>
              ,{' '}
              <TextLink super={2} link="https://natural.ai/#/">
                Brain Technologies (Natural AI)
              </TextLink>
              , and
              <TextLink super={3} link="https://plane.so/">
                Plane
              </TextLink>
              .
            </WorkExperience>
            <WorkExperience title="Skiff" date="2022 - 2023">
              First full-time design hire. 0→1 design for Email, Editor, Drive,
              Calendar. Scaled Skiff Mail to 1M+ users. Recently{' '}
              <TextLink link="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family">
                acquired by Notion HQ
              </TextLink>
              .
            </WorkExperience>
            <WorkExperience title="Apple" date="2020 -2021">
              Two summers at Apple working on conversational AI interfaces for
              Siri in the AI/ML Organization. Explored multimodal patterns and
              new behaviors empowered by natural language input.
            </WorkExperience>
          </div>
        </section>
        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}

          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Anime.com"
              description="Product"
              locked
              content={AnimeCom}
            />
            <ProjectCard
              title="Azuki"
              description="Media Interfaces"
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
              description="AI Tooling"
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
            <ProjectCard
              title="Skiff Icons"
              description="Branding & Systems"
              link="/skiff/#icons"
              content={SkiffIcons}
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
            {/* <ProjectCard
              title="Collector Profile"
              description="Azuki"
              link="/azuki/#collector"
              content={CollectorStatus}
            /> */}
            <ProjectCard
              title="Plane"
              link="/plane"
              description="Productivity"
              content={Plane}
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
            <ProjectCard
              title="LIGHT ENGINE"
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

            <ProjectCard
              title="Metalink Labs"
              description="Design systems"
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
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
