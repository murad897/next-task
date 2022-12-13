/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "picsum.photos", "res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}`,
      },
    ];
  },
  async redirect() {
    return [
      {
        source: "/",
        destination: "/products/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
