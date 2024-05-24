/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.digistore24.com" }],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        missing: [
          {
            type: "query",
            key: "transaction_id",
          },
        ],
        destination: "https://finistress.com",
        basePath: false,
        permanent: false,
      },
      {
        source: "/packs-page",
        missing: [
          {
            type: "query",
            key: "transaction_id",
          },
        ],
        destination: "https://finistress.com",
        basePath: false,
        permanent: false,
      },
      {
        source: "/checkout-page/:id",
        missing: [
          {
            type: "query",
            key: "transaction_id",
          },
        ],
        destination: "https://finistress.com",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
