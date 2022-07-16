import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import Layout from "@/components/Layout";

export async function getStaticProps() {
  let files = fs.readdirSync("posts");

  let posts: any = files.map(fileName => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    let { data }: any = matter(readFile);
    return {
      slug,
      data,
    };
  });

  // Sort the posts.
  posts
    .sort(function (a: any, b: any) {
      return new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf();
    })
    .reverse();

  return {
    props: {
      posts,
    },
  };
}

const seo = {
  title: "Fix your issue with Code-bugs.com 🚀",
  description:
    "The best website where you can find solution for your issue/bug.",
};

export default function Home({ posts }: any) {
  return (
    <Layout seo={seo}>
      <div className="flex max-w-[650px] mx-auto flex-col p-2 md:p-0">
        <div className="prose prose-sm sm:prose d:prose-lg mb-[50px]">
          <h1 className={"text-center m-0"}>
            These are some bugs/issues that I have fixed recently
          </h1>
        </div>
        {posts.map(({ slug, data }: any) => (
          <Link key={slug} href={`/${slug}`}>
            <a
              className="border border-gray-200 hover:shadow-blue-300 w-full rounded-xl shadow-lg
              overflow-hidden flex flex-col p-4 my-2.5">
              <h5>{data.title}</h5>
              <p className={"flex justify-end pt-[15px]"}>{data.date}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
