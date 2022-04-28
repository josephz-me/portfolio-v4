export default function GridContainer(props) {
  return (
    <section className="grid grid-cols-12 gap-4 md:gap-6 relative">
      {props.children}
    </section>
  );
}
