import GridContainer from "./GridContainer";
import React, { useState, useEffect } from "react";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import { BookList, DialogTrigger, DialogRoot } from "./BookList";
const GLOBAL_SPACING = "text-padding pb-10 pt-6 md:pb-10 md:pt-8";
const BREAKPOINT = "col-start-1 col-end-13";

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const pageName = useRouter().asPath;
  const [aboutText, setAboutText] = useState(
    `▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_REPLICA TYPE_`
  );

  const [updatedTime, setUpdatedTime] = useState("...");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/josephz-me/portfolio-v4/commits?per_page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setUpdatedTime(res[0].commit.author.date);
      });
  }, []);

  //change footer
  useEffect(() => {
    const interval = setInterval(() => {
      setAboutText((aboutText) => aboutText.slice(-1) + aboutText.slice(0, -1));
    }, 300);
    return () => clearInterval(interval);
  }, [aboutText]);

  return (
    <footer
      className={`bg-[#1C1C1C] dot-grid z-[1] w-full sticky bottom-0 text-zinc-100 ${
        pageName == "/" ? "" : ""
      }`}
    >
      <GridContainer footerSpacing={GLOBAL_SPACING}>
        <div
          className={`${BREAKPOINT} md:col-start-1 md:col-end-6 flex-col space-y-2`}
        >
          <span className="flex-row flex align-middle space-x-2">
            <p className="self-center w-min px-2 pt-1 pb-[2px] mono lowercase text-yellow-300 border-yellow-300 border border-solid rounded-full">
              v4.2.2
            </p>
            <p className="self-center px-2 pt-1 pb-[2px] mono uppercase text-zinc-600">
              {`Last updated ${updatedTime.substring(
                0,
                updatedTime.indexOf("T")
              )}`}{" "}
            </p>
          </span>
        </div>

        <span
          className={`${BREAKPOINT} md:col-start-7 md:col-end-9 flex flex-col space-y-1`}
        >
          <p>
            <TextLink super={1} link="https://www.linkedin.com/in/josephzme/">
              Linkedin
            </TextLink>
          </p>
          <p>
            <TextLink super={2} link="https://www.instagram.com/josephhhz/">
              Instagram
            </TextLink>
          </p>
          <p>
            <TextLink super={3} link="https://twitter.com/0xTraderJo">
              Twitter
            </TextLink>
          </p>
          <p>
            <DialogRoot open={open} setOpen={setOpen}>
              <DialogTrigger>
                <div className="!absolute game-border bottom-6 right-6 p-4 hover:bg-zinc-700 hover:scale-[1.05]  bg-zinc-800 h-fit w-fit rounded-full shadow-2xl border border-solid border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 "
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
              </DialogTrigger>
              <BookList open={open} />
            </DialogRoot>
          </p>
        </span>
        <div className={`${BREAKPOINT} md:col-start-9 flex flex-col space-y-1`}>
          <p>{`Let's build something together.`}</p>
          <span>
            <TextLink
              super={5}
              link="mailto:jxsephz@gmail.com"
            >{`jxsephz@gmail.com`}</TextLink>
          </span>
        </div>
      </GridContainer>
      {/* animated text bar */}
      <div
        className={`relative col-start-1 col-end-13 pb-2 text-clip overflow-hidden`}
      >
        <p
          className={`text-clip text-zinc-600 hover:text-yellow-600 whitespace-nowrap`}
        >
          {aboutText.repeat(10)}
        </p>
      </div>
    </footer>
  );
}
