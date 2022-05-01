import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/home/HomeCard";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ProjectDetails from "../components/projects/ProjectDetails";

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

export default function Brain() {
  const [scrollY, setScrollY] = useState(0);

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.main
      className="min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/natural.jpg" />
        <ProjectTitle role="multimodal interaction">
          Brain Technologies
        </ProjectTitle>
        <ProjectBody col={2}>
          From 2020-2021, I worked with Brain Technologies on various design
          initiatives for Natural AI, an iOS app focused on making the commerce
          experience more fluid through AI and voice. A lot of my time went into
          R&D around search and creative applications of NLP, but some of my
          work has also shipped and is now in the app store. My future-facing
          work is under NDA, but below is a list of features that have been
          released to the public.
        </ProjectBody>
        <ProjectDetails
          role={["design intern"]}
          replaceCollab="manager"
          collaborators={["jerry yue (ceo)"]}
          duration="8 months"
          tools={["figma", "origami studio"]}
        />
        <ProjectMedia
          src="/work/brain/notifications.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Redesigned notifications to be more communicative and systematic
          across domains.
        </ProjectBody>
        <ProjectMedia
          src="/work/brain/food-checkout.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Designed a better way for people to view their preferences and
          purchase details.
        </ProjectBody>
        <ProjectMedia
          src="/work/brain/meetup-1.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectMedia
          src="/work/brain/meetup-2.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Led designs for an experimental feature, Meet up, where users can find
          restaurants and make reservations based on location and preference.
          The app leverages user location data to find top Yelp rated
          restaurants geographically close to both users.{" "}
        </ProjectBody>
        <ProjectMedia
          src="/work/brain/fluid-search.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          I designed the fluid search bar that appears when users scroll down
          the screen. Prior to this implementation, scrolling up would hide all
          query variables making the process of finding the search field
          difficult. This proposal solved that. (Collaborated with Gleb)
        </ProjectBody>
        <ProjectMedia
          src="/work/brain/multiparam-1.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectMedia
          src="/work/brain/multiparam-2.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Voice queries can have multiple layers of complexity which gives users
          a wide range of ways to achieve what they want. For example, users can
          say &apos;Order Burger King&apos; or include parameter(s) such as
          &apos;Order chicken nuggets from Burger King.&apos; Multi-parameter
          queries like such should route users to different parts of the menu
          page. I worked with NLP team to implement this in various domains.
        </ProjectBody>
        <ProjectMedia
          src="/work/brain/reorder-suggestions.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Through data analytics, we found that users tend to make repeated
          orders from the same restaurants. I helped design a feature that
          intelligently suggests restaurants from previous orders.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
