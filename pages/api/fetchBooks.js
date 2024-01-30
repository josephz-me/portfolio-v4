import { Client } from '@notionhq/client';

const notion = new Client({
  auth: `secret_KST98duIew3cb2mlmiJdKCall9pIHzrg7VHbyohzU5I`,
});

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: `b978658ebc6d47d3a60689e2fcb0485e`,
  });

  res.status(200).json(response.results);
};
