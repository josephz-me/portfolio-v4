export default function TextLink(props) {
  return (
    <a
      className="border-b-[.5px] border-solid border-[rgba(255,255,255,.2)] hover:border-[rgba(255,255,255,.3)]"
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      {props.children}
    </a>
  );
}