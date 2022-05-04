import Head from "next/head";
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
import MobileMockupVideo from "../components/projects/MobileMockupVideo";

import Notifs from "../public/work/brain/notifications.jpg";
import FoodCheckout from "../public/work/brain/food-checkout.jpg";
import FluidSearch from "../public/work/brain/fluid-search.jpg";
import Declined from "../public/work/brain/declined.jpg";
import Meetup from "../public/work/brain/meetup-1.jpg";

import Multiparam1 from "../public/work/brain/multiparam-1.jpg";
import Multiparam2 from "../public/work/brain/multiparam-2.jpg";

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
        <ProjectHero content="/project-covers/natural.jpg" />
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

        <MobileMockupVideo src="work/brain/fluid-search.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Worked with Gleb to design a search bar for all domains, which
          improved UI visiblity and clarity.
        </ProjectBody>

        <ProjectDetails
          role={["design intern"]}
          collaborators={["jerry yue (ceo)", "Gleb Kuznetsov"]}
          duration="8 months"
          tools={["figma", "origami studio"]}
        />

        <ProjectMedia src={Notifs}></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Redesigned notifications to be more communicative and systematic
          across domains.
        </ProjectBody>
        <ProjectMedia src={FoodCheckout}></ProjectMedia>
        <ProjectBody col={1} caption={true}>
          Designed a better way for people to view their preferences and
          purchase details.
        </ProjectBody>
        <MobileMockupVideo src="/work/brain/food-preferences.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Expandable cards that can be collapsed for a more compact view.
        </ProjectBody>
        <ProjectMedia src={Meetup}></ProjectMedia>

        <ProjectBody col={1} caption={true}>
          Led designs for an experimental feature, Meet up, where users can find
          restaurants and make reservations based on location and preference.
          The app leverages user location data to find top Yelp rated
          restaurants geographically close to both users.
        </ProjectBody>

        <MobileMockupVideo src="/work/brain/reorder-suggestions.mp4"></MobileMockupVideo>
        <ProjectBody col={1} caption={true}>
          Prototyped intelligent restaurant suggestions based on user preference
          and order history.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
