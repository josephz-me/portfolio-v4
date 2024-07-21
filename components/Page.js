import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

export default function Page(props) {
  return (
    <>
      <div className="w-full flex items-center flex-col z-[200]">
        <div className="z-10 w-full h-full bg-[#111111] justify-center flex">
          <div
            className={`flex relative flex-col px-3 pb-8 w-full border-b border-solid shadow-xl max-w-8xl z-[9] text-padding md:px-3 border-neutral-800`}
          >
            <Meta />
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
