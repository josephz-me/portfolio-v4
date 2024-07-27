import { twMerge } from 'tailwind-merge';
import ProjectBody from './ProjectBody';

export default function MobileMockupVideo(props) {
  return (
    <>
      <div className="block overflow-hidden col-start-1 col-end-13 bg-white md:col-start-5">
        <video
          className={twMerge(
            'flex mx-auto',
            props.zoomed ? 'md:w-[60%] w-[95%]' : 'md:w-[40%] w-[80%]'
          )}
          autoPlay
          playsInline
          loop
          muted
          src={props.src}
        />
      </div>
      {props.children && <ProjectBody caption>{props.children}</ProjectBody>}
    </>
  );
}
