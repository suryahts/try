const withPWA = require('next-pwa')
 
module.exports = withPWA({
  dest: 'public',
  // reactStrictMode: true,
  // swcMinify: true,
  //   pwa: {
  //       dest: 'public',
  //       register: true,
  //       skipWaiting: true,
  //       disable: process.env.NODE_ENV === "development",
  //   }
})