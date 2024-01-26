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
  const [scrollY, setScrollY] = useState(0);

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
    <main>
      <GridContainer>
        <p
          className={`body text-white opacity-80 z-1000 grid-gap mb-6 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13`}
        >
          Joseph designs interfaces. He thrives in complex, ambiguous problem
          spaces focused around interactive media, digital tooling, and
          multimodal interaction. He loves working in small passionate teams and
          is currently at{' '}
          <TextLink super={1} link="https://chirulabs.com/">
            Chiru Labs
          </TextLink>{' '}
          pioneering new ways to engage with media and culture. Previously, he
          worked with teams like{' '}
          <TextLink super={2} link="https://www.apple.com/siri/">
            Apple
          </TextLink>
          ,{' '}
          <TextLink super={3} link="https://cursor.so/">
            Cursor AI
          </TextLink>
          ,{' '}
          <TextLink super={4} link="https://natural.ai/#/">
            Brain Technologies
          </TextLink>
          , and{' '}
          <TextLink super={5} link="https://skiff.com/">
            Skiff Privacy
          </TextLink>
          . He studied{' '}
          <TextLink
            super={6}
            link="https://design.cmu.edu/content/bachelor-design"
          >
            Communication Design
          </TextLink>{' '}
          and{' '}
          <TextLink super={7} link="https://www.hcii.cmu.edu/">
            Human-Computer Interaction
          </TextLink>{' '}
          at Carnegie Mellon University, an experience he holds fondly and will
          cherish for the rest of his life. Everyday, he wakes up genuinely
          excited to build new things. If you have an interesting idea, please
          get in touch.
        </p>
        <div className=" relative z-10 col-start-1 col-end-13 grid md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Azuki"
              description="Experimental Media"
              link="/azuki"
              isImage
              content={Azuki}
            />
            <ProjectCard
              title="Skiff"
              description="productivity"
              isImage
              link="/skiff"
              content={Skiff}
            />
            <ProjectCard
              title="Cursor AI"
              description="AI Tooling"
              isImage
              link="/cursor"
              content={Cursor}
            />

            <ProjectCard
              title="Skiff Pages"
              description="Editor Tool"
              link="/skiff/#editor"
              isImage
              content={FormatBar}
            />
            <ProjectCard
              title="Thinkspace"
              description="Assistive AI Agents"
              link="/thinkspace"
              content={'/project-covers/thinkspace.mp4'}
            ></ProjectCard>
            <ProjectCard
              title="Skiff Icons"
              description="Branding & Systems"
              link="/skiff/#icons"
              isImage
              content={SkiffIcons}
            />
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Azuki Collector Profile"
              description="Product"
              isImage
              link="/azuki/#collector"
              content={CollectorStatus}
            ></ProjectCard>
            <ProjectCard
              title="AIGA Hue"
              description="Data Visualization"
              isImage
              link="/aiga"
              content={AIGA}
            />
            <ProjectCard
              title="LIGHT ENGINE"
              description="Industrial Design"
              isImage
              link="/lightengines"
              content={Experiments}
            ></ProjectCard>
            <ProjectCard
              title="Azuki Sisters"
              description="Product"
              isImage
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
              content={'/project-covers/apple.mp4'}
            />
            <ProjectCard
              title="Skiff Mail"
              description="Productivity Tooling"
              isImage
              link="/skiff/#mail"
              content={Compose}
            />
            <ProjectCard
              title="Pixel Push"
              description="Multiplayer Art"
              link="/pixelpush"
              content={'/project-covers/pixel-push.mp4'}
            ></ProjectCard>
            <ProjectCard
              title="Brain Technologies"
              description="Conversational AI"
              link="/brain"
              isImage
              content={Brain}
            />

            <ProjectCard
              title="Metalink Labs"
              description="Design systems"
              isImage
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
          </div>
        </div>
      </GridContainer>
    </main>
  );
}
