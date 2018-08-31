const express = require('express');
const setup = require('./middleware/devMiddlewares');
const webpackConfig = require('../internals/webpack.dev');
const argv = require('minimist')(process.argv.slice(2));

const app = express();

setup(app, webpackConfig);

const port = parseInt(argv.port || process.env.PORT || '3000', 10);
const host = argv.host || process.env.HOST || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.info(`Start on ${host}:${port}`);
});
