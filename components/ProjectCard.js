export default function ProjectCard(props) {
  return (
    <div
      class={`${
        props.col == 1 ? "col-start-3 col-end-8" : "col-start-8 col-end-13"
      } grid bg-red-400 h-[25vw] overflow-hidden hover:opacity-90 cursor-pointer z-10`}
    >
      <img class="object-cover w-full h-full" src={props.image} />
    </div>
  );
}
