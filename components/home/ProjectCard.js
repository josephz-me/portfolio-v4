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
      group relative grid w-full opacity-100 inline-block select-none group`}
      >
        <div className="relative">
          <Media
            className="game-border"
            isVideo={isVideo}
            src={props.content}
            responsive
          />

          {props.notionLabel && (
            <div
              rel="noreferrer"
              href="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family"
              target="_blank"
              className="transition duration-200 border border-black/20 border-solid w-fit flex items-center gap-2 absolute bottom-4 z-20 left-[50%] translate-x-[-50%] w-[179px] px-3 py-1 bg-white text-black rounded-full"
            >
              <p className="body text-xs uppercase font-medium">
                Acquired by Notion
              </p>

              <img
                src="/notion-logo.svg"
                alt="Notion Logo"
                className="w-[14px] h-[14px]"
              />
            </div>
          )}
        </div>

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
