import TextLink from "../TextLink";
import CardVideo from "../CardVideo";

export default function ProjectMedia(props) {
  return (
    <div className=" grid col-start-1 md:col-start-5 object-cover col-end-13">
      {props.isImage ? (
        <img className="w-full rounded-md h-full" src={props.src} />
      ) : (
        <CardVideo video={props.content} placeholder={props.placeholder} />
      )}
    </div>
  );
}
