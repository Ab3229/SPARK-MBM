import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "www.instagram.com",
      "instagram.fjdh3-1.fna.fbcdn.net", // Allow Instagram CDN images
      "scontent.cdninstagram.com", // Add other Instagram CDNs if needed
    ],
  },
};

export default nextConfig;
