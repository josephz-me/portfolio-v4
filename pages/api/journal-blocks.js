import { Client } from '@notionhq/client';

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

function isRateLimited(ip) {
  const now = Date.now();
  const windowData = rateLimit.get(ip);

  if (!windowData || now - windowData.start > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }

  windowData.count++;
  if (windowData.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  return false;
}

// Periodically clean up expired entries to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimit.entries()) {
    if (now - data.start > RATE_LIMIT_WINDOW) {
      rateLimit.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

const MAX_IDS = 50;
const NOTION_ID_REGEX = /^[a-f0-9-]{32,36}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid request: ids must be an array' });
  }

  // Validate array length
  if (ids.length === 0 || ids.length > MAX_IDS) {
    return res.status(400).json({ error: `Invalid request: ids must contain 1-${MAX_IDS} items` });
  }

  // Validate each id is a string matching Notion ID format
  for (const id of ids) {
    if (typeof id !== 'string' || !NOTION_ID_REGEX.test(id)) {
      return res.status(400).json({ error: 'Invalid request: each id must be a valid Notion block ID' });
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
          return { id, content: [], error: 'Failed to fetch block content' };
        }
      })
    );
    res.status(200).json({ results });
  } catch (error) {
    console.error('Error in journal-blocks API:', error);
    res.status(500).json({ error: 'An internal error occurred' });
  }
}
