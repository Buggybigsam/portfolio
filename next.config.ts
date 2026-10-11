import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // If deployed to a project page e.g. https://<user>.github.io/<repo>/
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? "/portfolio" : undefined),
};

export default nextConfig;
