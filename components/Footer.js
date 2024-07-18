import GridContainer from './GridContainer';
import React, { useState, useEffect } from 'react';
import TextLink from './TextLink';
import { useRouter } from 'next/router';
const GLOBAL_SPACING = 'text-padding pb-10 pt-6 md:pb-10 md:pt-8';
const BREAKPOINT = 'col-start-1 col-end-13';

export default function Footer() {
  const pageName = useRouter().asPath;
  const [aboutText, setAboutText] = useState(
    `▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_`
  );

  const [updatedTime, setUpdatedTime] = useState('...');

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/josephz-me/portfolio-v4/commits?per_page=1'
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
      className={`flex flex-col items-center body bg-[#1C1C1C] dot-grid z-[1] w-full sticky bottom-0 text-zinc-100`}
    >
      <GridContainer className="gap-y-8" footerSpacing={GLOBAL_SPACING}>
        <div
          className={`flex-col space-y-2 ${BREAKPOINT} caption md:col-start-1 md:col-end-6`}
        >
          <span className="flex flex-row space-x-2 align-middle">
            <p className="self-center w-min px-2 pt-1 pb-[2px] mono lowercase text-yellow-300 border-yellow-300 border border-solid rounded-full">
              v4.3.0
            </p>
            <p className="self-center px-2 pt-1 pb-[2px] mono uppercase text-zinc-600">
              {`Last updated ${updatedTime.substring(
                0,
                updatedTime.indexOf('T')
              )}`}{' '}
            </p>
          </span>
        </div>

        <span
          className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-7 md:col-end-9`}
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
            <TextLink sameTab super={4} link="/reading-list">
              Reading
            </TextLink>
          </p>
        </span>
        <div className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-9`}>
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
        className={`overflow-hidden relative col-start-1 col-end-13 pb-2 w-full caption text-clip`}
      >
        <p
          className={`whitespace-nowrap text-clip text-zinc-600 hover:text-yellow-600`}
        >
          {aboutText.repeat(10)}
        </p>
      </div>
    </footer>
  );
}
