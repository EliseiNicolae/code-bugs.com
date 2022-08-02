function generateSitemap() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const files = fs.readdirSync("posts");

  const posts = files.map(fileName => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontVariables } = matter(readFile);
    return {
      slug,
      frontVariables,
    };
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://code-bugs.com/</loc>
        </url>
        ${posts
          .map(post => {
            return `
              <url>
                <loc>https://code-bugs.com/${post.slug}</loc>
              </url>
            `;
          })
          .join("")}
      </urlset>
  `;

  fs.writeFile("public/sitemap.xml", sitemap, () => {});
}

generateSitemap();
