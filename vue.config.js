const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave:false
})
// module.exports = {
//   transpileDependencies: true,
//   publicPath: "/api",
//   outputDir: "dist",
//   assetsDir: "assets",
//   productionSourceMap: false,
//   devServer: {
//     port: 80, // 1024
//     host: "0.0.0.0",
//     open: true,
//     overlay: {
//       warnings: true,
//       errors: true,
//     },
//     proxy: {
//       "/api": {
//         target: "http://127.0.0.1:8000",
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": "",
//         },
//       },
//     },
//   },
// };