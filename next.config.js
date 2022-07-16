/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:
          "/post/update-all-the-Node.js-dependencies-to-their-latest-version",
        destination:
          "/update-all-the-Node.js-dependencies-to-their-latest-version",
        permanent: true,
      },
      {
        source: "/setup-Clion",
        destination: "/",
        permanent: true,
      },
      {
        source: "/How-to-upload-your-project-to-Github",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
