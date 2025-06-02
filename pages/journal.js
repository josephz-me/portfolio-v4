import React, { useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import ProjectTitle from '../components/projects/ProjectTitle';
import { cn } from '../lib/utils';

export async function getStaticProps() {
  // Log environment variables for debugging
  console.error('\n=== JOURNAL PAGE DEBUG ===');
  console.error('Environment:', process.env.NODE_ENV);
  console.error('NOTION_API_KEY exists:', !!process.env.NOTION_API_KEY);
  console.error(
    'NOTION_API_KEY format:',
    process.env.NOTION_API_KEY?.startsWith('secret_') ? 'Valid format' : 'Invalid format'
  );
  console.error('NOTION_API_KEY length:', process.env.NOTION_API_KEY?.length);
  console.error('NOTION_TASKS_ID exists:', !!process.env.NOTION_TASKS_ID);
  console.error('NOTION_TASKS_ID value:', process.env.NOTION_TASKS_ID);

  // More detailed UUID validation
  const tasksId = process.env.NOTION_TASKS_ID;
  const uuidValidation = {
    hasCorrectLength: tasksId?.length === 36,
    hasCorrectFormat: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      tasksId
    ),
    hasValidVersion: tasksId
      ? /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(tasksId)
      : false,
  };
  console.error('NOTION_TASKS_ID validation:', uuidValidation);
  console.error('========================\n');

  if (!process.env.NOTION_API_KEY) {
    console.error('ERROR: NOTION_API_KEY is missing');
    throw new Error('NOTION_API_KEY is not defined in environment variables');
  }
  if (!process.env.NOTION_TASKS_ID) {
    console.error('ERROR: NOTION_TASKS_ID is missing');
    throw new Error('NOTION_TASKS_ID is not defined in environment variables');
  }

  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    console.error('Notion client created successfully');

    // Test the API key by getting the integration info
    try {
      const integrationInfo = await notion.users.me();
      console.error('Integration info:', {
        name: integrationInfo.name,
        type: integrationInfo.type,
        workspace: integrationInfo.workspace_name,
      });
    } catch (error) {
      console.error('Failed to get integration info:', error.message);
    }

    // First get your database results as you're doing now
    console.error('Attempting to query database:', process.env.NOTION_TASKS_ID);
    const databaseResponse = await notion.databases.query({
      database_id: process.env.NOTION_TASKS_ID,
    });
    console.error('Database query successful, found', databaseResponse.results.length, 'results');

    // Then for each page in your database, get its content
    const pagesWithContent = await Promise.all(
      databaseResponse.results.map(async page => {
        const blocks = await notion.blocks.children.list({
          block_id: page.id,
        });
        return {
          ...page,
          content: blocks.results,
        };
      })
    );

    return {
      props: {
        notionData: pagesWithContent,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Notion API Error:', {
      message: error.message,
      code: error.code,
      status: error.status,
      body: error.body,
      stack: error.stack,
    });
    throw error;
  }
}

export default function Journal(props) {
  const entries = props.notionData.filter(entry => entry.properties['Journal'].checkbox === true);

  console.log(entries);
  const orderedEntries = [...entries].sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });

  const scrollToEntry = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="">
      <GridContainer>
        {/* Table of Contents */}
        <div className="col-start-1 col-end-4 hidden md:block sticky top-[80px] h-fit">
          <nav className="">
            {orderedEntries.map(entry => {
              const title = entry.properties.Name.title[0].plain_text;
              const id = title.toLowerCase().replace(/\s+/g, '-');
              return (
                <button
                  key={id}
                  onClick={() => scrollToEntry(id)}
                  className="body text-white opacity-40 hover:opacity-100 text-left block w-full"
                >
                  {title}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-start-1 col-end-13 md:col-start-5">
          {orderedEntries.map((entry, index) => {
            const EntryTitle = entry.properties.Name.title[0].plain_text;
            const EntryDate = entry.properties.Date.date;
            const entryId = EntryTitle.toLowerCase().replace(/\s+/g, '-');

            // Format the date and time
            const startDate = new Date(EntryDate.start);
            const endDate = new Date(EntryDate.end);
            const formattedDate = startDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            });
            const startTime = startDate
              .toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })
              .replace(' ', ' ');
            const endTime = endDate
              .toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })
              .replace(' ', ' ');

            const AllBlocks = entry.content;
            const TextBlocks = AllBlocks.filter(block => {
              return block.type === 'paragraph' && block.paragraph.rich_text.length > 0;
            });
            const MediaBlocks = AllBlocks.filter(block => {
              return block.type === 'image' || block.type === 'video';
            });

            return (
              <div className="py-12" key={entryId}>
                <div id={entryId} className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="">
                    <h1 className="body mb-1">{EntryTitle}</h1>

                    <p className="caption opacity-40">
                      {formattedDate} • {startTime} - {endTime}
                    </p>

                    {TextBlocks.map(block => {
                      if (block.type === 'paragraph') {
                        // Only render if there is text content
                        if (block.paragraph.rich_text.length > 0) {
                          return (
                            <p
                              key={block.id}
                              className={cn(
                                'body pt-2 pb-4 text-white',
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
                        <img
                          className="mt-4"
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
