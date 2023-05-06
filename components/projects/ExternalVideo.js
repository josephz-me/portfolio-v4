import { motion, AnimatePresence, useForceUpdate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Iframe from "react-iframe";

export default function ExternalVideo(props) {
  return (
    <div
      className={`relative w-full overflow-hidden pt-[60.8%] grid md:col-start-5 col-start-1 col-end-13`}
    >
      <iframe
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full border-none"
        src={props.url}
      ></iframe>
    </div>
  );
}
