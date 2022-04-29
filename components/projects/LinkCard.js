import { motion, AnimatePresence, useForceUpdate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LinkCard(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      rel="noreferrer"
      className={` ${
        props.col == 1
          ? "md:col-start-5 md:col-end-9"
          : "md:col-start-9 md:col-end-13"
      } group text-zinc-100 bg-[rgba(255,255,255,.1)] opacity-50 col-span-full hover:opacity-100 flex items-center flex-row p-4 rounded-md transition-opacity`}
    >
      <p>{props.children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-auto group-hover:translate-x-[2px] transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
