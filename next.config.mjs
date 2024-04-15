/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        pathname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
