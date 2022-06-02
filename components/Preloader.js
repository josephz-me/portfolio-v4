import GridContainer from "./GridContainer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Preloader(props) {
  return (
    <div
      className={`absolute top-0 w-full h-full overflow-hidden z-10 rounded-md z-10 ${
        props.isContentLoaded
          ? "opacity-0 bg-[rgba(255,255,255,0)]"
          : "opacity-100 animate-pulse bg-[rgba(255,255,255,.03)]"
      }`}
    >
      <p className="text-zinc-500 flex h-full justify-center items-center">
        {props.loadingPhrase}
        <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
        <span className="animate-[bounce_1s_ease-in-out_.1s_infinite]">.</span>
        <span className="animate-[bounce_1s_ease-in-out_.2s_infinite]">.</span>
      </p>
    </div>
  );
}
