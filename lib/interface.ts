import { PortableTextBlock } from "next-sanity";

export interface blogCard {
  title: string;
  description: string;
  currentSlug: string;
  titleImage: HTMLImageElement;
  content?: PortableTextBlock[];
}
