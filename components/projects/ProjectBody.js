import GridContainer from '../GridContainer';
import TextLink from '../TextLink';
import { useRouter } from 'next/router';
import CardVideo from '../CardVideo';
import { twMerge } from 'tailwind-merge';

export default function BodyText(props) {
  return (
    <div
      id={props.id}
      className={twMerge(
        'grid-gap col-start-1 col-end-13 mb-2 text-white',
        props.col == 2
          ? 'md:columns-2 md:col-start-5 md:col-end-13'
          : 'md:col-start-5 md:col-end-13 lg:col-end-12'
      )}
    >
      {props.title !== undefined && (
        <h2 className="mt-4 mb-2 h2">✶ {props.title}</h2>
      )}
      <p className={`${props.caption ? 'opacity-60 caption' : 'body'}`}>
        {props.children}
      </p>
    </div>
  );
}
