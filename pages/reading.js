import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import * as motion from 'motion/react-client';

const gapValue = 'gap-6';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_READING_ID,
  });

  return { props: { notionData: response.results }, revalidate: 1 };
}

export default function ReadingList(props) {
  const [yearCounter, setYearCounter] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const books = props.notionData;

  useEffect(() => {
    // Function to count occurrences of years
    const countYears = () => {
      const counts = {};
      books.forEach(book => {
        const year = book.properties.year.select.name;
        counts[year] = (counts[year] || 0) + 1;
      });
      return counts;
    };

    // Update state with the counts
    setYearCounter(countYears());
  }, []);

  // Filter books based on selected year
  const filteredBooks = selectedYear
    ? books.filter(book => book.properties.year.select.name === selectedYear)
    : books;

  // Sort books alphabetically by title
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    const titleA = a.properties.title.title[0]?.plain_text || '';
    const titleB = b.properties.title.title[0]?.plain_text || '';
    return titleA.localeCompare(titleB);
  });

  return (
    <main className="pt-8">
      <GridContainer>
        <div className="col-start-1 col-end-13 md:col-end-5">
          <TitleCard
            yearCounter={yearCounter}
            role=""
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          >
            Books
            <span className="ml-2 text-yellow-300">{sortedBooks.length}</span>
          </TitleCard>
        </div>
        {/* BOOKS */}
        <div className="col-start-1 md:col-start-5 col-end-13 grid-cols-12 grid grid-gap !gap-y-8">
          {sortedBooks.map((book, index) => {
            const author = book.properties.author.rich_text[0]?.plain_text || '';
            // const description = book.properties.description.rich_text[0]?.plain_text || '';
            const image = book.properties.image?.url || '';
            const url = book.properties.url?.url || '';
            const title = book.properties.title.title[0]?.plain_text || '';
            const bookId = book.id;
            return (
              <BookCard
                key={bookId}
                image={image}
                author={author}
                title={title}
                url={url}
                index={index}
              />
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}

const TitleCard = props => {
  const handleYearClick = year => {
    // Toggle selection: if clicking the same year, clear filter
    if (props.selectedYear === year) {
      props.setSelectedYear(null);
    } else {
      props.setSelectedYear(year);
    }
  };

  return (
    <div className="col-span-full md:col-end-4 md:sticky md:top-[5.3em] text-zinc-100">
      <p className="caption text-zinc-500">{props.role}</p>
      <p className={`mb-6 text-white body z-1000 grid-gap md:mt-0`}>
        Reading helps me better understand myself, my craft, and how to view the world. I use a
        Notion database to track all my reading and {` `}
        <TextLink url="https://developers.notion.com/">Notion&apos;s API</TextLink> to display them
        here..
      </p>

      {Object.entries(props.yearCounter).map(([year, count]) => (
        <div
          key={year}
          onClick={() => handleYearClick(year)}
          className={`flex flex-auto gap-4 py-2 border-t border-solid border-white/[.06] caption cursor-pointer ${
            props.selectedYear === year
              ? 'text-yellow-300 opacity-100'
              : props.selectedYear
                ? 'text-white/20 hover:text-yellow-300'
                : 'text-white/60 hover:text-yellow-300'
          }`}
        >
          <p>
            {year} - {count} books{' '}
          </p>
        </div>
      ))}
    </div>
  );
};

const BookCard = props => {
  const titleRef = React.useRef(null);
  const authorRef = React.useRef(null);
  const titleContainerRef = React.useRef(null);
  const authorContainerRef = React.useRef(null);
  const [titleOverflows, setTitleOverflows] = useState(false);
  const [authorOverflows, setAuthorOverflows] = useState(false);
  const [titleTranslate, setTitleTranslate] = useState(0);
  const [authorTranslate, setAuthorTranslate] = useState(0);
  const [titleDuration, setTitleDuration] = useState(3);
  const [authorDuration, setAuthorDuration] = useState(3);

  // Speed in pixels per second
  const SCROLL_SPEED = 80;

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current && titleContainerRef.current) {
        const overflow = titleRef.current.scrollWidth > titleContainerRef.current.clientWidth;
        setTitleOverflows(overflow);
        if (overflow) {
          const distance = titleRef.current.scrollWidth - titleContainerRef.current.clientWidth;
          setTitleTranslate(distance);
          setTitleDuration(distance / SCROLL_SPEED);
        }
      }
      if (authorRef.current && authorContainerRef.current) {
        const overflow = authorRef.current.scrollWidth > authorContainerRef.current.clientWidth;
        setAuthorOverflows(overflow);
        if (overflow) {
          const distance = authorRef.current.scrollWidth - authorContainerRef.current.clientWidth;
          setAuthorTranslate(distance);
          setAuthorDuration(distance / SCROLL_SPEED);
        }
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [props.title, props.author]);

  const handleCardMouseEnter = () => {
    if (titleOverflows && titleRef.current) {
      titleRef.current.style.transform = `translateX(-${titleTranslate}px)`;
    }
    if (authorOverflows && authorRef.current) {
      authorRef.current.style.transform = `translateX(-${authorTranslate}px)`;
    }
  };

  const handleCardMouseLeave = () => {
    if (titleRef.current) {
      titleRef.current.style.transform = 'translateX(0)';
    }
    if (authorRef.current) {
      authorRef.current.style.transform = 'translateX(0)';
    }
  };

  return (
    <motion.a
      href={props.url}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col col-span-6 gap-3 text-white group md:col-span-4 lg:col-span-3"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      layout
      transition={{
        type: 'spring',
        duration: 0.3,
        bounce: 0,
      }}
    >
      <div className="group flex items-center justify-center bg-neutral-900 h-[68vw] md:h-[28vw] lg:h-[22vw] border-white/10 p-6 md:p-8">
        <motion.img
          className="overflow-hidden w-full h-auto rounded-sm shadow-md brightness-105 transition ease-out md:group-hover:brightness-[1.2] md:group-active:scale-[.98] md:group-active:translate-y-1 md:group-hover:-translate-y-1"
          src={props.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="">
        <div ref={titleContainerRef} className="overflow-hidden relative">
          <h1
            ref={titleRef}
            className="body text-zinc-50 whitespace-nowrap transition-transform ease-in-out"
            style={{
              transform: titleOverflows ? undefined : 'translateX(0)',
              transitionDuration: `${titleDuration}s`,
            }}
          >
            {props.title}
          </h1>
          {titleOverflows && (
            <>
              <div
                className="absolute top-0 left-0 h-full w-12 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(to left, transparent, #111111)',
                }}
              />
              <div
                className="absolute top-0 right-0 h-full w-12 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  background: 'linear-gradient(to right, transparent, #111111)',
                }}
              />
            </>
          )}
        </div>
        <div ref={authorContainerRef} className="overflow-hidden relative">
          <p
            ref={authorRef}
            className="caption text-zinc-500 whitespace-nowrap transition-transform ease-in-out"
            style={{
              transform: authorOverflows ? undefined : 'translateX(0)',
              transitionDuration: `${authorDuration}s`,
            }}
          >
            {props.author}
          </p>
          {authorOverflows && (
            <>
              <div
                className="absolute top-0 left-0 h-full w-12 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(to left, transparent, #111111)',
                }}
              />
              <div
                className="absolute top-0 right-0 h-full w-12 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  background: 'linear-gradient(to right, transparent, #111111)',
                }}
              />
            </>
          )}
        </div>
      </div>
    </motion.a>
  );
};
