import GridContainer from '../GridContainer';
import TextLink from '../TextLink';
import { useRouter } from 'next/router';
import CardVideo from '../CardVideo';

export default function ProjectDetails(props) {
  const roles = props.role.map((role, index) => (
    <p className="text-white body" key={index}>
      {role}
    </p>
  ));

  const collaborators = props.collaborators.map((people, index) => (
    <p className="text-white body" key={index}>
      {people}
    </p>
  ));

  let tools;
  if (props.tools) {
    tools = props.tools.map((tool, index) => (
      <p key={index} className="text-white body">
        {tool}
      </p>
    ));
  }

  return (
    <>
      <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
        <p className="text-white/40 caption">Role</p>
        {roles}
      </div>
      <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
        <p className="text-white/40 caption">
          {props.replaceCollab ? props.replaceCollab : 'Collaborators'}
        </p>
        {collaborators}
      </div>
      <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
        <p className="text-white/40 caption">Duration</p>
        <p className="text-white body">{props.duration}</p>
      </div>
      {props.tools && (
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13">
          <p className="text-white/40 caption">Tools</p>
          {tools}
        </div>
      )}
    </>
  );
}
