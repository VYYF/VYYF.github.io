const path = require('path')


module.exports = {
  //webpackdevserve提供的代理功能，可以将对外的api接口代理到mock
  devServer: {
    host:'0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  chainWebpack:(config) => {
    config.resolve.alias
        .set('styles',path.join(__dirname,'./src/assets/styles'))
        .set('@',path.join(__dirname,'./src/'))
        .set('common',path.join(__dirname,'./src/common/'))
  }
}
