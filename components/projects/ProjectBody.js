import GridContainer from '../GridContainer';
import TextLink from '../TextLink';
import { useRouter } from 'next/router';
import CardVideo from '../CardVideo';

export default function BodyText(props) {
  return (
    <div
      id={props.id}
      className={`${
        props.col == 2
          ? 'md:columns-2 md:col-start-5 md:col-end-13'
          : 'md:col-start-5 md:col-end-13'
      } gap-6 col-start-1 col-end-13 mb-2 text-white`}
    >
      {props.title !== undefined && (
        <h2 className="h2 mt-4 mb-2">✶ {props.title}</h2>
      )}
      <p
        className={`${
          props.caption ? 'opacity-60 caption' : 'opacity-90 body'
        }`}
      >
        {props.children}
      </p>
    </div>
  );
}
