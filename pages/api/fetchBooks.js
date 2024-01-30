const { Client } = require('@notionhq/client');

export default async (req, res) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  });

  res.status(200).json(response.results);
};
