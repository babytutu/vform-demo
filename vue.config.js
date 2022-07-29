const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'build',
  transpileDependencies: true,
  publicPath: './'
})
