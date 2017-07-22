let _ = require('lodash'),
defaultConfig = {
  "name": "armentum",
  "port": 8080,
},
env = process.env.NODE_ENV || 'development',
envConfig = {},
config;

try {
  envConfig = require('./env/' + env);
} catch (e) {
  console.log('Failed to require config file: ', 'env/' + env);
  envConfig = {};
}


config = _.defaults({}, envConfig, defaultConfig);
config.env = env;

module.exports = config;
