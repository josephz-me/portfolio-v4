import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import { BookList } from "./Booklist";

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
          bgColor ? "bg-[#181818]" : "bg-[#111111]"
        } z-[9] transition-colors duration-500 text-padding relative py-8 w-full border-b border-solid border-neutral-800 shadow-xl`}
      >
        <Meta />
        <Navbar changeBG={changeBG} />
        <BookList />
        {props.children}
      </div>
      <Footer />
    </>
  );
}
