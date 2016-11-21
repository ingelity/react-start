const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./dev.config.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
});

server.listen(9001);
