import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import Image from 'next/image';
import ProjectMedia from '../components/projects/ProjectMedia';
import * as loadingCopy from '../components/loadingCopy';
import { Client } from '@notionhq/client';
import Preloader from '../components/Preloader';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectBody from '../components/projects/ProjectBody';

const gapValue = 'gap-6';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return { props: { notionData: response.results } };
}

export default function Books(props) {
  const books = props.notionData;
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');

  // preloader
  const handleImageLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  return (
    <main className="pt-8">
      <GridContainer>
        <div className="col-start-1 col-end-13 md:col-end-5">
          <ProjectTitle role="">Reading</ProjectTitle>
          <p
            className={`body text-white opacity-80 z-1000 grid-gap mb-6 md:mt-0 `}
          >
            I don't read enough, so I built this reading list as a way to keep
            me accountable — we'll see if it works. All content is linked to a
            Notion table which I linked up via their API.
          </p>
        </div>
        {/* BOOKS */}
        <div className="col-start-1 md:col-start-5 col-end-13 grid-cols-12 grid grid-gap !gap-y-8">
          {books.map((book, index) => {
            //prettier-ignore
            const author = book.properties.author.rich_text[0].plain_text;
            //prettier-ignore
            const description = book.properties.description.rich_text[0].plain_text;
            const image = book.properties.image.url;
            const url = book.properties.url.url;
            const title = book.properties.title.title[0].plain_text;
            return (
              <BookCard
                key={index}
                image={image}
                author={author}
                title={title}
                description={description}
                url={url}
              />
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}

const BookCard = (props) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');

  // preloader
  const handleImageLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);
  return (
    <a
      href={props.url}
      rel="noreferrer"
      target="_blank"
      className="text-white flex flex-col gap-3 col-span-6 md:col-span-4 lg:col-span-3"
    >
      <div className="game-border relative md:mt-1 w-full h-[68vw] md:h-[28vw] lg:h-[22vw] border border-solid border-white/10 shadow-xl overflow-hidden shadow-xl">
        <article
          className={`w-full h-auto transition duration-500 ${
            isContentLoaded ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <Image
            alt="project cover"
            layout="fill"
            className="object-cover"
            src={props.image}
            priority
            onLoadingComplete={() => {
              handleImageLoad();
            }}
          />
        </article>
        <Preloader
          loadingPhrase={loadingPhrase}
          isContentLoaded={isContentLoaded}
        ></Preloader>
      </div>

      <div className="">
        <h1
          className={`caption text-zinc-50`}
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
          }}
        >
          {props.title}
        </h1>
        <p className="caption text-zinc-500">{props.author}</p>
        {props.locked && (
          <p className="absolute text-neutral-100 rounded-md right-4 top-4 px-2 z-10 py-1 bg-gray-800 shadow-xl">
            LOCKED
          </p>
        )}
      </div>
    </a>
  );
};
