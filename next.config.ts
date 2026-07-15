import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "obs.line-apps.com",
        pathname: "/os/p/**",
      },
    ],
  },
};

export default nextConfig;
