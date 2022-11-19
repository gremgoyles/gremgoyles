/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return[
      {
        source:'https://gremgoyles.netlify.app/www.gremgoyles.com',
        destination: 'https:/www.gremgoyles.com',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
