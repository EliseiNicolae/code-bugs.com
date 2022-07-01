import fs from "fs";
import matter from "gray-matter";
import Layout from "@/components/Layout";

const md = require("markdown-it")();
const lazy_loading = require("markdown-it-image-lazy-loading");
md.use(lazy_loading);

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontVariables, content } = matter(fileName);
  return {
    props: {
      frontVariables,
      content,
      slug,
    },
  };
}

export default function PostPage({ frontVariables, content, slug }: any) {
  return (
    <Layout seo={frontVariables}>
      <div className="prose prose-sm sm:prose d:prose-lg  mx-auto">
        <h1>{frontVariables?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
        <a
          href={`https://github.com/EliseiNicolae/code-bugs.com/blob/main/posts/${slug}.md`}>
          Edit on Github
        </a>
      </div>
    </Layout>
  );
}
