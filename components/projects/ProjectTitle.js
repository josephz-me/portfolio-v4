import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function ProjectTitle(props) {
  return <p className="grid col-start-1 text-white">{props.children}</p>;
}
