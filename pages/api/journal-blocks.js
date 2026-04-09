import { Client } from '@notionhq/client';

// Maximum number of block IDs allowed per request to prevent abuse
const MAX_IDS_PER_REQUEST = 50;
// Notion block ID format: 8-4-4-4-12 hex chars (with or without dashes)
const NOTION_ID_REGEX = /^[a-f0-9]{8}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{12}$/i;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid request: ids must be an array' });
  }

  if (ids.length === 0 || ids.length > MAX_IDS_PER_REQUEST) {
    return res
      .status(400)
      .json({ error: `ids array must contain between 1 and ${MAX_IDS_PER_REQUEST} items` });
  }

  // Validate each ID matches Notion's UUID format
  for (const id of ids) {
    if (typeof id !== 'string' || !NOTION_ID_REGEX.test(id)) {
      return res.status(400).json({ error: 'Invalid block ID format' });
    }
  }

  if (!process.env.NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Set cache headers
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  res.setHeader('CDN-Cache-Control', 'public, s-maxage=300');
  res.setHeader('Vercel-CDN-Cache-Control', 'public, s-maxage=300');

  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {
    const results = await Promise.all(
      ids.map(async id => {
        try {
          const blocks = await notion.blocks.children.list({ block_id: id });
          return { id, content: blocks.results };
        } catch (error) {
          console.error(`Error fetching blocks for id ${id}:`, error);
          return { id, content: [] };
        }
      })
    );
    res.status(200).json({ results });
  } catch (error) {
    console.error('Error in journal-blocks API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
