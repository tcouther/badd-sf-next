import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://www.badd-sf.org/" }, // replace this with your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  */

  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cub.dpx.mybluehost.me',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  /* Uncomment the section below, then "npm run build" a prod static to "/out" folder */
  distDir: "out",
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
