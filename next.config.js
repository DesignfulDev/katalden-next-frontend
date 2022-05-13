/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
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
