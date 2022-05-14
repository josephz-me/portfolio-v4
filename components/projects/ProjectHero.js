import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";
import Image from "next/image";

export default function ProjectHero(props) {
  return (
    <div className="relative overflow-hidden rounded-md my-2 md:my-8 h-[60vw] md:h-[49vw] object-cover w-full grid col-span-12">
      {props.isVideo ? (
        <CardVideo src={props.content} placeholder={props.placeholder} />
      ) : (
        <Image
          alt="project hero"
          layout="fill"
          objectFit="cover"
          src={props.content}
          priority
        />
      )}
    </div>
  );
}
