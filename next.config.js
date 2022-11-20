/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/`,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/tattoos',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
