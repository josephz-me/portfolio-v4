const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  });

  res.status(200).json(response.results);
};
