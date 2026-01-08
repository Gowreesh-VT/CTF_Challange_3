/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable security headers for CTF challenge purposes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-CTF-Challenge',
            value: 'Middleware-Bypass-2025'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
