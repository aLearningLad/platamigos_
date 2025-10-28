import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly enable CSS optimization
  compiler: {
    removeConsole: false,
  },
  // Ensure webpack config is compatible
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;
