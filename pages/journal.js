import React, { useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import ProjectTitle from '../components/projects/ProjectTitle';
import { cn } from '../lib/utils';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // First get your database results as you're doing now
  const databaseResponse = await notion.databases.query({
    database_id: process.env.NOTION_TASKS_ID,
  });

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
}

export default function Journal(props) {
  const entries = props.notionData.filter(entry => entry.properties["journal"].checkbox === true);

  const orderedEntries = [...entries].sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });

  const scrollToEntry = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-8">
      <GridContainer>
        {/* Table of Contents */}
        <div className="col-start-1 col-end-4 sticky top-[80px] h-fit">
          <nav className="">
            {orderedEntries.map((entry) => {
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
        <div className="col-start-5 col-end-9">
          {orderedEntries.map((entry, index) => {
            const EntryTitle = entry.properties.Name.title[0].plain_text;
            const EntryDate = entry.properties.Date.date.start;
            const entryId = EntryTitle.toLowerCase().replace(/\s+/g, '-');
            const AllBlocks = entry.content;
            const TextBlocks = AllBlocks.filter(block => {
              return block.type === 'paragraph' && block.paragraph.rich_text.length > 0;
            });
            const MediaBlocks = AllBlocks.filter(block => {
              return block.type === 'image' || block.type === 'video';
            });

            return (
              <div id={entryId} key={index} className="mb-16">
                <ProjectTitle notSticky role={EntryDate}>
                  {EntryTitle}
                </ProjectTitle>
                {TextBlocks.map(block => {
                  if (block.type === 'paragraph') {
                    // Only render if there is text content
                    if (block.paragraph.rich_text.length > 0) {
                      return (
                        <p
                          key={block.id}
                          className={cn(
                            'body pt-4 text-white',
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
                {MediaBlocks.map(block => {
                  if (block.type === 'image') {
                    return <img className='mt-4' key={block.id} src={block.image.file.url} alt={block.image.caption[0]?.plain_text || ''} />;
                  }
                  if (block.type === 'video') {
                    return <video className='mt-4' key={block.id} src={block.video.file.url} controls />;
                  }
                  return null;
                })}
              </div>
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}
