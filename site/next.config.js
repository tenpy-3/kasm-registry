/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: '10PY30 REGI',
    description: 'A personal use registry by 10py3',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/tenpy-3/kasm-registry/',
    contactUrl: 'https://github.com/tenpy-3/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
