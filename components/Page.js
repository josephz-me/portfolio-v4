import Footer from './Footer';
import Meta from './Meta';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';

export default function Page(props) {
  const [bgColor, setBgColor] = useState(false);

  const changeBG = () => {
    setBgColor(true);
    setTimeout(() => {
      setBgColor(false);
    }, 500);
  };

  return (
    <>
      <div
        className={`${
          bgColor ? 'bg-[#181818]' : 'bg-[#111111]'
        } z-[9] transition-colors duration-500 text-padding relative p-4 md:p-8 w-full border-b border-solid border-neutral-800 shadow-xl`}
      >
        <Meta />
        <Navbar changeBG={changeBG} />
        {props.children}
        <Analytics />
      </div>
      <Footer />
    </>
  );
}
