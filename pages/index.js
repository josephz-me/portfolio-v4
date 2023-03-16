import ProjectCard from "../components/home/ProjectCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";

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
          className={`z-1000 gap-6 text-zinc-100 pt-2  mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
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

        <ProjectCard
          title="Skiff"
          description="collaboration tools"
          col={1}
          isImage={true}
          link="/skiff"
          content={"/project-covers/skiff.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Azuki"
          description="Product and Brand"
          col={2}
          link="/azuki"
          isImage={true}
          content={"/project-covers/azuki-2.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Apple"
          description="Multimodal interaction"
          col={1}
          link="/apple"
          isImage={true}
          content={"/project-covers/apple.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Brain Technologies"
          description="multimodal interaction"
          link="/brain"
          col={2}
          isImage={true}
          content={"/project-covers/natural.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Metalink Labs"
          description="Design systems & Messaging"
          col={1}
          isImage={true}
          link="/metalink"
          content={"/project-covers/metalink.jpg"}
        ></ProjectCard>

        <ProjectCard
          title="Experiments"
          description="design & code"
          col={2}
          isImage={true}
          link="/experiments"
          content={"/work/experiments/LE-3.jpg"}
        ></ProjectCard>
      </GridContainer>
    </motion.main>
  );
}
