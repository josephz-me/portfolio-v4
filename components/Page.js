import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

export default function Page(props) {
  return (
    <div className="md:px-6 px-4 pt-8 w-full">
      <Meta />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
