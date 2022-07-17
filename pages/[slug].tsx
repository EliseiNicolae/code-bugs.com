import fs from "fs";
import matter from "gray-matter";
import Layout from "@/components/Layout";

const md = require("markdown-it")({
  html: true,
});
// replace a default image rule
md.renderer.rules.image = function (
  tokens: { [x: string]: any },
  idx: string | number,
  options: any,
  env: any,
  slf: {
    renderInlineAsText: (arg0: any, arg1: any, arg2: any) => any;
    renderToken: (arg0: any, arg1: any, arg2: any) => any;
  },
) {
  var token = tokens[idx];
  token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(
    token.children,
    options,
    env,
  );
  // this is the line of code responsible for an additional 'loading' attribute
  token.attrSet("loading", "lazy");
  token.attrSet(
    "style",
    "width: 100%; height: 300px !important; object-fit: contain",
  );
  token.attrSet("width", "100%");
  token.attrSet("height", "300px");
  return slf.renderToken(tokens, idx, options);
};

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
      <div className="prose prose-sm sm:prose d:prose-lg  mx-auto !max-w-[800px]">
        <h1 className={"!mb-0 text-center"}>{frontVariables?.title}</h1>
        <hr className={"!mt-4"} />
        <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
        <div className={"mb-4"}>🚀 Enjoy!</div>
        <a
          href={`https://github.com/EliseiNicolae/code-bugs.com/blob/main/posts/${slug}.md`}>
          Edit on Github
        </a>
      </div>
    </Layout>
  );
}
