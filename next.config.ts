// next.config.ts (Next 15+)
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  images: { formats: ['image/avif', 'image/webp'] }
};

export default nextConfig;
