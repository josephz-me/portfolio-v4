import Link from 'next/link';
import Media from '../Media';

export default function ProjectCard({ isVideo = false, ...props }) {
  return (
    <Link passHref variants={props.animation} href={`${props.link}`}>
      <a
        target={props.isExternal ? '_blank' : ''}
        className={`${
          //determine if project is linked
          props.link != undefined ? 'cursor-pointer' : 'pointer-events-none'
        }
      group relative grid w-full opacity-100 inline-block select-none`}
      >
        <Media
          className="game-border"
          isVideo={isVideo}
          src={props.content}
          responsive
        />

        <div className="mt-3">
          <h1 className={`caption text-zinc-50`}>{props.title}</h1>
          <p className="caption text-zinc-500">{props.description}</p>
          {props.locked && (
            <p className="absolute text-neutral-100 rounded-md right-4 top-4 px-2 z-10 py-1 bg-gray-800 shadow-xl">
              LOCKED
            </p>
          )}
        </div>
      </a>
    </Link>
  );
}
