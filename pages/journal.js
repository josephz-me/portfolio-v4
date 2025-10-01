import React, { act, useEffect, useState, useRef } from 'react';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import ProjectTitle from '../components/projects/ProjectTitle';
import Image from 'next/image';
import Preloader from '../components/Preloader';
import { cn } from '../lib/utils';
import { DateTime } from 'luxon';

function LocationMap({ className, isActive, coordinates, googleMapsUrl }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Parse Google Maps URL to extract coordinates
  const parseGoogleMapsUrl = url => {
    if (!url) return null;

    // Match various Google Maps URL formats
    const patterns = [
      /q=(-?\d+\.?\d*),(-?\d+\.?\d*)/, // ?q=lat,lng
      /@(-?\d+\.?\d*),(-?\d+\.?\d*)/, // @lat,lng
      /ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/, // ll=lat,lng
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        const lat = parseFloat(match[1]);
        const lng = parseFloat(match[2]);
        return [lng, lat]; // Return as [longitude, latitude] for Mapbox
      }
    }
    return null;
  };

  // Determine final coordinates to use
  const getCoordinates = () => {
    if (coordinates) return coordinates;
    if (googleMapsUrl) return parseGoogleMapsUrl(googleMapsUrl);
    return [-122.0322, 37.323]; // Default to Cupertino
  };

  useEffect(() => {
    // Load Mapbox GL JS
    const loadMapbox = async () => {
      if (typeof window === 'undefined') return;

      // Check if Mapbox is already loaded
      if (window.mapboxgl) {
        initializeMap();
        return;
      }

      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
      script.onload = () => {
        setMapLoaded(true);
        initializeMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      window.mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

      const mapCoordinates = getCoordinates();

      const map = new window.mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Dark theme
        center: mapCoordinates,
        zoom: 8,
        interactive: false, // Disable all interactions
        trackResize: true, // Enable resizing when browser resizes
        collectResourceTiming: false,
        attributionControl: false, // Hide Mapbox logo and attribution
      });

      // Add error handling
      map.on('error', e => {
        console.error('Mapbox error:', e);
      });

      map.on('load', () => {
        console.log('Map loaded successfully');
      });

      mapInstanceRef.current = map;
    };

    loadMapbox();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map center when googleMapsUrl changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      const newCoordinates = getCoordinates();
      mapInstanceRef.current.setCenter(newCoordinates);
      console.log('Map center updated to:', newCoordinates);
    }
  }, [googleMapsUrl, coordinates]);

  return (
    <div className={cn('w-full overflow-hidden transition-opacity duration-300', className)}>
      <div ref={mapRef} className="bg-gray-100 aspect-square w-full h-auto" />
      <style jsx>{`
        :global(.mapboxgl-ctrl-logo) {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

function JournalImage({ src, alt }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4]">
      <Preloader isContentLoaded={isImageLoaded} hideTextMobile={true} />
      <Image
        src={src}
        fill
        alt={alt}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        unoptimized={true}
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

    console.log('Notion database response:', databaseResponse.results);

    // Only include essential metadata in the initial props
    const entries = databaseResponse.results.map(page => ({
      id: page.id,
      properties: page.properties,
    }));

    console.log('Processed entries:', entries);

    return {
      props: {
        notionData: entries,
        meta: {
          title: 'Joseph Zhang – Journal',
          description: 'A visual collection of special moments and experiences',
          image: '/metadata/journal.jpg',
        },
      },
      revalidate: 1,
    };
  } catch (error) {
    throw error;
  }
}

function getMediaGridClassName(count) {
  if (count === 8) {
    return 'grid-cols-4';
  }
  if (count === 6) {
    return 'grid-cols-3';
  }
  if (count % 2 === 0) {
    return 'grid-cols-2';
  }
  return 'grid-cols-3';
}

export default function Journal(props) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [activeYearId, setActiveYearId] = useState(null);
  const [activeEntry, setActiveEntry] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Set to false during development to always fetch fresh data
  const useLocalCache = true;

  useEffect(() => {
    const fetchContent = async () => {
      // Fetch all entries
      const journalEntries = props.notionData;
      const ids = journalEntries.map(entry => entry.id);

      // Create cache key based on the IDs
      const cacheKey = `journal-blocks-${ids.sort().join('-')}`;
      const cacheExpiry = 5 * 60 * 1000; // 5 minutes in milliseconds

      // Check for cached data only if useLocalCache is true
      if (useLocalCache) {
        try {
          const cached = localStorage.getItem(cacheKey);
          const cacheTimestamp = localStorage.getItem(`${cacheKey}-timestamp`);

          if (cached && cacheTimestamp) {
            const isExpired = Date.now() - parseInt(cacheTimestamp) > cacheExpiry;

            if (!isExpired) {
              console.log('Using cached journal data');
              const cachedData = JSON.parse(cached);

              // Merge cached content into entries
              const entriesWithContent = journalEntries.map(entry => ({
                ...entry,
                content: cachedData.find(r => r.id === entry.id)?.content || [],
              }));

              setEntries(entriesWithContent);
              setLoading(false);
              setIsVisible(false);
              return;
            }
          }
        } catch (error) {
          console.warn('Error reading from cache:', error);
        }
      }

      try {
        console.log('Fetching fresh journal data from API');
        const res = await fetch('/api/journal-blocks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { results } = await res.json();

        // Cache the results only if useLocalCache is true
        if (useLocalCache) {
          try {
            localStorage.setItem(cacheKey, JSON.stringify(results));
            localStorage.setItem(`${cacheKey}-timestamp`, Date.now().toString());
          } catch (error) {
            console.warn('Error saving to cache:', error);
          }
        }

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

  // Update active entry when activeYearId changes
  useEffect(() => {
    if (!activeYearId || !entriesByYear) {
      setActiveEntry(null);
      return;
    }

    // Find the active entry across all years
    for (const yearEntries of Object.values(entriesByYear)) {
      const foundEntry = yearEntries.find(entry => {
        const title = entry.properties.Name.title[0].plain_text;
        const entryId = title.toLowerCase().replace(/\s+/g, '-');
        return entryId === activeYearId;
      });

      if (foundEntry) {
        setActiveEntry(foundEntry);
        return;
      }
    }
    setActiveEntry(null);
  }, [activeYearId, entriesByYear]);

  // Get location URL from active entry
  const getActiveEntryLocationUrl = () => {
    return activeEntry?.properties?.Location?.url || null;
  };

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
        <div className="justify-between overflow-y-auto col-start-1 col-end-4 sticky flex-col hidden md:flex top-[79px] h-[calc(100vh-80px)]">
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

                      let isActiveEntry = activeYearId === id;
                      return (
                        <button
                          key={id}
                          onClick={() => scrollToEntry(id)}
                          className={cn(
                            'relative w-full group gap-2 h-auto flex items-center justify-center'
                          )}
                        >
                          {/* horizontal bar */}
                          <div
                            className={cn(
                              ' duration-100 transition-all group-hover:w-12 h-[2px] rounded-full group-active:bg-yellow-300',
                              isActiveEntry
                                ? 'bg-yellow-300 w-9 group-active:w-[46px]'
                                : 'w-10 bg-white/20 hover:bg-white group-hover:bg-white group-active:w-8'
                            )}
                          />

                          <p
                            className={cn(
                              'inline body w-full text-white text-left opacity-0 group-hover:opacity-100 truncate',
                              isActiveEntry && 'group-active:text-yellow-300'
                            )}
                          >
                            <span
                              className={cn(
                                'text-yellow-300 mr-1',
                                isActiveEntry && 'group-active:text-yellow-300'
                              )}
                            >
                              {monthDay}
                            </span>
                            <span
                              className={cn(
                                'body text-white'
                                // isActiveEntry && 'group-active:hidden'
                              )}
                            >
                              {title}
                            </span>
                            {/* <span
                              className={cn(
                                'body text-white hidden',
                                isActiveEntry && 'group-active:inline-block'
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

          <div className="group w-[90%] aspect-square relative overflow-hidden mb-4 flex-shrink-0">
            <a
              href={activeEntry?.properties?.Location?.url || null}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer"
            >
              <LocationMap
                googleMapsUrl={activeEntry?.properties?.Location?.url || null}
                className="duration-1000 transition-all ease-out group-hover:opacity-80 group-hover:scale-[1.02] aspect-square w-full h-full"
              />
              <div
                className=" absolute left-0 right-0 bottom-0 top-0"
                style={{
                  background: 'radial-gradient(circle, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 70%)',
                }}
              />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-start-1 col-end-13 md:col-start-4 pt-6">
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

            let formattedDate = startDateTime.toLocaleString({
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            // If end date exists and is different from start date, show range
            if (EntryDate.end && !startDateTime.hasSame(endDateTime, 'day')) {
              formattedDate = `${startDateTime.toLocaleString({ month: 'short', day: 'numeric' })} – ${endDateTime.toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' })}`;
            }

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
                    {/* title */}
                    <h1 className="body mb-1">{EntryTitle}</h1>
                    {/* date */}
                    <p className="caption opacity-40">
                      {formattedDate}
                      {timeDisplay && <> • {timeDisplay}</>}
                    </p>
                    {/* text */}
                    {TextBlocks.map(block => {
                      if (block.type === 'paragraph') {
                        // Only render if there is text content
                        if (
                          block.paragraph.rich_text.length > 0 &&
                          block.paragraph.rich_text[0]?.plain_text
                        ) {
                          return (
                            <p
                              key={block.id}
                              className={cn(
                                'body pt-2 text-white',
                                block.paragraph.rich_text[0]?.annotations?.bold && 'font-bold',
                                block.paragraph.rich_text[0]?.annotations?.italic && 'italic'
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
                {MediaBlocks.length > 0 && (
                  <div className={cn('grid mt-2 gap-4', getMediaGridClassName(MediaBlocks.length))}>
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
                )}
              </div>
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}
