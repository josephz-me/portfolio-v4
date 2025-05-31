import React, { useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import { Client } from '@notionhq/client';
import ProjectTitle from '../components/projects/ProjectTitle';
import { cn } from '../lib/utils';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  
  // First get your database results as you're doing now
  const databaseResponse = await notion.databases.query({
    database_id: process.env.NOTION_JOURNAL_ID,
  });

  // Then for each page in your database, get its content
  const pagesWithContent = await Promise.all(
    databaseResponse.results.map(async (page) => {
      const blocks = await notion.blocks.children.list({
        block_id: page.id,
      });
      return {
        ...page,
        content: blocks.results
      };
    })
  );

  return { 
    props: { 
      notionData: pagesWithContent 
    }, 
    revalidate: 1 
  };
}

export default function Journal(props) {
  const ENTRIES = props.notionData;
  const orderedEntries = [...ENTRIES].sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA; // This will sort in descending order (newest first)
  });

  return (
    <main className="pt-8">
      <GridContainer>

        {/* BOOKS */}
        <div className="col-start-4 col-end-10">
            
          {orderedEntries.map((entry, index) => {
              const EntryTitle = entry.properties.Name.title[0].plain_text
              const EntryDate = entry.properties.Date.date.start;
              const AllBlocks = entry.content;
            
            return (
                <div className='text-white py-8' key={index}>
                    <ProjectTitle notSticky role={EntryDate}>{EntryTitle}</ProjectTitle>
                    {AllBlocks.map((block) => {
                        if (block.type === 'paragraph') {
                            // Only render if there is text content
                            if (block.paragraph.rich_text.length > 0) {
                                return (
                                    <p 
                                        key={block.id}
                                        className={cn(
                                            'body pt-4',
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
                        if (block.type === 'image') {
                            return (
                                <img 
                                className='mt-4'
                                    key={block.id}
                                    src={block.image.file.url} 
                                    alt={block.image.caption.length > 0 ? block.image.caption[0].plain_text : ''}
                                />
                            );
                        }
                        return null; // Handle any other block types
                    })}
                </div>
            );
          })}
        </div>
      </GridContainer>
    </main>
  );
}
