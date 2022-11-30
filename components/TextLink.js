export default function TextLink(props) {
  return (
    <>
    <a
      className="border-dotted bg-white bg-opacity-0 hover:bg-opacity-10 px-[2px] pt-[2px] border-b-[1px] border-solid border-[rgba(255,255,255,.2)] hover:border-[rgba(255,255,255,.4)]"
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      {props.children}
    </a>
    <sup className={`${props.super ? "font-mono" : "font-sans"}  text-[10px] font-light text-yellow-300`}>{props.super ? props.super : "↗"}</sup>
    </>
  );
}
