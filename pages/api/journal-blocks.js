import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid request: ids must be an array' });
  }

  if (!process.env.NOTION_API_KEY) {
    return res.status(500).json({ error: 'NOTION_API_KEY is not defined' });
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
          return { id, content: [], error: error.message };
        }
      })
    );
    res.status(200).json({ results });
  } catch (error) {
    console.error('Error in journal-blocks API:', error);
    res.status(500).json({ error: error.message });
  }
}
