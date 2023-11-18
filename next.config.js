/** @type {import('next').NextConfig} */
//const nextConfig = {
//  experimental: {
//    appDir: true,
//    instrumentationHook: true
//  },
//}

//module.exports = nextConfig

module.exports = {
  output: "standalone",
  experimental: {
    instrumentationHook: true,
    logging: {
      level: "verbose",
      fullUrl: true,
    },
  },
};
