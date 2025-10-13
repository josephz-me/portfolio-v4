import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

export default function Page({ meta, ...props }) {
  return (
    <>
      <div className="w-full flex items-center flex-col z-[200] border-neutral-800  border-b border-solid ">
        <div className="z-10 w-full h-full bg-[#111111] justify-center flex">
          <div className={`flex relative flex-col px-3 pb-8 w-full shadow-xl max-w-8xl z-[9] `}>
            <Meta {...meta} />
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
