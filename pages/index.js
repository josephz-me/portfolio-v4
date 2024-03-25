import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import Skiff from '../public/project-covers/skiff.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Apple from '../public/project-covers/apple-v2.jpg';
import Divider from '../components/projects/Divider';
import Brain from '../public/project-covers/natural.jpg';
import Azuki from '../public/project-covers/azuki-2.jpg';
import CollectorStatus from '../public/project-covers/collector-status.jpg';
import Cursor from '../public/project-covers/cursor.jpg';
import AIGA from '../public/project-covers/aiga-square.jpg';
import Sisters from '../public/project-covers/sisters.jpg';
import Metalink from '../public/project-covers/metalink.jpg';
import SkiffIcons from '../public/project-covers/skiffIcons.jpg';
import Experiments from '../public/work/experiments/LE-1.jpg';
import FormatBar from '../public/work/skiff/format-bar.jpg';

const gapValue = 'gap-6';

export default function Home() {
  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}
        <section className="grid-layout my-6">
          <p
            className={`body text-white z-1000 col-start-1 col-end-13 md:col-start-1 md:col-span-5 md:mt-8 mb-4 md:mb-0 opacity-80`}
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
            will cherish for the rest of his life. Everyday, he wakes up
            genuinely excited to build new things. If you have an interesting
            idea, please{' '}
            <TextLink link="mailto:jxsephz@gmail.com">get in touch</TextLink>.
          </p>

          <div className="grid grid-gap grid-cols-6 col-start-1 md:col-start-7 lg:col-start-7 col-end-13">
            <p className="caption col-start-1 opacity-40 text-white">Team</p>
            <p className="caption col-start-3 opacity-40 text-white">
              Description
            </p>
            <WorkExperience
              title="Chiru Labs"
              date="03.2022 - Present"
              description=""
            >
              Interactive media, storytelling, and gamified experiences. Working
              with a team of engineers, artists, and creatives.
            </WorkExperience>
            <WorkExperience title="Independent Practice">
              Design consulting for emerging technology companies. Clients
              include{' '}
              <TextLink super={1} link="https://cursor.sh/">
                Anysphere (Cursor AI)
              </TextLink>
              ,{' '}
              <TextLink super={2} link="https://natural.ai/#/">
                Brain Technologies
              </TextLink>
              ,{' '}
              <TextLink super={3} link="https://code4rena.com/">
                Code4rena
              </TextLink>
              ,{' '}
              <TextLink super={4} link="https://plane.so/">
                Plane
              </TextLink>
              , and Metalink.
            </WorkExperience>
            <WorkExperience title="Skiff Privacy" date="08.2022 - 06.2023">
              First full-time design hire. 0→1 design for Email, Editor, Drive,
              Calendar. Scaled Skiff Mail to 1M+ users. Recently{' '}
              <TextLink link="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family">
                acquired by Notion HQ
              </TextLink>
              .
            </WorkExperience>
            <WorkExperience title="Apple" date="2022 & 2023">
              Two summers at Apple working on conversational AI interfaces for
              Siri in the AI/ML Organization. Explored multimodal patterns and
              new behaviors empowered by natural language input.
            </WorkExperience>
          </div>
        </section>
        <div className=" relative z-10 col-start-1 col-end-13 grid md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Azuki"
              description="Experimental Media"
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
              title="Skiff Pages"
              description="Editor Tool"
              link="/skiff/#editor"
              content={FormatBar}
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
              title="Azuki Collector Profile"
              description="Product"
              link="/azuki/#collector"
              content={CollectorStatus}
            ></ProjectCard>
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
            ></ProjectCard>
            <ProjectCard
              title="Azuki Sisters"
              description="Product"
              link="/azuki/#sisters"
              content={Sisters}
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
              title="Brain Technologies"
              description="Conversational AI"
              link="/brain"
              content={Brain}
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
      <h1 className="opacity-80 col-start-1 col-span-2 text-white body">
        {props.title}
        <br />
        {props.date}
      </h1>
      <p className="opacity-80 text-white body col-start-3 col-span-4">
        {props.children}
      </p>
    </>
  );
}
