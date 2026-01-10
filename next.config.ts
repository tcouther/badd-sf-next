import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  /* Uncomment the section below, then "npm run build" a prod static to "/out" folder */
  distDir: "out",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
  },
  trailingSlash: true,
};

export default nextConfig;
