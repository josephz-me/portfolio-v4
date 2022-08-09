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
          className={`${
            scrollY > 40 ? "md:opacity-0 pointer-events-none" : ""
          } gap-6 text-zinc-100 lg:sticky top-[2rem] pt-2  mb-8 md:mt-0 md:columns-2 col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13 transition duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
        >
          Joseph is an interaction designer interested in digital toolmaking and
          multimodal input. After working at{" "}
          <TextLink link="https://www.apple.com/siri/">Apple</TextLink>, he
          discovered a love for small, high-caliber teams and have since worked
          with starts-ups like{" "}
          <TextLink link="https://natural.ai/#/">Brain Technologies</TextLink>,{" "}
          <TextLink link="https://azuki.com">Azuki</TextLink>, and{" "}
          <TextLink link="https://metalink.com/login">Metalink Labs</TextLink>.
          Most recently, he graduated from Carnegie Mellon University where he
          studied{" "}
          <TextLink link="https://design.cmu.edu/content/bachelor-design">
            Communication Design
          </TextLink>{" "}
          and{" "}
          <TextLink link="https://www.hcii.cmu.edu/">
            Human-Computer Interaction
          </TextLink>
          . He is currently a designer at{" "}
          <TextLink link="https://skiff.com/">Skiff Privacy</TextLink> building
          privacy-first tools for teams.
        </motion.p>
        <ProjectCard
          title="Apple"
          description="Multimodal interaction"
          col={1}
          link="/apple"
          isImage={true}
          content={"/project-covers/apple.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Skiff"
          description="collaboration tools"
          col={2}
          locked={true}
          isImage={true}
          content={"/project-covers/skiff.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Brain Technologies"
          description="multimodal interaction"
          link="/brain"
          col={1}
          isImage={true}
          content={"/project-covers/natural.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Metalink Labs"
          description="Design systems & Messaging"
          col={2}
          isImage={true}
          link="/metalink"
          content={"/project-covers/metalink.jpg"}
        ></ProjectCard>
        <ProjectCard
          title="Azuki"
          description="Product and Brand"
          col={1}
          locked={true}
          isImage={true}
          content={"/project-covers/azuki.jpg"}
        ></ProjectCard>
      </GridContainer>
    </motion.main>
  );
}
