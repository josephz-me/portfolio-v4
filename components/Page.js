import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Page(props) {
  return (
    <>
      <div className="bg-white w-full flex items-center flex-col z-[200]">
        <div
          className={`bg-[#111111] z-[9] duration-500 text-padding relative flex flex-col px-3 md:px-3 pb-8 w-full border-b border-solid border-neutral-800 shadow-xl`}
        >
          <Meta />
          <Navbar />
          {props.children}

          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        </div>
      </div>
      <Footer />
    </>
  );
}
