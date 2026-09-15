import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moprojects.s3.us-east-2.amazonaws.com",
        pathname: "/portfolio/**",
      },
    ],
  },
};

export default nextConfig;
