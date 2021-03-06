import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function ProjectTitle(props) {
  return (
    <div className="col-span-full md:col-end-4 md:sticky md:top-[2rem] text-zinc-100">
      <p>{props.children}</p>
      <p className="text-zinc-500">{props.role}</p>
    </div>
  );
}
