/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   path: false,
//   fs: false,
// }ß

// module.exports = nextConfig

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         reactStrictMode: true,
//         fs: 'empty'
//       }
//     }

//     return config
//   }
// }

// module.exports = {
//   webpack(config) { // we depend on nextjs switching to webpack 4 by default. Probably they will 
//     // change this behavior at some future major version.
//     config.node = {
//       fs: "empty", // webpack4 era solution 
//     };

//     return config;
//   },
// };

// module.exports = {
//   webpack: (config, { isServer }) => {
//       if (!isServer) {
//           // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//           config.node = {
//               fs: 'empty'
//           }
//       }

//       return config;
//   }
// }

module.exports = {
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false,
          }
      }

      return config;
  }
}
