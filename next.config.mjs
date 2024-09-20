/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tupian1.s3.ap-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "obs.line-scdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
