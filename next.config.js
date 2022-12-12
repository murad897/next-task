/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "picsum.photos", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
