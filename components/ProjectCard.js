import Link from "next/link";
import CardVideo from "./CardVideo";

export default function ProjectCard(props) {
  return (
    <>
      <a
        href="https://google.com"
        target="_blank"
        className={`${
          props.col == 1
            ? "lg:col-start-1 lg:col-end-7 col-start-1 col-end-13"
            : "lg:col-start-7 lg:col-end-13 col-start-1 col-end-13"
        } grid h-[55vw] lg:h-[27vw] overflow-hidden hover:opacity-90 cursor-pointer`}
      >
        {props.isImage ? (
          <img className="object-cover w-full h-full" src={props.content} />
        ) : (
          <CardVideo video={props.content} placeholder={props.placeholder} />
        )}
      </a>
    </>
  );
}
