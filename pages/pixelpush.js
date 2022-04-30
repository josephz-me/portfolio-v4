import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  SwitchLayoutGroupContext,
} from "framer-motion";
import TextLink from "../components/TextLink";
import GridContainer from "../components/GridContainer";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectBody from "../components/projects/ProjectBody";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectTitle from "../components/projects/ProjectTitle";
import ExternalVideo from "../components/projects/ExternalVideo";
import LinkCard from "../components/projects/LinkCard";
import Link from "next/link";

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

export default function PixelPush() {
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
        <ProjectHero
          isImage={true}
          content="/work/pixelpush/pixelpush-placeholder.jpg"
        />
        <ProjectTitle role="Designer & Co-developer">Pixel Push</ProjectTitle>
        <ProjectBody col={2}>
          Tools shape the way we express ourselves and share our ideas. From
          Microsoft Paint to more complex tools such as Adobe Photoshop, the
          affordances of creative applications heavily influence the way we
          create. Pixel Push is a collaborative painting experience that
          reimagines art in the digital space through experimentation with audio
          recognition and webcam image-capture. Instead of solid hex code or RGB
          values, users paint with webcam video and the microphone audio. This
          project was advised by Professor Kyuha Shim and developed in
          collaboration with Sophia Kim, Margot Gersing, Elizabeth Han, Vicky
          Zhou
        </ProjectBody>

        <LinkCard link="https://josephz.notion.site/Pixel-Push-48910c3a971747b0b6fc3f31572b9984">
          View complete documentation
        </LinkCard>
        <video
          playsInline
          controls
          preload="metadata"
          poster="/work/pixelpush/pixelpush-placeholder.jpg"
          loop
          className="md:col-start-5 col-span-full object-cover overflow-hidden"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/42331844-b0e5-4109-b186-fc8334a913a9/pixe-push-joseph-zhang-UPDATED.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220429T195915Z&X-Amz-Expires=86400&X-Amz-Signature=febb6c39d746c086c3557cd04b25ef19f9ed135845fcc145c36fd55be2347f58&X-Amz-SignedHeaders=host&x-id=GetObject"
        />

        <ProjectMedia
          src="/work/pixelpush/gallery-art.jpg"
          isImage={true}
        ></ProjectMedia>
        <ProjectBody caption={true}>
          Some of the art made with our collaborative painting tool!
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
