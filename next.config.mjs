/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/gvn-paul-nyongesa-otuoma',
        destination: '/gvn-paul-nyongesa-otuoma.pdf.pdf',
      },
      {
        source: '/gvn-paul-nyongesa-otuoma/',
        destination: '/gvn-paul-nyongesa-otuoma.pdf.pdf',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/gvn-paul-nyongesa-otuoma',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Content-Disposition', value: 'inline' },
        ],
      },
      {
        source: '/gvn-paul-nyongesa-otuoma/',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Content-Disposition', value: 'inline' },
        ],
      },
    ]
  },
}

export default nextConfig
