const path = require("path");
const resolve = dir => path.join(__dirname, dir);

const BASE_URL = "";

module.exports = {
  publicPath: BASE_URL,
  //颗粒化配置webpack
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/componets"));
  },
  // 生产不生成map文件
  productionSourceMap: false
  // 跨域
  // devServer: {
  //   proxy: "http://localhost:100"
  // }
};
