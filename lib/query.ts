import { client } from "./sanity";

export default async function getData() {
  const query = `
    *[_type=='blog'] | order(_createdAt desc) {
  title,
    description,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);

  return data;
}
