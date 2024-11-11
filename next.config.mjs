import withNextIntl from 'next-intl/plugin';
import { withContentlayer } from 'next-contentlayer'


/** @type {import('next').NextConfig} */
const nextConfig =  withNextIntl()({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amlife.us',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});

export default withContentlayer({...nextConfig});
