import Link from "next/link";
import CardVideo from "./CardVideo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectCard(props) {
  console.log(props.link);
  return (
    <motion.div
      variants={props.animation}
      className={`${
        props.col == 1
          ? "lg:col-start-1 lg:col-end-7 col-start-1 col-end-13"
          : "lg:col-start-7 lg:col-end-13 col-start-1 col-end-13"
      } ${
        props.link != undefined
          ? "cursor-pointer hover:bg-[rgba(255,255,255,.1)]"
          : ""
      }
      
      group relative grid h-[60vw] lg:h-[29vw]  p-2 bg-[rgba(255,255,255,.03)] rounded-md transition-colors duration-500 z-10`}
    >
      <a
        href={props.link}
        className="overflow-hidden rounded-md"
        rel="noreferrer"
        target="_blank"
      >
        {props.isImage ? (
          <img className="object-cover w-full h-full" src={props.content} />
        ) : (
          <CardVideo video={props.content} placeholder={props.placeholder} />
        )}
      </a>
      <div className=" grid mt-2 grid-cols-[1fr_auto] items-center">
        <div>
          <p className={`text-zinc-50`}>{props.title}</p>
          <p className="text-zinc-500">{props.description}</p>
          {props.locked && (
            <p className="absolute text-zinc-300 rounded-md right-4 top-4 z-10 px-2 py-1 bg-[rgba(0,0,0,.5)]">
              LOCKED
            </p>
          )}
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/motion.svg"
          className={`translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-6 w-6 text-zinc-100
           justify-self-end mr-2 transition-all`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg> */}
      </div>
    </motion.div>
  );
}
