module: {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    }, 
    {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }
  ]
};
vue: {
  loaders: {
    scss: 'style!css!sass'
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE.ENV === 'production'
    ? '/'
    : '/'
}
