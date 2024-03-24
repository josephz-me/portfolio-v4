import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Page(props) {
  return (
    <>
      <div
        className={`bg-[#111111] z-[9] transition-colors duration-500 text-padding relative px-4 md:px-8 w-full border-b border-solid border-neutral-800 shadow-xl`}
      >
        <Meta />
        <Navbar />
        {props.children}

        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
      </div>
      <Footer />
    </>
  );
}
