import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import { Analytics } from '@vercel/analytics/react';

export default function Page(props) {
  return (
    <>
      <div
        className={`bg-[#111111] z-[9] transition-colors duration-500 text-padding relative p-4 md:p-8 w-full border-b border-solid border-neutral-800 shadow-xl`}
      >
        <Meta />
        <Navbar />
        {props.children}
        <Analytics />
      </div>
      <Footer />
    </>
  );
}
