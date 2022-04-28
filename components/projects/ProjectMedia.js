import TextLink from "../TextLink";
import CardVideo from "../CardVideo";

export default function ProjectMedia(props) {
  return (
    <div className="rounded-md grid col-start-1 md:col-start-5 col-end-13 bg-black">
      {props.isImage ? (
        <img className="w-full h-auto" src={props.src} />
      ) : (
        <CardVideo video={props.content} placeholder={props.placeholder} />
      )}
    </div>
  );
}
