/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.vercel.app', 'your-supabase-project.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
