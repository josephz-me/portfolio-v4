import Link from "next/link";
import CardVideo from "./CardVideo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <motion.div
      variants={props.animation}
      className={`${
        props.col == 1
          ? "lg:col-start-1 lg:col-end-7 col-start-1 col-end-13"
          : "lg:col-start-7 lg:col-end-13 col-start-1 col-end-13"
      } grid h-[55vw] lg:h-[27vw] hover:bg-[rgba(255,255,255,.09)] cursor-pointer p-2 bg-[rgba(255,255,255,.05)] rounded-md transition-colors`}
    >
      <a
        href={props.link}
        className="overflow-hidden rounded-md"
        target="_blank"
      >
        {props.isImage ? (
          <img className="object-cover w-full h-full" src={props.content} />
        ) : (
          <CardVideo video={props.content} placeholder={props.placeholder} />
        )}
      </a>
      <p className="mt-2 text-zinc-50">{props.title}</p>
      <p className="text-[rgba(255,255,255,.5)]">{props.description}</p>
    </motion.div>
  );
}
