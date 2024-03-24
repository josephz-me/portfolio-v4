export default function ProjectTitle(props) {
  return (
    <div className="col-span-full md:col-end-4 md:sticky md:top-[5em] text-zinc-100">
      <h1 className="h1 mb-1">{props.children}</h1>
      <p className="caption text-zinc-500">{props.role}</p>
    </div>
  );
}
