export default function LinkCard(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      rel="noreferrer"
      className={` ${
        props.col == 1
          ? 'md:col-start-5 md:col-end-9'
          : 'md:col-start-9 md:col-end-13'
      } select-none caption group text-white/80 bg-white/[.05] col-span-full hover:bg-white/10 hover:text-white flex items-center flex-row p-4 rounded-md game-border`}
    >
      <p>{props.children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-3 w-3 ml-auto stroke-[3px] stroke-white/30 group-hover:stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}
