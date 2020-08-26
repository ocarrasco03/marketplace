require('ignore-styles');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'ico', 'svg'],
  name: '/assets/images/[hash].[ext]',
});
require('./server');
