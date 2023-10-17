/** @type {import('next').NextConfig} */
//const nextConfig = {
//  experimental: {
//    appDir: true,
//    instrumentationHook: true 
//  },
//}

//module.exports = nextConfig

module.exports = {
  experimental: {
    instrumentationHook: true,
    logging:
    {
      level: 'verbose',
      fullUrl: true
    }
  }
}
