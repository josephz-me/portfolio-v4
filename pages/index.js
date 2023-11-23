import ProjectCard from "../components/home/ProjectCard";
import React, { useEffect, useState } from "react";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import Skiff from "../public/project-covers/skiff.jpg";
import Apple from "../public/project-covers/apple-v2.jpg";
import Brain from "../public/project-covers/natural.jpg";
import Azuki from "../public/project-covers/azuki-2.jpg";
import Cursor from "../public/project-covers/cursor.jpg";
import AIGA from "../public/project-covers/aiga-square.jpg";
import Metalink from "../public/project-covers/metalink.jpg";
import Experiments from "../public/work/experiments/LE-1.jpg";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <GridContainer>
        <p
          className={`z-1000 gap-6 text-zinc-100 pt-2 mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
        >
          Joseph is an interaction designer. He has worked on unconventional
          things such as mobile games, interactive storybooks, and even a
          multiplayer painting platform. However his deepest passion remains in
          digital toolmaking, multimodal interaction, and the future of
          interaction design. After prototyping NLP interfaces at{" "}
          <TextLink super={1} link="https://www.apple.com/siri/">
            Apple
          </TextLink>
          , he took that passion to high-caliber starts-ups like{" "}
          <TextLink super={2} link="https://natural.ai/#/">
            Brain Technologies
          </TextLink>
          ,{" "}
          <TextLink super={3} link="https://skiff.com/">
            Skiff
          </TextLink>
          , and{" "}
          <TextLink super={4} link="https://cursor.so/">
            Cursor AI
          </TextLink>
          . He graduated from Carnegie Mellon University where he studied{" "}
          <TextLink
            super={5}
            link="https://design.cmu.edu/content/bachelor-design"
          >
            Communication Design
          </TextLink>{" "}
          and{" "}
          <TextLink super={6} link="https://www.hcii.cmu.edu/">
            Human-Computer Interaction
          </TextLink>
          . He is currently a designer at{" "}
          <TextLink super={7} link="https://chirulabs.com/">
            Chiru Labs
          </TextLink>{" "}
          pushing the boundaries of interactive storytelling.
        </p>

        <div className="relative z-10 col-start-1 col-end-13 grid md:grid-cols-3 gap-4 md:gap-8 md:gap-6">
          {/* COLUMN 1 */}
          <div className="flex gap-4 md:gap-8 md:gap-6 flex-col">
            <ProjectCard
              title="Azuki"
              description="Digital Storytelling"
              link="/azuki"
              isImage
              content={Azuki}
            ></ProjectCard>

            <ProjectCard
              title="Skiff"
              description="collaboration tools"
              isImage
              link="/skiff"
              content={Skiff}
            ></ProjectCard>

            <ProjectCard
              title="Cursor AI"
              description="AI Interfaces"
              isImage
              link="/cursor"
              content={Cursor}
            ></ProjectCard>
            <ProjectCard
              title="Thinkspace"
              description="Assistive AI Agents"
              link="/thinkspace"
              content={"/project-covers/thinkspace.mp4"}
            ></ProjectCard>
            {/* <ProjectCard
              title="TOUCHLESS INTERFACES"
              description="Physical Computing"
              link="/experiments"
              content={"/project-covers/sensor-chess.mp4"}
            ></ProjectCard> */}
          </div>
          {/* COLUMN 2 */}
          <div className="flex gap-4 md:gap-8 md:gap-6 flex-col">
            <ProjectCard
              title="AIGA Hue"
              description="Data Visualization"
              isImage
              link="/aiga"
              content={AIGA}
            ></ProjectCard>

            <ProjectCard
              title="Brain Technologies"
              description="multimodal interaction"
              link="/brain"
              isImage
              content={Brain}
            ></ProjectCard>
            <ProjectCard
              title="LIGHT ENGINE"
              description="Industrial Design"
              isImage
              link="/lightengines"
              content={Experiments}
            ></ProjectCard>
          </div>

          <div className="flex gap-4 md:gap-8 md:gap-6 flex-col">
            <ProjectCard
              title="Apple"
              description="Multimodal interaction"
              link="/apple"
              isImage
              content={Apple}
            ></ProjectCard>
            <ProjectCard
              title="Metalink Labs"
              description="Design systems & Messaging"
              isImage
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
            <ProjectCard
              title="Pixel Push"
              description="Multiplayer Art"
              link="/pixelpush"
              content={"/project-covers/pixel-push.mp4"}
            ></ProjectCard>
          </div>
        </div>
      </GridContainer>
    </main>
  );
}
