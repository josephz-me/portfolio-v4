import CardVideo from "../CardVideo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeCard(props) {
  return (
    <Link variants={props.animation} href={`${props.link}`}>
      <div
        className={`${
          props.col == 1
            ? "lg:col-start-1 lg:col-end-7 col-start-1 col-end-13"
            : "lg:col-start-7 lg:col-end-13 col-start-1 col-end-13"
        } ${
          props.link != undefined
            ? "cursor-pointer hover:bg-[rgba(255,255,255,.1)]"
            : "pointer-events-none"
        }
      
      group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md transition-colors duration-500 z-10`}
      >
        <div className="relative h-[60vw] overflow-hidden object-cover lg:h-[29vw] rounded-md">
          {props.isImage ? (
            <Image
              alt="project cover"
              layout="fill"
              objectFit="cover"
              src={props.content}
              priority
            />
          ) : (
            <CardVideo link={props.content} placeholder={props.placeholder} />
          )}
        </div>

        <div className="mt-2">
          <p className={`text-zinc-50`}>{props.title}</p>
          <p className="text-zinc-500">{props.description}</p>
          {props.locked && (
            <p className="absolute text-zinc-300 rounded-md right-4 top-4 z-10 px-2 py-1 bg-[rgba(0,0,0,.5)]">
              LOCKED
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}