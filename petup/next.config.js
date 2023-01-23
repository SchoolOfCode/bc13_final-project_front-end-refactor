/** @type {import('next').NextConfig} */

 const nextConfig = {
 reactStrictMode: true,
 
 }

 module.exports = nextConfig

//the module.exports is updated with the following code 
//to tell webpack not to resolve the module on the client-side(!isServer)
//this fixes the error 'can't resolve 'fs' error'

// module.exports = {
//   webpack: (config, { isServer }) => {
//       if (!isServer) {
//           // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//           config.resolve.fallback = {
//               fs: false,
//           }
//       }

//       return config;
//   }
// }

