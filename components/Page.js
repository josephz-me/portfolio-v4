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
      <div 
        className="fixed bottom-0 left-0 right-0 h-10 z-10 backdrop-blur-md"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          background: 'linear-gradient(to bottom, white 0%, transparent 100%)'
        }}
      />
    </>
  );
}
