import TextLink from "../TextLink";
import CardVideo from "../CardVideo";
import Image from "next/image";

export default function ProjectMedia(props) {
  return (
    <div className=" block grid rounded-md overflow-hidden col-start-1 md:col-start-5 col-end-13">
      {props.isVideo ? (
        <CardVideo video={props.content} placeholder={props.placeholder} />
      ) : (
        <Image src={props.src} alt="image" placeholder="blur" />
      )}
    </div>
  );
}
