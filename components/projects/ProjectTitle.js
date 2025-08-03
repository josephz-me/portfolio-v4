import { cn } from '../../lib/utils';

export default function ProjectTitle(props) {
  return (
    <div
      className={cn(
        'col-span-full md:col-end-4 md:top-[5em] text-zinc-100',
        props.notSticky ? '' : 'md:sticky'
      )}
    >
      <h1 className="mb-1 body">{props.children}</h1>
      <p className="caption text-zinc-500">{props.role}</p>
    </div>
  );
}
