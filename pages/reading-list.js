import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import Image from 'next/image';
import Media from '../components/Media';
import ProjectMedia from '../components/projects/ProjectMedia';
import * as loadingCopy from '../components/loadingCopy';
import { Client } from '@notionhq/client';
import Preloader from '../components/Preloader';
import ProjectTitle from '../components/projects/ProjectTitle';

const gapValue = 'gap-6';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return { props: { notionData: response.results }, revalidate: 1 };
}

export default function ReadingList(props) {
  const [yearCounter, setYearCounter] = useState({});
  const books = props.notionData;

  useEffect(() => {
    // Function to count occurrences of years
    const countYears = () => {
      const counts = {};
      books.forEach((book) => {
        const year = book.properties.year.select.name;
        counts[year] = (counts[year] || 0) + 1;
      });
      return counts;
    };

    // Update state with the counts
    setYearCounter(countYears());
  }, []);

  return (
    <main className="pt-8">
      <GridContainer>
        <div className="col-start-1 col-end-13 md:col-end-5">
          <TitleCard yearCounter={yearCounter} role="">
            Reading List
            <span className="ml-2 text-yellow-300">{books.length}</span>
          </TitleCard>
        </div>
        {/* BOOKS */}
        <div className="col-start-1 md:col-start-5 col-end-13 grid-cols-12 grid grid-gap !gap-y-8">
          {books.map((book, index) => {
            const author = book.properties.author.rich_text[0].plain_text;
            // const description = book.properties.description.rich_text[0].plain_text;
            const image = book.properties.image.url;
            const url = book.properties.url.url;
            const title = book.properties.title.title[0].plain_text;
            return (
              <BookCard
                key={index}
                image={image}
                author={author}
                title={title}
                url={url}
              />
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}

const TitleCard = (props) => {
  return (
    <div className="col-span-full md:col-end-4 md:sticky md:top-[5.3em] text-zinc-100">
      <h1 className="mb-1 h1">{props.children}</h1>
      <p className="caption text-zinc-500">{props.role}</p>
      <p className={`mb-6 text-white body z-1000 grid-gap md:mt-0`}>
        One of my biggest goals is to read more books. This list is always
        evolving as I find new stuff to read. I use Notion to keep track of
        everything, and the list here updates automatically through the{' '}
        <TextLink url="https://developers.notion.com/">Notion API</TextLink>. If
        you ever have suggestions, send me a message!
      </p>

      {Object.entries(props.yearCounter).map(([year, count]) => (
        <div
          key={year}
          className="flex flex-auto gap-4 py-2 text-white border-t border-solid opacity-60 border-white/10 caption"
        >
          <p>
            {year} - {count} books{' '}
          </p>
        </div>
      ))}
    </div>
  );
};

const BookCard = (props) => {
  return (
    <a
      href={props.url}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col col-span-6 gap-3 text-white group md:col-span-4 lg:col-span-3"
    >
      <div className="hover:bg-white/[.15] group flex items-center justify-center bg-white/10 h-[68vw] md:h-[28vw] lg:h-[22vw] border-white/10 p-6 md:p-8">
        <img
          className="overflow-hidden w-full h-auto rounded-sm shadow-md brightness-105 transition ease-out md:group-hover:brightness-110 md:group-active:scale-[.98] md:group-active:translate-y-1 md:group-hover:-translate-y-1"
          src={props.image}
        />
      </div>

      <div className="">
        <h1
          className={`text-white body`}
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
          }}
        >
          {props.title}
        </h1>
        <p className="body text-zinc-500">{props.author}</p>
        {props.locked && (
          <p className="absolute top-4 right-4 z-10 px-2 py-1 bg-gray-800 rounded-md shadow-xl text-neutral-100">
            LOCKED
          </p>
        )}
      </div>
    </a>
  );
};
