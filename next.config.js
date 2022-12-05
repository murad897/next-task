/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
