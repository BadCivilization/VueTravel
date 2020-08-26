const path = require('path');

function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        .set('style', resolve('./src/assets/styles'))
        .set('common', resolve('./src/common'))
    },
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:8082',
              pathRewrite: {
                '^/api': '/api'
              }
            }
          }
    }
}