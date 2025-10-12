export default function getData() {
  const query = `
    *[_type=='blog'] | order(_createdAt desc) {
  title,
    description,
    "currentSlug": slug.current,
    
}`

  return query
}
