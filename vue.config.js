const path = require('path')
const devServer = require('./mock')

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/game/xzxjbbm2019/'
  : '/',
  chainWebpack: config => {
    // svg
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    // style-resources-loader
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // mock
  devServer,
};

// style-resources-loader
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/base.less'),
      ],
    })
}