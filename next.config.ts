/** @type {import('next').NextConfig} */
const nextConfig = {
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
