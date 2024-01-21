export default function Divider(props) {
  return (
    <hr
      className={`${
        props.full ? 'col-start-1' : 'md:col-start-5'
      } col-end-13 border-[.5x] border-white/[.15] border-solid`}
    />
  );
}
