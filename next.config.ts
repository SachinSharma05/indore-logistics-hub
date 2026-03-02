import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com", "i.pravatar.cc", "www.transparenttextures.com"],
  },
};

export default nextConfig;
