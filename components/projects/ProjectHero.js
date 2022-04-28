import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function ProjectHero(props) {
  return (
    <div className="rounded-md my-2 md:my-8 h-[60vw] md:h-[40vw] object-cover w-full grid col-span-12">
      {props.isImage ? (
        <img
          className="object-cover overflow-hidden h-full w-full rounded-md"
          src={props.content}
        />
      ) : (
        <CardVideo video={props.content} placeholder={props.placeholder} />
      )}
    </div>
  );
}
