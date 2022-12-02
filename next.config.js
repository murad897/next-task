/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url: "http://localhost:4000",
  },
  images: {
    domains: ["localhost", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
