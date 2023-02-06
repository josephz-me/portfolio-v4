export default function TextLink(props) {
  return (
    <>
      <a
        className="border-dotted bg-white/0 hover:bg-white/10 px-[2px] hover:text-yellow-300 pt-[2px] border-b-[1px] border-solid border-[rgba(255,255,255,.5)] hover:border-yellow-300"
        target="_blank"
        rel="noreferrer"
        href={props.link}
      >
        {props.children}
      </a>
      <sup
        className={`${
          props.super ? "font-mono" : "font-sans"
        }  text-[10px] font-light text-yellow-300`}
      >
        {props.super ? props.super : "↗"}
      </sup>
    </>
  );
}
