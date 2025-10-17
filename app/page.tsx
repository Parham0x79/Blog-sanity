import Link from "next/link";
import { Button } from "../components/ui/button";
import Header from "@/components/Header";
import getData from "../lib/query";
import { urlFor } from "../lib/sanity";
import { blogCard } from "@/lib/interface";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const revalidate = 30;

const Home = async () => {
  const data: blogCard[] = await getData();

  return (
    <>
      <Header />

      <main className="width">
        <div className="flex flex-col md:grid grid-cols-2 p-2 gap-4">
          {data.map((blog, id) => (
            <Card
              className="text-center p-2 card flex flex-col justify-between"
              key={id}
            >
              <h2 className="border-b-2 min-h-15 px-5 pb-2 text-xl font-bold font-sans">
                {blog.title}
              </h2>
              <Image
                src={urlFor(blog.titleImage).url()}
                alt="image"
                width={500}
                height={250}
                className="img"
                priority
              />

              <p
                className="max-w-11/12 mx-auto text-lg text-left p-5
                leading-8 font-sans"
              >
                {blog.description}
              </p>

              <Link href={`/blog/${blog.currentSlug}`}>
                {" "}
                <Button
                  variant={"secondary"}
                  className="min-w-10/12 md:min-w-1/2 p-6 mx-auto button"
                >
                  Read More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
