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

export async function getBlog(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    titleImage,
    content,
    
}[0]`;

  const data = await client.fetch(query);
  return data;
}
