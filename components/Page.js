import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Script from "next/script";
import React, { useEffect, useState } from "react";

export default function Page(props) {
  return (
    <>
      <div className="z-[9] relative md:px-1 px-2 py-8 w-full bg-[#111111] border-b border-solid border-neutral-800 shadow-xl">
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        <Meta />
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </>
  );
}
