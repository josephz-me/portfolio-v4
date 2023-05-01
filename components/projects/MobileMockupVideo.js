export default function MobileMockupVideo(props) {
  return (
    <div className="overflow-hidden bg-white block rounded-xl col-start-1 md:col-start-5 col-end-13">
      <video
        className=" flex w-[80%] md:w-[40%] mx-auto "
        autoPlay
        playsInline
        loop
        muted
        src={props.src}
      />
    </div>
  );
}
