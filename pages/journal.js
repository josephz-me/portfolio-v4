import React, { act, useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import ProjectTitle from '../components/projects/ProjectTitle';
import Image from 'next/image';
import Preloader from '../components/Preloader';
import { cn } from '../lib/utils';
import { DateTime } from 'luxon';

function JournalImage({ src, alt }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] mt-2">
      <Preloader isContentLoaded={isImageLoaded} hideTextMobile={true} />
      <Image
        src={src}
        fill
        alt={alt}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        className={cn(
          'object-cover transition duration-500',
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
}

export async function getStaticProps() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is not defined in environment variables');
  }
  if (!process.env.NOTION_TASKS_ID) {
    throw new Error('NOTION_TASKS_ID is not defined in environment variables');
  }

  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    const databaseResponse = await notion.databases.query({
      database_id: process.env.NOTION_TASKS_ID,
    });

    // Only include essential metadata in the initial props
    const entries = databaseResponse.results.map(page => ({
      id: page.id,
      properties: page.properties,
    }));

    return {
      props: {
        notionData: entries,
      },
      revalidate: 1,
    };
  } catch (error) {
    throw error;
  }
}

export default function Journal(props) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [activeYearId, setActiveYearId] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      // Only fetch entries marked as Journal
      const journalEntries = props.notionData.filter(
        entry => entry.properties['Journal'].checkbox === true
      );
      const ids = journalEntries.map(entry => entry.id);

      try {
        const res = await fetch('/api/journal-blocks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { results } = await res.json();

        // Merge content into entries
        const entriesWithContent = journalEntries.map(entry => ({
          ...entry,
          content: results.find(r => r.id === entry.id)?.content || [],
        }));

        setEntries(entriesWithContent);
      } catch (error) {
        console.error('Error fetching journal content:', error);
      } finally {
        setLoading(false);
        // Remove delay for faster development experience
        setIsVisible(false);
      }
    };

    fetchContent();
  }, [props.notionData]);

  useEffect(() => {
    let currentActiveId = null;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Only consider elements in the upper half of the viewport
            const rect = entry.boundingClientRect;
            if (rect.top < window.innerHeight / 2 && !isScrolling) {
              currentActiveId = entry.target.id;
              setActiveYearId(currentActiveId);
              console.log('currentActiveId', currentActiveId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-80px 0px -50% 0px', // Offset for header and only consider upper half
        threshold: 0.5,
      }
    );

    // Observe all entry elements
    document.querySelectorAll('[id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [entries, isScrolling]); // Add isScrolling to dependencies

  const orderedEntries = [...entries].sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });

  // Group entries by year
  const entriesByYear = orderedEntries.reduce((acc, entry) => {
    const year = new Date(entry.properties.Date.date.start).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(entry);
    return acc;
  }, {});

  const scrollToEntry = id => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 77;
      const currentScroll = window.pageYOffset;

      setActiveYearId(id);
      setIsScrolling(true);

      if (Math.abs(currentScroll - offsetPosition) < 5) {
        // Find the year of the current entry
        const year = Object.keys(entriesByYear).find(year =>
          entriesByYear[year].some(entry => {
            const title = entry.properties.Name.title[0].plain_text;
            const entryId = title.toLowerCase().replace(/\s+/g, '-');
            return entryId === id;
          })
        );
      } else {
        // Use a faster scroll speed
        const scrollOptions = {
          top: offsetPosition,
          behavior: 'smooth',
        };

        // Add scroll listener with timeout
        let scrollTimeout;
        const handleScroll = () => {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
            window.removeEventListener('scroll', handleScroll);
          }, 100); // Wait for 150ms of no scrolling before considering it ended
        };
        window.addEventListener('scroll', handleScroll);

        window.scrollTo(scrollOptions);
      }
    }
  };

  return (
    <main className="relative">
      {/* Full page preloader overlay */}
      <div
        className={cn(
          'fixed inset-0 main-bg z-50 transition-opacity duration-150 flex items-center justify-center',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <Preloader isContentLoaded={false} hideBackground={true} />
      </div>

      <GridContainer>
        {/* Table of Contents */}
        <div className="col-start-1 col-end-5 hidden md:block sticky top-[79px] h-fit">
          <nav className="flex flex-col">
            {Object.entries(entriesByYear)
              .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // Sort years descending
              .map(([year, yearEntries]) => (
                <div key={year} className={`mb-4`}>
                  <h3 className="caption text-white opacity-60 mb-2">{year}</h3>
                  <div className={cn('flex flex-col')}>
                    {yearEntries.map(entry => {
                      const title = entry.properties.Name.title[0].plain_text;
                      const id = title.toLowerCase().replace(/\s+/g, '-');

                      // Format date as MM.DD
                      const entryDateTime = DateTime.fromISO(entry.properties.Date.date.start);
                      const monthDay = entryDateTime.toFormat('MM.dd');

                      let activeEntry = activeYearId === id;
                      return (
                        <button
                          key={id}
                          onClick={() => scrollToEntry(id)}
                          className={cn(
                            'w-full group gap-2 h-auto flex items-center justify-center'
                          )}
                        >
                          {/* horizontal bar */}
                          <div
                            className={cn(
                              ' duration-100 transition-all group-hover:w-12 h-[2px] rounded-full group-active:bg-yellow-300',
                              activeEntry
                                ? 'bg-yellow-300 w-9 group-active:bg-yellow-300 group-active:w-[46px]'
                                : 'w-10 bg-white/20 hover:bg-white group-hover:bg-white group-active:w-8'
                            )}
                          />

                          <p
                            className={cn(
                              'inline body w-full text-white text-left opacity-0 group-hover:opacity-100 truncate',
                              activeEntry && 'group-active:text-yellow-300'
                            )}
                          >
                            <span
                              className={cn(
                                'text-yellow-300 mr-1',
                                activeEntry && 'group-active:text-yellow-300'
                              )}
                            >
                              {monthDay}
                            </span>
                            <span
                              className={cn(
                                'body text-white'
                                // activeEntry && 'group-active:hidden'
                              )}
                            >
                              {title}
                            </span>
                            {/* <span
                              className={cn(
                                'body text-white hidden',
                                activeEntry && 'group-active:inline-block'
                              )}
                            >
                              Entry already pinned
                            </span> */}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-start-1 col-end-13 md:col-start-5 pt-6">
          {orderedEntries.map((entry, index) => {
            const EntryTitle = entry.properties.Name.title[0].plain_text;
            const EntryDate = entry.properties.Date.date;
            const entryId = EntryTitle.toLowerCase().replace(/\s+/g, '-');

            const hasTimeComponent = /T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/.test(
              EntryDate.start
            );

            // Parse the date string to extract timezone offset
            const timezoneMatch = EntryDate.start.match(/([+-]\d{2}:\d{2})$/);
            const timezoneOffset = timezoneMatch ? timezoneMatch[1] : null;

            // Convert to Luxon DateTime with timezone, preserving the original timezone
            const startDateTime = DateTime.fromISO(EntryDate.start, { zone: 'UTC' }).setZone(
              timezoneOffset || 'UTC'
            );
            const endDateTime = DateTime.fromISO(EntryDate.end, { zone: 'UTC' }).setZone(
              timezoneOffset || 'UTC'
            );

            const formattedDate = startDateTime.toLocaleString({
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            // Only format and show time if it exists in the original date
            const timeDisplay = hasTimeComponent ? (
              <>
                {startDateTime
                  .toLocaleString({
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })
                  .replace(' ', '\u2009')}
                {' – '}
                {endDateTime
                  .toLocaleString({
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })
                  .replace(' ', '\u2009')}
              </>
            ) : null;

            const AllBlocks = entry.content;
            const TextBlocks = AllBlocks.filter(block => {
              return block.type === 'paragraph' && block.paragraph.rich_text.length > 0;
            });
            const MediaBlocks = AllBlocks.filter(block => {
              return block.type === 'image' || block.type === 'video';
            });

            return (
              <div className="pb-12 md:pb-16" key={entryId}>
                <div id={entryId} className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="pb-2">
                    <h1 className="body mb-1">{EntryTitle}</h1>

                    <p className="caption opacity-40">
                      {formattedDate}
                      {timeDisplay && <> • {timeDisplay}</>}
                    </p>

                    {TextBlocks.map(block => {
                      if (block.type === 'paragraph') {
                        // Only render if there is text content
                        if (block.paragraph.rich_text.length > 0) {
                          return (
                            <p
                              key={block.id}
                              className={cn(
                                'body pt-2 text-white',
                                block.paragraph.rich_text[0].annotations.bold && 'font-bold',
                                block.paragraph.rich_text[0].annotations.italic && 'italic'
                              )}
                            >
                              {block.paragraph.rich_text[0].plain_text}
                            </p>
                          );
                        }
                        return <p key={block.id}></p>; // Empty paragraph
                      }
                      return null; // Handle any other block types
                    })}
                  </div>
                </div>
                {/* image */}
                <div
                  className={`grid ${MediaBlocks.length % 2 === 0 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}
                >
                  {MediaBlocks.map(block => {
                    if (block.type === 'image') {
                      return (
                        <JournalImage
                          key={block.id}
                          src={block.image.file.url}
                          alt={block.image.caption[0]?.plain_text || ''}
                        />
                      );
                    }
                    if (block.type === 'video') {
                      return (
                        <video
                          className="mt-4"
                          key={block.id}
                          src={block.video.file.url}
                          controls
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}
