/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return[
      {
        source:"/mint/:id",
        destination: "https:/www.gremgoyles.com",
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
