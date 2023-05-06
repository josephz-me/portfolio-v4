import ProjectCard from "../components/home/ProjectCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import Skiff from "../public/project-covers/skiff.jpg";
import Apple from "../public/project-covers/apple.jpg";
import Brain from "../public/project-covers/natural.jpg";
import Azuki from "../public/project-covers/azuki-2.jpg";
import AIGA from "../public/project-covers/AIGA-square.jpg";
import Metalink from "../public/project-covers/metalink.jpg";
import Experiments from "../public/work/experiments/LE-3.jpg";

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
    <motion.main>
      <GridContainer>
        <motion.p
          className={`z-1000 gap-6 text-zinc-100 pt-2 mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
        >
          Joseph is an interaction designer interested in digital toolmaking and
          multimodal input. After working at{" "}
          <TextLink super={1} link="https://www.apple.com/siri/">
            Apple
          </TextLink>
          , he discovered a love for small, high-caliber teams and have since
          worked with starts-ups like{" "}
          <TextLink super={2} link="https://natural.ai/#/">
            Brain Technologies
          </TextLink>
          ,{" "}
          <TextLink super={3} link="https://azuki.com">
            Azuki
          </TextLink>
          , and{" "}
          <TextLink super={4} link="https://metalink.com/login">
            Metalink Labs
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
          <TextLink super={7} link="https://skiff.com/">
            Skiff
          </TextLink>{" "}
          building privacy-first tools for teams.
        </motion.p>

        <div className="relative z-10 col-start-1 col-end-13 grid grid-cols-3 gap-4 md:gap-8 md:gap-6">
          <div className="flex gap-6 flex-col">
            <ProjectCard
              title="Azuki"
              description="Product and Brand"
              link="/azuki"
              isImage={true}
              content={Azuki}
            ></ProjectCard>
            <ProjectCard
              title="Brain Technologies"
              description="multimodal interaction"
              link="/brain"
              isImage={true}
              content={Brain}
            ></ProjectCard>
          </div>
          <div className="flex gap-6 flex-col">
            <ProjectCard
              title="Skiff"
              description="collaboration tools"
              isImage={true}
              link="/skiff"
              content={Skiff}
            ></ProjectCard>
            <ProjectCard
              title="AIGA&Hue"
              description="Datavisualization"
              isImage
              content={AIGA}
              locked
            ></ProjectCard>

            <ProjectCard
              title="Metalink Labs"
              description="Design systems & Messaging"
              isImage={true}
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
          </div>

          <div className="flex gap-6 flex-col">
            <ProjectCard
              title="Apple"
              description="Multimodal interaction"
              link="/apple"
              isImage={true}
              content={Apple}
            ></ProjectCard>
            <ProjectCard
              title="Experiments"
              description="design & code"
              isImage={true}
              link="/experiments"
              content={Experiments}
            ></ProjectCard>
          </div>
        </div>
      </GridContainer>
    </motion.main>
  );
}
