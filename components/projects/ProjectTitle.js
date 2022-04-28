import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function ProjectTitle(props) {
  return (
    <p className="grid col-start-1 col-end-5 md:sticky md:top-[2rem] text-white">
      {props.children}
    </p>
  );
}
