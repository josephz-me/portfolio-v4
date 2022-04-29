import { motion, AnimatePresence, useForceUpdate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Iframe from "react-iframe";

export default function ExternalVideo(props) {
  return (
    <div className="relative grid md:col-start-5 col-start-1 col-span-full h-[50px] w-full pb-[56.25%] mt-12">
      <Iframe
        url={props.url}
        className="iFrameDetails"
        position="absolute"
        width="100%"
        height="100%"
        display="initial"
        frameBorder="0"
        allow="fullscreen"
      />
    </div>
  );
}
