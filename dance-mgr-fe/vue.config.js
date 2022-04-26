// const path = require('path');
module.exports = {
  lintOnSave: false,
  // outputDir: path.resolve(__dirname, '../dance-mgr-be/public'),
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '街舞培训管理系统'
        return args
      })
  }
};
