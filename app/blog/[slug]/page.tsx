import { Card } from "@/components/ui/card";
import { getBlog } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { ArrowBigLeft } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
import { blogCard } from "@/lib/interface";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

const blogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: blogCard = await getBlog(params.slug);

  if (!data) notFound();

  return (
    <>
      <Card className="width">
        <div className="flex justify-between w-11/12 mx-auto items-center">
          <span
            className="font-light text-sm hover:cursor-pointer
          first:hover:-translate-x-1 transition relative"
          >
            <ArrowBigLeft className="inline mr-2" />
            <Link href={"/"}>Go back to home</Link>
          </span>
          <ModeToggle />
        </div>

        <h2
          className="border-b-2 min-h-15 px-5 py-2 text-2xl 
          font-bold font-sans text-center"
        >
          {data.title}
        </h2>

        <Image
          src={urlFor(data.titleImage).url()}
          alt="image"
          width={750}
          height={500}
          priority
          className="img"
        />

        <div
          className="p-5 prose md:prose-lg xl:prose-xl dark:prose-invert
           prose-li:marker:text-emerald-600 dark:prose-li:marker:text-blue-300"
        >
          {data.content && <PortableText value={data.content} />}
        </div>
      </Card>
    </>
  );
};

export default blogArticle;
