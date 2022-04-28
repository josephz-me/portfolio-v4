import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function BodyText(props) {
  return (
    <p
      className={`${
        props.col == 2
          ? "md:columns-2 md:col-start-5 md:col-end-13"
          : "md:col-start-5 md:col-end-13"
      } ${
        props.caption ? "opacity-50" : ""
      } text-white gap-6  col-start-1 col-end-13 mb-8`}
    >
      {props.children}
    </p>
  );
}
