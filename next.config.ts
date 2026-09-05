import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marketing site: no images from remote hosts yet, no experimental flags.
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Blog illustrations under /public/images are static SVGs that never change
        // in place. Headers are matched before the filesystem, so this applies to
        // /public files. A new illustration needs a new filename once shipped,
        // since a returning visitor keeps the old cached copy for a year.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
