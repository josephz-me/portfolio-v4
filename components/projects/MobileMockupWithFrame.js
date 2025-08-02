export default function MobileMockupWithFrame({ src, notchless = false, className = '' }) {
  return (
    <div
      className={`relative aspect-[16/12] py-12 overflow-hidden bg-white flex items-center justify-center col-end-13 transition duration-300 col-start-1 md:col-start-5 ${className}`}
    >
      <div className="relative h-full w-auto">
        <video className="h-full w-auto rounded-2xl" src={src} autoPlay muted loop />
        <img
          alt="iphone frame"
          src={notchless ? '/iphone-frame-notchless.png' : '/iphone-frame.png'}
          className="scale-[1.203] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
