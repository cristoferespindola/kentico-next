/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    domains: ['assets-us-01.kc-usercontent.com'],
  },
};

export default nextConfig;
