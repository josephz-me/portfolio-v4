export default function ProjectTitle(props) {
  return (
    <div className="col-span-full md:col-end-4 md:sticky md:top-[2rem] text-zinc-100">
      <h1 className="h1 mb-1 md:mb-2 ">{props.children}</h1>
      <p className="text-zinc-500">{props.role}</p>
    </div>
  );
}
