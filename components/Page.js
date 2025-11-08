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
      <div className="fixed bottom-0 left-0 right-0 h-10 z-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(0.5px)',
            WebkitBackdropFilter: 'blur(0.5px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 35%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 35%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 18%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 48%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 18%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 48%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 75%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 75%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 78%, rgba(0, 0, 0, 0) 88%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 78%, rgba(0, 0, 0, 0) 88%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 97%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 97%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 1) 100%)',
            WebkitMask:
              'linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 1) 100%)',
          }}
        />
      </div>
    </>
  );
}
