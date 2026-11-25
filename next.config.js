/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Replace 'reponame' with your exact repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
