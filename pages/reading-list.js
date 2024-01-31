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

export default function ReadingList(props) {
  const [yearCounter, setYearCounter] = useState({});
  const books = props.notionData;

  useEffect(() => {
    console.log(yearCounter);
  }, [yearCounter]);

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
          <ProjectTitle role="">Reading List</ProjectTitle>
          <p
            className={`body text-white opacity-80 z-1000 grid-gap mb-6 md:mt-0 `}
          >
            One of my biggest goals is to read more. With no one to keep me
            accountable, I built this list in hopes that you all will. This list
            is not complete. The content on this page is managed in Notion and
            fetched via the{' '}
            <TextLink url="https://developers.notion.com/">Notion API</TextLink>
            .
          </p>

          {Object.entries(yearCounter).map(([year, count]) => (
            <div
              key={year}
              className="py-2 border-t border-solid flex flex-auto border-white/10 text-white opacity-60 caption gap-4 "
            >
              <p>
                {year} - {count} books{' '}
              </p>
            </div>
          ))}
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
