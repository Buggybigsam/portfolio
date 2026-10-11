import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // If deployed to a project page e.g. https://<user>.github.io/<repo>/
  // basePath can be supplied via environment variable NEXT_PUBLIC_BASE_PATH
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
