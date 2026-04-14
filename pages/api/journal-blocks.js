import { Client } from '@notionhq/client';

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 30; // max requests per window per IP

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Validate that a string looks like a Notion block ID (UUID format)
const NOTION_ID_REGEX = /^[a-f0-9]{8}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{12}$/i;

const MAX_IDS_PER_REQUEST = 50;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid request: ids must be an array' });
  }

  // Limit the number of IDs per request to prevent abuse
  if (ids.length === 0 || ids.length > MAX_IDS_PER_REQUEST) {
    return res
      .status(400)
      .json({ error: `ids array must contain between 1 and ${MAX_IDS_PER_REQUEST} items` });
  }

  // Validate each ID is a proper Notion UUID
  for (const id of ids) {
    if (typeof id !== 'string' || !NOTION_ID_REGEX.test(id)) {
      return res.status(400).json({ error: 'Invalid request: each id must be a valid UUID' });
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
