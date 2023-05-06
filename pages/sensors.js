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
import LinkCard from "../components/projects/LinkCard";
import Spacer from "../components/projects/Spacer";
import ExternalVideo from "../components/projects/ExternalVideo";
import GalleryArt from "../public/work/pixelpush/gallery-art.jpg";
import LE_1 from "../public/work/experiments/LE-1.jpg";
import LE_2 from "../public/work/experiments/LE-2.jpg";
import LE_3 from "../public/work/experiments/LE-3.jpg";
import Divider from "../components/projects/Divider";

export default function Brain() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/work/experiments/LE-3.jpg" />
        <ProjectTitle role="Anything & Everything">Experiments</ProjectTitle>
        <ProjectBody col={2}>
          {`A collection of experimental projects I pursued for joy and curiosity.
          Projects range from large collaborative projects done at Carnegie Mellon to
          mini prototypes built over a weekend. If any of these ideas resonate
          with you, would love to talk.`}
        </ProjectBody>
        <Divider />
        <ProjectBody title="Sensor Interfaces">
          Small experiments exploring alternative input modalities. Each project
          was completed with an Arduino Uno and a few thoughtfully selected
          sensors.
        </ProjectBody>
        <ProjectMedia
          hasControl
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bc51589b-83e1-4394-8693-72f01371a7ff/sensor-matrix-c.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230316T041115Z&X-Amz-Expires=86400&X-Amz-Signature=545d5d48747249cea68f736e3a1ad6a989d7c85c9ba2aadf902f0045dbbe5b5d&X-Amz-SignedHeaders=host&x-id=GetObject"
          isVideo
          poster="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c858b573-7005-45a9-8caa-2b94e76352bf/sensor-matrix-poster.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230316T042420Z&X-Amz-Expires=86400&X-Amz-Signature=27dee83df459c50994103ca86655963fb3c5dd44cb0fe57fd98e687cf493de2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22sensor-matrix-poster.jpg%22&x-id=GetObject"
        >
          A reverse space invasion game using an accelerometer and 8x8 LED
          board.
        </ProjectMedia>
        <ProjectMedia
          hasControl
          poster="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5d1b8ac8-a5b5-43fa-817e-dfa07159812e/Screenshot_2023-03-15_at_9.26.14_PM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230316T042657Z&X-Amz-Expires=86400&X-Amz-Signature=5586953897af7b8e6ace4305a845dbf27bd42b1e2b20d7238cb09836752e336d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202023-03-15%2520at%25209.26.14%2520PM.jpg%22&x-id=GetObject"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c248e905-4e7f-41bd-b18a-fdcb2ec6da15/sensor-chess.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230316T040537Z&X-Amz-Expires=86400&X-Amz-Signature=db31c5f5d5c48f65b55931705acf519fa02f04c303dd59ac62a904cb1ca06dbc&X-Amz-SignedHeaders=host&x-id=GetObject"
          isVideo
        >
          Touchless chess clock leveraging 2 Time-of-Flight distance sensors.
          Players set and confirm time settings based on hand duration and
          proximity.
        </ProjectMedia>
        <Divider />
        <ProjectBody title="Lighting Engine">
          {`This was a form exploration from my time at Carnegie Mellon's School
          of Design. My prompt was to design a lamp, or lighting engine, that
          eased a person's ability to sleep. This form was inspired by the organic forms of
          shells and the hues of a himalayan salt lamp.`}
        </ProjectBody>
        <ProjectMedia src={LE_1}></ProjectMedia>
        <ProjectMedia src={LE_2}></ProjectMedia>
        <ProjectMedia src={LE_3}></ProjectMedia>
        <Divider />
        <Spacer />
      </GridContainer>
    </motion.main>
  );
}
