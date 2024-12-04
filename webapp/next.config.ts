import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'prod-otoms.s3.us-east-1.amazonaws.com',
    }],
  }
};

export default nextConfig;
