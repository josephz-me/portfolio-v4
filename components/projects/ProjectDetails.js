import GridContainer from "../GridContainer";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import CardVideo from "../CardVideo";

export default function ProjectDetails(props) {
  const roles = props.role.map((role) => (
    <p className="text-zinc-500">{role}</p>
  ));

  const collaborators = props.collaborators.map((people) => (
    <p className="text-zinc-500">{people}</p>
  ));

  let tools;
  if (props.tools) {
    tools = props.tools.map((tool) => <p className="text-zinc-500">{tool}</p>);
  }

  return (
    <>
      <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 ">
        <p className="text-zinc-100">Role</p>
        {roles}
      </div>
      <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9">
        <p className="text-zinc-100">
          {props.replaceCollab ? props.replaceCollab : "Collaborators"}
        </p>
        {collaborators}
      </div>
      <div className="col-start-1 col-end-7 md:col-start-9 md:col-end-11 mb-8">
        <p className="text-zinc-100">Duration</p>
        <p className="text-zinc-500">{props.duration}</p>
      </div>
      {props.tools && (
        <div className="col-start-7 col-end-13 md:col-start-11 md:col-end-13 mb-8 ">
          <p className="text-zinc-100">Tools</p>
          {tools}
        </div>
      )}
    </>
  );
}
