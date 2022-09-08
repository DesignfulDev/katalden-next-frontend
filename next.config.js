/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/tattoo',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
